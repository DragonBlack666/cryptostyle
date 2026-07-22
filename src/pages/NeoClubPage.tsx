import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";
import whyBg from "@/assets/bg-why-light.jpg";
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

/* ---------- Data (from Neo_Club.pptx) ---------- */

const NEO_LINE_SEATS: Seat[] = [
  { kind: "wallet", lines: [{ icon: "wallet", text: "150$ на кошелёк" }] },
  { kind: "transition", lines: [{ icon: "repeat", text: "150$ — переход в Neo Start" }] },
  { kind: "wallet", lines: [{ icon: "wallet", text: "150$ на кошелёк" }] },
  { kind: "wallet", lines: [{ icon: "wallet", text: "150$ на кошелёк" }] },
];

const NEO_START: Platform[] = [
  {
    id: "ns1",
    title: "Neo Start · Площадка 1",
    cost: "150$",
    income: "200$",
    seats: Array(4).fill(0).map(() => ({
      kind: "wallet",
      lines: [
        { icon: "wallet", text: "50$ на кошелёк" },
        { icon: "piggy", text: "100$ накопление" },
      ],
    })),
    incomeNote: ["За каждое закрытое место вы получаете 50$ на кошелёк."],
    transitionAmount: "400$",
    transitionTo: "Neo Start · Площадка 2",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 400$, которые автоматически направляются на открытие вашей второй бизнес-площадки.",
  },
  {
    id: "ns2",
    title: "Neo Start · Площадка 2",
    cost: "400$",
    income: "600$",
    seats: Array(4).fill(0).map(() => ({
      kind: "wallet",
      lines: [
        { icon: "wallet", text: "150$ на кошелёк" },
        { icon: "piggy", text: "250$ накопление" },
      ],
    })),
    incomeNote: ["За каждое закрытое место вы получаете 150$ на кошелёк."],
    transitionAmount: "1000$",
    transitionTo: "Neo Start · Площадка 3",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 1000$, которые автоматически направляются на открытие вашей третьей бизнес-площадки.",
  },
  {
    id: "ns3",
    title: "Neo Start · Площадка 3",
    cost: "1000$",
    income: "1500$",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet", text: "350$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "piggy", text: "500$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "400$ на кошелёк" },
        { icon: "curator", text: "100$ куратору" },
        { icon: "piggy", text: "500$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "350$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "piggy", text: "500$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "400$ на кошелёк" },
        { icon: "curator", text: "100$ куратору" },
        { icon: "piggy", text: "500$ накопление" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 350$ на кошелёк и 1 клона в первую площадку Neo Start.",
      "Закрытие 2-го и 4-го места приносит 400$ на кошелёк и 100$ вашему куратору.",
    ],
    transitionAmount: "2000$",
    transitionTo: "Neo Start · Площадка 4",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 2000$, которые автоматически направляются на открытие вашей четвёртой бизнес-площадки.",
  },
  {
    id: "ns4",
    title: "Neo Start · Площадка 4",
    cost: "2000$",
    income: "2800$",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet", text: "750$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "grow", text: "100$ на развитие" },
        { icon: "piggy", text: "1000$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "650$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "curator", text: "100$ куратору" },
        { icon: "piggy", text: "1100$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "750$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "grow", text: "100$ на развитие" },
        { icon: "piggy", text: "1000$ накопление" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet", text: "650$ на кошелёк" },
        { icon: "copy", text: "1 клон в Neo Start · Площадка 1" },
        { icon: "curator", text: "100$ куратору" },
        { icon: "piggy", text: "1100$ накопление" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 750$ на кошелёк, 1 клона в первую площадку Neo Start и 100$ на развитие системы.",
      "Закрытие 2-го и 4-го места приносит 650$ на кошелёк и 100$ вашему куратору.",
    ],
    transitionAmount: "4200$",
    transitionTo: "Neo VIP · Площадка 1",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 4200$, которые автоматически направляются на открытие бизнес-площадки Neo VIP.",
  },
];

const NEO_VIP: Platform[] = [
  {
    id: "nv1",
    title: "Neo VIP · Площадка 1",
    cost: "4 200$",
    income: "6 000$",
    seats: [
      { kind: "vip", lines: [
        { icon: "wallet", text: "1500$ на кошелёк" },
        { icon: "copy", text: "2 клона в Neo Start · Площадка 1" },
        { icon: "grow", text: "200$ на развитие" },
        { icon: "piggy", text: "2200$ накопление" },
      ]},
      { kind: "vip", lines: [
        { icon: "wallet", text: "1500$ на кошелёк" },
        { icon: "copy", text: "2 клона в Neo Start · Площадка 1" },
        { icon: "curator", text: "200$ куратору" },
        { icon: "piggy", text: "2200$ накопление" },
      ]},
      { kind: "vip", lines: [
        { icon: "wallet", text: "1500$ на кошелёк" },
        { icon: "copy", text: "2 клона в Neo Start · Площадка 1" },
        { icon: "grow", text: "200$ на развитие" },
        { icon: "piggy", text: "2200$ накопление" },
      ]},
      { kind: "vip", lines: [
        { icon: "wallet", text: "1500$ на кошелёк" },
        { icon: "copy", text: "2 клона в Neo Start · Площадка 1" },
        { icon: "curator", text: "200$ куратору" },
        { icon: "piggy", text: "2200$ накопление" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 1500$ на кошелёк, 2 клона в первую площадку Neo Start и 200$ на развитие системы.",
      "Закрытие 2-го и 4-го места приносит 1500$ на кошелёк, 2 клона в первую площадку Neo Start и 200$ вашему куратору.",
    ],
    transitionAmount: "8 800$",
    transitionTo: "Neo VIP · Площадка 2",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 8 800$, которые автоматически направляются на открытие второй бизнес-площадки Neo VIP.",
  },
  {
    id: "nv2",
    title: "Neo VIP · Площадка 2",
    cost: "8 800$",
    income: "16 000$",
    seats: Array(4).fill(0).map(() => ({
      kind: "vip",
      lines: [
        { icon: "wallet", text: "4000$ на кошелёк" },
        { icon: "copy", text: "3 клона в Neo Start · Площадка 1" },
        { icon: "curator", text: "300$ куратору" },
        { icon: "grow", text: "300$ на развитие" },
        { icon: "piggy", text: "3750$ накопление" },
      ],
    })),
    incomeNote: [
      "За каждое закрытое место вы получаете 4000$ на кошелёк, 3 клона в первую площадку Neo Start; 300$ идёт на развитие системы и 300$ вашему куратору.",
    ],
    transitionAmount: "15 000$",
    transitionTo: "Neo VIP · Площадка 3",
    transitionText:
      "Полное закрытие мест второй линии суммарно приносит 15 000$, которые автоматически направляются на открытие третьей бизнес-площадки Neo VIP.",
  },
  {
    id: "nv3",
    title: "Neo VIP · Площадка 3",
    cost: "15 000$",
    income: "45 000$",
    seats: Array(3).fill(0).map(() => ({
      kind: "vip",
      lines: [{ icon: "wallet", text: "15 000$ на кошелёк" }],
    })),
    incomeNote: [
      "Это последняя площадка маркетинга. За каждое закрытое место вы получаете 15 000$ на кошелёк.",
    ],
  },
];

const SUMMARY = [
  { platform: "Neo Start · 1", income: "200$", clones: "—", ref: "—" },
  { platform: "Neo Start · 2", income: "600$", clones: "—", ref: "—" },
  { platform: "Neo Start · 3", income: "1 500$", clones: "2", ref: "200$" },
  { platform: "Neo Start · 4", income: "2 800$", clones: "4", ref: "200$" },
  { platform: "Neo VIP · 1", income: "6 000$", clones: "8", ref: "400$" },
  { platform: "Neo VIP · 2", income: "16 000$", clones: "12", ref: "1 200$" },
  { platform: "Neo VIP · 3", income: "45 000$", clones: "—", ref: "—" },
];

const FEATURES = [
  { icon: LayoutGrid, title: "Матричная модель", text: "Основа системы, обеспечивающая чёткую структуру и прогнозируемый рост." },
  { icon: Copy, title: "Автоматическая дубликация", text: "«Клоны» расширяют вашу структуру и генерируют дополнительный доход без новых вложений." },
  { icon: Settings2, title: "Управление структурой", text: "Инструменты для эффективного контроля и оптимизации вашей команды и площадок." },
  { icon: Sparkles, title: "Линейка + Тетра", text: "Сочетание линейного и классического матричного маркетинга в одной системе." },
];

const EXTRAS = [
  { title: "Управление структурой", text: "Встроенная функция позволяет стратегически направлять потоки партнёров и клонов для закрытия наиболее приоритетных позиций на площадках." },
  { title: "Дополнительные бизнес-места", text: "Возможность приобретать дополнительные бизнес-места на любой площадке по вашему усмотрению." },
  { title: "Старт с любой площадки", text: "Вы можете начать работу с любой площадки маркетинга, которая соответствует вашим целям." },
  { title: "Функция «Следующее место»", text: "Автоматизирует выбор оптимальной позиции для быстрого роста структуры." },
  { title: "Взнос на развитие", text: "Единоразовый взнос 5$ на развитие системы при активации." },
];

/* ---------- UI blocks ---------- */

function SectionNav() {
  const items = [
    { id: "intro", label: "О программе" },
    { id: "neo-line", label: "Neo Line" },
    { id: "neo-start", label: "Neo Start" },
    { id: "neo-vip", label: "Neo VIP" },
    { id: "summary", label: "Сводка" },
    { id: "features", label: "Особенности" },
    { id: "extras", label: "Управление" },
    { id: "cta", label: "Старт" },
  ];
  return (
    <div className="sticky top-16 z-30 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          to="/programs"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-gold/60 hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Все партнёрские программы
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

/**
 * Renders children inside an <svg><foreignObject> with a fixed viewBox.
 * Behaves like a static image: the whole schema is scaled proportionally
 * to the container width via SVG viewBox, so text stays crisp at any size
 * and the layout geometry is preserved 1:1 from the desktop reference.
 */
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
      {/* Off-screen measurement copy (kept in the DOM so fonts/resize updates are observed). */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -99999,
          top: 0,
          width,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <div ref={measureRef} style={{ width }}>
          {children}
        </div>
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

function StructureDiagram({ seats, ownerAmount }: { seats: Seat[]; ownerAmount: string }) {
  const minCol = seats.length === 3 ? "min-w-[210px]" : "min-w-[180px]";
  return (
    <div className="mx-auto rounded-3xl border border-border/60 bg-background/40 p-2 sm:p-6 backdrop-blur md:max-w-[780px]">
      <ScaleToFit>
        <div className="min-w-[780px]">
          {/* Owner */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
              <User className="h-6 w-6 text-gold" />
              <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">Вы · {ownerAmount}</span>
            </div>
          </div>

          {/* Fan-out connector */}
          <div className="relative mx-auto my-3 h-6 w-[92%]">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold/50" />
            <div className="absolute left-0 right-0 top-3 h-px bg-gold/40" />
            <div className="absolute left-0 top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-0 top-3 h-3 w-px bg-gold/40" />
          </div>

          {/* Columns: partner → arrow → distribution */}
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

function PlatformBlock({ p, index, total, tone }: { p: Platform; index: number; total: number; tone: "start" | "vip" }) {
  const accent = tone === "vip" ? "from-gold/25 via-gold/10 to-transparent" : "from-gold/15 via-gold/5 to-transparent";
  return (
    <article className={`rounded-3xl border border-border/60 bg-gradient-to-br ${accent} p-6 sm:p-8 backdrop-blur`}>
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Площадка {index + 1} из {total}</p>
          <h3 className="mt-1 font-display text-3xl text-gradient-gold sm:text-4xl">{p.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-foreground/80">
            Стоимость места · <b className="text-foreground">{p.cost}</b>
          </span>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-gold">
            Доход · <b>{p.income}</b>
          </span>
        </div>
      </header>

      <div className="mt-6">
        <StructureDiagram seats={p.seats} ownerAmount={p.cost} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-surface/50 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Распределение</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/85">
            {p.incomeNote.map((n, i) => <li key={i} className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{n}</span></li>)}
          </ul>
        </div>
        {p.transitionText && (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Переход · {p.transitionAmount}</p>
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
  useEffect(() => {
    document.title = "Neo Club — Партнёрская программа · Crypto Style";
  }, []);

  const { lang } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <SectionNav />

      {/* HERO */}
      <section id="intro" className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Партнёрская программа</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold block uppercase">Neo Club</span>
            <span className="block text-foreground">Бизнес-система для предпринимателей</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            Neo Club — система, разработанная для масштабирования вашего дела и увеличения дохода.
            Рассмотрим ключевые особенности, преимущества и механизмы работы этой модели.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Площадок", v: "8" },
              { k: "Мин. вход", v: "150$" },
              { k: "Прямой доход", v: "72 100$" },
              { k: "Новых клонов", v: "26" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur">
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.k}</div>
              </div>
            ))}
          </div>

          {lang === "ru" && (
            <div className="mx-auto mt-10 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-surface/50 shadow-2xl">
              <iframe
                src="https://rutube.ru/play/embed/983349183ee08721da112daacf0e4e17/"
                title="Видео презентация Neo Club"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold">NEO LINE</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Neo Line — линейный маркетинг</h2>
            <p className="mt-4 text-foreground/75">
              Начало маркетинга Neo Club — это Neo Line: одна площадка с линейным маркетингом, без ограничений в первой линии.
              Стоимость бизнес-места составляет <b className="text-gold">150$</b>.
            </p>
          </header>

          <div className="mx-auto mt-10 rounded-3xl border border-border/60 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent p-2 sm:p-6 backdrop-blur md:max-w-[780px]">
            <ScaleToFit>
              <div className="min-w-[780px]">
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
                    <User className="h-6 w-6 text-gold" />
                    <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">Вы · 150$</span>
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
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Доход · от 150$</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                <li className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" />За первое закрытое место вы получаете 150$ на кошелёк.</li>
                <li className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" />Закрыв второе место, вы автоматически попадаете во вторую часть программы — Neo Start за 150$.</li>
                <li className="flex gap-2"><Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" />За каждые последующие закрытые места вы получаете по 150$ на кошелёк.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface/50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Примечание</p>
              <p className="mt-3 text-sm text-foreground/85">
                Если у вас уже есть место в первой площадке Neo Start, закрыв второе место, вы получаете деньги на кошелёк.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEO START */}
      <section id="neo-start" className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">NEO START</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Neo Start — 4 бизнес-площадки</h2>
            <p className="mt-4 text-foreground/75">
              Вторая часть программы Neo Club. Каждая площадка имеет собственную стоимость, доход, накопление и клонов.
              Полное закрытие второй линии автоматически открывает следующую площадку.
            </p>
          </header>

          <div className="mt-12 space-y-8">
            {NEO_START.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={NEO_START.length} tone="start" />
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold">NEO VIP</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-gradient-gold">Neo VIP — 3 бизнес-площадки</h2>
            <p className="mt-4 text-foreground/75">
              Финальные площадки маркетинга с максимальным доходом. Переход между ними полностью автоматизирован.
            </p>
          </header>

          <div className="mt-12 space-y-8">
            {NEO_VIP.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={NEO_VIP.length} tone="vip" />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Общая сводка</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Доходы с одного бизнес-места</h2>
            <p className="mt-4 text-foreground/75">
              Потенциал заработка и развития структуры с одного основного бизнес-места при прохождении всех площадок.
            </p>
          </header>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl border border-border/60 bg-surface/40 backdrop-blur md:block">
            <table className="w-full text-left">
              <thead className="bg-gold/10 text-gold">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">Площадка</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">Доход</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">Клоны</th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-widest">Реферальные</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {SUMMARY.map((r) => (
                  <tr key={r.platform} className="transition hover:bg-surface/60">
                    <td className="px-6 py-4 font-medium">{r.platform}</td>
                    <td className="px-6 py-4 text-gold">{r.income}</td>
                    <td className="px-6 py-4 text-foreground/80">{r.clones}</td>
                    <td className="px-6 py-4 text-foreground/80">{r.ref}</td>
                  </tr>
                ))}
                <tr className="bg-gold/10 font-semibold">
                  <td className="px-6 py-5 text-gold">Итого</td>
                  <td className="px-6 py-5 text-gold">72 100$</td>
                  <td className="px-6 py-5 text-gold">26</td>
                  <td className="px-6 py-5 text-gold">2 000$</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            {SUMMARY.map((r) => (
              <div key={r.platform} className="rounded-2xl border border-border/60 bg-surface/50 p-4">
                <div className="font-semibold text-gold">{r.platform}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  <div><div className="text-xs text-foreground/60">Доход</div><div className="text-gold">{r.income}</div></div>
                  <div><div className="text-xs text-foreground/60">Клоны</div><div>{r.clones}</div></div>
                  <div><div className="text-xs text-foreground/60">Реф.</div><div>{r.ref}</div></div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-4">
              <div className="font-semibold text-gold">Итого</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-gold">
                <div><div className="text-xs opacity-80">Доход</div><div>72 100$</div></div>
                <div><div className="text-xs opacity-80">Клоны</div><div>26</div></div>
                <div><div className="text-xs opacity-80">Реф.</div><div>2 000$</div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-6 text-center">
            <p className="text-foreground/90">
              <b className="text-gold">72 100$</b> прямого дохода, <b className="text-gold">26</b> новых «клонов»
              для усиления структуры и <b className="text-gold">2 000$</b> реферального вознаграждения —
              это ваш результат с одного основного бизнес-места, не считая клонов.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Ключевые преимущества</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Особенности маркетинга Neo Club</h2>
            <p className="mt-4 text-foreground/75">
              Neo Club предлагает уникальный подход к ведению бизнеса. Ключевые особенности, которые отличают нашу систему.
            </p>
          </header>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section id="extras" className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Управление и гибкость</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Управление структурой и доп. возможности</h2>
          </header>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EXTRAS.map((e) => (
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
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Присоединяйтесь</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold uppercase">Начните с Neo Club</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            Восемь площадок, автоматические переходы, клоны и прогнозируемый рост — всё в одной бизнес-системе.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              disabled
              title="Ссылка регистрации появится позже"
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold opacity-70"
            >
              Регистрация в Neo Club <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-8 py-4 font-semibold backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              <ArrowLeft className="h-5 w-5" /> Все партнёрские программы
            </Link>
          </div>
          <p className="mt-6 text-xs text-foreground/50">Ссылка регистрации будет добавлена позже.</p>
        </div>
      </section>
    </div>
  );
}
