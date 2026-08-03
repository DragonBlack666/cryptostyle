import { Link } from "react-router-dom";
import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, PageHero } from "@/crypto-cash/components/ui";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

export default function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.tiers.title,
    description: t.meta.tiers.desc,
    ogTitle: t.meta.tiers.ogTitle,
    ogDescription: t.meta.tiers.ogDesc,
  });

  const it = t.tiers.items;
  const tiers = [
    { key: "start" as const, name: "START", price: "$10", amount: "$126",    ...it.start, featured: false },
    { key: "core" as const,  name: "CORE",  price: "$50", amount: "$6 138",  ...it.core,  featured: true  },
    { key: "prime" as const, name: "PRIME", price: "$200",amount: "$20 460", ...it.prime, featured: false },
    { key: "nexus" as const, name: "NEXUS", price: "$500",amount: "$61 380", ...it.nexus, featured: false },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.tiers.eyebrow}
        title={<>{t.tiers.titlePre}<span className="gold-text">{t.tiers.titleAccent}</span></>}
        subtitle={t.tiers.subtitle}
      />

      <Section className="!pt-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.featured ? "gold-border shadow-[0_0_50px_rgba(212,175,55,0.2)]" : "border border-border bg-surface"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#F5D678] to-[#A8862A] text-[#0B0B0F]">
                  {t.tiers.popular}
                </div>
              )}
              <div className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-2">{tier.name}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`font-display text-5xl ${tier.featured ? "gold-text" : ""}`}>{tier.price}</span>
                <span className="text-xs text-muted-foreground">{t.tiers.perActivation}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

              <div className="text-xs uppercase tracking-widest text-primary/80 mb-2">{t.tiers.periodLabel}</div>
              <p className="text-sm mb-6">{tier.period}</p>

              <div className="text-xs uppercase tracking-widest text-primary/80 mb-3">{t.tiers.distLabel}</div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.distribution.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-widest text-primary/80 mb-1">{t.tiers.potentialLabel}</div>
                <div className="font-display text-xl md:text-2xl leading-tight">
                  <span className="text-muted-foreground">{t.tiers.potentialPrefix} </span>
                  <span className="gold-text text-2xl md:text-3xl">{tier.amount}</span>
                  <span className="text-muted-foreground whitespace-pre-line"> {tier.potentialPeriod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto text-sm text-muted-foreground">
          {t.tiers.footNote}
        </div>

        <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 text-center overflow-hidden mt-20">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-display">
              {t.tiers.cta.titlePre}<span className="gold-text">{t.tiers.cta.titleAccent}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t.tiers.cta.text}</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-[#b8932f] text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
              <Link to="/crypto-cash/rangi" className="gap-2">
                {t.tiers.cta.btn}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
        
      </Section>
    </SiteLayout>
  );
}
