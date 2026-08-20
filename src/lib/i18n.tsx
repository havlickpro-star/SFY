import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import es from "../locales/es";
import pt from "../locales/pt";
import id from "../locales/id";

/* ------------------------------------------------------------------ */
/* Types partagés                                                      */
/* ------------------------------------------------------------------ */

export type Lang = "en" | "fr" | "es" | "pt" | "id";
export type ToolMode = "video" | "mp3" | "photo" | "story";

export type ToolSlug =
  | "tiktok-video-downloader"
  | "tiktok-mp3"
  | "tiktok-photo-downloader"
  | "tiktok-story-downloader";

export type DeviceSlug =
  | "download-tiktok-iphone"
  | "download-tiktok-android"
  | "download-tiktok-pc";

export type StaticSlug = "about" | "privacy" | "terms" | "contact";
export type PageSlug = ToolSlug | DeviceSlug | StaticSlug;

export interface Step {
  title: string;
  desc: string;
}
export interface FaqItem {
  q: string;
  a: string;
}
export interface Section {
  title: string;
  body: string[];
  list?: string[];
}
export interface Benefit {
  title: string;
  desc: string;
}
export interface PageContent {
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  toolMode: ToolMode;
  steps?: Step[];
  sections: Section[];
  faq: FaqItem[];
}

export interface Dict {
  code: Lang;
  name: string;
  nav: {
    tools: string;
    devices: string;
    about: string;
    faq: string;
    cta: string;
    menu: string;
    close: string;
  };
  home: {
    badge: string;
    h1a: string;
    h1b: string;
    subtitle: string;
    formatsTitle: string;
    formatsSub: string;
    formats: { title: string; desc: string; tag: string }[];
    whyTitle: string;
    whySub: string;
    benefits: Benefit[];
    faqTitle: string;
    faqSub: string;
    faq: FaqItem[];
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    otherTools: string;
    otherToolsSub: string;
  };
  box: {
    placeholder: string;
    cta: string;
    paste: string;
    pasteHint: string;
    analyzing: string;
    fetching: string;
    errEmpty: string;
    errInvalid: string;
    errInaccessible: string;
    errGeneral: string;
    errRate: string;
    readyVideo: string;
    readyAudio: string;
    readyPhotos: string;
    readyStory: string;
    formatsLabel: string;
    download: string;
    newVideo: string;
    demoPill: string;
    demoNote: string;
    demoToast: string;
    demoTitle: string;
    demoAuthor: string;
    bestQuality: string;
    mp4hd: string;
    mp4std: string;
    mp3: string;
    photos: string;
    story: string;
    noWatermark: string;
  };
  trust: string[];
  how: { title: string; steps: Step[] };
  faq: { title: string; sub: string };
  related: { title: string; sub: string };
  tools: Record<ToolSlug, { name: string; desc: string }>;
  devices: Record<DeviceSlug, { name: string; desc: string }>;
  footer: {
    tagline: string;
    colSfy: string;
    colTools: string;
    colDevices: string;
    colLegal: string;
    colLangs: string;
    home: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    disclaimer: string;
  };
  notFound: { title: string; desc: string; btn: string };
  pages: Record<PageSlug, PageContent>;
}

/* ------------------------------------------------------------------ */
/* Langues & routage                                                   */
/* ------------------------------------------------------------------ */

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "es", label: "Español", short: "ES" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
];

const DICTS: Record<Lang, Dict> = { en, fr, es, pt, id };

export function isLang(s: string): s is Lang {
  return s === "en" || s === "fr" || s === "es" || s === "pt" || s === "id";
}

export const TOOL_SLUGS: ToolSlug[] = [
  "tiktok-video-downloader",
  "tiktok-mp3",
  "tiktok-photo-downloader",
  "tiktok-story-downloader",
];

export const DEVICE_SLUGS: DeviceSlug[] = [
  "download-tiktok-iphone",
  "download-tiktok-android",
  "download-tiktok-pc",
];

export const STATIC_SLUGS: StaticSlug[] = ["about", "privacy", "terms", "contact"];

export function isPageSlug(s: string): s is PageSlug {
  return (
    (TOOL_SLUGS as string[]).includes(s) ||
    (DEVICE_SLUGS as string[]).includes(s) ||
    (STATIC_SLUGS as string[]).includes(s)
  );
}

/** Chemin de la page d'accueil pour une langue (anglais = racine). */
export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}`;
}

/** Chemin d'une page-outil pour une langue. */
export function pagePath(slug: PageSlug, lang: Lang): string {
  const base = lang === "en" ? "" : `/${lang}`;
  return `${base}/${slug}`;
}

/** Toutes les versions localisées d'une page (pour hreflang + canonical). */
export function alternatesFor(slug: PageSlug | "home"): { lang: Lang; path: string }[] {
  return LANGS.map(({ code }) => ({
    lang: code,
    path: slug === "home" ? homePath(code) : pagePath(slug, code),
  }));
}

/* ------------------------------------------------------------------ */
/* Contexte                                                            */
/* ------------------------------------------------------------------ */

interface I18nValue {
  lang: Lang;
  t: Dict;
}

const I18nContext = createContext<I18nValue>({ lang: "en", t: DICTS.en });

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ lang, t: DICTS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  return useContext(I18nContext);
}

export function useT(): Dict {
  return useContext(I18nContext).t;
}

export function useLang(): Lang {
  return useContext(I18nContext).lang;
}
