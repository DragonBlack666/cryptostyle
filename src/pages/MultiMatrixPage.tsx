import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";
import whyBg from "@/assets/bg-why-light.jpg";
import tonBg from "@/assets/bg-ton-light.jpg";
import {
  ArrowLeft, ArrowRight, User, Users,
  Wallet, PiggyBank, Copy, UserCheck, TrendingUp,
  Repeat, Trophy, ChevronDown, RotateCcw,
} from "lucide-react";

/* ---------- Types ---------- */

type SeatKind = "wallet" | "transition" | "clone" | "reinvest";
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

/* ---------- Data (from Маркетинг_Multi_Matrix.pptx) ---------- */

const PLATFORMS: Platform[] = [
  {
    id: "mm1",
    title: "Площадка 1 · Начало пути",
    cost: "15 TON",
    income: "15 TON",
    seats: [
      { kind: "wallet",     lines: [{ icon: "wallet", text: "15 TON на кошелёк" }] },
      { kind: "transition", lines: [{ icon: "piggy",  text: "15 TON накопление" }] },
      { kind: "transition", lines: [{ icon: "piggy",  text: "15 TON накопление" }] },
      { kind: "transition", lines: [{ icon: "piggy",  text: "15 TON накопление" }] },
    ],
    incomeNote: [
      "Закрытие одного из четырёх нижних мест приносит вам 15 TON напрямую на кошелёк.",
      "Полное закрытие оставшихся трёх мест второй линии суммарно приносит 45 TON.",
    ],
    transitionAmount: "45 TON",
    transitionTo: "Площадка 2",
    transitionText:
      "45 TON автоматически направляются на открытие вашей второй бизнес-площадки.",
  },
  {
    id: "mm2",
    title: "Площадка 2 · Расширение возможностей",
    cost: "45 TON",
    income: "20 TON + 4 клона",
    seats: [
      { kind: "wallet", lines: [{ icon: "wallet", text: "10 TON на кошелёк" }] },
      { kind: "clone",  lines: [{ icon: "copy",   text: "2 клона по 15 TON в 1-ю площадку" }] },
      { kind: "wallet", lines: [{ icon: "wallet", text: "10 TON на кошелёк" }] },
      { kind: "clone",  lines: [{ icon: "copy",   text: "2 клона по 15 TON в 1-ю площадку" }] },
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит вам по 10 TON сразу на кошелёк.",
      "Закрытие 2-го и 4-го места создаёт 2 клона по 15 TON, которые встают в первую матрицу.",
    ],
    transitionAmount: "100 TON",
    transitionTo: "Площадка 3",
    transitionText:
      "Полное закрытие второй линии аккумулирует 100 TON, которые автоматически направляются на активацию третьей бизнес-площадки.",
  },
  {
    id: "mm3",
    title: "Площадка 3 · Ускорение роста",
    cost: "100 TON",
    income: "50 TON + 6 клонов",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "25 TON на кошелёк" },
        { icon: "curator", text: "10 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "3 клона по 15 TON в 1-ю площадку" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "25 TON на кошелёк" },
        { icon: "curator", text: "10 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "3 клона по 15 TON в 1-ю площадку" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 25 TON на кошелёк и 10 TON вашему куратору.",
      "Закрытие 2-го и 4-го места создаёт 3 клона по 15 TON для первой матрицы.",
    ],
    transitionAmount: "240 TON",
    transitionTo: "Площадка 4",
    transitionText:
      "При полном закрытии мест второй линии, 240 TON автоматически накапливаются для открытия четвёртой бизнес-площадки.",
  },
  {
    id: "mm4",
    title: "Площадка 4 · Масштабирование дохода",
    cost: "240 TON",
    income: "200 TON + 12 клонов",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "100 TON на кошелёк" },
        { icon: "curator", text: "20 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "6 клонов по 15 TON в 1-ю площадку" },
        { icon: "grow", text: "20 TON на развитие" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "100 TON на кошелёк" },
        { icon: "curator", text: "20 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "6 клонов по 15 TON в 1-ю площадку" },
        { icon: "grow", text: "20 TON на развитие" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 100 TON на кошелёк и 20 TON вашему куратору.",
      "Закрытие 2-го и 4-го места генерирует 6 клонов по 15 TON для первой матрицы, а 20 TON направляются на развитие системы.",
    ],
    transitionAmount: "500 TON",
    transitionTo: "Площадка 5",
    transitionText:
      "При полном закрытии мест второй линии, 500 TON автоматически накапливаются для открытия пятой бизнес-площадки.",
  },
  {
    id: "mm5",
    title: "Площадка 5 · Прорыв к большому доходу",
    cost: "500 TON",
    income: "400 TON + 16 клонов",
    seats: [
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "200 TON на кошелёк" },
        { icon: "curator", text: "40 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "8 клонов по 15 TON в 1-ю площадку" },
        { icon: "grow", text: "40 TON на развитие" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "200 TON на кошелёк" },
        { icon: "curator", text: "40 TON куратору" },
      ]},
      { kind: "clone", lines: [
        { icon: "copy", text: "8 клонов по 15 TON в 1-ю площадку" },
        { icon: "grow", text: "40 TON на развитие" },
      ]},
    ],
    incomeNote: [
      "Закрытие 1-го и 3-го места приносит 200 TON на кошелёк и 40 TON вашему куратору.",
      "Закрытие 2-го и 4-го места создаёт 8 клонов по 15 TON для первой матрицы, а 40 TON идёт на развитие системы.",
    ],
    transitionAmount: "1 200 TON",
    transitionTo: "Площадка 6",
    transitionText:
      "При полном закрытии мест второй линии, 1 200 TON автоматически накапливаются для открытия финальной шестой бизнес-площадки.",
  },
  {
    id: "mm6",
    title: "Площадка 6 · Финальная цель и Реинвест",
    cost: "1 200 TON",
    income: "2 760 TON + 12 клонов",
    seats: [
      { kind: "reinvest", lines: [
        { icon: "repeat", text: "РЕИНВЕСТ 1 200 TON — новый клон в этой же площадке" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "920 TON на кошелёк" },
        { icon: "copy",    text: "4 клона по 45 TON во 2-ю площадку" },
        { icon: "curator", text: "50 TON куратору" },
        { icon: "grow",    text: "50 TON на развитие" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "920 TON на кошелёк" },
        { icon: "copy",    text: "4 клона по 45 TON во 2-ю площадку" },
        { icon: "curator", text: "50 TON куратору" },
        { icon: "grow",    text: "50 TON на развитие" },
      ]},
      { kind: "wallet", lines: [
        { icon: "wallet",  text: "920 TON на кошелёк" },
        { icon: "copy",    text: "4 клона по 45 TON во 2-ю площадку" },
        { icon: "curator", text: "50 TON куратору" },
        { icon: "grow",    text: "50 TON на развитие" },
      ]},
    ],
    incomeNote: [
      "Закрытие первого места запускает РЕИНВЕСТ 1 200 TON — новый логин (клон) автоматически занимает свободное место в этой же площадке.",
      "За каждое из трёх оставшихся мест: 920 TON на кошелёк, 4 клона по 45 TON во 2-ю площадку, 50 TON куратору и 50 TON на развитие.",
    ],
  },
];

const SUMMARY = [
  { platform: "Площадка 1",   income: "15 TON",     clones: "—",         ref: "—" },
  { platform: "Площадка 2",   income: "20 TON",     clones: "4",         ref: "—" },
  { platform: "Площадка 3",   income: "50 TON",     clones: "6",         ref: "20 TON" },
  { platform: "Площадка 4",   income: "200 TON",    clones: "12",        ref: "40 TON" },
  { platform: "Площадка 5",   income: "400 TON",    clones: "16",        ref: "80 TON" },
  { platform: "Площадка 6",   income: "2 760 TON",  clones: "12 → 2 пл.", ref: "150 TON" },
];

const INCOME_TYPES = [
  { icon: Wallet,     title: "Основной доход по маркетингу",
    text: "При закрытии определённых мест в ваших бизнес-площадках вы получаете денежные суммы согласно маркетинг-плану." },
  { icon: Copy,       title: "Дубликация дохода",
    text: "Система создаёт дополнительные бизнес-места (клоны) со своими площадками — они тоже закрываются и приносят доход по маркетингу так же, как основное место." },
  { icon: UserCheck,  title: "Реферальный бонус",
    text: "Дополнительные денежные вознаграждения за закрытие площадок ваших приглашённых партнёров." },
  { icon: TrendingUp, title: "Дубликация реферального бонуса",
    text: "У ваших партнёров также создаются дополнительные бизнес-места. Маркетинг предусматривает реферальный бонус и за клонов ваших партнёров." },
];


const EXTRAS = [
  { title: "Гибкие возможности расширения",
    text: "Возможность приобретения дополнительных бизнес-мест по вашему усмотрению на любой площадке." },
  { title: "Функция «Следующее место»",
    text: "Автоматически подбирает оптимальную позицию для быстрого роста вашей структуры." },
  { title: "Реинвест на 6-й площадке",
    text: "Постоянный цикличный доход: при закрытии первого места автоматически создаётся новый клон в этой же площадке." },
  { title: "Управление клонами",
    text: "Направляйте клонов к нужным партнёрам и ускоряйте закрытие приоритетных бизнес-площадок." },
  { title: "Автоматические переходы",
    text: "Накопления с каждой площадки автоматически открывают следующую — без ручных действий." },
];

/* ---------- Shared UI blocks (mirroring NeoClubPage) ---------- */

function SectionNav() {
  const items = [
    { id: "intro",     label: "О программе" },
    { id: "income",    label: "4 вида дохода" },
    { id: "platforms", label: "Площадки" },
    { id: "summary",   label: "Сводка" },
    { id: "extras",    label: "Управление" },
    { id: "cta",       label: "Старт" },
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

/**
 * MULTI matrix diagram: 1 owner (top) → 2 partners (first line) → 4 seats (second line).
 * Topology preserved from source PPTX (7-местная бинарная неделящаяся матрица).
 */
function StructureDiagram({ seats, ownerAmount }: { seats: Seat[]; ownerAmount: string }) {
  return (
    <div className="mx-auto rounded-3xl border border-border/60 bg-background/40 p-2 sm:p-6 backdrop-blur md:max-w-[820px]">
      <ScaleToFit width={820}>
        <div className="min-w-[820px]">
          {/* Owner */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 rounded-full border border-gold/60 bg-gradient-to-br from-gold/25 to-gold/10 px-6 py-3">
              <User className="h-6 w-6 text-gold" />
              <span className="whitespace-nowrap text-lg sm:text-xl font-semibold text-gold">Вы · {ownerAmount}</span>
            </div>
          </div>

          {/* Fan-out to first line (2 seats) */}
          <div className="relative mx-auto my-3 h-6 w-[52%]">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold/50" />
            <div className="absolute left-0 right-0 top-3 h-px bg-gold/40" />
            <div className="absolute left-0 top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-0 top-3 h-3 w-px bg-gold/40" />
          </div>

          {/* First line: 2 partners */}
          <div className="mx-auto flex w-[70%] justify-between gap-6">
            {[0, 1].map((i) => (
              <div key={`fl-${i}`} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/50 bg-surface/60 px-4 py-3 text-lg sm:text-xl">
                <Users className="h-5 w-5 text-gold/80" />
                <span className="whitespace-nowrap font-medium">{ownerAmount}</span>
              </div>
            ))}
          </div>

          {/* Fan-out to second line: each partner has 2 children */}
          <div className="relative mx-auto my-3 h-6 w-[92%]">
            <div className="absolute left-[17.5%] top-0 h-3 w-px bg-gold/40" />
            <div className="absolute left-[17.5%] right-[17.5%] top-3 h-px bg-gold/30" />
            <div className="absolute left-[8.75%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute left-[26.25%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-[26.25%] top-3 h-3 w-px bg-gold/40" />
            <div className="absolute right-[8.75%] top-3 h-3 w-px bg-gold/40" />
          </div>

          {/* Second line: 4 seats */}
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
                <SeatCard seat={s} />
              </div>
            ))}
          </div>
        </div>
      </ScaleToFit>
    </div>
  );
}

function PlatformBlock({ p, index, total }: { p: Platform; index: number; total: number }) {
  const accent = index >= 4 ? "from-gold/25 via-gold/10 to-transparent" : "from-gold/15 via-gold/5 to-transparent";
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
            {p.incomeNote.map((n, i) => (
              <li key={i} className="flex gap-2">
                <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
        {p.transitionText ? (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Переход · {p.transitionAmount}</p>
            <p className="mt-2 text-sm text-foreground/85">{p.transitionText}</p>
            {p.transitionTo && (
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <ArrowRight className="h-4 w-4" /> {p.transitionTo}
              </p>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold inline-flex items-center gap-2">
              <RotateCcw className="h-4 w-4" /> Реинвест · 1 200 TON
            </p>
            <p className="mt-2 text-sm text-foreground/85">
              Финальная площадка обеспечивает постоянный цикличный доход: закрытие первого места автоматически создаёт нового клона в этой же площадке.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function MultiMatrixPage() {
  useEffect(() => {
    document.title = "MULTI Matrix — Партнёрская программа · Crypto Style";
  }, []);

  const { lang } = useI18n();
  const [ruVideoSource, setRuVideoSource] = useState<"youtube" | "rutube">("youtube");

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
            <span className="text-gradient-gold block uppercase">MULTI Matrix</span>
            <span className="block text-foreground">Инновационная бизнес-система для предпринимателей</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            MULTI Matrix — бизнес-система, разработанная для масштабирования вашего дела и увеличения дохода.
            Уникальная матричная модель с автоматической дубликацией бизнес-мест и управлением структурой.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Площадок",       v: "6" },
              { k: "Мин. вход",      v: "15 TON" },
              { k: "Прямой доход",   v: "3 445 TON" },
              { k: "Новых клонов",   v: "50" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur">
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.k}</div>
              </div>
            ))}
          </div>

          {lang === "ru" && (
            <div className="mx-auto mt-10 w-full max-w-4xl">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 shadow-2xl">
                <iframe
                  key={ruVideoSource}
                  src={
                    ruVideoSource === "youtube"
                      ? "https://www.youtube.com/embed/1GL6OPbhzMM"
                      : "https://rutube.ru/play/embed/715bf220094cab02640be725b5d7879b"
                  }
                  title="Видео презентация MULTI Matrix"
                  allow="accelerometer; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <span className="text-sm text-foreground/70">Видео не открывается? Выберите другой источник:</span>
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
            </div>
          )}
        </div>
      </section>

      {/* 4 INCOME TYPES */}
      <section id="income" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Четыре вида дохода</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Многоканальная система прибыли</h2>
            <p className="mt-4 text-foreground/75">
              MULTI Matrix предлагает четыре канала получения дохода — для максимальной финансовой отдачи от одного основного бизнес-места.
            </p>
          </header>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {INCOME_TYPES.map(({ icon: Icon, title, text }) => (
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

      {/* PLATFORMS */}
      <section id="platforms" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img src={whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">6 бизнес-площадок</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Семиместная бинарная матрица</h2>
            <p className="mt-4 text-foreground/75">
              В основе системы — семиместная бинарная неделящаяся матрица. Верхушка — вы, первая линия (2 места) — партнёры, вторая линия (4 места) — источник дохода.
              Полное закрытие второй линии автоматически открывает следующую площадку.
            </p>
          </header>

          <div className="mt-12 space-y-8">
            {PLATFORMS.map((p, i) => (
              <PlatformBlock key={p.id} p={p} index={i} total={PLATFORMS.length} />
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Общая сводка</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Доходы с одного бизнес-места</h2>
            <p className="mt-4 text-foreground/75">
              Потенциал заработка и развития структуры с одного основного бизнес-места при прохождении всех шести площадок.
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
                  <td className="px-6 py-5 text-gold">3 445 TON</td>
                  <td className="px-6 py-5 text-gold">50</td>
                  <td className="px-6 py-5 text-gold">290 TON</td>
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
                <div><div className="text-xs opacity-80">Доход</div><div>3 445 TON</div></div>
                <div><div className="text-xs opacity-80">Клоны</div><div>50</div></div>
                <div><div className="text-xs opacity-80">Реф.</div><div>290 TON</div></div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-foreground/95">
              <b className="text-gold">3 445 TON</b> прямого дохода, <b className="text-gold">50</b> новых «клонов» для усиления структуры и
              <b className="text-gold"> 290 TON</b> реферальных бонусов — это ваш результат с одного основного бизнес-места,
              не считая постоянного реинвеста на шестой площадке и клонов.
            </p>
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Уникальные «фишки»</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Особенности маркетинга MULTI Matrix</h2>
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
            <span className="text-gradient-gold uppercase">Начните с MULTI Matrix</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            Шесть площадок, автоматические переходы, клоны, реинвест и прогнозируемый рост — всё в одной бизнес-системе на TON.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              disabled
              title="Ссылка регистрации появится позже"
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold opacity-70"
            >
              Регистрация в MULTI Matrix <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-8 py-4 font-semibold backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              <ArrowLeft className="h-5 w-5" /> Все партнёрские программы
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
