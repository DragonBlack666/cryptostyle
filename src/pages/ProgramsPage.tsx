import { Link } from "react-router-dom";
import { useI18n, type LangCode } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ProgramsCopy = {
  intro: string;
  features: string;
  minEntry: string;
  maxPotential: string;
  openPresentation: string;
};

const COPY: Record<LangCode, ProgramsCopy> = {
  ru: {
    intro: "Выберите программу и откройте её презентацию.",
    features: "Особенности",
    minEntry: "Минимальный вход",
    maxPotential: "Максимальный потенциал",
    openPresentation: "Открыть презентацию",
  },
  en: {
    intro: "Choose a program and open its presentation.",
    features: "Features",
    minEntry: "Minimum entry",
    maxPotential: "Maximum potential",
    openPresentation: "Open presentation",
  },
  de: { intro: "Wählen Sie ein Programm und öffnen Sie die Präsentation.", features: "Merkmale", minEntry: "Mindesteinstieg", maxPotential: "Maximales Potenzial", openPresentation: "Präsentation öffnen" },
  fr: { intro: "Choisissez un programme et ouvrez sa présentation.", features: "Caractéristiques", minEntry: "Entrée minimale", maxPotential: "Potentiel maximal", openPresentation: "Ouvrir la présentation" },
  it: { intro: "Scegli un programma e apri la sua presentazione.", features: "Caratteristiche", minEntry: "Ingresso minimo", maxPotential: "Potenziale massimo", openPresentation: "Apri la presentazione" },
  es: { intro: "Elige un programa y abre su presentación.", features: "Características", minEntry: "Entrada mínima", maxPotential: "Potencial máximo", openPresentation: "Abrir presentación" },
  pt: { intro: "Escolha um programa e abra a sua apresentação.", features: "Características", minEntry: "Entrada mínima", maxPotential: "Potencial máximo", openPresentation: "Abrir apresentação" },
  uk: { intro: "Оберіть програму та відкрийте її презентацію.", features: "Особливості", minEntry: "Мінімальний вхід", maxPotential: "Максимальний потенціал", openPresentation: "Відкрити презентацію" },
  kk: { intro: "Бағдарламаны таңдап, презентациясын ашыңыз.", features: "Ерекшеліктері", minEntry: "Ең төменгі кіру", maxPotential: "Ең жоғары әлеует", openPresentation: "Презентацияны ашу" },
  pl: { intro: "Wybierz program i otwórz jego prezentację.", features: "Cechy", minEntry: "Minimalne wejście", maxPotential: "Maksymalny potencjał", openPresentation: "Otwórz prezentację" },
  hu: { intro: "Válassz programot és nyisd meg a bemutatót.", features: "Jellemzők", minEntry: "Minimális belépő", maxPotential: "Maximális potenciál", openPresentation: "Bemutató megnyitása" },
};

type Program = {
  name: string;
  features: string[];
  minEntry: string;
  maxPotential: string;
  href: string;
};

const PROGRAMS: Program[] = [
  {
    name: "Neo Club",
    features: ["8 площадок", "Линейка", "Тетра", "Клоны", "Управление структурой"],
    minEntry: "от $155",
    maxPotential: "от $72 100",
    href: "/programs/neo",
  },
  {
    name: "Multi Matrix",
    features: ["6 площадок", "Реинвест", "Клоны", "Управление структурой"],
    minEntry: "15 TON",
    maxPotential: "от 3500 TON",
    href: "/programs/multi",
  },
];

export default function ProgramsPage() {
  const { t, lang } = useI18n();
  const c = COPY[lang];

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
            {PROGRAMS.map((p) => (
              <article
                key={p.name}
                className="group relative flex flex-col rounded-3xl border border-gold/30 bg-card/70 p-8 shadow-[var(--shadow-card)] backdrop-blur transition hover:-translate-y-1 hover:border-gold/70"
              >
                <div className="absolute -inset-px -z-10 rounded-3xl bg-[var(--gradient-gold)] opacity-0 blur-xl transition group-hover:opacity-20" />

                <h2 className="font-display text-3xl sm:text-4xl text-gradient-gold">
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
