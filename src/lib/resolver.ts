/* ================================================================== */
/*  SFY — MediaResolver (multi-plateformes)                           */
/*  Facade interne appelée par le frontend (concept : POST /api/resolve).
/*                                                                    */
/*  Moteurs :                                                         */
/*  · TikTok    → TikWM (public, sans clé) + repli Cobalt             */
/*  · YouTube   → instances communautaires Cobalt (sans clé, CORS)    */
/*  · Instagram → Cobalt (reels, posts, carrousels)                   */
/*  · Facebook  → SnapSave / GetFVid (endpoints publics)              */
/*  · Métadonnées → noembed (public) + miniatures YouTube natives     */
/*                                                                    */
/*  Téléchargement : les octets sont récupérés puis enregistrés sur   */
/*  l'appareil (fetch → blob → <a download>), avec course parallèle   */
/*  via plusieurs relais CORS. Aucun contournement de protection :    */
/*  seul le contenu public est résolu ; sinon, erreur claire.         */
/*                                                                    */
/*  MOCK_MODE = true → données simulées pour le développement de l'UI */
/*  (signalées « Démo » dans l'interface). false en production.       */
/* ================================================================== */

import type { ToolMode, Platform } from "./i18n";

const MOCK_MODE = false; // ← true uniquement pour développer l'interface

export const RATE_LIMIT = {
  max: 10, // analyses max…
  windowMs: 60_000, // …par fenêtre glissante (modifiable)
};

/* Allowlists strictes par plateforme — aucune URL arbitraire. */
const PLATFORM_HOSTS: Record<Platform, string[]> = {
  tiktok: ["tiktok.com", "www.tiktok.com", "m.tiktok.com", "vm.tiktok.com", "vt.tiktok.com"],
  youtube: ["youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com", "youtu.be"],
  instagram: ["instagram.com", "www.instagram.com"],
  facebook: ["facebook.com", "www.facebook.com", "m.facebook.com", "web.facebook.com", "fb.watch"],
};

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
  suggestedName?: string;
}

export interface ResolvedMedia {
  demo: boolean;
  platform: Platform;
  sourceUrl: string;
  id?: string;
  title: string;
  author: string;
  authorId?: string;
  authorUrl?: string;
  thumbnail?: string;
  durationSec?: number;
  images?: string[]; // diapositives (carrousels)
  formats: MediaFormat[];
}

export type ResolveResult =
  | { ok: true; data: ResolvedMedia }
  | { ok: false; code: ErrorCode };

/* ------------------------------------------------------------------ */
/* Validation & sécurité (anti-SSRF côté client)                       */
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

export function detectPlatform(host: string): Platform | null {
  for (const p of Object.keys(PLATFORM_HOSTS) as Platform[]) {
    if (PLATFORM_HOSTS[p].includes(host)) return p;
  }
  return null;
}

export function validateMediaUrl(
  input: string
): { ok: true; url: string; platform: Platform } | { ok: false; code: ErrorCode } {
  const raw = input.trim();
  if (!raw) return { ok: false, code: "empty" };

  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return { ok: false, code: "invalid" };
  }

  if (u.protocol !== "https:" && u.protocol !== "http:") {
    return { ok: false, code: "invalid" };
  }

  const host = u.hostname.toLowerCase();
  if (isPrivateHost(host)) return { ok: false, code: "invalid" };

  const platform = detectPlatform(host);
  if (!platform) return { ok: false, code: "invalid" };

  return { ok: true, url: u.href, platform };
}

/* Compatibilité ancien nom. */
export function validateTikTokUrl(input: string) {
  return validateMediaUrl(input);
}

/* ------------------------------------------------------------------ */
/* Rate limiting (fenêtre glissante)                                   */
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
/* Moteur TikTok — TikWM (public, sans clé, CORS)                      */
/* ------------------------------------------------------------------ */

const TIKWM_API = "https://www.tikwm.com/api/";

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
  const timer = setTimeout(() => ctrl.abort(), 18_000);
  try {
    const res = await fetch(`${TIKWM_API}?url=${encodeURIComponent(url)}&hd=1`, { signal: ctrl.signal });
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

function tikwmToResolved(d: TikwmData, sourceUrl: string, mode: ToolMode): ResolvedMedia {
  const authorId = d.author?.unique_id ?? "";
  const author = d.author?.nickname || (authorId ? `@${authorId}` : "");
  const images =
    Array.isArray(d.images) && d.images.length ? d.images.map(normalizeMediaUrl) : undefined;

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
      id: "no-wm", kind: "video", labelKey: hd ? "mp4hd" : "bestQuality", ext: "MP4",
      sizeBytes: d.size, tag: "noWatermark", primary: !hd, url: play,
    });
  }
  if (wm) {
    videoFormats.push({ id: "wm", kind: "video", labelKey: "mp4std", ext: "MP4", sizeBytes: d.wm_size, url: wm });
  }
  if (typeof d.music === "string" && d.music.trim()) {
    videoFormats.push({ id: "mp3", kind: "audio", labelKey: "mp3", ext: "MP3", quality: "128 kbps", url: d.music.trim() });
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
    demo: false, platform: "tiktok", sourceUrl,
    id: d.id, title: d.title ?? "", author, authorId,
    authorUrl: authorId ? `https://www.tiktok.com/@${authorId}` : undefined,
    thumbnail: d.origin_cover || d.cover || undefined,
    durationSec: typeof d.duration === "number" && d.duration > 0 ? d.duration : undefined,
    images, formats,
  };
}

/* ------------------------------------------------------------------ */
/* Moteur Cobalt — YouTube / Instagram / repli TikTok                  */
/* (instances communautaires publiques, sans clé)                      */
/* ------------------------------------------------------------------ */

const COBALT_LIST_URL = "https://instances.cobalt.best/api/instances.json";
const COBALT_BOOTSTRAP = [
  "https://cobalt-api.meowing.de",
  "https://cobalt-api.kwiatekmiki.com",
  "https://capi.oak.li",
  "https://api.dl.ihate.college",
];

let cobaltInstancesCache: Promise<string[]> | null = null;

function getCobaltInstances(): Promise<string[]> {
  cobaltInstancesCache ??= (async () => {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 5000);
      const res = await fetch(COBALT_LIST_URL, { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) return COBALT_BOOTSTRAP;
      const j = (await res.json()) as { instances?: unknown[] } | unknown[];
      const list = Array.isArray(j) ? j : j.instances ?? [];
      const found: { url: string; score: number }[] = [];
      for (const it of list as Record<string, unknown>[]) {
        const api = it.api as Record<string, unknown> | string | undefined;
        const url =
          typeof api === "string" ? api
          : typeof (api as Record<string, unknown> | undefined)?.url === "string"
            ? ((api as Record<string, string>).url)
            : typeof it.url === "string" ? (it.url as string) : null;
        if (!url || !url.startsWith("http")) continue;
        if (api && typeof api === "object") {
          if ((api as Record<string, unknown>).auth) continue; // clé requise → inutile ici
          if ((api as Record<string, unknown>).cors === false) continue;
        }
        found.push({ url: url.replace(/\/+$/, ""), score: typeof it.score === "number" ? it.score : 0 });
      }
      found.sort((a, b) => b.score - a.score);
      return found.length ? found.slice(0, 10).map((f) => f.url) : COBALT_BOOTSTRAP;
    } catch {
      return COBALT_BOOTSTRAP;
    }
  })();
  return cobaltInstancesCache;
}

type CobaltOk =
  | { status: "tunnel" | "redirect"; url: string; filename?: string }
  | { status: "picker"; picker: { type?: string; url?: string; thumb?: string }[]; audio?: string };

async function cobaltRequest(instance: string, body: object, timeoutMs: number): Promise<CobaltOk | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${instance}/`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (!res.ok) return null;
    const j = (await res.json()) as { status?: string };
    if (j && (j.status === "tunnel" || j.status === "redirect" || j.status === "picker")) {
      return j as CobaltOk;
    }
    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Lance la requête sur toutes les instances en parallèle — la première qui répond gagne. */
function raceCobalt(instances: string[], body: object): Promise<CobaltOk | null> {
  return new Promise((resolve) => {
    let pending = instances.length;
    let settled = false;
    if (!pending) return resolve(null);
    for (const inst of instances) {
      cobaltRequest(inst, body, 25_000).then((r) => {
        if (settled) return;
        if (r) {
          settled = true;
          resolve(r);
        } else if (--pending === 0) {
          settled = true;
          resolve(null);
        }
      });
    }
  });
}

/* Métadonnées publiques (titre, auteur, miniature) — pas de clé requise. */
interface MediaMeta { title?: string; author?: string; authorUrl?: string; thumbnail?: string; }

async function fetchNoembed(url: string): Promise<MediaMeta> {
  try {
    const res = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`);
    if (!res.ok) return {};
    const j = (await res.json()) as Record<string, unknown>;
    if (!j || j.error) return {};
    return {
      title: typeof j.title === "string" ? j.title : undefined,
      author: typeof j.author_name === "string" ? j.author_name : undefined,
      authorUrl: typeof j.author_url === "string" ? j.author_url : undefined,
      thumbnail: typeof j.thumbnail_url === "string" ? j.thumbnail_url : undefined,
    };
  } catch {
    return {};
  }
}

function youtubeId(u: URL): string | null {
  if (u.hostname === "youtu.be") return u.pathname.slice(1).split("/")[0] || null;
  const v = u.searchParams.get("v");
  if (v) return v;
  const m = u.pathname.match(/\/(shorts|embed|live|video)\/([\w-]{6,})/);
  return m ? m[2] : null;
}

function cobaltToFormats(res: CobaltOk | null, platform: Platform): {
  formats: MediaFormat[];
  images?: string[];
} {
  const formats: MediaFormat[] = [];
  let images: string[] | undefined;
  if (!res) return { formats };

  if ((res.status === "tunnel" || res.status === "redirect") && res.url) {
    formats.push({
      id: "best", kind: "video", labelKey: "bestQuality", ext: "MP4",
      quality: platform === "youtube" ? "1080p" : undefined,
      tag: platform === "tiktok" ? "noWatermark" : undefined,
      primary: true, url: res.url, suggestedName: res.filename,
    });
  } else if (res.status === "picker" && Array.isArray(res.picker)) {
    const items = res.picker.filter((p) => typeof p.url === "string" && p.url);
    const photos = items.filter((p) => p.type !== "video" && p.type !== "gif");
    const videos = items.filter((p) => p.type === "video" || p.type === "gif");
    if (photos.length) images = photos.map((p) => normalizeMediaUrl(p.url!));
    if (!images?.length && videos.length) {
      formats.push({
        id: "best", kind: "video", labelKey: "bestQuality", ext: "MP4",
        primary: true, url: videos[0].url, suggestedName: undefined,
      });
    }
  }
  return { formats, images };
}

async function resolveViaCobalt(
  url: string,
  platform: Platform,
  mode: ToolMode,
  onStage: (s: "analyzing" | "fetching") => void
): Promise<ResolveResult> {
  onStage("analyzing");
  const instances = await getCobaltInstances();
  onStage("fetching");

  const videoBody = { url, videoQuality: "1080", filenameStyle: "pretty" };
  const audioBody = { url, downloadMode: "audio", audioFormat: "mp3", audioBitrate: "128", filenameStyle: "pretty" };

  const [videoRes, audioRes, meta] = await Promise.all([
    mode === "photo" ? Promise.resolve(null) : raceCobalt(instances, videoBody),
    mode === "video" || mode === "mp3" ? raceCobalt(instances, audioBody) : Promise.resolve(null),
    fetchNoembed(url),
  ]);

  const videoPart = cobaltToFormats(videoRes, platform);
  const audioPart = cobaltToFormats(audioRes, platform);

  let formats: MediaFormat[];
  if (mode === "mp3") {
    const mp3 = audioPart.formats[0];
    formats = mp3 ? [{ ...mp3, labelKey: "mp3", ext: "MP3", quality: "128 kbps", kind: "audio" }] : [];
  } else if (mode === "photo" && videoPart.images?.length) {
    formats = [{ id: "photos", kind: "image", labelKey: "photos", ext: "JPG", primary: true }];
  } else {
    formats = [...videoPart.formats];
    if (audioPart.formats[0]) {
      formats.push({ ...audioPart.formats[0], labelKey: "mp3", ext: "MP3", quality: "128 kbps", kind: "audio", primary: false });
    }
  }

  let thumbnail = meta.thumbnail;
  if (!thumbnail && platform === "youtube") {
    try {
      const id = youtubeId(new URL(url));
      if (id) thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    } catch { /* ignore */ }
  }

  if (!formats.length && !videoPart.images?.length) return { ok: false, code: "inaccessible" };

  return {
    ok: true,
    data: {
      demo: false, platform, sourceUrl: url,
      title: meta.title ?? "", author: meta.author ?? "", authorUrl: meta.authorUrl,
      thumbnail, images: videoPart.images, formats,
    },
  };
}

/* ------------------------------------------------------------------ */
/* Moteur Facebook — endpoints publics SnapSave / GetFVid              */
/* ------------------------------------------------------------------ */

async function fetchFacebookHtml(url: string): Promise<string | null> {
  const endpoints = [
    "https://snapsave.app/action.php?lang=en",
    "https://www.getfvid.com/downloader",
  ];
  for (const endpoint of endpoints) {
    const targets = [
      endpoint,
      `https://corsproxy.io/?url=${encodeURIComponent(endpoint)}`,
    ];
    for (const target of targets) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 20_000);
      try {
        const res = await fetch(target, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `url=${encodeURIComponent(url)}`,
          signal: ctrl.signal,
        });
        if (!res.ok) continue;
        const j = (await res.json()) as { data?: unknown };
        const data = typeof j?.data === "string" ? j.data : null;
        if (data && data.includes("http")) return data;
      } catch { /* endpoint suivant */ } finally {
        clearTimeout(timer);
      }
    }
  }
  return null;
}

async function resolveFacebook(
  url: string,
  onStage: (s: "analyzing" | "fetching") => void
): Promise<ResolveResult> {
  onStage("analyzing");
  const html = await fetchFacebookHtml(url);
  onStage("fetching");
  if (!html) return { ok: false, code: "inaccessible" };

  const doc = new DOMParser().parseFromString(html, "text/html");
  const links = Array.from(doc.querySelectorAll("a[href]"))
    .map((a) => a.getAttribute("href") || "")
    .filter((h) => /^https?:\/\/[^\s"']+\.(mp4|m4v)([?#][^\s"']*)?$/i.test(h));
  const uniq = [...new Set(links)].slice(0, 3);
  const thumbnail = doc.querySelector("img")?.getAttribute("src") || undefined;
  const title =
    doc.querySelector("p")?.textContent?.trim().slice(0, 140) || "";

  if (!uniq.length && !thumbnail) return { ok: false, code: "inaccessible" };

  const formats: MediaFormat[] = uniq.map((u, i) => ({
    id: `fb-${i}`, kind: "video",
    labelKey: i === 0 ? "bestQuality" : i === 1 ? "mp4hd" : "mp4std",
    ext: "MP4", primary: i === 0, url: u,
  }));

  return {
    ok: true,
    data: { demo: false, platform: "facebook", sourceUrl: url, title, author: "", thumbnail, formats },
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
/* Résolution (dispatch par plateforme)                                */
/* ------------------------------------------------------------------ */

export async function resolveMedia(
  input: string,
  mode: ToolMode,
  onStage: (stage: "analyzing" | "fetching") => void
): Promise<ResolveResult> {
  const validation = validateMediaUrl(input);
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
        demo: true, platform: validation.platform, sourceUrl: validation.url,
        title: "", author: "", durationSec: 21, formats: demoFormats(mode),
      },
    };
  }

  const { url, platform } = validation;

  if (platform === "tiktok") {
    const data = await fetchTikwm(url);
    if (data) {
      const resolved = tikwmToResolved(data, url, mode);
      if (resolved.formats.length || resolved.images?.length) {
        return { ok: true, data: resolved };
      }
    }
    // Repli : moteur Cobalt pour TikTok.
    return resolveViaCobalt(url, "tiktok", mode === "story" ? "video" : mode, onStage);
  }

  if (platform === "facebook") return resolveFacebook(url, onStage);

  // YouTube / Instagram (+ TikTok en repli ci-dessus)
  return resolveViaCobalt(url, platform, mode, onStage);
}

/* ------------------------------------------------------------------ */
/* Téléchargement côté navigateur — enregistrement local               */
/* ------------------------------------------------------------------ */

/* Chemins relatifs (« /api/media/video?id=… ») rattachés à leur domaine. */
export function normalizeMediaUrl(url: string): string {
  if (url.startsWith("/")) return `https://www.tikwm.com${url}`;
  return url;
}

const CORS_PROXIES: ((u: string) => string)[] = [
  (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
  (u) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
];

async function fetchBlob(url: string, timeoutMs: number): Promise<Blob | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return null;
    const blob = await res.blob();
    if (!blob || blob.size === 0) return null;
    if (blob.type.startsWith("text/html") && blob.size < 8192) return null;
    if (blob.type === "application/json" && blob.size < 8192) return null;
    return blob;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Plusieurs URLs lancées en parallèle — la première qui répond gagne (réseau mobile). */
function raceBlobs(urls: string[], timeoutMs: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    let pending = urls.length;
    let settled = false;
    if (!pending) return resolve(null);
    for (const u of urls) {
      fetchBlob(u, timeoutMs).then((b) => {
        if (settled) return;
        if (b) { settled = true; resolve(b); }
        else if (--pending === 0) { settled = true; resolve(null); }
      });
    }
  });
}

function saveBlob(blob: Blob, filename: string): boolean {
  try {
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = filename;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 8000);
    return true;
  } catch {
    return false;
  }
}

/**
 * Enregistre le média comme fichier sur l'appareil.
 * fetch direct → course parallèle de relais CORS → blob → <a download>.
 * N'ouvre JAMAIS d'onglet automatiquement.
 */
export async function triggerDownload(rawUrl: string, filename: string): Promise<boolean> {
  const url = normalizeMediaUrl(rawUrl);

  let blob = await fetchBlob(url, 20_000);
  if (!blob) blob = await raceBlobs(CORS_PROXIES.map((p) => p(url)), 30_000);

  if (blob && saveBlob(blob, filename)) return true;
  return false;
}

export function safeFilename(prefix: string, id: string | undefined, ext: string): string {
  const base = prefix
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "media";
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
