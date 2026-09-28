import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Si compact=true muestra solo el ícono cuadrado (navbar móvil, favicon-like) */
  compact?: boolean;
  hero?: boolean;
  /** Reserva el logo para el LCP (navbar). En el footer se desactiva: no está above the fold. */
  priority?: boolean;
}

export function Logo({ className, compact = false, hero = false, priority = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/possible-logo.png"
        alt="Possible"
        width={1089}
        height={248}
        priority={priority}
        unoptimized
        className={cn(
          "h-auto object-contain",
          hero ? "w-full" : compact ? "w-9" : "w-[150px] sm:w-[170px]",
        )}
      />
    </span>
  );
}
