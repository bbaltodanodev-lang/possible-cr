"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DashboardPreview } from "./DashboardPreview";

export function DashboardSection() {
  const { t } = useLanguage();

  return (
    <section id="demo" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.dashboardSection.eyebrow}
          title={t.dashboardSection.title}
          description={t.dashboardSection.description}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}