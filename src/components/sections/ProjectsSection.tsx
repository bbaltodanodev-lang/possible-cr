"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCarousel } from "./ProjectCarousel";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="bg-black py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="mt-12">
          <ProjectCarousel />
        </div>
      </Container>
    </section>
  );
}