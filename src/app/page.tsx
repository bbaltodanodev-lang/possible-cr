import type { Metadata } from "next";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WebSection } from "@/components/sections/WebSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { defaultMetadata } from "@/data/site";
import { homeSchema, jsonLdScript, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <SolutionsSection />
      <WebSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(homeSchema()) }} />
    </>
  );
}
