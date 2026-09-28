export const siteConfig = {
  name: "Possible",
  legalName: "Possible",
  tagline: "Tu propia web no debería ser difícil ni cara. En Possible, hacer crecer tu negocio sí es posible.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://possible.cr",

  // --- Contacto ------------------------------------------------------------
  email: "contact.possible.cr@gmail.com",
  whatsappNumber: "50662037705", // Solo dígitos, con código de país.
  phone: "+50662037705",
  phoneDisplay: "+506 6203 7705",

  // --- Ubicación / SEO local ------------------------------------------------
  // Completa cuando Possible defina estos datos.
  country: "Costa Rica",
  region: "", // Provincia, ej: "Guanacaste"
  city: "", // Ciudad, ej: "Santa Cruz"
  address: "",
  postalCode: "",
  areaServed: ["Costa Rica"],
  openingHours: "", // Ej: "Lun–Vie 8:00–17:00"
  mapsEmbedUrl: "", // URL de embed de Google Maps
  googleBusinessProfile: "", // URL de Google Business Profile

  // --- Redes sociales ---------------------------------------------------------
  social: {
    instagram: "https://www.instagram.com/possible.cr/",
    facebook: "",
    linkedin: "",
    x: "",
  },
} as const;

export const defaultMetadata = {
  title: "Crea tu propia página web profesional | Possible",
  description:
    "Crea tu propia página web profesional sin complicaciones ni costos excesivos. En Possible diseñamos sitios web, tiendas y sistemas digitales para hacer crecer tu negocio en Costa Rica.",
  keywords: ["crear página web", "página web profesional", "diseño web Costa Rica", "desarrollo web para negocios", "comprar página web", "sitio web para empresas", "sistemas web empresariales"],
} as const;
