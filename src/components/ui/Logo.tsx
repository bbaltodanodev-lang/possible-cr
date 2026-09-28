import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Si compact=true muestra solo el ícono cuadrado (navbar móvil, favicon-like) */
  compact?: boolean;
  /** Reserva el logo para el LCP (navbar). En el footer se desactiva: no está above the fold. */
  priority?: boolean;
}

export function Logo({ className, compact = false, priority = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/bm-logo.png"
        alt="BM Solutions"
        width={720}
        height={424}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          compact ? "max-h-6 max-w-[32px]" : "max-h-7 max-w-[90px]",
        )}
      />
    </span>
  );
}
