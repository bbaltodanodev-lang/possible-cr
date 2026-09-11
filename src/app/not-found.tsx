import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-300">Error 404</p>
      <h1 className="mt-4 max-w-md text-balance text-3xl font-bold tracking-tight text-strong sm:text-4xl">
        No encontramos lo que buscas
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base text-body">
        La página que intentas visitar no existe o fue movida.
      </p>
      <div className="mt-8">
        <Button href="/" size="lg">
          Volver al inicio
        </Button>
      </div>
      <p className="mt-6 text-sm text-faint">
        ¿Buscas nuestros servicios? <Link href="/#sistemas" className="font-semibold text-brand-300">Sistemas empresariales</Link>{" "}
        o <Link href="/#paginas-web" className="font-semibold text-brand-300">páginas web</Link>.
      </p>
    </Container>
  );
}