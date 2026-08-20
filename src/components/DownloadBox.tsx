import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useT, useLang, pagePath } from "../lib/i18n";
import type { ToolMode } from "../lib/i18n";
import {
  resolveMedia,
  validateTikTokUrl,
  formatDuration,
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
} from "./Icons";

const KIND_ICON = { video: IconFilm, audio: IconMusic, image: IconPhoto } as const;

function errorText(code: ErrorCode, t: ReturnType<typeof useT>): string {
  switch (code) {
    case "empty": return t.box.errEmpty;
    case "invalid": return t.box.errInvalid;
    case "inaccessible": return t.box.errInaccessible;
    case "rate": return t.box.errRate;
    default: return t.box.errGeneral;
  }
}

export default function DownloadBox({ mode }: { mode: ToolMode }) {
  const t = useT();
  const lang = useLang();
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "working" | "done">("idle");
  const [stage, setStage] = useState<"analyzing" | "fetching">("analyzing");
  const [error, setError] = useState<ErrorCode | null>(null);
  const [result, setResult] = useState<ResolvedMedia | null>(null);
  const [toast, setToast] = useState(false);
  const [pasteHint, setPasteHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const validity = useMemo(() => validateTikTokUrl(url), [url]);
  const isValid = validity.ok;
  const clipboardAvailable =
    typeof navigator !== "undefined" && !!navigator.clipboard?.readText;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "working") return;
    const v = validateTikTokUrl(url);
    if (!v.ok) {
      setError(v.code);
      setResult(null);
      setStatus("idle");
      return;
    }
    setError(null);
    setStatus("working");
    setStage("analyzing");
    try {
      const res = await resolveMedia(url, mode, setStage);
      if (res.ok) {
        setResult(res.data);
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
        if (validateTikTokUrl(text).ok) inputRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    } catch {
      inputRef.current?.focus();
      setPasteHint(true);
      window.setTimeout(() => setPasteHint(false), 4000);
    }
  }

  function handleFormatDownload(f: MediaFormat) {
    if (f.url) {
      window.open(f.url, "_blank", "noopener,noreferrer");
      return;
    }
    // Mode démo : pas de lien réel → notification honnête.
    setToast(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(false), 3200);
  }

  function reset() {
    setStatus("idle");
    setResult(null);
    setError(null);
    setUrl("");
    window.setTimeout(() => inputRef.current?.focus(), 60);
  }

  const readyTitle =
    mode === "mp3" ? t.box.readyAudio
    : mode === "photo" ? t.box.readyPhotos
    : mode === "story" ? t.box.readyStory
    : t.box.readyVideo;

  const duration = result ? formatDuration(result.durationSec) : null;

  return (
    <div className="relative">
      <div className="focus-ring rounded-[22px] border border-ink/8 bg-white p-5 shadow-soft transition-shadow duration-300 sm:p-7">
        {status !== "done" && (
          <form onSubmit={handleSubmit} noValidate>
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
                  placeholder={t.box.placeholder}
                  aria-label="URL TikTok"
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
                    alt={result.title || "TikTok"}
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
                  <span className="grad-bg rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    TikTok
                  </span>
                  {result.demo && (
                    <span className="flex items-center gap-1 rounded-md border border-amber-300/70 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      <IconInfo size={11} />
                      {t.box.demoPill}
                    </span>
                  )}
                </div>
                <p className="mt-2 truncate text-sm font-bold text-ink">
                  {result.author || (result.demo ? t.box.demoAuthor : "—")}
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
            <div className="mt-4 rounded-2xl border border-ink/6 bg-mist/70 p-1.5">
              <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                {t.box.formatsLabel}
              </p>
              <ul className="divide-y divide-ink/5">
                {result.formats.map((f) => {
                  const Ic = KIND_ICON[f.kind];
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
                        {f.quality && (
                          <span className="text-xs text-muted">{f.quality}</span>
                        )}
                      </span>
                      <span className="hidden rounded-md border border-ink/10 bg-white px-2 py-1 text-[10px] font-bold tracking-wider text-muted sm:block">
                        {f.ext}
                      </span>
                      <button
                        onClick={() => handleFormatDownload(f)}
                        className="btn-primary flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold"
                      >
                        <IconDownload size={15} />
                        <span className="hidden sm:inline">{t.box.download}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

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
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600" style={{ width: 18, height: 18 }}>
              <IconCheck size={11} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Toast démo */}
      {toast && (
        <div className="anim-in fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white shadow-lift">
          {t.box.demoToast}
        </div>
      )}
    </div>
  );
}
