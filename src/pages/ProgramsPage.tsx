import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";

export default function ProgramsPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold uppercase">{t.nav.programs}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            Скоро здесь появятся подробности о партнёрских программах Crypto Style.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-foreground/50 sm:px-6">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}
