import type { ServiceItem } from "@/types";

export const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sistemas empresariales", href: "/#sistemas" },
  { label: "Páginas web", href: "/#paginas-web" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const serviceCategoryOptions = [
  { value: "sistema", label: "Sistema empresarial" },
  { value: "web", label: "Página web" },
  { value: "otro", label: "Otro" },
] as const;

export const systemFeatures: ServiceItem[] = [
  {
    id: "dashboard",
    icon: "layout",
    title: "Dashboard",
    description: "Visualización general de tu negocio.",
  },
  {
    id: "ingresos",
    icon: "trendingUp",
    title: "Ingresos",
    description: "Registro y seguimiento de ventas.",
  },
  {
    id: "gastos",
    icon: "trendingDown",
    title: "Gastos",
    description: "Control de gastos y movimientos.",
  },
  {
    id: "ganancias",
    icon: "pieChart",
    title: "Ganancias",
    description: "Resultados y estadísticas claras.",
  },
  {
    id: "clientes",
    icon: "users",
    title: "Clientes",
    description: "Administración de clientes.",
  },
  {
    id: "inventario",
    icon: "package",
    title: "Inventario",
    description: "Control de productos y existencias.",
  },
  {
    id: "reportes",
    icon: "barChart",
    title: "Reportes",
    description: "Información organizada para decidir.",
  },
  {
    id: "usuarios",
    icon: "shield",
    title: "Usuarios",
    description: "Acceso para empleados o administradores.",
  },
];

export const personalizationItems: ServiceItem[] = [
  { id: "diseno", icon: "palette", title: "Diseño", description: "Alineado con la identidad de tu negocio." },
  { id: "funciones", icon: "sliders", title: "Funciones", description: "Solo lo que tu negocio realmente necesita." },
  { id: "usuarios", icon: "users", title: "Usuarios", description: "Empleados o administradores con acceso." },
  { id: "roles", icon: "shield", title: "Roles", description: "Permisos y niveles de acceso." },
  { id: "dashboard", icon: "layout", title: "Dashboard", description: "La vista más útil para tu operación." },
  { id: "reportes", icon: "barChart", title: "Reportes", description: "Datos con el formato que necesitas." },
  { id: "database", icon: "database", title: "Base de datos", description: "Información organizada y segura." },
  { id: "processes", icon: "zap", title: "Procesos", description: "Automatizaciones hechas a la medida." },
];

export const systemBenefits: ServiceItem[] = [
  {
    id: "menos-trabajo",
    icon: "zap",
    title: "Menos trabajo manual",
    description: "Automatiza tareas repetitivas.",
  },
  {
    id: "mas-control",
    icon: "target",
    title: "Más control",
    description: "La información organizada siempre disponible.",
  },
  {
    id: "menos-errores",
    icon: "checkCircle",
    title: "Menos errores",
    description: "Reduce errores de cálculos y registros manuales.",
  },
  {
    id: "centralizado",
    icon: "database",
    title: "Información centralizada",
    description: "Todo tu negocio en un mismo lugar.",
  },
  {
    id: "acceso",
    icon: "globe",
    title: "Acceso desde cualquier lugar",
    description: "Sistema web accesible desde dispositivos compatibles.",
  },
  {
    id: "decisiones",
    icon: "trendingUp",
    title: "Decisiones más rápidas",
    description: "Estadísticas y reportes para decidir con confianza.",
  },
];

export const webServices: ServiceItem[] = [
  {
    id: "diseno-profesional",
    icon: "palette",
    title: "Diseño profesional",
    description: "Diseño personalizado alineado con la identidad de tu negocio.",
  },
  {
    id: "responsive",
    icon: "devices",
    title: "Responsive",
    description: "Funciona correctamente en teléfonos, tablets y computadoras.",
  },
  {
    id: "seo-google",
    icon: "search",
    title: "SEO y Google",
    description: "Optimización técnica para que tu negocio aparezca en búsquedas.",
  },
  {
    id: "velocidad",
    icon: "gauge",
    title: "Velocidad",
    description: "Tu página cargada rápido para no perder visitantes.",
  },
  {
    id: "seguridad",
    icon: "shield",
    title: "Seguridad",
    description: "Buenas prácticas de seguridad y configuración.",
  },
  {
    id: "formularios",
    icon: "messageSquare",
    title: "Formularios de contacto",
    description: "Facilita que los visitantes puedan comunicarse contigo.",
  },
  {
    id: "redes-sociales",
    icon: "share",
    title: "Redes sociales",
    description: "Instagram, Facebook, WhatsApp y otras cuando corresponda.",
  },
  {
    id: "google-maps",
    icon: "mapPin",
    title: "Google Maps",
    description: "Ubicación de tu negocio y facilidad para llegar.",
  },
  {
    id: "analytics",
    icon: "lineChart",
    title: "Analytics",
    description: "Medición de visitas y comportamiento cuando lo requieras.",
  },
  {
    id: "dominio",
    icon: "globe",
    title: "Dominio personalizado",
    description: "Configuración del dominio de tu negocio.",
  },
  {
    id: "publicacion",
    icon: "rocket",
    title: "Publicación",
    description: "Preparación, hosting y puesta en línea del sitio.",
  },
];

export const differentialPoints = [
  "Soluciones personalizadas",
  "Diseño profesional",
  "Tecnología moderna",
  "Experiencia responsive",
  "Rendimiento optimizado",
  "SEO",
  "Escalabilidad",
  "Comunicación directa",
] as const;

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Hablamos", description: "Entendemos el negocio y sus necesidades." },
  { number: "02", title: "Diseñamos", description: "Definimos la solución y la experiencia." },
  { number: "03", title: "Desarrollamos", description: "Construimos el sistema o sitio web." },
  { number: "04", title: "Publicamos", description: "Ponemos la solución en funcionamiento." },
];