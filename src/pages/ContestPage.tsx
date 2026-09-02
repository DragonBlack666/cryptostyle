import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { CONTEST_DICTS, type ContestDict } from "@/lib/contest-i18n";
import { getRankedLeaderboard, LEADERBOARD_UPDATED_AT } from "@/lib/contest-leaderboard";
import { SiteHeader } from "@/components/SiteHeader";
import { heroBgImg as heroBg, whyBgImg as whyBg, tonBgImg as tonBg } from "@/lib/images";
import { useHeadMeta } from "@/lib/useHeadMeta";
import {
  ArrowLeft, ArrowRight, Trophy, Medal, Award, Users, Youtube, PlayCircle,
  FileText, Video, Smartphone, Flame, Check, X, Info, Send, Rocket, Flag,
} from "lucide-react";

const RUTUBE_URL = "https://rutube.ru/channel/35882876/";
const TELEGRAM_URL = "https://t.me/CryptoStyleMatrixNews";
const CRYPTO_CASH_URL = "/crypto-cash";

/* ---------- Static contest data (numbers only; strings come from dict) ---------- */

const PRIZES = [
  { place: 1, amount: "$300", tier: "gold" },
  { place: 2, amount: "$200", tier: "silver" },
  { place: 3, amount: "$100", tier: "bronze" },
  { place: 4, amount: "$50", tier: "base" },
  { place: 5, amount: "$50", tier: "base" },
] as const;

const LEVEL_POINTS = [
  { level: "START", pts: 5 },
  { level: "CORE", pts: 10 },
  { level: "PRIME", pts: 20 },
  { level: "NEXUS", pts: 30 },
];

const PROMO_ICONS = [FileText, Video, Smartphone, Flame];

/* ---------- Shared UI ---------- */

function SectionNav({ d }: { d: ContestDict }) {
  const items = [
    { id: "intro", label: d.nav.intro },
    { id: "prizes", label: d.nav.prizes },
    { id: "points", label: d.nav.points },
    { id: "rules", label: d.nav.rules },
    { id: "confirm", label: d.nav.confirm },
    { id: "leaderboard", label: d.nav.leaderboard },
    { id: "dates", label: d.nav.dates },
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

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-foreground/75">{intro}</p>}
    </header>
  );
}

function PrizeCard({ place, amount, tier, d }: { place: number; amount: string; tier: string; d: ContestDict }) {
  const tone =
    tier === "gold"
      ? "border-gold/70 bg-gradient-to-br from-gold/30 via-gold/15 to-transparent shadow-lg shadow-gold/10"
      : tier === "silver"
      ? "border-gold/50 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent"
      : tier === "bronze"
      ? "border-gold/40 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent"
      : "border-border/60 bg-surface/50";
  const Icon = place <= 3 ? Trophy : place === 4 ? Medal : Award;
  return (
    <div className={`relative flex flex-col items-center rounded-3xl border ${tone} p-6 text-center backdrop-blur transition hover:border-gold/70`}>
      <span className="absolute -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-background">
        {place}
      </span>
      <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
        <Icon className="h-7 w-7 text-gold" />
      </div>
      <div className="mt-4 text-xs uppercase tracking-widest text-foreground/60">{d.prizes.place(place)}</div>
      <div className="mt-2 font-sans text-4xl font-bold text-gradient-gold sm:text-5xl">{amount}</div>
    </div>
  );
}

function PointsBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-gold/50 bg-gold/15 px-3 py-1 font-sans text-sm font-bold text-gold">
      {text}
    </span>
  );
}

/* ---------- Page ---------- */

export default function ContestPage() {
  const { lang, t } = useI18n();
  const d = CONTEST_DICTS[lang];
  const leaderboard = getRankedLeaderboard();

  useHeadMeta({ title: d.docTitle, description: d.metaDescription });

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
          <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-gold/50 bg-gold/10 shadow-lg shadow-gold/10">
            <Trophy className="h-10 w-10 text-gold" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold block uppercase">TOP Crypto Cash</span>
            <span className="mt-3 block text-2xl text-foreground sm:text-3xl md:text-4xl">{d.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-surface/60 px-5 py-2 font-sans text-base font-semibold text-gold backdrop-blur sm:text-lg">
            {d.hero.period}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75 sm:text-xl">{d.hero.intro}</p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { k: d.hero.stats.prizeFund, v: "$700" },
              { k: d.hero.stats.winners, v: "5" },
              { k: d.hero.stats.days, v: "23" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border/60 bg-surface/50 p-4 backdrop-blur">
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...tonBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100 brightness-125 contrast-110 saturate-125" />
        <div className="absolute inset-0 -z-10 bg-section-glow" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow={d.prizes.eyebrow} title={d.prizes.title} intro={d.prizes.intro} />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {PRIZES.slice(0, 3).map((p) => (
              <PrizeCard key={p.place} {...p} d={d} />
            ))}
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl gap-6 sm:grid-cols-2">
            {PRIZES.slice(3).map((p) => (
              <PrizeCard key={p.place} {...p} d={d} />
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-foreground/95">{d.prizes.note}</p>
          </div>
        </div>
      </section>

      {/* HOW TO EARN POINTS */}
      <section id="points" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow={d.points.eyebrow} title={d.points.title} intro={d.points.intro} />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Block 1 — structure */}
            <article className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">01</p>
                  <h3 className="font-display text-2xl">{d.points.structure.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/75">{d.points.structure.desc}</p>
              <ul className="mt-6 divide-y divide-border/40 overflow-hidden rounded-2xl border border-border/50 bg-background/40">
                {LEVEL_POINTS.map((l) => (
                  <li key={l.level} className="flex items-center justify-between px-5 py-3.5">
                    <span className="font-sans text-base font-semibold tracking-wide">{l.level}</span>
                    <PointsBadge text={d.points.pts(l.pts)} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-start gap-2 text-sm text-foreground/70">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {d.points.structure.note}
              </p>
            </article>

            {/* Block 2 — subscription */}
            <article className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                  <PlayCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">02</p>
                  <h3 className="font-display text-2xl">{d.points.subscribe.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/75">{d.points.subscribe.desc}</p>
              <ul className="mt-6 grid gap-3">
                {[
                  { name: "YouTube", href: t.social.youtube, Icon: Youtube },
                  { name: "RUTUBE", href: RUTUBE_URL, Icon: PlayCircle },
                ].map((s) => (
                  <li key={s.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/40 px-5 py-3.5">
                    <span className="flex items-center gap-3 font-sans text-base font-semibold">
                      <s.Icon className="h-5 w-5 text-gold" /> {s.name}
                    </span>
                    <span className="flex items-center gap-3">
                      <PointsBadge text={d.points.pts(3)} />
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:bg-gold/10 hover:text-gold"
                      >
                        {d.points.subscribe.btn} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Block 3 — promotion */}
          <article className="mt-6 rounded-3xl border border-border/60 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent p-6 backdrop-blur sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                <Flame className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">03</p>
                <h3 className="font-display text-2xl">{d.points.promo.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/75">{d.points.promo.desc}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {d.points.promo.items.map((it, i) => {
                const Icon = PROMO_ICONS[i];
                const highlight = i === 3;
                return (
                  <div
                    key={it.title}
                    className={`rounded-2xl border p-5 backdrop-blur transition hover:border-gold/60 ${
                      highlight ? "border-gold/60 bg-gold/10 md:col-span-2" : "border-border/50 bg-background/40"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-gold" />
                        <span className="font-display text-xl">{it.title}</span>
                      </span>
                      <PointsBadge text={d.points.pts(it.pts)} />
                    </div>
                    <p className="mt-3 text-sm text-foreground/75">{it.desc}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 brightness-75 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-section-glow opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader eyebrow={d.rules.eyebrow} title={d.rules.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur sm:p-8">
              <ul className="space-y-4">
                {d.rules.allowed.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Check className="h-3.5 w-3.5 text-gold" />
                    </span>
                    <span className="text-foreground/90">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur sm:p-8">
              <ul className="space-y-4">
                {d.rules.forbidden.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                      <X className="h-3.5 w-3.5 text-destructive" />
                    </span>
                    <span className="text-foreground/90">{r}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 border-t border-border/40 pt-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <Info className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="text-foreground/80">{d.rules.admin}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="font-semibold text-gold">{d.rules.footer}</p>
          </div>
        </div>
      </section>

      {/* CONFIRMATION */}
      <section id="confirm" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...whyBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background/90" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader eyebrow={d.confirm.eyebrow} title={d.confirm.title} intro={d.confirm.intro} />
          <div className="mt-8 flex justify-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold transition hover:opacity-90"
            >
              <Send className="h-5 w-5" /> {d.confirm.btn}
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {d.confirm.items.map((it, i) => (
              <div key={it.title} className="rounded-3xl border border-border/60 bg-gradient-to-br from-surface/70 to-background/50 p-6 backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">{i + 1}</span>
                <h3 className="mt-4 font-display text-xl text-gold">{it.title}</h3>
                <p className="mt-3 text-sm text-foreground/80">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section id="leaderboard" className="relative isolate overflow-hidden py-20 sm:py-24">
        <img {...tonBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100 brightness-125 contrast-110 saturate-125" />
        <div className="absolute inset-0 -z-10 bg-section-glow" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.leaderboard.eyebrow}</p>
            <h2 className="mt-3 flex items-center justify-center gap-3 font-display text-3xl sm:text-5xl">
              <Trophy className="h-8 w-8 shrink-0 text-gold sm:h-10 sm:w-10" />
              <span>{d.leaderboard.title}</span>
            </h2>
          </header>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-surface/40 backdrop-blur">
            <table className="w-full text-left">
              <thead className="bg-gold/10 text-gold">
                <tr>
                  <th className="w-24 px-4 py-4 text-sm font-semibold uppercase tracking-widest sm:px-6">{d.leaderboard.cols.place}</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-widest sm:px-6">{d.leaderboard.cols.participant}</th>
                  <th className="w-28 px-4 py-4 text-right text-sm font-semibold uppercase tracking-widest sm:px-6">{d.leaderboard.cols.points}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {leaderboard.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-14 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                        <Trophy className="h-7 w-7 text-gold" />
                      </div>
                      <p className="mx-auto mt-5 max-w-md text-foreground/85">{d.leaderboard.empty}</p>
                    </td>
                  </tr>
                ) : (
                  leaderboard.map((e) => (
                    <tr key={e.login} className={`transition hover:bg-surface/60 ${e.place <= 5 ? "bg-gold/5" : ""}`}>
                      <td className="px-4 py-4 sm:px-6">
                        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-sans text-sm font-bold ${
                          e.place <= 3 ? "bg-gold text-background" : "bg-gold/15 text-gold"
                        }`}>
                          {e.place}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-sans font-medium sm:px-6">{e.login}</td>
                      <td className="px-4 py-4 text-right font-sans text-lg font-bold text-gold sm:px-6">{e.points}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {LEADERBOARD_UPDATED_AT && (
            <p className="mt-3 text-right text-xs text-foreground/60">
              {d.leaderboard.updatedAt}: {LEADERBOARD_UPDATED_AT}
            </p>
          )}

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/40 bg-surface/80 p-6 text-center shadow-lg shadow-black/20 backdrop-blur">
            <p className="text-foreground/95">{d.leaderboard.note}</p>
          </div>
        </div>
      </section>

      {/* DATES / CTA */}
      <section id="dates" className="relative isolate overflow-hidden py-24 sm:py-32">
        <img {...heroBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{d.dates.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold">{d.dates.title}</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { ...d.dates.start, Icon: Rocket },
              { ...d.dates.finish, Icon: Flag },
              { ...d.dates.winners, Icon: Trophy },
            ].map((s) => (
              <div key={s.label} className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-gold/60">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                  <s.Icon className="h-6 w-6 text-gold" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-foreground/60">{s.label}</div>
                <div className="mt-1 font-display text-2xl text-gold sm:text-3xl">{s.date}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={CRYPTO_CASH_URL}
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 font-semibold transition hover:opacity-90"
            >
              {d.dates.cta} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-8 py-4 font-semibold backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              <ArrowLeft className="h-5 w-5" /> {d.dates.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
