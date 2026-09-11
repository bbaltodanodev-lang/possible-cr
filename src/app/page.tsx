import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WebSection } from "@/components/sections/WebSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { servicesSchema, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <SolutionsSection />
      <WebSection />
      <ProjectsSection />
      <ContactSection />

      {servicesSchema().map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
        />
      ))}
    </>
  );
}
