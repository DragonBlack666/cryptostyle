import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: { children: ReactNode; className?: string }) {
  return (
    <section className={`max-w-7xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-primary/90 mb-4">
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-8">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="text-4xl md:text-6xl font-display leading-[1.05]">{title}</h1>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
          {subtitle}
        </p>
      )}
      <div className="gold-divider mt-10 max-w-md" />
    </div>
  );
}

export function Card({
  children,
  className = "",
}: { children: ReactNode; className?: string }) {
  return (
    <div className={`gold-border rounded-xl p-6 md:p-8 ${className}`}>{children}</div>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-primary pl-6 my-6 text-foreground/90 italic font-display text-lg leading-relaxed">
      {children}
    </blockquote>
  );
}
