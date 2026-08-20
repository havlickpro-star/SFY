import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useT,
  LANGS,
  TOOL_SLUGS,
  DEVICE_SLUGS,
  homePath,
  pagePath,
  isLang,
  isPageSlug,
} from "../lib/i18n";
import type { Lang, PageSlug } from "../lib/i18n";
import {
  LogoMark,
  IconChevron,
  IconGlobe,
  IconMenu,
  IconX,
  IconDownload,
  IconFilm,
  IconMusic,
  IconPhoto,
  IconStory,
  IconApple,
  IconAndroid,
  IconLaptop,
} from "./Icons";

const TOOL_ICONS = {
  "tiktok-video-downloader": IconFilm,
  "tiktok-mp3": IconMusic,
  "tiktok-photo-downloader": IconPhoto,
  "tiktok-story-downloader": IconStory,
} as const;

const DEVICE_ICONS = {
  "download-tiktok-iphone": IconApple,
  "download-tiktok-android": IconAndroid,
  "download-tiktok-pc": IconLaptop,
} as const;

function useClickOutside(onOut: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onOut();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onOut]);
  return ref;
}

/** Page courante (slug ou "home") pour construire les liens de langue. */
function currentPageKey(pathname: string): PageSlug | "home" {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "home";
  const last = parts[parts.length - 1];
  return isPageSlug(last) ? last : "home";
}

export default function Navbar() {
  const t = useT();
  const location = useLocation();
  const seg = location.pathname.split("/").filter(Boolean)[0];
  const lang: Lang = seg && isLang(seg) ? seg : "en";
  const [openTool, setOpenTool] = useState(false);
  const [openDev, setOpenDev] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [mobile, setMobile] = useState(false);

  const toolRef = useClickOutside(() => setOpenTool(false));
  const devRef = useClickOutside(() => setOpenDev(false));
  const langRef = useClickOutside(() => setOpenLang(false));

  const pageKey = currentPageKey(location.pathname);
  const langPath = (code: Lang) =>
    pageKey === "home" ? homePath(code) : pagePath(pageKey, code);

  useEffect(() => {
    setMobile(false);
    setOpenTool(false);
    setOpenDev(false);
    setOpenLang(false);
  }, [location.pathname]);

  const home = homePath(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        {/* Logo */}
        <Link to={home} className="group flex items-center gap-2.5" aria-label="SFY — Save For You">
          <span className="grad-bg flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-chip transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <LogoMark size={20} />
          </span>
          <span className="leading-none">
            <span className="font-display block text-lg font-extrabold tracking-tight">
              SFY
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">
              Save For You
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          <div className="relative" ref={toolRef}>
            <button
              onClick={() => { setOpenTool(!openTool); setOpenDev(false); setOpenLang(false); }}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${openTool ? "bg-tint text-brand" : "text-ink/80 hover:bg-tint/70 hover:text-brand"}`}
            >
              {t.nav.tools}
              <IconChevron size={14} className={`transition-transform duration-200 ${openTool ? "rotate-180" : ""}`} />
            </button>
            {openTool && (
              <div className="anim-in absolute left-0 top-full mt-2 w-72 rounded-2xl border border-ink/5 bg-white p-2 shadow-lift">
                {TOOL_SLUGS.map((slug) => {
                  const Ic = TOOL_ICONS[slug];
                  return (
                    <Link
                      key={slug}
                      to={pagePath(slug, lang)}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-tint"
                    >
                      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-tint text-brand">
                        <Ic size={17} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{t.tools[slug].name}</span>
                        <span className="block text-xs text-muted">{t.tools[slug].desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="relative" ref={devRef}>
            <button
              onClick={() => { setOpenDev(!openDev); setOpenTool(false); setOpenLang(false); }}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${openDev ? "bg-tint text-brand" : "text-ink/80 hover:bg-tint/70 hover:text-brand"}`}
            >
              {t.nav.devices}
              <IconChevron size={14} className={`transition-transform duration-200 ${openDev ? "rotate-180" : ""}`} />
            </button>
            {openDev && (
              <div className="anim-in absolute left-0 top-full mt-2 w-72 rounded-2xl border border-ink/5 bg-white p-2 shadow-lift">
                {DEVICE_SLUGS.map((slug) => {
                  const Ic = DEVICE_ICONS[slug];
                  return (
                    <Link
                      key={slug}
                      to={pagePath(slug, lang)}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-tint"
                    >
                      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-tint text-brand">
                        <Ic size={17} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{t.devices[slug].name}</span>
                        <span className="block text-xs text-muted">{t.devices[slug].desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to={pagePath("about", lang)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-tint/70 hover:text-brand"
          >
            {t.nav.about}
          </Link>
          <a
            href={`${home}#faq`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-tint/70 hover:text-brand"
          >
            {t.nav.faq}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Langue */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => { setOpenLang(!openLang); setOpenTool(false); setOpenDev(false); }}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors ${openLang ? "bg-tint text-brand" : "text-ink/70 hover:bg-tint/70 hover:text-brand"}`}
              aria-label="Language"
            >
              <IconGlobe size={16} />
              <span className="text-xs font-bold tracking-wide">{lang.toUpperCase()}</span>
              <IconChevron size={12} className={`transition-transform duration-200 ${openLang ? "rotate-180" : ""}`} />
            </button>
            {openLang && (
              <div className="anim-in absolute right-0 top-full mt-2 w-48 rounded-2xl border border-ink/5 bg-white p-2 shadow-lift">
                {LANGS.map(({ code, label }) => (
                  <Link
                    key={code}
                    to={langPath(code)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-tint ${code === lang ? "font-semibold text-brand" : "text-ink/80"}`}
                  >
                    {label}
                    {code === lang && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to={`${home}#tool`}
            className="btn-primary hidden items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold sm:flex"
          >
            <IconDownload size={16} />
            {t.nav.cta}
          </Link>

          {/* Burger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink/80 transition-colors hover:bg-tint lg:hidden"
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? t.nav.close : t.nav.menu}
          >
            {mobile ? <IconX size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobile && (
        <div className="anim-in border-t border-ink/5 bg-white px-4 pb-6 pt-3 shadow-soft lg:hidden">
          <p className="px-1 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">{t.nav.tools}</p>
          <div className="grid gap-1">
            {TOOL_SLUGS.map((slug) => (
              <Link key={slug} to={pagePath(slug, lang)} className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/85 transition-colors hover:bg-tint">
                {t.tools[slug].name}
              </Link>
            ))}
          </div>
          <p className="px-1 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">{t.nav.devices}</p>
          <div className="grid gap-1">
            {DEVICE_SLUGS.map((slug) => (
              <Link key={slug} to={pagePath(slug, lang)} className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/85 transition-colors hover:bg-tint">
                {t.devices[slug].name}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-ink/5 pt-4">
            {LANGS.map(({ code, label }) => (
              <Link
                key={code}
                to={langPath(code)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${code === lang ? "border-brand bg-brand text-white" : "border-ink/10 text-ink/70 hover:border-brand/40 hover:text-brand"}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
