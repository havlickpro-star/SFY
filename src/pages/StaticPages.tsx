import { Link } from "react-router-dom";
import { useT, useLang, pagePath, homePath, alternatesFor } from "../lib/i18n";
import type { StaticSlug } from "../lib/i18n";
import { SeoHead, SITE_URL, breadcrumbJsonLd } from "../lib/seo";
import { ProseSections, Reveal } from "../components/Sections";
import { IconMail, IconArrow } from "../components/Icons";

export function StaticPage({ slug }: { slug: StaticSlug }) {
  const t = useT();
  const lang = useLang();
  const page = t.pages[slug];
  const path = pagePath(slug, lang);

  return (
    <>
      <SeoHead
        title={page.seoTitle}
        description={page.metaDesc}
        path={path}
        lang={lang}
        alternates={alternatesFor(slug)}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "SFY", path: homePath(lang) },
            { name: page.h1, path },
          ]),
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="hero-wash absolute inset-0" />
          <div className="dotgrid absolute inset-x-0 top-0 h-64 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
          <Reveal>
            <h1 className="font-display text-center text-3xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-muted sm:text-base">
              {page.intro}
            </p>
          </Reveal>

          {slug === "contact" && (
            <Reveal delay={140}>
              <a
                href="mailto:hello@sfy.app"
                className="btn-primary mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-bold"
              >
                <IconMail size={18} />
                hello@sfy.app
              </a>
            </Reveal>
          )}
        </div>
      </section>

      <div className="mt-6">
        <ProseSections sections={page.sections} />
      </div>
    </>
  );
}

export function NotFoundPage() {
  const t = useT();
  const lang = useLang();
  return (
    <>
      <SeoHead
        title={`404 — ${t.notFound.title} | SFY`}
        description={t.notFound.desc}
        path="/404"
        lang={lang}
        alternates={alternatesFor("home")}
      />
      <section className="relative overflow-hidden">
        <div className="hero-wash pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-xl px-4 py-24 text-center sm:py-32">
          <p className="font-display grad-text text-[7rem] font-extrabold leading-none sm:text-[9rem]">
            404
          </p>
          <h1 className="font-display mt-4 text-2xl font-bold">{t.notFound.title}</h1>
          <p className="mt-3 text-muted">{t.notFound.desc}</p>
          <Link
            to={homePath(lang)}
            className="btn-primary mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold"
          >
            {t.notFound.btn}
            <IconArrow size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
