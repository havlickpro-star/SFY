import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import {
  I18nProvider,
  isLang,
  isPageSlug,
  STATIC_SLUGS,
} from "./lib/i18n";
import type { Lang, PageSlug, StaticSlug } from "./lib/i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ToolPage from "./pages/ToolPage";
import { StaticPage, NotFoundPage } from "./pages/StaticPages";

/* Remonte en haut à chaque navigation (ou scrolle vers l'ancre). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function PageView({ slug }: { slug: PageSlug }) {
  if ((STATIC_SLUGS as string[]).includes(slug)) {
    return <StaticPage slug={slug as StaticSlug} />;
  }
  return <ToolPage slug={slug} />;
}

/* /:segment → langue (accueil) ou slug de page en anglais */
function SegmentOne() {
  const { segment } = useParams();
  if (segment && isLang(segment)) return <HomePage />;
  if (segment && isPageSlug(segment)) return <PageView slug={segment} />;
  return <NotFoundPage />;
}

/* /:lang/:slug */
function SegmentTwo() {
  const { lang, slug } = useParams();
  if (lang && isLang(lang) && slug && isPageSlug(slug)) {
    return <PageView slug={slug} />;
  }
  return <NotFoundPage />;
}

function Shell() {
  const location = useLocation();
  const first = location.pathname.split("/").filter(Boolean)[0];
  const lang: Lang = first && isLang(first) ? first : "en";

  return (
    <I18nProvider lang={lang}>
      <ScrollManager />
      {/* Signature : liseré dégradé en haut de page */}
      <div className="grad-bg pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]" aria-hidden />
      <Navbar />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:segment" element={<SegmentOne />} />
          <Route path="/:lang/:slug" element={<SegmentTwo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </I18nProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
