export const siteConfig = {
  name: "BM Solutions",
  legalName: "BM Solutions",
  tagline: "Soluciones digitales para negocios que quieren crecer.",
  // Cambia esta URL por el dominio real cuando BM Solutions tenga uno.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bmsolutions.example.com",

  // --- Contacto ------------------------------------------------------------
  email: "bm.solutionscr@gmail.com",
  whatsappNumber: "50662037705", // Solo dígitos, con código de país.
  phone: "+50662037705",
  phoneDisplay: "+506 6203 7705",

  // --- Ubicación / SEO local ------------------------------------------------
  // Completa cuando BM Solutions defina estos datos.
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
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
  },
} as const;

export const defaultMetadata = {
  title: "BM Solutions — Sistemas web y páginas web profesionales",
  description:
    "BM Solutions desarrolla sistemas web y páginas web profesionales para pequeños y medianos negocios. Organiza tu negocio en un solo lugar y mejora tu presencia digital.",
} as const;
