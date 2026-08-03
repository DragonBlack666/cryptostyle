import { Link } from "react-router-dom";
import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, Eyebrow, Card } from "@/crypto-cash/components/ui";
import { Zap, Recycle, Coins, Trophy, GitBranch, Layers, ArrowRight } from "lucide-react";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

export default function HomePage() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.home.title,
    description: t.meta.home.desc,
    ogTitle: t.meta.home.ogTitle,
    ogDescription: t.meta.home.ogDesc,
  });

  const mechanics = [
    { icon: Zap,       ...t.home.mech.activation },
    { icon: GitBranch, ...t.home.mech.notLive },
    { icon: Coins,     ...t.home.mech.hundred },
    { icon: Recycle,   ...t.home.mech.compression },
    { icon: Layers,    ...t.home.mech.clones },
    { icon: Trophy,    ...t.home.mech.ranks },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.02] max-w-4xl mx-auto">
            {t.home.titleLine1Pre}<span className="gold-text">{t.home.titleAccent}</span><br />
            {t.home.titleLine2}
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.home.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/crypto-cash/kak-nachat"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#F5D678] via-[#D4AF37] to-[#A8862A] text-[#0B0B0F] font-medium hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-shadow"
            >
              {t.home.ctaPrimary} <ArrowRight size={18} />
            </Link>
            <Link
              to="/crypto-cash/arkhitektura"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-border hover:border-primary/60 hover:text-primary transition-colors"
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
          <div className="gold-divider mt-16 max-w-sm mx-auto" />
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>{t.home.whyEyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display leading-tight">{t.home.whyTitle}</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>{t.home.whyP1}</p>
            <p className="text-foreground">
              {t.home.whyP2Pre}<span className="text-primary">{t.home.whyP2Accent}</span>{t.home.whyP2Post}
            </p>
          </div>
        </div>
      </Section>

      <Section className="!py-16">
        <div className="text-center mb-12">
          <Eyebrow>{t.home.mechEyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display">{t.home.mechTitle}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{t.home.mechSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mechanics.map(({ icon: Icon, t: title, d: desc }) => (
            <Card key={title} className="group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl mb-2 font-display">{title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/crypto-cash/arkhitektura"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#F5D678] via-[#D4AF37] to-[#A8862A] text-[#0B0B0F] font-medium hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-shadow"
          >
            {t.home.mechMore} <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Section>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 pointer-events-none" />
          <div className="relative gold-border rounded-2xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/40 rounded-br-2xl pointer-events-none" />

            <div className="relative">
              <span className="mb-6 inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase border border-primary/30 rounded-full bg-primary/5">
                {t.home.teaserBadge}
              </span>

              <div className="mb-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-4xl font-display font-black text-foreground/90 uppercase tracking-tight">START</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <span className="text-2xl md:text-4xl font-display font-black text-foreground/90 uppercase tracking-tight">CORE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden md:block h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <span className="text-2xl md:text-4xl font-display font-black text-foreground/90 uppercase tracking-tight">PRIME</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <span className="text-2xl md:text-4xl font-display font-black gold-text uppercase tracking-tight">NEXUS</span>
                </div>
              </div>

              <p className="mb-8 max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
                {t.home.teaserDesc}
              </p>
              <Link
                to="/crypto-cash/tarify"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-gold-soft text-primary-foreground font-extrabold text-sm uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                {t.home.teaserBtn} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
