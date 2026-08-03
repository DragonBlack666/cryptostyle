import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { useHeadMeta } from "@/lib/useHeadMeta";
import { PROGRAMS_DICTS } from "@/lib/programs-i18n";
import { SiteHeader } from "@/components/SiteHeader";
import whyBg from "@/assets/bg-why-light.jpg";
import { ArrowRight, CheckCircle2, Wallet } from "lucide-react";

export default function ProgramsPage() {
  const { t, lang } = useI18n();
  const c = PROGRAMS_DICTS[lang];

  useHeadMeta({ title: c.documentTitle, description: c.intro });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <img
          src={whyBg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110"
        />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/50 to-background/70" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient-gold uppercase">{t.nav.programs}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-foreground/75 sm:text-xl">
              {c.intro}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {c.programs.map((p) => (
              <article
                key={p.name}
                className="group relative flex flex-col rounded-3xl border border-gold/30 bg-card/70 p-8 shadow-[var(--shadow-card)] backdrop-blur transition hover:-translate-y-1 hover:border-gold/70"
              >
                <div className="absolute -inset-px -z-10 rounded-3xl bg-[var(--gradient-gold)] opacity-0 blur-xl transition group-hover:opacity-20" />

                <h2 className="flex items-center gap-3 font-display text-3xl sm:text-4xl text-gradient-gold">
                  {p.icon === "wallet" && <Wallet className="h-8 w-8 shrink-0 text-gold" />}
                  {p.name}
                </h2>


                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/80">
                    {c.features}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-surface/60 p-4">
                    <p className="text-xs uppercase tracking-widest text-foreground/60">
                      {c.minEntry}
                    </p>
                    <p className="mt-2 font-display text-2xl text-foreground">{p.minEntry}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface/60 p-4">
                    <p className="text-xs uppercase tracking-widest text-foreground/60">
                      {c.maxPotential}
                    </p>
                    <p className="mt-2 font-display text-2xl text-gradient-gold">
                      {p.maxPotential}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex-1" />

                <Link
                  to={p.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl btn-gold px-6 py-3 font-semibold"
                >
                  {c.openPresentation}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
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
