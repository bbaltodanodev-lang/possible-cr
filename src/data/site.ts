/** URL pública de producción. Se puede sustituir con NEXT_PUBLIC_SITE_URL al compilar. */
export const PRODUCTION_URL = "https://possible-cr.vercel.app";

export const siteConfig = {
  name: "Possible",
  legalName: "Possible",
  tagline: "Tu propia web no debería ser difícil ni cara. En Possible, hacer crecer tu negocio sí es posible.",
  alternateName: "Possible.cr",
  url: (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL).replace(/\/$/, ""),
  founder: {
    name: "Bernal Baltodano",
    url: "https://bbaltodano-portafolio.vercel.app/",
  },

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

  // --- Otras webs del dueño ----------------------------------------------------
  relatedSites: [
    { name: "Possible Voice", url: "https://possiblevoice-legal.vercel.app/" },
  ],
} as const;

export const defaultMetadata = {
  title: "Possible | Diseño web y sistemas en Costa Rica",
  description:
    "Possible diseña páginas web profesionales, sistemas empresariales y sistemas POS para negocios en Costa Rica. Rápidos, adaptados a móviles y a tu medida.",
  keywords: ["crear página web", "página web profesional", "diseño web Costa Rica", "desarrollo web para negocios", "comprar página web", "sitio web para empresas", "sistemas web empresariales"],
} as const;
