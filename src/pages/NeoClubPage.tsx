import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { NEO_CLUB_DICTS, type NeoClubDict } from "@/lib/neo-club-i18n";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";
import whyBg from "@/assets/bg-why-light.jpg";
import tonBg from "@/assets/bg-ton-light.jpg";
import roadmapBg from "@/assets/bg-roadmap-light.jpg";
import {
  ArrowLeft, ArrowRight, User, Users, Infinity as InfinityIcon,
  Wallet, PiggyBank, Copy, UserCheck, TrendingUp, LayoutGrid,
  Repeat, Settings2, Sparkles, Trophy, ChevronDown,
} from "lucide-react";

/* ---------- Types & helpers ---------- */

type SeatKind = "wallet" | "transition" | "vip";
type Seat = {
  kind: SeatKind;
  lines: { icon?: "wallet" | "piggy" | "copy" | "curator" | "grow" | "repeat"; text: string }[];
};

type Platform = {
  id: string;
  title: string;
  cost: string;
  income: string;
  seats: Seat[];
  incomeNote: string[];
  transitionAmount?: string;
  transitionTo?: string;
  transitionText?: string;
};

const iconMap = {
  wallet: Wallet,
  piggy: PiggyBank,
  copy: Copy,
  curator: UserCheck,
  grow: TrendingUp,
  repeat: Repeat,
};

const FEATURE_ICONS = [LayoutGrid, Copy, Settings2, Sparkles];

/* ---------- Data builders (per language) ---------- */

function buildData(d: NeoClubDict) {
  const s = d.seat;

  const NEO_LINE_SEATS: Seat[] = [
    { kind: "wallet", lines: [{ icon: "wallet", text: d.neoLine.walletLine }] },
    { kind: "transition", lines: [{ icon: "repeat", text: d.neoLine.transitionLine }] },
    { kind: "wallet", lines: [{ icon: "wallet", text: d.neoLine.walletLine }] },
    { kind: "wallet", lines: [{ icon: "wallet", text: d.neoLine.walletLine }] },
  ];

  const NEO_START: Platform[] = [
    {
      id: "ns1",
      title: d.platform.titleNs(0),
      cost: "150$", income: "200$",
      seats: Array(4).fill(0).map(() => ({
        kind: "wallet",
        lines: [
          { icon: "wallet", text: s.wallet("50$") },
          { icon: "piggy", text: s.piggy("100$") },
        ],
      })),
      incomeNote: d.incomeNotes.ns1,
      transitionAmount: "400$",
      transitionTo: d.platform.titleNs(1),
      transitionText: d.transitions.ns1,
    },
    {
      id: "ns2",
      title: d.platform.titleNs(1),
      cost: "400$", income: "600$",
      seats: Array(4).fill(0).map(() => ({
        kind: "wallet",
        lines: [
          { icon: "wallet", text: s.wallet("150$") },
          { icon: "piggy", text: s.piggy("250$") },
        ],
      })),
      incomeNote: d.incomeNotes.ns2,
      transitionAmount: "1000$",
      transitionTo: d.platform.titleNs(2),
      transitionText: d.transitions.ns2,
    },
    {
      id: "ns3",
      title: d.platform.titleNs(2),
      cost: "1000$", income: "1500$",
      seats: [
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("350$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "piggy", text: s.piggy("500$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("400$") },
          { icon: "curator", text: s.curator("100$") },
          { icon: "piggy", text: s.piggy("500$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("350$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "piggy", text: s.piggy("500$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("400$") },
          { icon: "curator", text: s.curator("100$") },
          { icon: "piggy", text: s.piggy("500$") },
        ]},
      ],
      incomeNote: d.incomeNotes.ns3,
      transitionAmount: "2000$",
      transitionTo: d.platform.titleNs(3),
      transitionText: d.transitions.ns3,
    },
    {
      id: "ns4",
      title: d.platform.titleNs(3),
      cost: "2000$", income: "2800$",
      seats: [
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("750$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "grow", text: s.grow("100$") },
          { icon: "piggy", text: s.piggy("1000$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("650$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "curator", text: s.curator("100$") },
          { icon: "piggy", text: s.piggy("1100$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("750$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "grow", text: s.grow("100$") },
          { icon: "piggy", text: s.piggy("1000$") },
        ]},
        { kind: "wallet", lines: [
          { icon: "wallet", text: s.wallet("650$") },
          { icon: "copy", text: s.clonesToStart1(1) },
          { icon: "curator", text: s.curator("100$") },
          { icon: "piggy", text: s.piggy("1100$") },
        ]},
      ],
      incomeNote: d.incomeNotes.ns4,
      transitionAmount: "4200$",
      transitionTo: d.platform.titleNv(0),
      transitionText: d.transitions.ns4,
    },
  ];

  const NEO_VIP: Platform[] = [
    {
      id: "nv1",
      title: d.platform.titleNv(0),
      cost: "4 200$", income: "6 000$",
      seats: [
        { kind: "vip", lines: [
          { icon: "wallet", text: s.wallet("1500$") },
          { icon: "copy", text: s.clonesToStart1(2) },
          { icon: "grow", text: s.grow("200$") },
          { icon: "piggy", text: s.piggy("2200$") },
        ]},
        { kind: "vip", lines: [
          { icon: "wallet", text: s.wallet("1500$") },
          { icon: "copy", text: s.clonesToStart1(2) },
          { icon: "curator", text: s.curator("200$") },
          { icon: "piggy", text: s.piggy("2200$") },
        ]},
        { kind: "vip", lines: [
          { icon: "wallet", text: s.wallet("1500$") },
          { icon: "copy", text: s.clonesToStart1(2) },
          { icon: "grow", text: s.grow("200$") },
          { icon: "piggy", text: s.piggy("2200$") },
        ]},
        { kind: "vip", lines: [
          { icon: "wallet", text: s.wallet("1500$") },
          { icon: "copy", text: s.clonesToStart1(2) },
          { icon: "curator", text: s.curator("200$") },
          { icon: "piggy", text: s.piggy("2200$") },
        ]},
      ],
      incomeNote: d.incomeNotes.nv1,
      transitionAmount: "8 800$",
      transitionTo: d.platform.titleNv(1),
      transitionText: d.transitions.nv1,
    },
    {
      id: "nv2",
      title: d.platform.titleNv(1),
      cost: "8 800$", income: "16 000$",
      seats: Array(4).fill(0).map(() => ({
        kind: "vip",
        lines: [
          { icon: "wallet", text: s.wallet("4000$") },
          { icon: "copy", text: s.clonesToStart1(3) },
          { icon: "curator", text: s.curator("300$") },
          { icon: "grow", text: s.grow("300$") },
          { icon: "piggy", text: s.piggy("3750$") },
        ],
      })),
      incomeNote: d.incomeNotes.nv2,
      transitionAmount: "15 000$",
      transitionTo: d.platform.titleNv(2),
      transitionText: d.transitions.nv2,
    },
    {
      id: "nv3",
      title: d.platform.titleNv(2),
      cost: "15 000$", income: "45 000$",
      seats: Array(3).fill(0).map(() => ({
        kind: "vip",
        lines: [{ icon: "wallet", text: s.wallet("15 000$") }],
      })),
      incomeNote: d.incomeNotes.nv3,
    },
  ];

  return { NEO_LINE_SEATS, NEO_START, NEO_VIP };
}

/* ---------- UI blocks ---------- */

function SectionNav({ d }: { d: NeoClubDict }) {
  const items = [
    { id: "intro", label: d.nav.about },
    { id: "neo-line", label: d.nav.neoLine },
    { id: "neo-start", label: d.nav.neoStart },
    { id: "neo-vip", label: d.nav.neoVip },
    { id: "summary", label: d.nav.summary },
    { id: "features", label: d.nav.features },
    { id: "extras", label: d.nav.extras },
    { id: "cta", label: d.nav.cta },
  ];
  return (
    <div className="sticky top-16 z-30 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          to="/programs"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-gold/60 hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {d.nav.backAll}
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

function SeatCard({ seat }: { seat: Seat }) {
  const tone =
    seat.kind === "transition"
      ? "border-gold/50 bg-gradient-to-br from-gold/15 to-gold/5"
      : seat.kind === "vip"
      ? "border-gold/30 bg-gradient-to-br from-surface/70 to-background/60"
      : "border-border/60 bg-surface/50";
  return (
    <div className={`rounded-2xl border ${tone} p-4 sm:p-5 backdrop-blur transition hover:border-gold/60 sm:flex sm:flex-col sm:items-center sm:justify-center`}>
      <ul className="space-y-2 text-lg sm:text-xl font-medium text-foreground/90 sm:text-center">
        {seat.lines.map((ln, i) => {
          const Icon = ln.icon ? iconMap[ln.icon] : null;
          return (
            <li key={i} className="flex items-start gap-2.5 sm:items-center sm:justify-center">
              {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold sm:mt-0" />}
              <span className="leading-snug">{ln.text}</span>
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

function StructureDiagram({ seats, ownerAmount, youLabel }: { seats: Seat[]; ownerAmount: string; youLabel: string }) {
  const minCol = seats.length === 3 ? "min-w-[210px]" : "min-w-[180px]";
  return (
    <div className="mx-auto rounded-3xl border border-border/60 bg-background/40 p-2 sm:p-6 backdrop-blur md:max-w-[780px]">
      <ScaleToFit>
        <div className="min-w-[780px]">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
              <User className="h-6 w-6 text-gold" />
              <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">{youLabel} · {ownerAmount}</span>
            </div>
          </div>
          <div className="relative mx-auto my-3 h-6 w-[92%]">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold/50" />
            <div className="absolute left-0 right-0 top-3 h-px bg-gold/40" />
            <div className="absolute left-0 top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-0 top-3 h-3 w-px bg-gold/40" />
          </div>
          <div className="flex gap-3">
            {seats.map((s, i) => (
              <div key={`col-${i}`} className={`flex ${minCol} flex-1 flex-col`}>
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
                <SeatCard seat={s} />
              </div>
            ))}
          </div>
        </div>
      </ScaleToFit>
    </div>
  );
}

function PlatformBlock({
  p, index, total, tone, d,
}: { p: Platform; index: number; total: number; tone: "start" | "vip"; d: NeoClubDict }) {
  const accent = tone === "vip" ? "from-gold/25 via-gold/10 to-transparent" : "from-gold/15 via-gold/5 to-transparent";
  return (
    <article className={`rounded-3xl border border-border/60 bg-gradient-to-br ${accent} p-6 sm:p-8 backdrop-blur`}>
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{d.platform.label(index, total)}</p>
          <h3 className="mt-1 font-display text-3xl text-gradient-gold sm:text-4xl">{p.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-foreground/80">
            {d.platform.costLabel} · <b className="text-foreground">{p.cost}</b>
          </span>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-gold">
            {d.platform.incomeLabel} · <b>{p.income}</b>
          </span>
        </div>
      </header>

      <div className="mt-6">
        <StructureDiagram seats={p.seats} ownerAmount={p.cost} youLabel={d.neoLine.you} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-surface/50 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{d.platform.distributionEyebrow}</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/85">
            {p.incomeNote.map((n, i) => <li key={i} className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{n}</span></li>)}
          </ul>
        </div>
        {p.transitionText && (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{d.platform.transitionEyebrow(p.transitionAmount ?? "")}</p>
            <p className="mt-2 text-sm text-foreground/85">{p.transitionText}</p>
            {p.transitionTo && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <ArrowRight className="h-4 w-4" /> {p.transitionTo}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function NeoClubPage() {
  const { lang } = useI18n();
  const d = NEO_CLUB_DICTS[lang];

  useEffect(() => {
    document.title = d.meta.docTitle;
  }, [d.meta.docTitle]);

  const { NEO_LINE_SEATS, NEO_START, NEO_VIP } = useMemo(() => buildData(d), [d]);
  const [ruVideoSource, setRuVideoSource] = useState<"youtube" | "rutube">("youtube");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionNav d={d} />

      {/* HERO */}
      <section id="intro" className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold block uppercase">{d.hero.titleTop}</span>
            <span className="block text-foreground">{d.hero.titleBottom}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            {d.hero.subtitle}
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: d.hero.statPlatforms, v: "8" },
              { k: d.hero.statMinEntry, v: "150$" },
              { k: d.hero.statDirect, v: "72 100$" },
              { k: d.hero.statClones, v: "26" },
            ].map((st) => (
              <div key={st.k} className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur">
                <div className="font-display text-3xl text-gradient-gold">{st.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{st.k}</div>
              </div>
            ))}
          </div>

          {(lang === "ru" || lang === "hu") && (
            <div className="mx-auto mt-10 w-full max-w-4xl">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 shadow-2xl">
                <iframe
                  key={lang === "ru" ? ruVideoSource : "hu-youtube"}
                  src={
                    lang === "ru"
                      ? ruVideoSource === "youtube"
                        ? "https://www.youtube.com/embed/SRANvbu9Xlw"
                        : "https://rutube.ru/play/embed/983349183ee08721da112daacf0e4e17"
                      : "https://www.youtube.com/embed/m_HF-0tH1BU"
                  }
                  title={d.hero.videoTitle}
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
                  <span className="text-sm text-foreground/70">{d.hero.videoFallback}</span>
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

      {/* NEO LINE */}
      <section id="neo-line" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.neoLine.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.neoLine.title}</h2>
            <p className="mt-4 text-foreground/75">
              {d.neoLine.subtitleBefore}<b className="text-gold">150$</b>{d.neoLine.subtitleAfter}
            </p>
          </header>

          <div className="mx-auto mt-10 rounded-3xl border border-border/60 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent p-2 sm:p-6 backdrop-blur md:max-w-[780px]">
            <ScaleToFit>
              <div className="min-w-[780px]">
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
                    <User className="h-6 w-6 text-gold" />
                    <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">{d.neoLine.you} · 150$</span>
                  </div>
                </div>
                <div className="relative mx-auto my-3 h-6 w-[92%]">
                  <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold/50" />
                  <div className="absolute left-0 right-0 top-3 h-px bg-gold/40" />
                  <div className="absolute left-0 top-3 h-3 w-px bg-gold/40" />
                  <div className="absolute right-0 top-3 h-3 w-px bg-gold/40" />
                </div>
                <div className="flex gap-3">
                  {NEO_LINE_SEATS.map((s, i) => (
                    <div key={`nl-${i}`} className="flex min-w-[180px] flex-1 flex-col">
                      <div className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-surface/50 px-3 py-2.5 text-lg sm:text-xl">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                          {i + 1}
                        </span>
                        {i === 3 ? <InfinityIcon className="h-5 w-5 text-gold" /> : <Users className="h-5 w-5 text-gold/80" />}
                        <span className="whitespace-nowrap font-medium">150$</span>
                      </div>
                      <div className="my-1.5 flex justify-center"><ChevronDown className="h-4 w-4 text-gold/50" /></div>
                      <SeatCard seat={s} />
                    </div>
                  ))}
                </div>
              </div>
            </ScaleToFit>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{d.neoLine.incomeEyebrow}</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                {d.neoLine.incomeItems.map((t, i) => (
                  <li key={i} className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface/50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{d.neoLine.noteEyebrow}</p>
              <p className="mt-3 text-sm text-foreground/85">{d.neoLine.noteText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEO START */}
      <section id="neo-start" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.neoStart.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.neoStart.title}</h2>
            <p className="mt-4 text-foreground/75">{d.neoStart.subtitle}</p>
          </header>

          <div className="mt-12 space-y-8">
            {NEO_START.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={NEO_START.length} tone="start" d={d} />
            ))}
          </div>
        </div>
      </section>

      {/* NEO VIP */}
      <section id="neo-vip" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background/90" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.neoVip.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-gradient-gold">{d.neoVip.title}</h2>
            <p className="mt-4 text-foreground/75">{d.neoVip.subtitle}</p>
          </header>

          <div className="mt-12 space-y-8">
            {NEO_VIP.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={NEO_VIP.length} tone="vip" d={d} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={tonBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100 brightness-125 contrast-110 saturate-125" />
        <div className="absolute inset-0 -z-10 bg-section-glow" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.summary.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.summary.title}</h2>
            <p className="mt-4 text-foreground/75">{d.summary.subtitle}</p>
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
                  <td className="px-6 py-5 text-gold">{d.summary.totalLabel}</td>
                  <td className="px-6 py-5 text-gold">72 100$</td>
                  <td className="px-6 py-5 text-gold">26</td>
                  <td className="px-6 py-5 text-gold">2 000$</td>
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
                  <div><div className="text-xs text-foreground/60">{d.summary.cols.refShort}</div><div>{r.ref}</div></div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-4">
              <div className="font-semibold text-gold">{d.summary.totalLabel}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-gold">
                <div><div className="text-xs opacity-80">{d.summary.cols.income}</div><div>72 100$</div></div>
                <div><div className="text-xs opacity-80">{d.summary.cols.clones}</div><div>26</div></div>
                <div><div className="text-xs opacity-80">{d.summary.cols.refShort}</div><div>2 000$</div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-foreground/95" dangerouslySetInnerHTML={{ __html: d.summary.finalNoteHtml }} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={roadmapBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_65%] opacity-100 brightness-150 contrast-110 saturate-125" />
        <div className="absolute inset-0 -z-10 bg-section-glow" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.features.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{d.features.title}</h2>
            <p className="mt-4 text-foreground/75">{d.features.subtitle}</p>
          </header>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {d.features.items.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Sparkles;
              return (
                <div key={f.title} className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl">{f.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section id="extras" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
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
        <img src={heroBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
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
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold"
            >
              {d.cta.register} <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-8 py-4 font-semibold backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              <ArrowLeft className="h-5 w-5" /> {d.cta.backAll}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
