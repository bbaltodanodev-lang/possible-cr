import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SystemsCta() {
  return (
    <section className="bg-surface pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-card p-6 py-14 text-center ring-1 ring-inset ring-line sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_16rem_at_80%_-20%,rgba(99,102,241,0.35),transparent)]"
          />
          <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Te interesa un sistema para tu negocio?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-300">
            Cuéntanos cómo funciona actualmente tu negocio y diseñaremos una solución adaptada a
            tus necesidades.
          </p>
          <div className="relative mt-8">
            <Button href="#contacto" size="lg">
              Quiero mi sistema
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}