import type { ReactElement } from "react";
import { useT, useLang, homePath, alternatesFor, PLATFORMS, PLATFORM_LABELS } from "../lib/i18n";
import type { Platform } from "../lib/i18n";
import { SeoHead, SITE_URL, webAppJsonLd, faqJsonLd } from "../lib/seo";
import DownloadBox from "../components/DownloadBox";
import {
  Reveal,
  HowItWorks,
  Benefits,
  FaqList,
  RelatedTools,
  FormatsShowcase,
  CtaBand,
} from "../components/Sections";
import {
  IconFilm,
  IconMusic,
  IconPhoto,
  IconSpark,
  IconTikTok,
  IconFacebook,
  IconInstagram,
  IconYouTube,
} from "../components/Icons";

const PLATFORM_ICONS: Record<Platform, (p: { size?: number }) => ReactElement> = {
  tiktok: (p) => <IconTikTok {...p} />,
  facebook: (p) => <IconFacebook {...p} />,
  instagram: (p) => <IconInstagram {...p} />,
  youtube: (p) => <IconYouTube {...p} />,
};

const CHIPS = [
  { icon: IconFilm, label: "MP4 · 1080p", cls: "left-[4%] top-6", anim: "animate-float" },
  { icon: IconMusic, label: "MP3 · 128 kbps", cls: "right-[3%] top-16", anim: "animate-float-late" },
  { icon: IconSpark, label: "No watermark", cls: "left-[7%] bottom-14", anim: "animate-float-late", i18n: true },
  { icon: IconPhoto, label: "JPG ×6", cls: "right-[6%] bottom-6", anim: "animate-float" },
];

export default function HomePage() {
  const t = useT();
  const lang = useLang();

  const path = homePath(lang);
  const title = `${t.home.h1a} ${t.home.h1b} | SFY — Save For You`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SFY — Save For You",
      alternateName: "SFY",
      url: SITE_URL,
      inLanguage: lang,
    },
    webAppJsonLd(`${SITE_URL}${path}`, lang),
    faqJsonLd(t.home.faq),
  ];

  const chips = CHIPS.map((c) => ({
    ...c,
    label: c.i18n ? t.box.noWatermark : c.label,
  }));

  return (
    <>
      <SeoHead
        title={title}
        description={t.home.subtitle}
        path={path}
        lang={lang}
        alternates={alternatesFor("home")}
        jsonLd={jsonLd}
      />

      {/* ============ HERO + OUTIL ============ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="hero-wash absolute inset-0" />
          <div className="dotgrid absolute inset-x-0 top-0 h-[30rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="card-glow absolute inset-x-0 top-28 h-[26rem]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/85 px-4 py-1.5 text-xs font-bold text-brand shadow-chip">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                {t.home.badge}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="font-display mt-6 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                {t.home.h1a}{" "}
                <span className="grad-text whitespace-nowrap">{t.home.h1b}</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {t.home.subtitle}
              </p>
            </Reveal>
          </div>

          {/* Download box + puces flottantes */}
          <Reveal delay={260}>
            <div id="tool" className="relative mx-auto mt-10 max-w-[52rem] scroll-mt-28">
              {chips.map((c) => {
                const Ic = c.icon;
                return (
                  <span
                    key={c.label}
                    className={`absolute z-10 hidden items-center gap-1.5 rounded-full border border-ink/6 bg-white/90 px-3.5 py-2 text-xs font-bold text-ink/75 shadow-chip backdrop-blur-sm lg:flex ${c.cls} ${c.anim}`}
                    aria-hidden
                  >
                    <span className="text-brand"><Ic size={14} /></span>
                    {c.label}
                  </span>
                );
              })}
              <DownloadBox mode="video" />
            </div>
          </Reveal>

          {/* Plateformes prises en charge */}
          <Reveal delay={340}>
            <div className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {PLATFORMS.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted">
                  <span className="text-brand">{PLATFORM_ICONS[p]({ size: 15 })}</span>
                  {PLATFORM_LABELS[p]}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FORMATS ============ */}
      <FormatsShowcase title={t.home.formatsTitle} sub={t.home.formatsSub} />

      {/* ============ ÉTAPES ============ */}
      <div className="rounded-[36px] bg-white/70 py-2">
        <HowItWorks title={t.how.title} steps={t.how.steps} />
      </div>

      {/* ============ AVANTAGES ============ */}
      <Benefits title={t.home.whyTitle} sub={t.home.whySub} items={t.home.benefits} />

      {/* ============ FAQ ============ */}
      <FaqList items={t.home.faq} title={t.home.faqTitle} sub={t.home.faqSub} />

      {/* ============ AUTRES OUTILS ============ */}
      <RelatedTools title={t.home.otherTools} sub={t.home.otherToolsSub} />

      {/* ============ CTA ============ */}
      <CtaBand title={t.home.ctaTitle} sub={t.home.ctaSub} btn={t.home.ctaBtn} />
    </>
  );
}
