import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Crypto Style logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-foreground/75 md:flex">
          <a href={anchor("why")} className="transition hover:text-gold">{t.nav.features}</a>
          <a href={anchor("nft")} className="transition hover:text-gold">{t.nav.nft}</a>
          <a href={anchor("ton")} className="transition hover:text-gold">{t.nav.ton}</a>
          <a href={anchor("roadmap")} className="transition hover:text-gold">{t.nav.roadmap}</a>
          <Link to="/programs" className="transition hover:text-gold">{t.nav.programs}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
