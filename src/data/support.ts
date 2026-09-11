import type { Locale } from "@/i18n/dictionaries";
import type { ServiceItem } from "@/types";

interface SupportPlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
}

interface SupportContent {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  title: string;
  tagline: string;
  description: string;
  includes: ServiceItem[];
  plansTitle: string;
  plansDescription: string;
  plans: SupportPlan[];
  warning: string;
  contactTitle: string;
  contactDescription: string;
  contactCta: string;
  contactMessage: string;
}

export const supportContent: Record<Locale, SupportContent> = {
  es: {
    heroEyebrow: "Servicios",
    heroTitle: "Soporte y mantenimiento web",
    heroDescription:
      "Tu página no termina cuando la publicamos. Elige un plan mensual o solicita una atención puntual según lo que necesites.",
    title: "Soporte y mantenimiento",
    tagline: "Tu página no termina cuando la publicamos.",
    description:
      "Con planes mensuales continúo cuidando, actualizando y mejorando tu web para mantenerla estable. Tú te concentras en tu negocio mientras yo me encargo de la parte técnica.",
    includes: [
      {
        id: "mantenimiento",
        icon: "checkCircle",
        title: "Mantenimiento continuo",
        description: "Revisiones periódicas para comprobar que tu página sigue funcionando correctamente.",
      },
      {
        id: "errores",
        icon: "sliders",
        title: "Corrección de errores",
        description:
          "Solución de bugs, formularios, enlaces, fallos visuales o responsive y problemas después de actualizaciones.",
      },
      {
        id: "contenido",
        icon: "layout",
        title: "Cambios de contenido",
        description:
          "Actualización de textos, imágenes, precios, horarios, productos, servicios, información, botones y enlaces.",
      },
      {
        id: "mejoras",
        icon: "trendingUp",
        title: "Mejoras continuas",
        description:
          "Mejoras de experiencia de uso, diseño, navegación, conversiones, responsive y pequeñas funcionalidades.",
      },
      {
        id: "automatizacion",
        icon: "zap",
        title: "Automatización",
        description:
          "Formularios, mensajes, integraciones, contacto, reservas, solicitudes y procesos internos más ágiles.",
      },
      {
        id: "rendimiento",
        icon: "gauge",
        title: "Rendimiento",
        description:
          "Optimización de velocidad, tiempos de carga, rendimiento móvil, imágenes y código.",
      },
      {
        id: "seo",
        icon: "search",
        title: "SEO técnico",
        description:
          "Revisión de metadata, indexación, sitemap, robots, estructura HTML y rendimiento.",
      },
      {
        id: "estabilidad",
        icon: "shield",
        title: "Estabilidad técnica",
        description:
          "Revisión de hosting, dominio, DNS, SSL y publicación cuando corresponda a tu proyecto.",
      },
    ],
    plansTitle: "Planes mensuales",
    plansDescription: "Elige el nivel de acompañamiento que necesitas. Si tu solicitud no encaja en un plan, cotizamos según el alcance y la gravedad, con un monto mínimo acordado antes de comenzar.",
    plans: [
      {
        id: "esencial",
        name: "Soporte Esencial",
        price: "$50",
        cadence: "al mes",
        description: "Cambios constantes de contenido, imágenes, textos, precios, horarios, enlaces y ajustes pequeños para mantener tu web al día.",
      },
      {
        id: "profesional",
        name: "Soporte Profesional",
        price: "$100",
        cadence: "al mes",
        description: "Para un remaster mensual: rediseños, mejoras importantes, optimización continua y cambios más amplios según lo que tu negocio necesite.",
      },
      {
        id: "integral",
        name: "Soporte Integral",
        price: "Gratis",
        cadence: "",
        description: "Puedes delegarnos la gestión técnica de tu web, sus mejoras, optimizaciones y automatizaciones.",
      },
    ],
    warning: "Importante: si no tienes un plan y tu web se daña, se corrompe por un cambio del mismo cliente, o un cliente quiere hacer un cambio, la reparación o la solicitud se cotiza aparte con un monto mínimo según la gravedad o el cambio.",
    contactTitle: "¿Tu web necesita atención?",
    contactDescription:
      "Si ya eres cliente y tienes un error, una caída, un formulario que dejó de funcionar, problemas con dominio o hosting, o un cambio urgente, cuéntame qué necesitas. Si no eliges un plan, te envío una cotización con el mínimo correspondiente al trabajo.",
    contactCta: "Solicitar soporte",
    contactMessage: "Hola, necesito soporte para mi página web.",
  },
  en: {
    heroEyebrow: "Services",
    heroTitle: "Web support and maintenance",
    heroDescription:
      "Your website doesn't end when we launch it. Choose a monthly plan or request one-time help based on what you need.",
    title: "Support and maintenance",
    tagline: "Your website doesn't end when we launch it.",
    description:
      "With monthly plans, I keep looking after, updating and improving your website to keep it stable. You focus on your business while I take care of the technical side.",
    includes: [
      {
        id: "mantenimiento",
        icon: "checkCircle",
        title: "Ongoing maintenance",
        description: "Regular checks to make sure your website keeps working correctly.",
      },
      {
        id: "errores",
        icon: "sliders",
        title: "Bug fixes",
        description:
          "Fixes for bugs, forms, links, visual or responsive issues and problems after updates.",
      },
      {
        id: "contenido",
        icon: "layout",
        title: "Content updates",
        description:
          "Updates to text, images, prices, opening hours, products, services, information, buttons and links.",
      },
      {
        id: "mejoras",
        icon: "trendingUp",
        title: "Continuous improvements",
        description:
          "Improvements to user experience, design, navigation, conversions, responsive layouts and small features.",
      },
      {
        id: "automatizacion",
        icon: "zap",
        title: "Automation",
        description:
          "Smoother forms, messages, integrations, contact, bookings, requests and internal processes.",
      },
      {
        id: "rendimiento",
        icon: "gauge",
        title: "Performance",
        description: "Optimization of speed, load times, mobile performance, images and code.",
      },
      {
        id: "seo",
        icon: "search",
        title: "Technical SEO",
        description: "Review of metadata, indexing, sitemap, robots, HTML structure and performance.",
      },
      {
        id: "estabilidad",
        icon: "shield",
        title: "Technical stability",
        description: "Review of hosting, domain, DNS, SSL and deployment when relevant to your project.",
      },
    ],
    plansTitle: "Monthly plans",
    plansDescription: "Choose the level of support you need. If your request does not fit a plan, I will quote it according to its scope and severity, with a minimum agreed before starting.",
    plans: [
      {
        id: "esencial",
        name: "Essential Support",
        price: "$50",
        cadence: "per month",
        description: "For ongoing content changes, images, text, prices, hours, links and small adjustments to keep your website current.",
      },
      {
        id: "profesional",
        name: "Professional Support",
        price: "$100",
        cadence: "per month",
        description: "For a monthly remaster: redesigns, major improvements, continuous optimization and broader changes as your business needs them.",
      },
      {
        id: "integral",
        name: "Comprehensive Support",
        price: "Free",
        cadence: "",
        description: "Delegate your website's technical management, improvements, optimization and automation to us.",
      },
    ],
    warning: "Important: without a plan, repairs after damage, hacking, corruption or a problematic change are quoted separately with a minimum fee based on severity.",
    contactTitle: "Does your website need attention?",
    contactDescription:
      "If you're an existing client with an error, an outage, a broken form, domain or hosting problems, or an urgent change, tell me what you need. If you do not choose a plan, I will quote the work with its applicable minimum.",
    contactCta: "Request support",
    contactMessage: "Hi, I need support for my website.",
  },
};
