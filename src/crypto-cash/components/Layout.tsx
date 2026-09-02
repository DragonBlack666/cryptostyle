import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useT } from "@/crypto-cash/i18n";
import { ccSiteBg } from "@/lib/images";

type NavItem = { to: string; label: string };

function useNav(): ReadonlyArray<NavItem> {
  const t = useT();
  return [
    { to: "/crypto-cash", label: t.nav.home },
    { to: "/crypto-cash/arkhitektura", label: t.nav.architecture },
    { to: "/crypto-cash/tarify", label: t.nav.tiers },
    { to: "/crypto-cash/rangi", label: t.nav.ranks },
    { to: "/crypto-cash/razvitie", label: t.nav.development },
    { to: "/crypto-cash/kak-nachat", label: t.nav.how },
    { to: "/crypto-cash/faq", label: t.nav.faq },
  ];
}

function PresentationNav() {
  const t = useT();
  const nav = useNav();
  const { pathname } = useLocation();
  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2 sm:px-6">
        <Link
          to="/programs"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-gold/60 hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {t.nav.backToPrograms}
        </Link>
        <div className="mx-1 h-4 w-px bg-border/60" />
        {nav.map((n) => {
          const active = pathname === n.to;
          return (
            <Link
              key={n.to}
              to={n.to}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const t = useT();
  const nav = useNav();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-sm md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#F5D678] to-[#7a5f1a]" />
            <span className="font-display text-lg">Crypto&nbsp;<span className="gold-text">{t.brand.cash}</span></span>
          </div>
          <p className="max-w-xs text-muted-foreground">{t.footer.about}</p>
        </div>
        <div>
          <div className="mb-3 font-medium text-primary">{t.footer.sections}</div>
          <ul className="space-y-2 text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium text-primary">{t.footer.basedOn}</div>
          <p className="text-muted-foreground">{t.footer.basedOnText}</p>
        </div>
      </div>
      <div className="pb-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Crypto Cash. {t.footer.copyright}
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        aria-hidden
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ccSiteBg.src})` }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background/60"
      />

      <SiteHeader />
      <div className="h-16" />
      <PresentationNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
