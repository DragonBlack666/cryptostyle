import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useI18n, type LangCode } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const MENU_LABEL: Record<LangCode, { open: string; close: string }> = {
  ru: { open: "Открыть меню", close: "Закрыть меню" },
  en: { open: "Open menu", close: "Close menu" },
  de: { open: "Menü öffnen", close: "Menü schließen" },
  fr: { open: "Ouvrir le menu", close: "Fermer le menu" },
  it: { open: "Apri menu", close: "Chiudi menu" },
  es: { open: "Abrir menú", close: "Cerrar menú" },
  pt: { open: "Abrir menu", close: "Fechar menu" },
  uk: { open: "Відкрити меню", close: "Закрити меню" },
  kk: { open: "Мәзірді ашу", close: "Мәзірді жабу" },
  pl: { open: "Otwórz menu", close: "Zamknij menu" },
  hu: { open: "Menü megnyitása", close: "Menü bezárása" },
};

export function SiteHeader() {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = MENU_LABEL[lang];

  const closeMenu = () => setMenuOpen(false);


  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left: logo */}
        <div className="flex min-w-0 items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Crypto Style logo" className="h-9 w-auto sm:h-10" />
          </Link>
        </div>

        {/* Center: desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-foreground/75 md:flex">
          <a href={anchor("why")} className="transition hover:text-gold">{t.nav.features}</a>
          <Link to="/programs" className="transition hover:text-gold">{t.nav.programs}</Link>
          <Link to="/crypto-cash" className="transition hover:text-gold">Crypto Cash</Link>
        </nav>

        {/* Right: desktop socials + language; mobile language + burger */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <SocialLinks />
          <LanguageSwitcher />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 p-2 text-foreground/80 transition hover:border-gold/60 hover:text-gold"
            aria-label={menuOpen ? menuLabel.close : menuLabel.open}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            <a
              href={anchor("why")}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-surface/70 hover:text-gold"
            >
              {t.nav.features}
            </a>
            <Link
              to="/programs"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-surface/70 hover:text-gold"
            >
              {t.nav.programs}
            </Link>
            <Link
              to="/crypto-cash"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-surface/70 hover:text-gold"
            >
              Crypto Cash
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
