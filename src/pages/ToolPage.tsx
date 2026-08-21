import { Link } from "react-router-dom";
import { useT, useLang, pagePath, homePath, alternatesFor } from "../lib/i18n";
import type { PageSlug } from "../lib/i18n";
import {
  SeoHead,
  SITE_URL,
  webAppJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";
import DownloadBox from "../components/DownloadBox";
import {
  Reveal,
  HowItWorks,
  ProseSections,
  FaqList,
  RelatedTools,
} from "../components/Sections";
import { IconChevron } from "../components/Icons";

export default function ToolPage({ slug }: { slug: PageSlug }) {
  const t = useT();
  const lang = useLang();
  const page = t.pages[slug];
  const path = pagePath(slug, lang);

  const jsonLd = [
    webAppJsonLd(`${SITE_URL}${path}`, lang),
    breadcrumbJsonLd([
      { name: "SFY", path: homePath(lang) },
      { name: page.h1, path },
    ]),
    ...(page.faq.length ? [faqJsonLd(page.faq)] : []),
  ];

  return (
    <>
      <SeoHead
        title={page.seoTitle}
        description={page.metaDesc}
        path={path}
        lang={lang}
        alternates={alternatesFor(slug)}
        jsonLd={jsonLd}
      />

      {/* Entête compacte + outil immédiatement visible */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="hero-wash absolute inset-0" />
          <div className="dotgrid absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-10 sm:px-6 sm:pt-12">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-1.5 text-xs font-medium text-muted" aria-label="Breadcrumb">
            <Link to={homePath(lang)} className="transition-colors hover:text-brand">SFY</Link>
            <IconChevron size={12} className="-rotate-90" />
            <span className="truncate font-semibold text-ink/70">{page.h1}</span>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <Reveal>
              <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
                {page.h1}
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                {page.intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div id="tool" className="mx-auto mt-8 max-w-[52rem] scroll-mt-28">
              <DownloadBox
                mode={page.toolMode}
                platformLock={slug.startsWith("tiktok") ? "tiktok" : undefined}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Étapes */}
      <HowItWorks title={t.how.title} steps={page.steps ?? t.how.steps} />

      {/* Contenu propre à la page */}
      <ProseSections sections={page.sections} />

      {/* FAQ spécifique */}
      {page.faq.length > 0 && (
        <FaqList items={page.faq} title={t.faq.title} sub={t.faq.sub} />
      )}

      {/* Maillage interne */}
      <RelatedTools exclude={slug} title={t.related.title} sub={t.related.sub} />
    </>
  );
}
