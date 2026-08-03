import SiteLayout from "@/crypto-cash/components/Layout";
import { Section, PageHero } from "@/crypto-cash/components/ui";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useT } from "@/crypto-cash/i18n";
import { useDocumentMeta } from "@/crypto-cash/i18n/useDocumentMeta";

export default function Page() {
  const t = useT();
  useDocumentMeta({
    title: t.meta.faq.title,
    description: t.meta.faq.desc,
    ogTitle: t.meta.faq.ogTitle,
    ogDescription: t.meta.faq.ogDesc,
  });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t.faq.eyebrow}
        title={<>{t.faq.titlePre}<span className="gold-text">{t.faq.titleAccent}</span></>}
      />

      <Section className="!pt-8 max-w-3xl">
        <div className="space-y-3">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="gold-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
