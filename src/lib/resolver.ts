/* ================================================================== */
/*  SFY — MediaResolver                                               */
/*  Facade interne appelée par le frontend (concept : POST /api/resolve).
/*                                                                    */
/*  Architecture choisie : résolution via le service public d'extraction
/*  TikWM (gratuit, sans clé API, CORS ouvert) + téléchargement direct
/*  des fichiers média côté navigateur (fetch → blob → download, avec
/*  repli vers l'ouverture du lien). Aucun contournement de protection :
/*  seul le contenu public est résolu, et si l'extraction échoue, SFY
/*  renvoie une erreur claire — jamais de faux résultat.              */
/*                                                                    */
/*  MOCK_MODE = true → données simulées pour le développement de l'UI
/*  (clairement signalées « Démo » dans l'interface). false en prod.  */
/* ================================================================== */

import type { ToolMode } from "./i18n";

const MOCK_MODE = false; // ← true uniquement pour développer l'interface

export const RATE_LIMIT = {
  max: 10, // analyses max…
  windowMs: 60_000, // …par fenêtre glissante (modifiable)
};

/* Domains TikTok autorisés (allowlist stricte — aucune URL arbitraire). */
const ALLOWED_HOSTS = [
  "tiktok.com",
  "www.tiktok.com",
  "m.tiktok.com",
  "vm.tiktok.com",
  "vt.tiktok.com",
];

/* Service public d'extraction (pas de clé, CORS ouvert). */
const EXTRACT_API = "https://www.tikwm.com/api/";
const EXTRACT_TIMEOUT_MS = 18_000;

export type ErrorCode = "empty" | "invalid" | "inaccessible" | "rate" | "error";
export type FormatLabelKey =
  | "bestQuality"
  | "mp4hd"
  | "mp4std"
  | "mp3"
  | "photos"
  | "story";

export interface MediaFormat {
  id: string;
  kind: "video" | "audio" | "image";
  labelKey: FormatLabelKey;
  ext: string;
  quality?: string;
  sizeBytes?: number;
  tag?: "noWatermark";
  primary?: boolean;
  url?: string; // lien média réel quand disponible
}

export interface ResolvedMedia {
  demo: boolean;
  platform: "tiktok";
  sourceUrl: string;
  id?: string;
  title: string;
  author: string;
  authorId?: string;
  authorUrl?: string;
  thumbnail?: string;
  durationSec?: number;
  images?: string[]; // diapositives (posts photo / carrousels)
  formats: MediaFormat[];
}

export type ResolveResult =
  | { ok: true; data: ResolvedMedia }
  | { ok: false; code: ErrorCode };

/* ------------------------------------------------------------------ */
/* Validation & sécurité (anti-SSRF côté client + re-validation côté   */
/* serveur recommandée si un backend propre est ajouté)                */
/* ------------------------------------------------------------------ */

function isPrivateHost(host: string): boolean {
  if (host === "localhost" || host.endsWith(".localhost")) return true;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    const [a, b] = host.split(".").map(Number);
    if (a === 127 || a === 0 || a === 10 || a === 169) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
  }
  if (host === "[::1]" || host === "::1") return true;
  return false;
}

export function validateTikTokUrl(
  input: string
): { ok: true; url: string } | { ok: false; code: ErrorCode } {
  const raw = input.trim();
  if (!raw) return { ok: false, code: "empty" };

  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return { ok: false, code: "invalid" };
  }

  // Schémas dangereux refusés (seuls http/https passent).
  if (u.protocol !== "https:" && u.protocol !== "http:") {
    return { ok: false, code: "invalid" };
  }

  const host = u.hostname.toLowerCase();
  if (isPrivateHost(host)) return { ok: false, code: "invalid" };
  if (!ALLOWED_HOSTS.includes(host)) return { ok: false, code: "invalid" };

  return { ok: true, url: u.href };
}

/* ------------------------------------------------------------------ */
/* Rate limiting (fenêtre glissante — à déplacer côté serveur si un    */
/* backend propre est ajouté)                                          */
/* ------------------------------------------------------------------ */

const RL_KEY = "sfy:rate";

function hitRateLimit(): { limited: boolean } {
  try {
    const now = Date.now();
    const raw = localStorage.getItem(RL_KEY);
    let hits: number[] = raw ? (JSON.parse(raw) as number[]) : [];
    hits = hits.filter((h) => now - h < RATE_LIMIT.windowMs);
    if (hits.length >= RATE_LIMIT.max) return { limited: true };
    hits.push(now);
    localStorage.setItem(RL_KEY, JSON.stringify(hits));
    return { limited: false };
  } catch {
    return { limited: false };
  }
}

/* ------------------------------------------------------------------ */
/* Extraction réelle (TikWM — service public, sans clé, CORS ouvert)   */
/* ------------------------------------------------------------------ */

interface TikwmData {
  id?: string;
  title?: string;
  cover?: string;
  origin_cover?: string;
  duration?: number;
  play?: string;
  wmplay?: string;
  hdplay?: string;
  size?: number;
  wm_size?: number;
  hd_size?: number;
  music?: string;
  images?: string[] | null;
  author?: { unique_id?: string; nickname?: string };
}

async function fetchTikwm(url: string): Promise<TikwmData | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), EXTRACT_TIMEOUT_MS);
  try {
    const res = await fetch(
      `${EXTRACT_API}?url=${encodeURIComponent(url)}&hd=1`,
      { signal: ctrl.signal }
    );
    if (!res.ok) return null;
    const j = (await res.json()) as { code?: number; data?: TikwmData };
    if (!j || j.code !== 0 || !j.data) return null;
    return j.data;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function toResolved(d: TikwmData, sourceUrl: string, mode: ToolMode): ResolvedMedia {
  const authorId = d.author?.unique_id ?? "";
  const author = d.author?.nickname || (authorId ? `@${authorId}` : "");
  const images = Array.isArray(d.images) && d.images.length ? d.images : undefined;

  const videoFormats: MediaFormat[] = [];
  const hd = typeof d.hdplay === "string" ? d.hdplay.trim() : "";
  const play = typeof d.play === "string" ? d.play.trim() : "";
  const wm = typeof d.wmplay === "string" ? d.wmplay.trim() : "";

  if (hd) {
    videoFormats.push({
      id: "hd", kind: "video", labelKey: "bestQuality", ext: "MP4",
      quality: "HD", sizeBytes: d.hd_size, tag: "noWatermark", primary: true, url: hd,
    });
  }
  if (play) {
    videoFormats.push({
      id: "no-wm", kind: "video",
      labelKey: hd ? "mp4hd" : "bestQuality", ext: "MP4",
      quality: hd ? "HD" : undefined, sizeBytes: d.size, tag: "noWatermark",
      primary: !hd, url: play,
    });
  }
  if (wm) {
    videoFormats.push({
      id: "wm", kind: "video", labelKey: "mp4std", ext: "MP4",
      sizeBytes: d.wm_size, url: wm,
    });
  }
  if (typeof d.music === "string" && d.music.trim()) {
    videoFormats.push({
      id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3",
      quality: "128 kbps", url: d.music.trim(),
    });
  }

  let formats: MediaFormat[];
  if (mode === "mp3") {
    const mp3 = videoFormats.find((f) => f.id === "mp3");
    formats = mp3 ? [{ ...mp3, primary: true }] : [];
  } else if (mode === "photo" && images) {
    formats = [{ id: "photos", kind: "image", labelKey: "photos", ext: "JPG", primary: true }];
  } else {
    formats = videoFormats;
  }

  return {
    demo: false,
    platform: "tiktok",
    sourceUrl,
    id: d.id,
    title: d.title ?? "",
    author,
    authorId,
    authorUrl: authorId ? `https://www.tiktok.com/@${authorId}` : undefined,
    thumbnail: d.origin_cover || d.cover || undefined,
    durationSec: typeof d.duration === "number" && d.duration > 0 ? d.duration : undefined,
    images,
    formats,
  };
}

/* ------------------------------------------------------------------ */
/* Mode démo (développement de l'interface uniquement)                 */
/* ------------------------------------------------------------------ */

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function demoFormats(mode: ToolMode): MediaFormat[] {
  const video: MediaFormat[] = [
    { id: "hd", kind: "video", labelKey: "bestQuality", ext: "MP4", quality: "HD", tag: "noWatermark", primary: true },
    { id: "no-wm", kind: "video", labelKey: "mp4hd", ext: "MP4", tag: "noWatermark" },
    { id: "wm", kind: "video", labelKey: "mp4std", ext: "MP4" },
    { id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3", quality: "128 kbps" },
  ];
  if (mode === "mp3") return [{ id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3", quality: "128 kbps", primary: true }];
  if (mode === "photo") return [{ id: "photos", kind: "image", labelKey: "photos", ext: "JPG", primary: true }];
  return video;
}

/* ------------------------------------------------------------------ */
/* Résolution                                                          */
/* ------------------------------------------------------------------ */

export async function resolveMedia(
  input: string,
  mode: ToolMode,
  onStage: (stage: "analyzing" | "fetching") => void
): Promise<ResolveResult> {
  const validation = validateTikTokUrl(input);
  if (!validation.ok) return { ok: false, code: validation.code };

  if (hitRateLimit().limited) return { ok: false, code: "rate" };

  onStage("analyzing");

  if (MOCK_MODE) {
    await wait(1100);
    onStage("fetching");
    await wait(700);
    return {
      ok: true,
      data: {
        demo: true,
        platform: "tiktok",
        sourceUrl: validation.url,
        title: "",
        author: "",
        durationSec: 21,
        formats: demoFormats(mode),
      },
    };
  }

  /* Extraction réelle — deux phases perceptibles pour l'utilisateur. */
  const stageTimer = setTimeout(() => onStage("fetching"), 1600);
  const data = await fetchTikwm(validation.url);
  clearTimeout(stageTimer);

  if (!data) return { ok: false, code: "inaccessible" };

  const resolved = toResolved(data, validation.url, mode);
  if (resolved.formats.length === 0 && !resolved.images) {
    return { ok: false, code: "inaccessible" };
  }
  return { ok: true, data: resolved };
}

/* ------------------------------------------------------------------ */
/* Téléchargement côté navigateur                                      */
/* ------------------------------------------------------------------ */

/** fetch → blob → <a download> ; repli : ouverture du lien média. */
export async function triggerDownload(url: string, filename: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
    return true;
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
    return true;
  }
}

export function safeFilename(prefix: string, id: string | undefined, ext: string): string {
  const base = prefix
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "tiktok";
  return `sfy-${base}${id ? `-${id}` : ""}.${ext.toLowerCase()}`;
}

export function formatBytes(bytes?: number): string | null {
  if (!bytes || bytes <= 0) return null;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatDuration(sec?: number): string | null {
  if (!sec || sec <= 0) return null;
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}
