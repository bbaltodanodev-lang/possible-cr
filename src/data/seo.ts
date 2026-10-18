export const googleSiteVerification = [
  "MNZZk3ehjQaq7t6UjNCt4FvMlTRUcXLvl_TLM1U6jiU", // Current Vercel site.
  "VIEnI8F9IotSMTC7BcvrAIEIQUskGs4GVJ5K6ZRN9cg", // Future possible.cr domain.
];

export const servicePageSeo = {
  "paginas-web": {
    "serviceType": "Diseño y desarrollo web",
    "title": "Páginas web profesionales en Costa Rica",
    "description": "Diseño y desarrollo de páginas web profesionales, rápidas y adaptadas a móviles para dar a conocer tu negocio y captar clientes en Costa Rica."
  },
  "sistemas": {
    "serviceType": "Desarrollo de sistemas web empresariales",
    "title": "Sistemas web empresariales en Costa Rica",
    "description": "Sistemas web personalizados para gestionar inventarios, ventas, clientes y reportes. Digitaliza los procesos de tu negocio con Possible en Costa Rica."
  },
  "pos": {
    "serviceType": "Sistemas de punto de venta (POS)",
    "title": "Sistemas POS y punto de venta en Costa Rica",
    "description": "Sistemas de punto de venta para comercios en Costa Rica. Gestiona ventas, inventario, caja y reportes desde una solución adaptada a tu negocio."
  },
  "soporte": {
    "serviceType": "Soporte y mantenimiento web",
    "title": "Soporte y mantenimiento web en Costa Rica",
    "description": "Soporte técnico y mantenimiento de sitios y sistemas web en Costa Rica. Mantén tu negocio actualizado y estable con el acompañamiento de Possible."
  },
  "crm": {
    "serviceType": "Desarrollo de CRM a la medida",
    "title": "CRM a la medida para negocios en Costa Rica",
    "description": "CRM a la medida para negocios en Costa Rica: clientes, embudo de ventas, seguimiento y reportes en un solo lugar. Ordena tus ventas con Possible."
  },
  "automatizacion-whatsapp": {
    "serviceType": "Automatización de WhatsApp Business",
    "title": "Automatización de WhatsApp Business en Costa Rica",
    "description": "Automatiza la atención por WhatsApp con la API oficial de WhatsApp Business: respuestas automáticas, catálogo y avisos con permiso. Possible, Costa Rica."
  },
  "apps-moviles": {
    "serviceType": "Desarrollo de apps móviles",
    "title": "Apps móviles de servicios en Costa Rica",
    "description": "Diseño y desarrollo de apps móviles para negocios de servicios en Costa Rica: reservas, pedidos y notificaciones para tus clientes. Cotiza con Possible."
  }
} as const;

/**
 * Fecha real del último cambio de contenido de cada ruta (AAAA-MM-DD).
 * Actualízala cuando cambie el contenido de la página: se publica como lastmod en el sitemap.
 */
export const pageLastModified = {
  "/": "2026-10-18",
  "/paginas-web": "2026-10-03",
  "/sistemas": "2026-10-03",
  "/pos": "2026-10-03",
  "/soporte": "2026-10-03",
  "/crm": "2026-10-18",
  "/automatizacion-whatsapp": "2026-10-18",
  "/apps-moviles": "2026-10-18",
} as const;

/** Clave pública de IndexNow; el mismo valor está en public/<clave>.txt. */
export const indexNowKey = "a014402f138ed22d114459717384c5a4";
