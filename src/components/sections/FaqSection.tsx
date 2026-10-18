"use client";

import { useLanguage } from "@/i18n/provider";
import { faqContent } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FaqSection() {
  const { lang } = useLanguage();
  const content = faqContent[lang];

  return (
    <section id="preguntas" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
          className="mx-auto"
        />
        <dl className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <div key={item.question} className="rounded-card border border-line bg-card p-6 shadow-soft">
              <dt className="text-[15px] font-semibold text-strong">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
