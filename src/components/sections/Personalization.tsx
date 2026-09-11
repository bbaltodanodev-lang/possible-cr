"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/Icons";

export function Personalization() {
  const { t } = useLanguage();

  return (
    <section className="bg-page py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <SectionHeader
            eyebrow={t.personalization.eyebrow}
            title={t.personalization.title}
            description={t.personalization.description}
          />
          <ul className="grid grid-cols-2 gap-3">
            {t.personalization.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3.5 shadow-soft"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand-300">
                  <DynamicIcon name={item.icon} className="size-4.5" />
                </span>
                <span className="text-sm font-semibold text-strong">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}