import type { JSX } from "react";

interface IconProps {
  className?: string;
}

function StrokeIcon({ className, children }: IconProps & { children: React.ReactNode }): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconLayout(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </StrokeIcon>
  );
}

export function IconTrendingUp(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="15 7 21 7 21 13" />
    </StrokeIcon>
  );
}

export function IconTrendingDown(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <polyline points="3 7 9 13 13 9 21 17" />
      <polyline points="15 17 21 17 21 11" />
    </StrokeIcon>
  );
}

export function IconPieChart(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </StrokeIcon>
  );
}

export function IconUsers(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </StrokeIcon>
  );
}

export function IconPackage(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </StrokeIcon>
  );
}

export function IconBarChart(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </StrokeIcon>
  );
}

export function IconShield(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </StrokeIcon>
  );
}

export function IconZap(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </StrokeIcon>
  );
}

export function IconTarget(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </StrokeIcon>
  );
}

export function IconCheckCircle(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </StrokeIcon>
  );
}

export function IconDatabase(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </StrokeIcon>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </StrokeIcon>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <polyline points="20 6 9 17 4 12" />
    </StrokeIcon>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </StrokeIcon>
  );
}

export function IconArrowLeft(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </StrokeIcon>
  );
}

export function IconChevronDown(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <polyline points="6 9 12 15 18 9" />
    </StrokeIcon>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </StrokeIcon>
  );
}

export function IconClose(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </StrokeIcon>
  );
}

export function IconPalette(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="13.5" cy="6.5" r="0.6" />
      <circle cx="17.5" cy="10.5" r="0.6" />
      <circle cx="8.5" cy="7.5" r="0.6" />
      <circle cx="6.5" cy="12.5" r="0.6" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </StrokeIcon>
  );
}

export function IconDevices(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <path d="M10 19v-3.96" />
      <path d="M7 19h5" />
      <rect x="16" y="12" width="6" height="10" rx="1.5" />
    </StrokeIcon>
  );
}

export function IconSearch(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </StrokeIcon>
  );
}

export function IconGauge(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </StrokeIcon>
  );
}

export function IconMessageSquare(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </StrokeIcon>
  );
}

export function IconShare(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </StrokeIcon>
  );
}

export function IconMapPin(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  );
}

export function IconLineChart(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 13l3-3 4 4 5-6" />
    </StrokeIcon>
  );
}

export function IconRocket(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </StrokeIcon>
  );
}

export function IconMail(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </StrokeIcon>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </StrokeIcon>
  );
}

export function IconClock(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </StrokeIcon>
  );
}

export function IconSliders(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <line x1="21" y1="4" x2="14" y2="4" />
      <line x1="10" y1="4" x2="3" y2="4" />
      <line x1="21" y1="12" x2="12" y2="12" />
      <line x1="8" y1="12" x2="3" y2="12" />
      <line x1="21" y1="20" x2="16" y2="20" />
      <line x1="12" y1="20" x2="3" y2="20" />
      <line x1="14" y1="2" x2="14" y2="6" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="16" y1="18" x2="16" y2="22" />
    </StrokeIcon>
  );
}

export function IconExternalLink(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </StrokeIcon>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function IconInstagram(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </StrokeIcon>
  );
}

export function IconFacebook(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </StrokeIcon>
  );
}

export function IconLinkedin(p: IconProps) {
  return (
    <StrokeIcon {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.36" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </StrokeIcon>
  );
}

const iconMap = {
  layout: IconLayout,
  trendingUp: IconTrendingUp,
  trendingDown: IconTrendingDown,
  pieChart: IconPieChart,
  users: IconUsers,
  package: IconPackage,
  barChart: IconBarChart,
  shield: IconShield,
  zap: IconZap,
  target: IconTarget,
  checkCircle: IconCheckCircle,
  database: IconDatabase,
  globe: IconGlobe,
  check: IconCheck,
  arrowRight: IconArrowRight,
  arrowLeft: IconArrowLeft,
  menu: IconMenu,
  close: IconClose,
  palette: IconPalette,
  devices: IconDevices,
  search: IconSearch,
  gauge: IconGauge,
  messageSquare: IconMessageSquare,
  share: IconShare,
  mapPin: IconMapPin,
  lineChart: IconLineChart,
  rocket: IconRocket,
  mail: IconMail,
  phone: IconPhone,
  clock: IconClock,
  sliders: IconSliders,
  externalLink: IconExternalLink,
  whatsapp: IconWhatsApp,
  instagram: IconInstagram,
  facebook: IconFacebook,
  linkedin: IconLinkedin,
} satisfies Record<string, (p: IconProps) => JSX.Element>;

export type DynamicIconName = keyof typeof iconMap;

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name as DynamicIconName];
  if (!Component) return null;
  return <Component className={className} />;
}