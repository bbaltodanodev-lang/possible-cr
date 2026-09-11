import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconCheck } from "@/components/ui/Icons";
import { differentialPoints } from "@/data/services";

export function Differential() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <SectionHeader
          eyebrow="Diferenciador"
          title="Tecnología que se adapta a tu negocio."
        />
        <ul className="grid w-full grid-cols-2 gap-3 lg:max-w-xl">
          {differentialPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 rounded-xl border border-line bg-card px-4 py-3 text-sm font-medium text-body"
            >
              <IconCheck className="size-4 shrink-0 text-brand-400" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}