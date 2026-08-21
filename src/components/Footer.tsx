import { Link, useLocation } from "react-router-dom";
import {
  useT,
  useLang,
  LANGS,
  TOOL_SLUGS,
  DEVICE_SLUGS,
  homePath,
  pagePath,
  isPageSlug,
} from "../lib/i18n";
import type { Lang, PageSlug } from "../lib/i18n";
import { LogoMark } from "./Icons";

export default function Footer() {
  const t = useT();
  const lang = useLang();
  const location = useLocation();

  const parts = location.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1];
  const pageKey: PageSlug | "home" =
    parts.length > 0 && isPageSlug(last) ? last : "home";
  const langPath = (code: Lang) =>
    pageKey === "home" ? homePath(code) : pagePath(pageKey, code);

  const col = "text-sm text-white/65 transition-colors hover:text-white";
  const head = "font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white/40";

  return (
    <footer className="relative mt-24 overflow-hidden text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #06123c 0%, #0a2a8f 55%, #0f3dff 130%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(42rem 24rem at 85% 0%, rgb(56 189 248 / 0.28), transparent 65%), radial-gradient(36rem 22rem at 0% 100%, rgb(15 61 255 / 0.5), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          {/* Marque */}
          <div>
            <Link to={homePath(lang)} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white ring-1 ring-white/20">
                <LogoMark size={22} />
              </span>
              <span className="leading-none">
                <span className="font-display block text-xl font-extrabold tracking-tight">SFY</span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Save For You
                </span>
              </span>
            </Link>
            <p className="font-display mt-4 max-w-xs text-lg font-semibold text-white/90">
              {t.footer.tagline}
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/45">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Colonnes */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className={head}>{t.footer.colSfy}</p>
              <ul className="mt-3 space-y-2.5">
                <li><Link className={col} to={homePath(lang)}>{t.footer.home}</Link></li>
                <li><Link className={col} to={pagePath("about", lang)}>{t.footer.about}</Link></li>
                <li><Link className={col} to={pagePath("contact", lang)}>{t.footer.contact}</Link></li>
              </ul>
            </div>
            <div>
              <p className={head}>{t.footer.colTools}</p>
              <ul className="mt-3 space-y-2.5">
                {TOOL_SLUGS.map((s) => (
                  <li key={s}>
                    <Link className={col} to={pagePath(s, lang)}>{t.tools[s].name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={head}>{t.footer.colDevices}</p>
              <ul className="mt-3 space-y-2.5">
                {DEVICE_SLUGS.map((s) => (
                  <li key={s}>
                    <Link className={col} to={pagePath(s, lang)}>{t.devices[s].name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={head}>{t.footer.colLegal}</p>
              <ul className="mt-3 space-y-2.5">
                <li><Link className={col} to={pagePath("privacy", lang)}>{t.footer.privacy}</Link></li>
                <li><Link className={col} to={pagePath("terms", lang)}>{t.footer.terms}</Link></li>
                <li><Link className={col} to={pagePath("contact", lang)}>{t.footer.contact}</Link></li>
              </ul>
              <p className={`${head} mt-6`}>{t.footer.colLangs}</p>
              <ul className="mt-3 space-y-2.5">
                {LANGS.map(({ code, label }) => (
                  <li key={code}>
                    <Link
                      className={`${col} ${code === lang ? "font-semibold text-white" : ""}`}
                      to={langPath(code)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© 2026 SFY — Save For You. {t.footer.rights}</p>
          <p className="font-display font-semibold tracking-wide text-white/55">
            SFY · {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
