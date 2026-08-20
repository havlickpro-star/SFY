/* ================================================================== */
/*  SFY — MediaResolver                                               */
/*  Facade interne appelée par le frontend (concept : POST /api/resolve).
/*                                                                    */
/*  ⚠️ MOCK_MODE = true  → données simulées pour le développement de  */
/*     l'interface. L'UI les signale clairement (« Démo »).           */
/*  MOCK_MODE = false → appels au backend réel (/api/resolve) +       */
/*     métadonnées publiques oEmbed de TikTok en secours.             */
/*  Aucun contournement de protection : si l'extraction n'est pas     */
/*  possible proprement, SFY renvoie une erreur claire.               */
/* ================================================================== */

import type { ToolMode } from "./i18n";

const MOCK_MODE = true; // ← passer à false en production (backend réel requis)
const API_ENDPOINT = "/api/resolve";

export const RATE_LIMIT = {
  max: 10, // analyses max…
  windowMs: 60_000, // …par fenêtre glissante (modifiable)
};

/* Domains autorisés (allowlist stricte — aucune URL arbitraire). */
const ALLOWED_HOSTS = [
  "tiktok.com",
  "www.tiktok.com",
  "m.tiktok.com",
  "vm.tiktok.com",
  "vt.tiktok.com",
];

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
  tag?: "noWatermark";
  primary?: boolean;
  url?: string; // présent uniquement si le backend fournit un lien réel
}

export interface ResolvedMedia {
  demo: boolean;
  platform: "tiktok";
  sourceUrl: string;
  title: string;
  author: string;
  authorUrl?: string;
  thumbnail?: string;
  durationSec?: number;
  formats: MediaFormat[];
}

export type ResolveResult =
  | { ok: true; data: ResolvedMedia }
  | { ok: false; code: ErrorCode };

/* ------------------------------------------------------------------ */
/* Validation & sécurité (anti-SSRF côté client + re-validation côté   */
/* serveur obligatoire en production)                                  */
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
/* Rate limiting (fenêtre glissante, persistance locale pour la démo — */
/* à déplacer côté serveur en production)                              */
/* ------------------------------------------------------------------ */

const RL_KEY = "sfy:rate";

function hitRateLimit(): { limited: boolean } {
  try {
    const now = Date.now();
    const raw = localStorage.getItem(RL_KEY);
    let hits: number[] = raw ? (JSON.parse(raw) as number[]) : [];
    hits = hits.filter((h) => now - h < RATE_LIMIT.windowMs);
    if (hits.length >= RATE_LIMIT.max) {
      return { limited: true };
    }
    hits.push(now);
    localStorage.setItem(RL_KEY, JSON.stringify(hits));
    return { limited: false };
  } catch {
    return { limited: false };
  }
}

/* ------------------------------------------------------------------ */
/* Métadonnées publiques TikTok (oEmbed — endpoint public, pas de clé) */
/* ------------------------------------------------------------------ */

interface OEmbedMeta {
  title: string;
  author: string;
  authorUrl?: string;
  thumbnail?: string;
}

async function fetchOEmbedMeta(url: string): Promise<OEmbedMeta | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 4500);
  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
      { signal: ctrl.signal }
    );
    if (!res.ok) return null;
    const j = (await res.json()) as Record<string, unknown>;
    if (!j || typeof j.title !== "string" || !j.title) return null;
    return {
      title: j.title,
      author: typeof j.author_name === "string" ? j.author_name : "",
      authorUrl: typeof j.author_url === "string" ? j.author_url : undefined,
      thumbnail: typeof j.thumbnail_url === "string" ? j.thumbnail_url : undefined,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/* ------------------------------------------------------------------ */
/* Formats disponibles selon le mode                                   */
/* ------------------------------------------------------------------ */

function formatsFor(mode: ToolMode): MediaFormat[] {
  const video: MediaFormat[] = [
    { id: "no-wm", kind: "video", labelKey: "bestQuality", ext: "MP4", quality: "1080p", tag: "noWatermark", primary: true },
    { id: "hd", kind: "video", labelKey: "mp4hd", ext: "MP4", quality: "720p" },
    { id: "sd", kind: "video", labelKey: "mp4std", ext: "MP4", quality: "480p" },
    { id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3", quality: "128 kbps" },
  ];
  if (mode === "mp3") {
    return [{ id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3", quality: "128 kbps", primary: true }];
  }
  if (mode === "photo") {
    return [{ id: "photos", kind: "image", labelKey: "photos", ext: "JPG", quality: "HD", primary: true }];
  }
  if (mode === "story") {
    return [{ id: "story", kind: "video", labelKey: "story", ext: "MP4", quality: "720p", primary: true }];
  }
  return video;
}

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

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
    /* -------- Mode développement : UI testable, données simulées,
       métadonnées réelles via oEmbed lorsque c'est possible. -------- */
    await wait(900);
    onStage("fetching");
    const meta = await fetchOEmbedMeta(validation.url);
    await wait(700);
    return {
      ok: true,
      data: {
        demo: true,
        platform: "tiktok",
        sourceUrl: validation.url,
        title: meta?.title ?? "",
        author: meta?.author ?? "",
        authorUrl: meta?.authorUrl,
        thumbnail: meta?.thumbnail,
        durationSec: 21,
        formats: formatsFor(mode),
      },
    };
  }

  /* -------- Mode production : backend interne POST /api/resolve ---- */
  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: validation.url, mode }),
    });
    if (!res.ok) {
      return { ok: false, code: res.status === 429 ? "rate" : res.status === 422 ? "inaccessible" : "error" };
    }
    const j = (await res.json()) as {
      success: boolean;
      platform?: string;
      title?: string;
      author?: string;
      authorUrl?: string;
      thumbnail?: string;
      duration?: number;
      formats?: MediaFormat[];
    };
    if (!j.success || !Array.isArray(j.formats) || j.formats.length === 0) {
      return { ok: false, code: "inaccessible" };
    }
    return {
      ok: true,
      data: {
        demo: false,
        platform: "tiktok",
        sourceUrl: validation.url,
        title: j.title ?? "",
        author: j.author ?? "",
        authorUrl: j.authorUrl,
        thumbnail: j.thumbnail,
        durationSec: j.duration,
        formats: j.formats,
      },
    };
  } catch {
    /* Backend indisponible : on tente les métadonnées publiques ;
       sans extraction possible, erreur claire — jamais de faux résultat. */
    const meta = await fetchOEmbedMeta(validation.url);
    if (!meta) return { ok: false, code: "inaccessible" };
    return { ok: false, code: "error" };
  }
}

export function formatDuration(sec?: number): string | null {
  if (!sec || sec <= 0) return null;
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}
