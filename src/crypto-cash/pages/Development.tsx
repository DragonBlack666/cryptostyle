import { Link } from "react-router-dom";
import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, PageHero, Card } from "@/crypto-cash/components/ui";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

export default function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.dev.title,
    description: t.meta.dev.desc,
    ogTitle: t.meta.dev.ogTitle,
    ogDescription: t.meta.dev.ogDesc,
  });

  const stages = [
    { icon: "🚀", ...t.dev.stages.s1 },
    { icon: "🪙", ...t.dev.stages.s2 },
    { icon: "🌍", ...t.dev.stages.s3 },
  ];
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.dev.eyebrow}
        title={<>{t.dev.titlePre}<span className="gold-text">Crypto Cash</span></>}
        subtitle={t.dev.subtitle}
      />

      <Section className="!pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {stages.map((stage, index) => (
              <Card
                key={stage.title}
                className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent"
              >
                <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl border border-primary/20">
                      {stage.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">
                      {t.dev.stageLabel} {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl mb-4">{stage.title}</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-foreground/90">
                          <span className="text-primary mt-0.5">✅</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-foreground/80 leading-relaxed">{stage.summary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="gold-border rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-3">{t.dev.goalLabel}</div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">{t.dev.goalTitle}</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">{t.dev.goalP1}</p>
            <ul className="space-y-3">
              {t.dev.goalItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/90">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">→</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-foreground/90 leading-relaxed">
              {t.dev.goalP2Pre}<span className="gold-text font-semibold">{t.dev.goalP2Accent}</span>{t.dev.goalP2Post}
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="gold-border rounded-2xl p-8 md:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-center">
            <h2 className="font-display text-2xl md:text-3xl mb-3">{t.dev.cta.title}</h2>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">{t.dev.cta.text}</p>
            <Link to="/crypto-cash/kak-nachat">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/60 group">
                {t.dev.cta.btn}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
