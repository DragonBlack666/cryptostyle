import { Link } from "react-router-dom";
import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, PageHero } from "@/crypto-cash/components/ui";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.ranks.title,
    description: t.meta.ranks.desc,
    ogTitle: t.meta.ranks.ogTitle,
    ogDescription: t.meta.ranks.ogDesc,
  });

  const p = t.ranks.partners;
  const it = t.ranks.items;
  const ranks = [
    { name: it.bronze.name,   range: p["0_4"],     color: "#B87333", desc: it.bronze.desc },
    { name: it.silver.name,   range: p["5_49"],    color: "#C0C0C0", desc: it.silver.desc },
    { name: it.gold.name,     range: p["50_99"],   color: "#D4AF37", desc: it.gold.desc },
    { name: it.platinum.name, range: p["100_249"], color: "#E5E4E2", desc: it.platinum.desc },
    { name: it.sapphire.name, range: p["250_499"], color: "#0F52BA", desc: it.sapphire.desc },
    { name: it.emerald.name,  range: p["500_999"], color: "#50C878", desc: it.emerald.desc },
    { name: it.diamond.name,  range: p["1000"],    color: "#B9F2FF", desc: it.diamond.desc },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.ranks.eyebrow}
        title={<>{t.ranks.titlePre}<span className="gold-text">{t.ranks.titleAccent}</span></>}
        subtitle={t.ranks.subtitle}
      />

      <Section className="!pt-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="gold-border rounded-xl p-6 md:p-8 flex gap-4 items-start">
            <span className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-xl">💡</span>
            <p className="text-lg leading-relaxed text-foreground/90">{t.ranks.p1}</p>
          </div>
          <div className="gold-border rounded-xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-transparent">
            <p className="text-lg leading-relaxed text-foreground/90">{t.ranks.p2}</p>
          </div>
          <div className="gold-border rounded-xl p-6 md:p-8">
            <p className="text-lg leading-relaxed text-foreground/90">{t.ranks.p3}</p>
          </div>
          <div className="gold-border rounded-xl p-6 md:p-8 flex gap-4 items-start bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary text-xl">💡</span>
            <p className="text-lg leading-relaxed text-foreground/90">{t.ranks.p4}</p>
          </div>
        </div>
      </Section>

      <Section className="!pt-6">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="flex flex-col items-center gap-3">
            {[...ranks].reverse().map((r, i) => {
              const width = 58 + i * 7;
              return (
                <div
                  key={r.name}
                  className="gold-border rounded-xl p-4 md:p-5 relative overflow-hidden"
                  style={{ width: `${width}%`, minWidth: "min(100%, 320px)" }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: r.color, boxShadow: `0 0 20px ${r.color}80` }} />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 mb-0.5">
                        {t.ranks.rangLabel} {String(7 - i).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl" style={{ color: r.color }}>{r.name}</h3>
                    </div>
                    <div className="md:text-right">
                      <div className="text-primary text-sm md:text-base">{r.range}</div>
                      <p className="text-xs md:text-sm text-foreground/70 leading-snug">{r.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="!pt-6">
        <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-display">
              {t.ranks.cta.titlePre}<span className="gold-text">{t.ranks.cta.titleAccent}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t.ranks.cta.text}</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-[#b8932f] text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
              <Link to="/crypto-cash/razvitie" className="gap-2">
                {t.ranks.cta.btn}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
