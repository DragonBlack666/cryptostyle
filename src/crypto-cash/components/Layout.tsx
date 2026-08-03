import { Link, useRouterState } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/crypto-cash/i18n";
import siteBg from "@/assets/site-bg.jpg";

type NavItem = { to: "/" | "/arkhitektura" | "/tarify" | "/rangi" | "/razvitie" | "/kak-nachat" | "/faq"; label: string };

function useNav(): ReadonlyArray<NavItem> {
  const t = useT();
  return [
    { to: "/",             label: t.nav.home },
    { to: "/arkhitektura", label: t.nav.architecture },
    { to: "/tarify",       label: t.nav.tiers },
    { to: "/rangi",        label: t.nav.ranks },
    { to: "/razvitie",     label: t.nav.development },
    { to: "/kak-nachat",   label: t.nav.how },
    { to: "/faq",          label: t.nav.faq },
  ];
}

export function SiteHeader() {
  const t = useT();
  const nav = useNav();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/crypto-cash" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F5D678] via-[#D4AF37] to-[#7a5f1a] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-shadow" />
          <span className="font-display text-xl tracking-wide">
            Crypto&nbsp;<span className="gold-text font-semibold">{t.brand.cash}</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-foreground"
            aria-label={t.nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm rounded-md hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  const nav = useNav();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F5D678] to-[#7a5f1a]" />
            <span className="font-display text-lg">Crypto&nbsp;<span className="gold-text">{t.brand.cash}</span></span>
          </div>
          <p className="text-muted-foreground max-w-xs">{t.footer.about}</p>
        </div>
        <div>
          <div className="font-medium mb-3 text-primary">{t.footer.sections}</div>
          <ul className="space-y-2 text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3 text-primary">{t.footer.basedOn}</div>
          <p className="text-muted-foreground">{t.footer.basedOnText}</p>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} Crypto Cash. {t.footer.copyright}
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteBg})` }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background/60"
      />

      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
