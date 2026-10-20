/** URL pública de producción. Se puede sustituir con NEXT_PUBLIC_SITE_URL al compilar. */
export const PRODUCTION_URL = "https://possible-cr.vercel.app";

export const siteConfig = {
  name: "Possible",
  legalName: "Possible",
  tagline: "Tu propia web no debería ser difícil ni cara. En Possible, hacer crecer tu negocio sí es posible.",
  alternateName: ["possible.cr", "Possible CR", "Possible Studio", "Possible Costa Rica"],
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
    { name: "Possible Voice", url: "https://possiblevoice-app.vercel.app/" },
  ],
} as const;

export const defaultMetadata = {
  title: "Possible (possible.cr) | Páginas web, apps y sistemas en Costa Rica",
  description:
    "possible.cr es el estudio de software de Costa Rica que crea páginas web profesionales, apps móviles como Possible Voice, sistemas, CRM, POS y automatización de WhatsApp para negocios.",
  keywords: ["possible.cr", "Possible", "Possible Studio", "Possible Voice", "Possible Costa Rica", "Possible CR", "páginas web Costa Rica", "apps móviles Costa Rica", "CRM Costa Rica", "sistema POS Costa Rica", "automatización WhatsApp Costa Rica", "crear página web", "página web profesional", "diseño web Costa Rica", "desarrollo web para negocios", "comprar página web", "sitio web para empresas", "sistemas web empresariales"],
} as const;
