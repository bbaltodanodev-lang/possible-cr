import type { Locale } from "@/i18n/dictionaries";

export type ExtraServiceSlug = "crm" | "automatizacion-whatsapp" | "apps-moviles";

export interface ExtraServiceContent {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  benefitsTitle: string;
  /** [icono, título, descripción] */
  benefits: readonly (readonly [string, string, string])[];
  scopeTitle: string;
  /** [nombre, precio, descripción, funciones] — precios a convenir hasta que el dueño los defina. */
  scopes: readonly (readonly [string, string, string, readonly string[]])[];
  deliveryLabel: string;
  delivery: string;
  customBadge: string;
  customNote: string;
  customCta: string;
}

const quoteEs = "A convenir";
const quoteEn = "To be agreed";

export const extraServices: Record<ExtraServiceSlug, Record<Locale, ExtraServiceContent>> = {
  crm: {
    es: {
      eyebrow: "CRM · Gestión de clientes",
      title: "Todos tus clientes y oportunidades en un solo lugar.",
      description: "Un CRM a la medida para registrar clientes, dar seguimiento a cada oportunidad de venta y saber en qué etapa está cada negocio, sin hojas de cálculo dispersas.",
      cta: "Cotizar mi CRM",
      benefitsTitle: "Lo que tu CRM puede incluir",
      benefits: [
        ["users", "Ficha de cada cliente", "Datos de contacto, historial de compras, notas y documentos en un mismo lugar."],
        ["target", "Embudo de ventas", "Visualiza cada oportunidad por etapas y sabe qué falta para cerrarla."],
        ["clock", "Seguimiento y recordatorios", "Tareas y recordatorios para no olvidar llamadas, cotizaciones ni visitas."],
        ["messageSquare", "Historial de comunicación", "Registra conversaciones, correos y acuerdos con cada cliente."],
        ["barChart", "Reportes de ventas", "Consulta resultados por vendedor, periodo o etapa del embudo."],
        ["shield", "Usuarios y permisos", "Define qué ve y qué puede editar cada miembro del equipo."],
        ["zap", "Automatización", "Asignaciones, avisos internos y tareas que se crean solas."],
        ["globe", "Acceso desde cualquier lugar", "Disponible en computadora, tablet o teléfono desde el navegador."],
      ],
      scopeTitle: "Elige el alcance de tu CRM",
      scopes: [
        ["Inicio", quoteEs, "Lo esencial para ordenar tus clientes y oportunidades.", ["Base de datos de clientes", "Embudo de ventas", "Tareas y recordatorios", "Acceso seguro desde navegador"]],
        ["Crecimiento", quoteEs, "Más control para equipos de venta en crecimiento.", ["Todo lo del plan Inicio", "Reportes de ventas", "Usuarios y permisos por rol", "Historial de comunicación", "Importación de clientes existentes"]],
        ["A la medida", quoteEs, "Un CRM diseñado alrededor de los procesos de tu negocio.", ["Módulos personalizados", "Integraciones con otros sistemas", "Automatización de procesos", "Integración con WhatsApp Business", "Soporte prioritario"]],
      ],
      deliveryLabel: "Implementación: ",
      delivery: "Según alcance",
      customBadge: "Máxima personalización",
      customNote: "Tus clientes organizados, tu equipo en la misma página.",
      customCta: "Cotizar mi CRM",
    },
    en: {
      eyebrow: "CRM · Customer management",
      title: "All your customers and opportunities in one place.",
      description: "A custom CRM to record customers, follow up on every sales opportunity and know which stage each deal is in, without scattered spreadsheets.",
      cta: "Get my CRM quote",
      benefitsTitle: "What your CRM can include",
      benefits: [
        ["users", "Customer profiles", "Contact details, purchase history, notes and documents in one place."],
        ["target", "Sales pipeline", "See every opportunity by stage and what is left to close it."],
        ["clock", "Follow-ups and reminders", "Tasks and reminders so no call, quote or visit is forgotten."],
        ["messageSquare", "Communication history", "Log conversations, emails and agreements with each customer."],
        ["barChart", "Sales reports", "Review results by salesperson, period or pipeline stage."],
        ["shield", "Users and permissions", "Decide what each team member can see and edit."],
        ["zap", "Automation", "Assignments, internal alerts and tasks created automatically."],
        ["globe", "Access from anywhere", "Available on computer, tablet or phone from the browser."],
      ],
      scopeTitle: "Choose your CRM scope",
      scopes: [
        ["Starter", quoteEn, "The essentials to organize customers and opportunities.", ["Customer database", "Sales pipeline", "Tasks and reminders", "Secure browser access"]],
        ["Growth", quoteEn, "More control for growing sales teams.", ["Everything in Starter", "Sales reports", "Role-based users and permissions", "Communication history", "Import existing customers"]],
        ["Custom", quoteEn, "A CRM designed around your business processes.", ["Custom modules", "Integrations with other systems", "Process automation", "WhatsApp Business integration", "Priority support"]],
      ],
      deliveryLabel: "Delivery: ",
      delivery: "Based on scope",
      customBadge: "Maximum customization",
      customNote: "Your customers organized, your team on the same page.",
      customCta: "Quote my CRM",
    },
  },
  "automatizacion-whatsapp": {
    es: {
      eyebrow: "Automatización de WhatsApp",
      title: "Atiende a tus clientes por WhatsApp sin estar pegado al teléfono.",
      description: "Configuramos la API oficial de WhatsApp Business para tu negocio: respuestas automáticas, catálogo, menús de atención y avisos a clientes que aceptaron recibirlos, siguiendo las políticas de WhatsApp.",
      cta: "Cotizar mi automatización",
      benefitsTitle: "Lo que puede hacer tu WhatsApp",
      benefits: [
        ["zap", "Respuestas automáticas", "Mensajes de bienvenida, fuera de horario y preguntas frecuentes respondidas al instante."],
        ["layout", "Menús de atención", "Opciones para que cada cliente llegue rápido a lo que busca."],
        ["package", "Catálogo de productos", "Muestra productos y servicios directamente en WhatsApp."],
        ["checkCircle", "Avisos con permiso", "Confirmaciones, recordatorios y avisos solo para clientes que dieron su consentimiento."],
        ["users", "Paso a una persona", "La conversación pasa a tu equipo cuando el cliente lo necesita."],
        ["database", "Conexión con tus sistemas", "Integración con tu CRM, sistema o página web."],
        ["shield", "API oficial", "Implementación con la API oficial de WhatsApp Business y sus plantillas aprobadas."],
        ["barChart", "Medición", "Conoce cuántas conversaciones atiendes y qué preguntan tus clientes."],
      ],
      scopeTitle: "Elige el alcance de tu automatización",
      scopes: [
        ["Inicio", quoteEs, "Respuestas automáticas para empezar a atender mejor.", ["Configuración de WhatsApp Business", "Mensaje de bienvenida y fuera de horario", "Respuestas a preguntas frecuentes", "Menú de atención básico"]],
        ["Crecimiento", quoteEs, "Más canales de atención y avisos para tus clientes.", ["Todo lo del plan Inicio", "API oficial de WhatsApp Business", "Catálogo de productos", "Avisos con consentimiento del cliente", "Paso de la conversación a tu equipo"]],
        ["A la medida", quoteEs, "Una automatización conectada con los procesos de tu negocio.", ["Integración con CRM o sistemas", "Flujos personalizados", "Reservas o pedidos", "Reportes de conversaciones", "Soporte prioritario"]],
      ],
      deliveryLabel: "Implementación: ",
      delivery: "Según alcance",
      customBadge: "Máxima personalización",
      customNote: "Atención rápida, respetando las políticas de WhatsApp.",
      customCta: "Cotizar mi automatización",
    },
    en: {
      eyebrow: "WhatsApp automation",
      title: "Serve your customers on WhatsApp without being glued to your phone.",
      description: "We set up the official WhatsApp Business API for your business: automatic replies, catalog, service menus and notifications to customers who agreed to receive them, following WhatsApp policies.",
      cta: "Get my automation quote",
      benefitsTitle: "What your WhatsApp can do",
      benefits: [
        ["zap", "Automatic replies", "Welcome and after-hours messages and instant answers to frequent questions."],
        ["layout", "Service menus", "Options that take each customer straight to what they need."],
        ["package", "Product catalog", "Show products and services directly in WhatsApp."],
        ["checkCircle", "Opt-in notifications", "Confirmations, reminders and notices only for customers who gave consent."],
        ["users", "Hand-off to a person", "The conversation moves to your team when the customer needs it."],
        ["database", "Connected to your systems", "Integration with your CRM, system or website."],
        ["shield", "Official API", "Built on the official WhatsApp Business API and its approved templates."],
        ["barChart", "Insights", "Know how many conversations you handle and what customers ask."],
      ],
      scopeTitle: "Choose your automation scope",
      scopes: [
        ["Starter", quoteEn, "Automatic replies to start serving customers better.", ["WhatsApp Business setup", "Welcome and after-hours messages", "Answers to frequent questions", "Basic service menu"]],
        ["Growth", quoteEn, "More service options and notifications for your customers.", ["Everything in Starter", "Official WhatsApp Business API", "Product catalog", "Opt-in customer notifications", "Hand-off to your team"]],
        ["Custom", quoteEn, "Automation connected to your business processes.", ["CRM or system integration", "Custom flows", "Bookings or orders", "Conversation reports", "Priority support"]],
      ],
      deliveryLabel: "Delivery: ",
      delivery: "Based on scope",
      customBadge: "Maximum customization",
      customNote: "Fast service that respects WhatsApp policies.",
      customCta: "Quote my automation",
    },
  },
  "apps-moviles": {
    es: {
      eyebrow: "Apps móviles de servicios",
      title: "Tu servicio en el teléfono de tus clientes.",
      description: "Diseñamos y desarrollamos apps móviles para negocios de servicios: reservas, pedidos, seguimiento y notificaciones para que tus clientes te encuentren y te contacten desde su teléfono.",
      cta: "Cotizar mi app",
      benefitsTitle: "Lo que tu app puede incluir",
      benefits: [
        ["devices", "Android y iPhone", "Una app pensada para funcionar en los teléfonos de tus clientes."],
        ["clock", "Reservas y citas", "Tus clientes agendan y tú recibes cada reserva organizada."],
        ["package", "Pedidos y catálogo", "Muestra tus servicios o productos y recibe pedidos desde la app."],
        ["messageSquare", "Notificaciones", "Avisos de confirmación, recordatorios y novedades para tus clientes."],
        ["users", "Cuentas de usuario", "Registro e historial de cada cliente dentro de la app."],
        ["layout", "Panel de administración", "Gestiona contenido, reservas y pedidos desde un panel web."],
        ["shield", "Seguridad", "Buenas prácticas de seguridad y protección de datos."],
        ["rocket", "Publicación", "Acompañamiento para publicar la app en las tiendas."],
      ],
      scopeTitle: "Elige el alcance de tu app",
      scopes: [
        ["Inicio", quoteEs, "Una app esencial para presentar tu servicio y recibir contactos.", ["Diseño personalizado", "Información de servicios", "Contacto y WhatsApp", "Notificaciones básicas"]],
        ["Crecimiento", quoteEs, "Más funciones para atender y fidelizar clientes.", ["Todo lo del plan Inicio", "Reservas o pedidos", "Cuentas de usuario", "Panel de administración", "Publicación en tiendas"]],
        ["A la medida", quoteEs, "Una app diseñada alrededor de tu servicio.", ["Funciones personalizadas", "Integraciones con tus sistemas", "Pagos o facturación", "Analíticas", "Soporte prioritario"]],
      ],
      deliveryLabel: "Implementación: ",
      delivery: "Según alcance",
      customBadge: "Máxima personalización",
      customNote: "Tu servicio, siempre a un toque de distancia.",
      customCta: "Cotizar mi app",
    },
    en: {
      eyebrow: "Mobile service apps",
      title: "Your service on your customers' phones.",
      description: "We design and build mobile apps for service businesses: bookings, orders, tracking and notifications so customers can find and contact you from their phone.",
      cta: "Get my app quote",
      benefitsTitle: "What your app can include",
      benefits: [
        ["devices", "Android and iPhone", "An app designed to run on your customers' phones."],
        ["clock", "Bookings and appointments", "Customers book and you receive every booking organized."],
        ["package", "Orders and catalog", "Show your services or products and receive orders in the app."],
        ["messageSquare", "Notifications", "Confirmations, reminders and news for your customers."],
        ["users", "User accounts", "Sign-up and history for each customer inside the app."],
        ["layout", "Admin panel", "Manage content, bookings and orders from a web panel."],
        ["shield", "Security", "Security and data protection best practices."],
        ["rocket", "Publishing", "Guidance to publish the app in the stores."],
      ],
      scopeTitle: "Choose your app scope",
      scopes: [
        ["Starter", quoteEn, "An essential app to present your service and get contacts.", ["Custom design", "Service information", "Contact and WhatsApp", "Basic notifications"]],
        ["Growth", quoteEn, "More features to serve and retain customers.", ["Everything in Starter", "Bookings or orders", "User accounts", "Admin panel", "Store publishing"]],
        ["Custom", quoteEn, "An app designed around your service.", ["Custom features", "Integrations with your systems", "Payments or invoicing", "Analytics", "Priority support"]],
      ],
      deliveryLabel: "Delivery: ",
      delivery: "Based on scope",
      customBadge: "Maximum customization",
      customNote: "Your service, always one tap away.",
      customCta: "Quote my app",
    },
  },
};
