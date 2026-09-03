import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { MULTI_MATRIX_DICTS, type MMDict, type SeatTmpl } from "@/lib/multi-matrix-i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { heroBgImg as heroBg, whyBgImg as whyBg, tonBgImg as tonBg } from "@/lib/images";
import { useHeadMeta } from "@/lib/useHeadMeta";
import {
  ArrowLeft, ArrowRight, User, Users,
  Wallet, PiggyBank, Copy, UserCheck, TrendingUp,
  Repeat, Trophy, ChevronDown, RotateCcw,
} from "lucide-react";

/* ---------- Types ---------- */

type SeatKind = "wallet" | "transition" | "clone" | "reinvest";
type IconKey = "wallet" | "piggy" | "copy" | "curator" | "grow" | "repeat";
type SeatLineKind = "wallet" | "accum" | "curator" | "grow" | "clonesP1" | "clonesP2" | "reinvest";
type SeatLineData = { icon: IconKey; kind: SeatLineKind; amount?: string; n?: number };
type Seat = { kind: SeatKind; lines: SeatLineData[] };

type PlatformData = {
  id: string;
  cost: string;
  seats: Seat[];
  transitionAmount?: string;
};

const iconMap = {
  wallet: Wallet, piggy: PiggyBank, copy: Copy,
  curator: UserCheck, grow: TrendingUp, repeat: Repeat,
};

/* ---------- Data (numbers only; strings come from dict) ---------- */

const PLATFORMS_DATA: PlatformData[] = [
  {
    id: "mm1", cost: "15 TON",
    seats: [
      { kind: "wallet",     lines: [{ icon: "wallet", kind: "wallet", amount: "15 TON" }] },
      { kind: "transition", lines: [{ icon: "piggy",  kind: "accum",  amount: "15 TON" }] },
      { kind: "transition", lines: [{ icon: "piggy",  kind: "accum",  amount: "15 TON" }] },
      { kind: "transition", lines: [{ icon: "piggy",  kind: "accum",  amount: "15 TON" }] },
    ],
    transitionAmount: "45 TON",
  },
  {
    id: "mm2", cost: "45 TON",
    seats: [
      { kind: "wallet", lines: [{ icon: "wallet", kind: "wallet", amount: "10 TON" }] },
      { kind: "clone",  lines: [{ icon: "copy",   kind: "clonesP1", n: 2 }] },
      { kind: "wallet", lines: [{ icon: "wallet", kind: "wallet", amount: "10 TON" }] },
      { kind: "clone",  lines: [{ icon: "copy",   kind: "clonesP1", n: 2 }] },
    ],
    transitionAmount: "100 TON",
  },
  {
    id: "mm3", cost: "100 TON",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "25 TON" },
        { icon: "curator", kind: "curator", amount: "10 TON" },
      ]},
      { kind: "clone", lines: [{ icon: "copy", kind: "clonesP1", n: 3 }] },
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "25 TON" },
        { icon: "curator", kind: "curator", amount: "10 TON" },
      ]},
      { kind: "clone", lines: [{ icon: "copy", kind: "clonesP1", n: 3 }] },
    ],
    transitionAmount: "240 TON",
  },
  {
    id: "mm4", cost: "240 TON",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "100 TON" },
        { icon: "curator", kind: "curator", amount: "20 TON" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", kind: "clonesP1", n: 6 },
        { icon: "grow", kind: "grow",    amount: "20 TON" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "100 TON" },
        { icon: "curator", kind: "curator", amount: "20 TON" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", kind: "clonesP1", n: 6 },
        { icon: "grow", kind: "grow",    amount: "20 TON" },
      ]},
    ],
    transitionAmount: "500 TON",
  },
  {
    id: "mm5", cost: "500 TON",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "200 TON" },
        { icon: "curator", kind: "curator", amount: "40 TON" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", kind: "clonesP1", n: 8 },
        { icon: "grow", kind: "grow",    amount: "40 TON" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",  amount: "200 TON" },
        { icon: "curator", kind: "curator", amount: "40 TON" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", kind: "clonesP1", n: 8 },
        { icon: "grow", kind: "grow",    amount: "40 TON" },
      ]},
    ],
    transitionAmount: "1 200 TON",
  },
  {
    id: "mm6", cost: "1 200 TON",
    seats: [
      { kind: "reinvest", lines: [{ icon: "repeat", kind: "reinvest" }] },
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",   amount: "920 TON" },
        { icon: "copy",    kind: "clonesP2", n: 4 },
        { icon: "curator", kind: "curator",  amount: "50 TON" },
        { icon: "grow",    kind: "grow",     amount: "50 TON" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",   amount: "920 TON" },
        { icon: "copy",    kind: "clonesP2", n: 4 },
        { icon: "curator", kind: "curator",  amount: "50 TON" },
        { icon: "grow",    kind: "grow",     amount: "50 TON" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  kind: "wallet",   amount: "920 TON" },
        { icon: "copy",    kind: "clonesP2", n: 4 },
        { icon: "curator", kind: "curator",  amount: "50 TON" },
        { icon: "grow",    kind: "grow",     amount: "50 TON" },
      ]},
    ],
  },
];

function renderSeatLine(seat: SeatLineData, t: SeatTmpl): string {
  switch (seat.kind) {
    case "wallet":   return t.wallet(seat.amount!);
    case "accum":    return t.accum(seat.amount!);
    case "curator":  return t.curator(seat.amount!);
    case "grow":     return t.grow(seat.amount!);
    case "clonesP1": return t.clonesP1(seat.n!);
    case "clonesP2": return t.clonesP2(seat.n!);
    case "reinvest": return t.reinvest;
  }
}

/* ---------- Shared UI blocks ---------- */

function SectionNav({ d }: { d: MMDict }) {
  const items = [
    { id: "intro",     label: d.nav.intro },
    { id: "income",    label: d.nav.income },
    { id: "platforms", label: d.nav.platforms },
    { id: "summary",   label: d.nav.summary },
    { id: "extras",    label: d.nav.extras },
    { id: "cta",       label: d.nav.cta },
  ];
  return (
    <div className="sticky top-16 z-30 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          to="/programs"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-gold/60 hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {d.back}
        </Link>
        <div className="mx-2 h-4 w-px bg-border/60" />
        <nav className="flex items-center gap-1.5">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-foreground/70 transition hover:bg-surface/70 hover:text-gold"
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function SeatCard({ seat, seatT }: { seat: Seat; seatT: SeatTmpl }) {
  const tone =
    seat.kind === "reinvest"
      ? "border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10"
      : seat.kind === "transition"
      ? "border-gold/50 bg-gradient-to-br from-gold/15 to-gold/5"
      : seat.kind === "clone"
      ? "border-accent/40 bg-gradient-to-br from-accent/15 to-transparent"
      : "border-border/60 bg-surface/50";
  return (
    <div className={`rounded-2xl border ${tone} p-4 sm:p-5 backdrop-blur transition hover:border-gold/60 sm:flex sm:flex-col sm:items-center sm:justify-center`}>
      <ul className="space-y-2 text-lg sm:text-xl font-medium text-foreground/90 sm:text-center">
        {seat.lines.map((ln, i) => {
          const Icon = ln.icon ? iconMap[ln.icon] : null;
          return (
            <li key={i} className="flex items-start gap-2.5 sm:items-center sm:justify-center">
              {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold sm:mt-0" />}
              <span className="leading-snug">{renderSeatLine(ln, seatT)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ScaleToFit({ children, width = 780 }: { children: ReactNode; width?: number }) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(400);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const update = () => {
      const h = el.scrollHeight;
      if (h) setHeight(h);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, width]);

  return (
    <>
      <div
        aria-hidden
        style={{ position: "absolute", left: -99999, top: 0, width, visibility: "hidden", pointerEvents: "none" }}
      >
        <div ref={measureRef} style={{ width }}>{children}</div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        preserveAspectRatio="xMidYMin meet"
        style={{ display: "block", height: "auto", overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x={0} y={0} width={width} height={height}>
          <div
            // @ts-expect-error xmlns is required for foreignObject HTML in some renderers
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ width }}
          >
            {children}
          </div>
        </foreignObject>
      </svg>
    </>
  );
}

function StructureDiagram({ seats, ownerAmount, youLabel, seatT }: { seats: Seat[]; ownerAmount: string; youLabel: string; seatT: SeatTmpl }) {
  return (
    <div className="mx-auto rounded-3xl border border-border/60 bg-background/40 p-2 sm:p-6 backdrop-blur md:max-w-[820px]">
      <ScaleToFit width={820}>
        <div className="min-w-[820px]">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
              <User className="h-6 w-6 text-gold" />
              <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">{youLabel} · {ownerAmount}</span>
            </div>
          </div>

          <div className="relative mx-auto my-3 h-6 w-[52%]">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold/50" />
            <div className="absolute left-0 right-0 top-3 h-px bg-gold/40" />
            <div className="absolute left-0 top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-0 top-3 h-3 w-px bg-gold/40" />
          </div>

          <div className="mx-auto flex w-[70%] justify-between gap-6">
            {[0, 1].map((i) => (
              <div key={`fl-${i}`} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/50 bg-surface/60 px-4 py-3 text-lg sm:text-xl">
                <Users className="h-5 w-5 text-gold/80" />
                <span className="whitespace-nowrap font-medium">{ownerAmount}</span>
              </div>
            ))}
          </div>

          <div className="relative mx-auto my-3 h-6 w-[92%]">
            <div className="absolute left-[17.5%] top-0 h-3 w-px bg-gold/40" />
            <div className="absolute left-[17.5%] right-[17.5%] top-3 h-px bg-gold/30" />
            <div className="absolute left-[8.75%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute left-[26.25%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-[26.25%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-[8.75%] top-3 h-3 w-px bg-gold/40" />
          </div>

          <div className="flex gap-3">
            {seats.map((s, i) => (
              <div key={`sl-${i}`} className="flex min-w-[180px] flex-1 flex-col">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-surface/50 px-3 py-2.5 text-lg sm:text-xl text-foreground/85">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <Users className="h-5 w-5 text-gold/80" />
                  <span className="whitespace-nowrap font-medium">{ownerAmount}</span>
                </div>
                <div className="my-1.5 flex justify-center">
                  <ChevronDown className="h-4 w-4 text-gold/50" />
                </div>
                <SeatCard seat={s} seatT={seatT} />
              </div>
            ))}
          </div>
        </div>
      </ScaleToFit>
    </div>
  );
}

function PlatformBlock({ p, index, total, d }: { p: PlatformData; index: number; total: number; d: MMDict }) {
  const accent = index >= 4 ? "from-gold/25 via-gold/10 to-transparent" : "from-gold/15 via-gold/5 to-transparent";
  const ps = d.platformStrings[index];
  return (
    <article className={`rounded-3xl border border-border/60 bg-gradient-to-br ${accent} p-6 sm:p-8 backdrop-blur`}>
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{d.platforms.of(index + 1, total)}</p>
          <h3 className="mt-1 font-display text-3xl text-gradient-gold sm:text-4xl">{ps.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-foreground/80">
            {d.platforms.costLabel} · <b className="text-foreground">{p.cost}</b>
          </span>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-gold">
            {d.platforms.incomeLabel} · <b>{ps.incomeSummary}</b>
          </span>
        </div>
      </header>

      <div className="mt-6">
        <StructureDiagram seats={p.seats} ownerAmount={p.cost} youLabel={d.platforms.you} seatT={d.seat} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-surface/50 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{d.platforms.distribution}</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/85">
            {ps.incomeNote.map((n, i) => (
              <li key={i} className="flex gap-2">
                <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
        {ps.transitionText ? (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{d.platforms.transitionLabel} · {p.transitionAmount}</p>
            <p className="mt-2 text-sm text-foreground/85">{ps.transitionText}</p>
            {ps.transitionTo && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <ArrowRight className="h-4 w-4" /> {ps.transitionTo}
              </p>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold inline-flex items-center gap-2">
              <RotateCcw className="h-4 w-4" /> {d.platforms.reinvestBadge}
            </p>
            <p className="mt-2 text-sm text-foreground/85">{d.platforms.reinvestText}</p>
          </div>
        )}
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function MultiMatrixPage() {
  const { lang } = useI18n();
  const d = MULTI_MATRIX_DICTS[lang];

  useHeadMeta({
    title: `MULTI Matrix — ${d.hero.title2} | Crypto Style`,
    description: d.hero.subtitle,
  });
  const [ruVideoSource, setRuVideoSource] = useState<"youtube" | "rutube">("youtube");

  useEffect(() => {
    document.title = d.docTitle;
  }, [d.docTitle]);

  const incomeIcons = [Wallet, Copy, UserCheck, TrendingUp];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionNav d={d} />

      {/* HERO */}
      <section id="intro" className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <img {...heroBg} alt="" aria-hidden fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold block uppercase">MULTI Matrix</span>
            <span className="block text-foreground">{d.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            {d.hero.subtitle}
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: d.hero.stats.platforms,    v: "6" },
              { k: d.hero.stats.minEntry,     v: "15 TON" },
              { k: d.hero.stats.directIncome, v: "3 445 TON" },
              { k: d.hero.stats.newClones,    v: "50" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur">
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.k}</div>
              </div>
            ))}
          </div>

          {(lang === "ru" || lang === "hu" || lang === "uk" || lang === "it" || lang === "en" || lang === "pl" || lang === "de") && (
            <div className="mx-auto mt-10 w-full max-w-4xl">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 shadow-2xl">
                <iframe
                  key={lang === "ru" ? ruVideoSource : lang}
                  src={
                    lang === "ru"
                      ? ruVideoSource === "youtube"
                        ? "https://www.youtube.com/embed/1GL6OPbhzMM"
                        : "https://rutube.ru/play/embed/715bf220094cab02640be725b5d7879b"
                      : lang === "de"
                      ? "https://www.youtube.com/embed/sNGC6zHWEUo"
                      : lang === "hu"
                      ? "https://www.youtube.com/embed/2z6KAO_KWls"
                      : lang === "uk"
                      ? "https://www.youtube.com/embed/ZfMOPsrqDEk"
                      : lang === "it"
                      ? "https://www.youtube.com/embed/K5cPHiKuhpA"
                      : lang === "pl"
                      ? "https://www.youtube.com/embed/0-_e1V5ioAc"
                      : "https://www.youtube.com/embed/w7upMxQdE4I"
                  }
                  title={lang === "en" ? "MULTI Matrix Presentation" : lang === "de" ? "MULTI Matrix Videopräsentation" : lang === "it" ? "Presentazione di MULTI Matrix" : lang === "pl" ? "Prezentacja MULTI Matrix" : (d.hero.videoTitle || "MULTI Matrix video presentation")}
                  allow="accelerometer; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              {lang === "ru" && (
                <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <span className="text-sm text-foreground/70">{d.hero.videoHint}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setRuVideoSource("youtube")}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                        ruVideoSource === "youtube"
                          ? "bg-gold text-background"
                          : "border border-gold/30 text-foreground/80 hover:bg-gold/10 hover:text-gold"
                      }`}
                    >
                      YouTube
                    </button>
                    <button
                      type="button"
                      onClick={() => setRuVideoSource("rutube")}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                        ruVideoSource === "rutube"
                          ? "bg-gold text-background"
                          : "border border-gold/30 text-foreground/80 hover:bg-gold/10 hover:text-gold"
                      }`}
                    >
                      RUTUBE
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4 INCOME TYPES */}
      <section id="income" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.income.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.income.title}</h2>
            <p className="mt-4 text-foreground/75">{d.income.intro}</p>
          </header>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {d.income.types.map((it, i) => {
              const Icon = incomeIcons[i];
              return (
                <div key={it.title} className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{it.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{it.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.platforms.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.platforms.title}</h2>
            <p className="mt-4 text-foreground/75">{d.platforms.intro}</p>
          </header>

          <div className="mt-12 space-y-8">
            {PLATFORMS_DATA.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={PLATFORMS_DATA.length} d={d} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...tonBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100 brightness-125 contrast-110 saturate-125" />
        <div className="absolute inset-0 -z-10 bg-section-glow" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.summary.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.summary.title}</h2>
            <p className="mt-4 text-foreground/75">{d.summary.intro}</p>
          </header>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl border border-border/60 bg-surface/40 backdrop-blur md:block">
            <table className="w-full text-left">
              <thead className="bg-gold/10 text-gold">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">{d.summary.cols.platform}</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">{d.summary.cols.income}</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">{d.summary.cols.clones}</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">{d.summary.cols.ref}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {d.summary.rows.map((r, i) => (
                  <tr key={r.platform} className="transition hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium">{r.platform}</td>
                    <td className="px-6 py-4 text-gold">{d.summary.incomeValues[i]}</td>
                    <td className="px-6 py-4 text-foreground/80">{r.clones}</td>
                    <td className="px-6 py-4 text-foreground/80">{r.ref}</td>
                  </tr>
                ))}
                <tr className="bg-gold/10 font-semibold">
                  <td className="px-6 py-5 text-gold">{d.summary.total}</td>
                  <td className="px-6 py-5 text-gold">3 445 TON</td>
                  <td className="px-6 py-5 text-gold">50</td>
                  <td className="px-6 py-5 text-gold">290 TON</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            {d.summary.rows.map((r, i) => (
              <div key={r.platform} className="rounded-2xl border border-border/60 bg-surface/50 p-4">
                <div className="font-semibold text-gold">{r.platform}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  <div><div className="text-xs text-foreground/60">{d.summary.cols.income}</div><div className="text-gold">{d.summary.incomeValues[i]}</div></div>
                  <div><div className="text-xs text-foreground/60">{d.summary.cols.clones}</div><div>{r.clones}</div></div>
                  <div><div className="text-xs text-foreground/60">{d.summary.refShort}</div><div>{r.ref}</div></div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-4">
              <div className="font-semibold text-gold">{d.summary.total}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-gold">
                <div><div className="text-xs opacity-80">{d.summary.cols.income}</div><div>3 445 TON</div></div>
                <div><div className="text-xs opacity-80">{d.summary.cols.clones}</div><div>50</div></div>
                <div><div className="text-xs opacity-80">{d.summary.refShort}</div><div>290 TON</div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-foreground/95" dangerouslySetInnerHTML={{ __html: d.summary.finalNoteHtml }} />
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section id="extras" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.extras.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.extras.title}</h2>
          </header>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.extras.items.map((e) => (
              <div key={e.title} className="rounded-3xl border border-border/60 bg-gradient-to-br from-surface/70 to-background/50 p-6 backdrop-blur">
                <h3 className="font-display text-xl text-gold">{e.title}</h3>
                <p className="mt-3 text-sm text-foreground/80">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative isolate overflow-hidden py-24 sm:py-32">
        <img {...heroBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.cta.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold uppercase">{d.cta.title}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">{d.cta.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cryptostylematrix.github.io/frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold transition hover:opacity-90"
            >
              {d.cta.registerBtn} <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-8 py-4 font-semibold backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              <ArrowLeft className="h-5 w-5" /> {d.cta.backBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
