import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useT, useLang, pagePath, TOOL_SLUGS, DEVICE_SLUGS } from "../lib/i18n";
import type { Step, FaqItem, Section as SectionT, PageSlug } from "../lib/i18n";
import {
  IconCheck,
  IconChevron,
  IconArrow,
  IconFilm,
  IconMusic,
  IconPhoto,
  IconSpark,
  IconBolt,
  IconShield,
  IconDevices,
  IconPlay,
  IconDownload,
  IconApple,
  IconAndroid,
  IconLaptop,
} from "./Icons";

/* ---------------- Scroll reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- Titres de section ---------------- */

export function SectionHeading({
  title,
  sub,
  align = "center",
}: {
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 text-base text-muted ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- Comment ça marche ---------------- */

export function HowItWorks({ steps, title }: { steps: Step[]; title: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading title={title} />
      <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
        <div
          className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-brand/25 md:block"
          aria-hidden
        />
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 130} className="relative text-center md:px-2">
            <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center">
              <span className="grad-bg absolute inset-0 rounded-2xl shadow-chip" />
              <span className="font-display relative text-lg font-bold text-white">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Avantages (bento asymétrique) ---------------- */

const BENEFIT_ICONS = [IconShield, IconBolt, IconDevices, IconSpark];

export function Benefits({
  title,
  sub,
  items,
}: {
  title: string;
  sub: string;
  items: { title: string; desc: string }[];
}) {
  const spans = ["md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-3"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading title={title} sub={sub} />
      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {items.map((b, i) => {
          const Ic = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
          return (
            <Reveal key={b.title} delay={i * 100} className={spans[i % spans.length]}>
              <div className="group h-full rounded-3xl border border-ink/6 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand transition-all duration-300 group-hover:scale-105 group-hover:text-white">
                  <span className="contents group-hover:hidden"><Ic size={21} /></span>
                  <span className="grad-bg hidden h-full w-full items-center justify-center rounded-xl text-white group-hover:flex">
                    <Ic size={21} />
                  </span>
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- FAQ accordéon ---------------- */

export function FaqList({ items, title, sub }: { items: FaqItem[]; title: string; sub?: string }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading title={title} sub={sub} />
      <div className="mt-10 space-y-3">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-brand/30 shadow-soft" : "border-ink/6"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-[15px] font-semibold sm:text-base">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "grad-bg rotate-180 text-white" : "bg-tint text-brand"}`}
                  >
                    <IconChevron size={15} />
                  </span>
                </button>
                <div className={`acc-body ${isOpen ? "open" : ""}`}>
                  <div className="acc-inner">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Blocs éditoriaux (contenu propre par page) ---------------- */

export function ProseSections({ sections }: { sections: SectionT[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="h-full rounded-3xl border border-ink/6 bg-white p-7 shadow-soft sm:p-8">
              <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
              <h2 className="font-display mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                {s.title}
              </h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2.5">
                  {s.list.map((li) => (
                    <li key={li} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <IconCheck size={12} />
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Outils liés (maillage interne) ---------------- */

const LINK_ICONS: Record<string, (p: { size?: number }) => ReactNode> = {
  "tiktok-video-downloader": (p) => <IconFilm {...p} />,
  "tiktok-mp3": (p) => <IconMusic {...p} />,
  "tiktok-photo-downloader": (p) => <IconPhoto {...p} />,
  "tiktok-story-downloader": (p) => <IconSpark {...p} />,
  "download-tiktok-iphone": (p) => <IconApple {...p} />,
  "download-tiktok-android": (p) => <IconAndroid {...p} />,
  "download-tiktok-pc": (p) => <IconLaptop {...p} />,
};

export function RelatedTools({
  exclude,
  title,
  sub,
}: {
  exclude?: PageSlug;
  title: string;
  sub: string;
}) {
  const t = useT();
  const lang = useLang();
  const slugs: PageSlug[] = [...TOOL_SLUGS, ...DEVICE_SLUGS].filter((s) => s !== exclude);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading title={title} sub={sub} />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {slugs.map((slug, i) => {
          const isTool = (TOOL_SLUGS as string[]).includes(slug);
          const meta = isTool ? t.tools[slug as keyof typeof t.tools] : t.devices[slug as keyof typeof t.devices];
          return (
            <Reveal key={slug} delay={i * 70}>
              <Link
                to={pagePath(slug, lang)}
                className="group flex h-full items-center gap-4 rounded-2xl border border-ink/6 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  {LINK_ICONS[slug]({ size: 20 })}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold">{meta.name}</span>
                  <span className="block truncate text-xs text-muted">{meta.desc}</span>
                </span>
                <IconArrow size={16} className="flex-none text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Vitrine des formats (homepage) ---------------- */

export function FormatsShowcase({ title, sub }: { title: string; sub: string }) {
  const t = useT();
  const lang = useLang();
  const [f0, f1, f2, f3] = t.home.formats;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading title={title} sub={sub} />
      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {/* Vidéo — grande carte */}
        <Reveal className="md:col-span-3">
          <Link
            to={pagePath("tiktok-video-downloader", lang)}
            className="group relative block h-full overflow-hidden rounded-3xl border border-ink/6 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8"
          >
            <span className="rounded-full bg-tint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">{f0.tag}</span>
            <h3 className="font-display mt-4 text-xl font-bold sm:text-2xl">{f0.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{f0.desc}</p>
            {/* Mini lecteur */}
            <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg,#0F3DFF 0%,#2563EB 45%,#38BDF8 100%)" }}>
              <span className="absolute inset-0 opacity-25 dotgrid" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand shadow-lift transition-transform duration-300 group-hover:scale-110">
                <IconPlay size={26} />
              </span>
              <span className="absolute bottom-3 left-3 rounded-md bg-ink/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">1080p · MP4</span>
              <span className="absolute bottom-3 right-3 rounded-md bg-ink/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">0:21</span>
            </div>
          </Link>
        </Reveal>

        <div className="flex flex-col gap-4 md:col-span-2">
          {/* Audio */}
          <Reveal delay={100}>
            <Link
              to={pagePath("tiktok-mp3", lang)}
              className="group block rounded-3xl border border-ink/6 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-tint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">{f1.tag}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <IconMusic size={17} />
                </span>
              </div>
              <h3 className="font-display mt-3 text-lg font-bold">{f1.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{f1.desc}</p>
              <div className="mt-4 flex h-8 items-end gap-1" aria-hidden>
                {[5, 9, 6, 12, 8, 14, 7, 11, 5, 13, 8, 6, 10, 7, 12, 5, 9, 6].map((h, i) => (
                  <span
                    key={i}
                    className="wave-bar flex-1 rounded-full"
                    style={{
                      height: `${h * 8}%`,
                      background: "linear-gradient(180deg,#38BDF8,#2563EB)",
                      animationDelay: `${i * 70}ms`,
                    }}
                  />
                ))}
              </div>
            </Link>
          </Reveal>

          {/* Photos */}
          <Reveal delay={180}>
            <Link
              to={pagePath("tiktok-photo-downloader", lang)}
              className="group block rounded-3xl border border-ink/6 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-tint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">{f2.tag}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <IconPhoto size={17} />
                </span>
              </div>
              <h3 className="font-display mt-3 text-lg font-bold">{f2.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{f2.desc}</p>
              <div className="mt-4 flex gap-2" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-10 flex-1 rounded-lg border border-white/40 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${["#0F3DFF", "#2563EB", "#38BDF8"][i]}cc, ${["#2563EB", "#38BDF8", "#7DD3FC"][i]}99)`,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  />
                ))}
              </div>
            </Link>
          </Reveal>

          {/* Sans filigrane */}
          <Reveal delay={240}>
            <div className="grad-bg relative overflow-hidden rounded-3xl p-6 text-white shadow-lift">
              <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" aria-hidden />
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/80">
                <IconSpark size={14} /> {f3.tag}
              </span>
              <h3 className="font-display mt-2 text-lg font-bold">{f3.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/85">{f3.desc}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Bandeau CTA ---------------- */

export function CtaBand({ title, sub, btn }: { title: string; sub: string; btn: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 pt-6 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] px-6 py-12 text-center text-white sm:px-12 sm:py-16" style={{ background: "linear-gradient(135deg,#0F3DFF 0%,#2563EB 45%,#38BDF8 100%)" }}>
          <span className="dotgrid absolute inset-0 opacity-15" aria-hidden />
          <span className="absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" aria-hidden />
          <span className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
          <h2 className="font-display relative text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-white/85 sm:text-base">{sub}</p>
          <a
            href="#tool"
            className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand shadow-lift transition-transform duration-200 hover:scale-[1.03] active:scale-100"
          >
            <IconDownload size={17} />
            {btn}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
