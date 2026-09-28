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
  title: "Possible | Sistemas web y páginas web profesionales",
  description:
    "Possible desarrolla sistemas web y páginas web profesionales para pequeños y medianos negocios. Organiza tu negocio en un solo lugar y mejora tu presencia digital.",
} as const;
