import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "invertPrimary" | "invertSecondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(0,123,255,0.6)] hover:brightness-110",
  secondary:
    "bg-card text-strong ring-1 ring-inset ring-line hover:bg-card-strong hover:ring-line-strong",
  ghost: "text-body hover:bg-white/10",
  invertPrimary: "bg-white text-brand-700 hover:bg-brand-50",
  invertSecondary:
    "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/15",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

interface ButtonProps extends Omit<React.ComponentProps<"button">, "className" | "children" | "onClick"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  ariaLabel,
  onClick,
  children,
  ...buttonProps
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={buttonProps.type ?? "button"} onClick={onClick} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}