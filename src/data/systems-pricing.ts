import type { Locale } from "@/i18n/dictionaries";
import type { IconName } from "@/types";

interface SystemsPricingEnhancements {
  customBadge: string;
  customTagline: string;
  additionalFeatures: Record<
    "basico" | "estandar" | "personalizado",
    Array<{ icon: IconName; label: string }>
  >;
}

export const systemsPricingEnhancements: Record<Locale, SystemsPricingEnhancements> = {
  es: {
    customBadge: "Máxima personalización",
    customTagline: "Una operación conectada, preparada para crecer contigo.",
    additionalFeatures: {
      basico: [
        { icon: "search", label: "Búsquedas y filtros rápidos" },
        { icon: "clock", label: "Historial de movimientos" },
        { icon: "checkCircle", label: "Validación de datos al registrar" },
      ],
      estandar: [
        { icon: "package", label: "Alertas de inventario bajo" },
        { icon: "lineChart", label: "Comparativas de ventas por período" },
        { icon: "clock", label: "Seguimiento de cobros y pagos pendientes" },
      ],
      personalizado: [
        { icon: "mapPin", label: "Gestión de múltiples sucursales" },
        { icon: "database", label: "Migración de tus datos actuales" },
        { icon: "checkCircle", label: "Flujos de aprobación a tu medida" },
        { icon: "users", label: "Portales para clientes y proveedores" },
        { icon: "shield", label: "Registro de actividad por usuario" },
        { icon: "rocket", label: "Arquitectura lista para nuevos módulos" },
      ],
    },
  },
  en: {
    customBadge: "Maximum customization",
    customTagline: "A connected operation, ready to grow with you.",
    additionalFeatures: {
      basico: [
        { icon: "search", label: "Quick searches and filters" },
        { icon: "clock", label: "Transaction history" },
        { icon: "checkCircle", label: "Data validation on entry" },
      ],
      estandar: [
        { icon: "package", label: "Low-stock alerts" },
        { icon: "lineChart", label: "Sales comparisons across periods" },
        { icon: "clock", label: "Outstanding receivables and payables" },
      ],
      personalizado: [
        { icon: "mapPin", label: "Multi-branch management" },
        { icon: "database", label: "Migration of your existing data" },
        { icon: "checkCircle", label: "Custom approval workflows" },
        { icon: "users", label: "Customer and supplier portals" },
        { icon: "shield", label: "Activity logs by user" },
        { icon: "rocket", label: "Architecture ready for new modules" },
      ],
    },
  },
};
