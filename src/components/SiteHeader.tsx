import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Crypto Style logo" className="h-10 w-auto" />
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 p-2 text-foreground/80 transition hover:border-gold/60 hover:text-gold"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-foreground/75 md:flex">
          <a href={anchor("why")} className="transition hover:text-gold">{t.nav.features}</a>
          <Link to="/programs" className="transition hover:text-gold">{t.nav.programs}</Link>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <SocialLinks />
          <LanguageSwitcher />
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
          </nav>
        </div>
      )}
    </header>
  );
}
