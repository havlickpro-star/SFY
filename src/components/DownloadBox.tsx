import { useMemo, useRef, useState } from "react";
import type { CSSProperties, FormEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  useT,
  useLang,
  pagePath,
  PLATFORMS,
  PLATFORM_LABELS,
  PLATFORM_PLACEHOLDERS,
} from "../lib/i18n";
import type { ToolMode, Platform } from "../lib/i18n";
import {
  resolveMedia,
  validateMediaUrl,
  normalizeMediaUrl,
  formatDuration,
  formatBytes,
  triggerDownload,
  safeFilename,
} from "../lib/resolver";
import type { ResolvedMedia, MediaFormat, ErrorCode } from "../lib/resolver";
import {
  IconLink,
  IconClipboard,
  IconDownload,
  IconCheck,
  IconAlert,
  IconInfo,
  IconFilm,
  IconMusic,
  IconPhoto,
  IconPlay,
  IconRotate,
  IconSpark,
  IconTikTok,
  IconInstagram,
  IconFacebook,
  IconYouTube,
} from "./Icons";

const KIND_ICON = { video: IconFilm, audio: IconMusic, image: IconPhoto } as const;

const PLATFORM_ICON: Record<Platform, (p: { size?: number; className?: string }) => ReactElement> = {
  tiktok: (p) => <IconTikTok {...p} />,
  instagram: (p) => <IconInstagram {...p} />,
  facebook: (p) => <IconFacebook {...p} />,
  youtube: (p) => <IconYouTube {...p} />,
};

function platformBadgeStyle(p: Platform): CSSProperties {
  switch (p) {
    case "instagram":
      return { background: "radial-gradient(circle at 30% 110%, #fdc468 0%, #df4996 60%, #8a3ab9 100%)" };
    case "facebook":
      return { background: "#1877F2" };
    case "youtube":
      return { background: "#FF0033" };
    default:
      return {};
  }
}

function errorText(code: ErrorCode, t: ReturnType<typeof useT>): string {
  switch (code) {
    case "empty": return t.box.errEmpty;
    case "invalid": return t.box.errInvalid;
    case "inaccessible": return t.box.errInaccessible;
    case "rate": return t.box.errRate;
    default: return t.box.errGeneral;
  }
}

export default function DownloadBox({
  mode,
  platformLock,
}: {
  mode: ToolMode;
  platformLock?: Platform;
}) {
  const t = useT();
  const lang = useLang();
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "working" | "done">("idle");
  const [stage, setStage] = useState<"analyzing" | "fetching">("analyzing");
  const [error, setError] = useState<ErrorCode | null>(null);
  const [result, setResult] = useState<ResolvedMedia | null>(null);
  const [toast, setToast] = useState<{ msg: string; openUrl?: string } | null>(null);
  const [pasteHint, setPasteHint] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [doneIds, setDoneIds] = useState<string[]>([]);
  const [allBusy, setAllBusy] = useState(false);
  const [activePlatform, setActivePlatform] = useState<Platform>(platformLock ?? "tiktok");
  const inputRef = useRef<HTMLInputElement>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const validity = useMemo(() => validateMediaUrl(url), [url]);
  const isValid = validity.ok;
  const visiblePlatforms = platformLock ? [platformLock] : PLATFORMS;
  const clipboardAvailable =
    typeof navigator !== "undefined" && !!navigator.clipboard?.readText;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "working") return;
    const v = validateMediaUrl(url);
    if (!v.ok) {
      setError(v.code);
      setResult(null);
      setStatus("idle");
      return;
    }
    if (platformLock && v.platform !== platformLock) {
      setError("invalid");
      return;
    }
    setError(null);
    setStatus("working");
    setStage("analyzing");
    try {
      const res = await resolveMedia(url, mode, setStage);
      if (res.ok) {
        setResult(res.data);
        setDoneIds([]);
        setStatus("done");
      } else {
        setError(res.code);
        setStatus("idle");
      }
    } catch {
      setError("error");
      setStatus("idle");
    }
  }

  async function handlePaste() {
    setPasteHint(false);
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
        setError(null);
        const v = validateMediaUrl(text);
        if (v.ok && !platformLock) setActivePlatform(v.platform);
        if (v.ok) inputRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    } catch {
      inputRef.current?.focus();
      setPasteHint(true);
      window.setTimeout(() => setPasteHint(false), 4000);
    }
  }

  function showToast(msg: string, openUrl?: string) {
    setToast({ msg, openUrl });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 6000);
  }

  function markDone(id: string) {
    setDoneIds((p) => (p.includes(id) ? p : [...p, id]));
  }

  function baseFilename(ext: string, suffix?: string): string {
    if (!result) return `sfy-media.${ext.toLowerCase()}`;
    const prefix = result.authorId || result.author || result.title || result.platform;
    return safeFilename(prefix, result.id ? `${result.id}${suffix ?? ""}` : suffix, ext);
  }

  async function handleFormatDownload(f: MediaFormat) {
    if (!f.url) {
      showToast(t.box.demoToast);
      return;
    }
    setBusyId(f.id);
    const saved = await triggerDownload(f.url, f.suggestedName ?? baseFilename(f.ext, `-${f.id}`));
    setBusyId(null);
    if (saved) {
      markDone(f.id);
    } else {
      showToast(t.box.openFallback, normalizeMediaUrl(f.url));
    }
  }

  async function handleImageDownload(imgUrl: string, index: number) {
    const id = `img-${index}`;
    setBusyId(id);
    const saved = await triggerDownload(imgUrl, baseFilename("jpg", `-photo-${index + 1}`));
    setBusyId(null);
    if (saved) {
      markDone(id);
    } else {
      showToast(t.box.openFallback, normalizeMediaUrl(imgUrl));
    }
  }

  async function handleDownloadAll() {
    if (!result?.images || allBusy) return;
    setAllBusy(true);
    let fallbackCount = 0;
    for (let i = 0; i < result.images.length; i++) {
      setBusyId(`img-${i}`);
      const saved = await triggerDownload(result.images[i], baseFilename("jpg", `-photo-${i + 1}`));
      if (saved) {
        markDone(`img-${i}`);
      } else {
        fallbackCount++;
      }
      setBusyId(null);
      await new Promise((r) => setTimeout(r, 600));
    }
    setAllBusy(false);
    if (fallbackCount > 0) showToast(t.box.openFallback);
  }

  function reset() {
    setStatus("idle");
    setResult(null);
    setError(null);
    setUrl("");
    setDoneIds([]);
    setBusyId(null);
    setAllBusy(false);
    window.setTimeout(() => inputRef.current?.focus(), 60);
  }

  const readyTitle =
    mode === "mp3" ? t.box.readyAudio
    : mode === "photo" ? t.box.readyPhotos
    : mode === "story" ? t.box.readyStory
    : t.box.readyVideo;

  const duration = result ? formatDuration(result.durationSec) : null;
  const showSlides = !!result?.images?.length;
  const detectedPlatform: Platform = validity.ok ? validity.platform : activePlatform;

  return (
    <div className="relative">
      <div className="focus-ring rounded-[22px] border border-ink/8 bg-white p-5 shadow-soft transition-shadow duration-300 sm:p-7">
        {status !== "done" && (
          <form onSubmit={handleSubmit} noValidate>
            {/* Plateformes prises en charge */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {visiblePlatforms.map((p) => {
                const active = detectedPlatform === p;
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActivePlatform(p)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                      active
                        ? "grad-bg border-transparent text-white shadow-chip"
                        : "border-ink/10 bg-mist text-muted hover:border-brand/40 hover:text-brand"
                    }`}
                  >
                    {PLATFORM_ICON[p]({ size: 14 })}
                    {PLATFORM_LABELS[p]}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              {/* Champ URL */}
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                  <IconLink size={19} />
                </span>
                <input
                  ref={inputRef}
                  type="url"
                  inputMode="url"
                  autoComplete="off"
                  spellCheck={false}
                  value={url}
                  disabled={status === "working"}
                  onChange={(e) => { setUrl(e.target.value); setError(null); }}
                  placeholder={PLATFORM_PLACEHOLDERS[activePlatform]}
                  aria-label="URL"
                  className="h-14 w-full rounded-xl border border-ink/10 bg-mist pl-11 pr-11 text-[15px] font-medium text-ink outline-none transition-all placeholder:font-normal placeholder:text-muted/70 focus:border-brand/60 focus:bg-white focus:ring-4 focus:ring-brand/12 disabled:opacity-60"
                />
                {isValid && (
                  <span className="anim-in absolute right-3.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <IconCheck size={14} />
                  </span>
                )}
              </div>

              {/* Boutons */}
              <div className="flex gap-3">
                {clipboardAvailable && (
                  <button
                    type="button"
                    onClick={handlePaste}
                    disabled={status === "working"}
                    className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-brand/25 bg-tint/60 px-5 text-sm font-semibold text-brand transition-all hover:border-brand/50 hover:bg-tint active:scale-[0.98] disabled:opacity-50 md:flex-none"
                  >
                    <IconClipboard size={17} />
                    {t.box.paste}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={status === "working"}
                  className="btn-primary flex h-14 flex-1 items-center justify-center gap-2 rounded-xl px-7 text-[15px] font-semibold md:flex-none"
                >
                  {status === "working" ? (
                    <span className="spin-ring" aria-hidden />
                  ) : (
                    <IconDownload size={18} />
                  )}
                  {t.box.cta}
                </button>
              </div>
            </div>

            {/* Erreur */}
            {error && (
              <div
                role="alert"
                className="anim-in mt-4 flex items-start gap-2.5 rounded-xl border border-rose-200/70 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600"
              >
                <IconAlert size={17} className="mt-0.5 flex-none" />
                {errorText(error, t)}
              </div>
            )}
            {pasteHint && !error && (
              <p className="anim-in mt-3 text-xs font-medium text-muted">{t.box.pasteHint}</p>
            )}

            {/* Chargement */}
            {status === "working" && (
              <div className="anim-in mt-5 border-t border-ink/5 pt-5">
                <div className="flex items-center gap-3">
                  <span className="spin-ring" aria-hidden />
                  <p className="text-sm font-semibold text-ink/85">
                    {stage === "analyzing" ? t.box.analyzing : t.box.fetching}
                  </p>
                </div>
                <div className="shimmer-bar mt-4" />
              </div>
            )}
          </form>
        )}

        {/* Résultat */}
        {status === "done" && result && (
          <div className="anim-in">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Thumbnail */}
              <div className="relative h-28 w-[5.5rem] flex-none overflow-hidden rounded-xl bg-tint sm:h-32">
                {result.thumbnail ? (
                  <img
                    src={result.thumbnail}
                    alt={result.title || PLATFORM_LABELS[result.platform]}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="grad-bg flex h-full w-full items-center justify-center text-white/90">
                    <IconPlay size={26} />
                  </div>
                )}
                {duration && (
                  <span className="absolute bottom-1.5 right-1.5 rounded-md bg-ink/75 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    {duration}
                  </span>
                )}
              </div>

              {/* Métadonnées */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${result.platform === "tiktok" ? "grad-bg" : ""}`}
                    style={platformBadgeStyle(result.platform)}
                  >
                    {PLATFORM_LABELS[result.platform]}
                  </span>
                  {result.demo && (
                    <span className="flex items-center gap-1 rounded-md border border-amber-300/70 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      <IconInfo size={11} />
                      {t.box.demoPill}
                    </span>
                  )}
                </div>
                <p className="mt-2 truncate text-sm font-bold text-ink">
                  {result.author || (result.demo ? t.box.demoAuthor : result.authorId || "—")}
                </p>
                <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-muted">
                  {result.title || (result.demo ? t.box.demoTitle : "—")}
                </p>
              </div>
            </div>

            {/* Titre résultat */}
            <div className="mt-6 flex items-center gap-2.5">
              <span className="grad-bg flex h-7 w-7 items-center justify-center rounded-full text-white shadow-chip">
                <IconCheck size={15} />
              </span>
              <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {readyTitle}
              </h2>
            </div>

            {/* Formats */}
            {result.formats.length > 0 && (
              <div className="mt-4 rounded-2xl border border-ink/6 bg-mist/70 p-1.5">
                <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                  {t.box.formatsLabel}
                </p>
                <ul className="divide-y divide-ink/5">
                  {result.formats.map((f) => {
                    const Ic = KIND_ICON[f.kind];
                    const busy = busyId === f.id;
                    const done = doneIds.includes(f.id);
                    const size = formatBytes(f.sizeBytes);
                    return (
                      <li
                        key={f.id}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white"
                      >
                        <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors ${f.primary ? "grad-bg text-white shadow-chip" : "bg-tint text-brand"}`}>
                          <Ic size={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-ink">
                              {t.box[f.labelKey]}
                            </span>
                            {f.tag === "noWatermark" && (
                              <span className="flex items-center gap-1 rounded-full border border-brand/20 bg-tint px-2 py-0.5 text-[10px] font-bold text-brand">
                                <IconSpark size={11} />
                                {t.box.noWatermark}
                              </span>
                            )}
                          </span>
                          {(f.quality || size) && (
                            <span className="text-xs text-muted">
                              {[f.quality, size].filter(Boolean).join(" · ")}
                            </span>
                          )}
                        </span>
                        <span className="hidden rounded-md border border-ink/10 bg-white px-2 py-1 text-[10px] font-bold tracking-wider text-muted sm:block">
                          {f.ext}
                        </span>
                        <button
                          onClick={() => handleFormatDownload(f)}
                          disabled={busy}
                          className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all active:scale-95 ${
                            done
                              ? "bg-emerald-100 text-emerald-700"
                              : "btn-primary"
                          }`}
                        >
                          {busy ? (
                            <>
                              <span className="spin-ring" aria-hidden />
                              <span className="hidden sm:inline">{t.box.preparing}</span>
                            </>
                          ) : done ? (
                            <>
                              <IconCheck size={15} />
                              <span className="hidden sm:inline">{t.box.downloaded}</span>
                            </>
                          ) : (
                            <>
                              <IconDownload size={15} />
                              <span className="hidden sm:inline">{t.box.download}</span>
                            </>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Photos / diapositives */}
            {showSlides && result.images && (
              <div className="mt-4 rounded-2xl border border-ink/6 bg-mist/70 p-3">
                <div className="flex items-center justify-between px-1 pb-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    {t.box.photosHeader}
                  </p>
                  <button
                    onClick={handleDownloadAll}
                    disabled={allBusy}
                    className="flex items-center gap-1.5 rounded-lg border border-brand/25 bg-tint/60 px-3 py-1.5 text-xs font-semibold text-brand transition-all hover:bg-tint active:scale-95 disabled:opacity-50"
                  >
                    {allBusy ? <span className="spin-ring" aria-hidden /> : <IconDownload size={13} />}
                    {t.box.downloadAll}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {result.images.map((img, i) => {
                    const id = `img-${i}`;
                    const busy = busyId === id;
                    const done = doneIds.includes(id);
                    return (
                      <div key={id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-tint">
                        <img
                          src={img}
                          alt={`Photo ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <button
                          onClick={() => handleImageDownload(img, i)}
                          disabled={busy}
                          aria-label={`${t.box.download} ${i + 1}`}
                          className={`absolute bottom-1.5 right-1.5 flex h-8 w-8 items-center justify-center rounded-lg shadow-chip transition-all active:scale-90 ${
                            done ? "bg-emerald-500 text-white" : "grad-bg text-white opacity-90 group-hover:opacity-100"
                          }`}
                        >
                          {busy ? <span className="spin-ring" aria-hidden /> : done ? <IconCheck size={15} /> : <IconDownload size={15} />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {result.demo && (
              <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <IconInfo size={14} className="mt-0.5 flex-none text-brand" />
                {t.box.demoNote}
              </p>
            )}

            {mode === "mp3" && (
              <p className="mt-3 text-xs text-muted">
                →{" "}
                <Link
                  to={pagePath("tiktok-video-downloader", lang)}
                  className="font-semibold text-brand link-underline"
                >
                  {t.tools["tiktok-video-downloader"].name}
                </Link>
              </p>
            )}

            <button
              onClick={reset}
              className="mt-4 flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink/75 transition-all hover:border-brand/40 hover:text-brand active:scale-[0.98]"
            >
              <IconRotate size={16} />
              {t.box.newVideo}
            </button>
          </div>
        )}
      </div>

      {/* Confiance */}
      <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {t.trust.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-[13px] font-medium text-muted">
            <span className="flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600" style={{ width: 18, height: 18 }}>
              <IconCheck size={11} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Toast (avec action explicite en cas d'échec d'enregistrement) */}
      {toast && (
        <div className="anim-in fixed bottom-6 left-1/2 z-50 flex max-w-[92vw] -translate-x-1/2 items-center gap-3 rounded-xl bg-ink px-5 py-3.5 text-sm font-medium text-white shadow-lift">
          <span className="text-center leading-snug">{toast.msg}</span>
          {toast.openUrl && (
            <a
              href={toast.openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none rounded-lg bg-white/15 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/25 active:scale-95"
            >
              {t.box.openFile}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
