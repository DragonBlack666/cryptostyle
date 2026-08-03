import { createFileRoute, Link } from "@tanstack/react-router";
import SiteLayout from "@/components/site/Layout";
import { Section, PageHero, Card } from "@/components/site/ui";
import { Wallet, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { useT } from "@/i18n";
import { useDocumentMeta } from "@/i18n/useDocumentMeta";

export const Route = createFileRoute("/kak-nachat")({
  component: Page,
});

function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.how.title,
    description: t.meta.how.desc,
    ogTitle: t.meta.how.ogTitle,
    ogDescription: t.meta.how.ogDesc,
  });

  const steps = [
    { icon: Wallet,      ...t.how.steps.s1 },
    { icon: Layers,      ...t.how.steps.s2 },
    { icon: ShieldCheck, ...t.how.steps.s3 },
    { icon: Sparkles,    ...t.how.steps.s4 },
  ];
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.how.eyebrow}
        title={<>{t.how.titlePre}<span className="gold-text">{t.how.titleAccent}</span></>}
        subtitle={t.how.subtitle}
      />

      <Section className="!pt-8">
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <Card key={s.title} className="flex gap-5">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                  <s.icon className="text-primary" size={22} />
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-1">
                  {t.how.stepLabel} 0{i + 1}
                </div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 gold-border rounded-2xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t.how.ctaTitlePre}<span className="gold-text">{t.how.ctaTitleAccent}</span>{t.how.ctaTitlePost}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">{t.how.ctaText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cryptostylematrix.github.io/frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#F5D678] via-[#D4AF37] to-[#A8862A] text-[#0B0B0F] font-medium hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-shadow"
            >
              {t.how.connectBtn}
            </a>
          </div>
          <div className="mt-6">
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">
              {t.how.faqLink}
            </Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
