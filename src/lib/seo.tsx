import { useEffect } from "react";
import { LANGS } from "./i18n";
import type { Lang } from "./i18n";
import type { FaqItem } from "./i18n";

/* Domaine public — à remplacer par le domaine réel de SFY. */
export const SITE_URL = "https://sfy.app";
export const SITE_NAME = "SFY — Save For You";

interface SeoProps {
  title: string;
  description: string;
  path: string; // chemin relatif, ex. "/fr/tiktok-mp3"
  lang: Lang;
  alternates: { lang: Lang; path: string }[];
  jsonLd?: object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]${extra ? `[${Object.keys(extra)[0]}="${Object.values(extra)[0]}"]` : ""}`
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  el.href = href;
}

export function SeoHead({ title, description, path, lang, alternates, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:locale", lang);
    upsertMeta("property", "og:url", `${SITE_URL}${path}`);

    // Canonical
    upsertLink("canonical", `${SITE_URL}${path}`);

    // hreflang (on repart de zéro à chaque page)
    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((n) => n.remove());
    alternates.forEach(({ lang: l, path: p }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", l);
      link.href = `${SITE_URL}${p}`;
      document.head.appendChild(link);
    });
    const xd = document.createElement("link");
    xd.rel = "alternate";
    xd.setAttribute("hreflang", "x-default");
    xd.href = `${SITE_URL}${alternates.find((a) => a.lang === "en")?.path ?? path}`;
    document.head.appendChild(xd);

    // JSON-LD
    document.head.querySelectorAll("script[data-sfy-jsonld]").forEach((n) => n.remove());
    (jsonLd ?? []).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-sfy-jsonld", "1");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [title, description, path, lang, alternates, jsonLd]);

  return null;
}

/* ---------- Données structurées prêtes à l'emploi ---------- */

export function webAppJsonLd(canonical: string, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    alternateName: "SFY",
    url: canonical,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web, iOS, Android, Windows, macOS",
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function langAlternates(lang: Lang) {
  return LANGS.filter((l) => l.code !== lang).map((l) => ({
    code: l.code,
    label: l.label,
  }));
}
