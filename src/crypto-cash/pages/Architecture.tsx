import { Link } from "react-router-dom";
import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, PageHero, Card, Highlight, Eyebrow } from "@/crypto-cash/components/ui";
import { Zap, GitBranch, Coins, Recycle, Layers, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.arch.title,
    description: t.meta.arch.desc,
    ogTitle: t.meta.arch.ogTitle,
    ogDescription: t.meta.arch.ogDesc,
  });

  const s1 = t.arch.s1;
  const s2 = t.arch.s2;
  const s3 = t.arch.s3;
  const s4 = t.arch.s4;
  const s5 = t.arch.s5;
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.arch.eyebrow}
        title={<>{t.arch.titlePre}<span className="gold-text">Crypto Cash</span></>}
        subtitle={t.arch.subtitle}
      />

      <Section className="!pt-8 space-y-16">
        {/* 01 */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
            <Zap className="text-primary" size={26} />
          </div>
          <div>
            <Eyebrow>{s1.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display mb-4">{s1.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s1.p1}</p>
            <Card>
              <p className="font-medium text-primary mb-3 text-base md:text-lg">{s1.cardTitle}</p>
              <ul className="space-y-2 text-base text-muted-foreground">
                {s1.items.map((it) => <li key={it}>· {it}</li>)}
              </ul>
            </Card>
            <Highlight>{s1.highlight}</Highlight>
          </div>
        </div>

        {/* 02 */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
            <GitBranch className="text-primary" size={26} />
          </div>
          <div>
            <Eyebrow>{s2.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display mb-4">{s2.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s2.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{s2.p2}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{s2.p3}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{s2.cardALabel}</div>
                <div className="font-display text-xl">{s2.cardAText}</div>
              </Card>
              <Card className="border-primary/50">
                <div className="text-sm uppercase tracking-widest text-primary mb-2">Crypto Cash</div>
                <div className="font-display text-xl">{s2.cardBText}</div>
              </Card>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
            <Coins className="text-primary" size={26} />
          </div>
          <div>
            <Eyebrow>{s3.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display mb-4">{s3.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s3.p1}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {s3.items.map((it) => (
                <Card key={it.t}>
                  <div className="text-primary text-base font-medium mb-1">{it.t}</div>
                  <div className="text-base text-muted-foreground">{it.d}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
            <Recycle className="text-primary" size={26} />
          </div>
          <div>
            <Eyebrow>{s4.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display mb-4">{s4.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s4.p1}</p>
            <h3 className="text-2xl md:text-3xl font-display mb-4">{s4.howTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{s4.howP}</p>
            <p className="font-medium text-foreground mb-4 text-base md:text-lg">{s4.duringLabel}</p>
            <ul className="space-y-3 text-base text-muted-foreground mb-8">
              {s4.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <Check className="text-primary shrink-0 mt-1" size={20} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl md:text-3xl font-display mb-4">{s4.whatTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{s4.whatP1}</p>
            <p className="text-muted-foreground leading-relaxed">{s4.whatP2}</p>
          </div>
        </div>

        {/* 05 */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
            <Layers className="text-primary" size={26} />
          </div>
          <div>
            <Eyebrow>{s5.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display mb-4">{s5.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s5.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{s5.p2}</p>
            
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-display">
              {t.arch.cta.titlePre}<span className="gold-text">{t.arch.cta.titleAccent}</span>{t.arch.cta.titlePost}
            </h2>
            <p className="text-lg text-muted-foreground">{t.arch.cta.text}</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-[#b8932f] text-primary-foreground shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
              <Link to="/crypto-cash/tarify" className="gap-2">
                {t.arch.cta.btn}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
