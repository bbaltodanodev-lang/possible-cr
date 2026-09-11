"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="bg-page py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
          align="center"
          className="mx-auto"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <li key={step.number} className="relative rounded-card border border-line bg-card p-6 shadow-soft">
              <span className="text-sm font-bold tracking-widest text-brand-400">{step.number}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-strong">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-faint">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}