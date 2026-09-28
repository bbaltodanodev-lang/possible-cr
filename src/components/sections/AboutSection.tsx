import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DynamicIcon } from "@/components/ui/Icons";

export function AboutSection() {
  return (
    <section id="quienes-somos" className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gradient">Quiénes somos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Personas detrás de las soluciones</h2>
          <p className="mt-4 text-body">Un equipo cercano que convierte ideas de negocio en herramientas digitales claras, útiles y profesionales.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          <article className="rounded-3xl border border-brand-300/50 bg-gradient-to-br from-[#17122f] to-card p-7 shadow-soft">
            <div className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-white"><DynamicIcon name="users" className="size-7" /></div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-300">Fundador y desarrollador</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Bernal Baltodano</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">Diseño y desarrollo sistemas web, páginas profesionales y soluciones POS adaptadas a cada negocio.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <a href="mailto:contact.possible.cr@gmail.com" className="text-brand-300 hover:text-brand-200">Email</a>
              <a href="https://github.com/bbaltodanodev-lang" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">GitHub</a>
              <a href="https://wa.me/50662037705" target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">WhatsApp</a>
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-card p-7 shadow-soft">
            <div className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-300"><DynamicIcon name="layout" className="size-7" /></div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-300">Equipo</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Possible</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">Acompañamos a pequeños y medianos negocios con tecnología que organiza su operación y fortalece su presencia digital.</p>
            <Link href="/#contacto" className="mt-6 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200">Hablemos de tu proyecto →</Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
