"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/Icons";

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="bg-page py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.benefits.eyebrow}
          title={t.benefits.title}
          align="center"
          className="mx-auto"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.items.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-start gap-4 rounded-card border border-line bg-card p-6 shadow-soft"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand-300">
                <DynamicIcon name={benefit.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-strong">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-faint">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}