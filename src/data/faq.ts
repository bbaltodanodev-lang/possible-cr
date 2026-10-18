import type { Locale } from "@/i18n/dictionaries";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
}

/**
 * Preguntas frecuentes de la portada. Las respuestas resumen información que ya
 * publica la web (planes, precios de referencia, plazos y soporte). Si cambian
 * los planes en src/i18n, actualiza también estas respuestas.
 */
export const faqContent: Record<Locale, FaqContent> = {
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que nos preguntan sobre Possible",
    description: "Respuestas rápidas sobre nuestros servicios, precios de referencia y plazos.",
    items: [
      {
        question: "¿Qué hace Possible?",
        answer:
          "Possible crea páginas web profesionales, sistemas web empresariales y sistemas POS para negocios en Costa Rica. También ofrece planes de soporte y mantenimiento web.",
      },
      {
        question: "¿Cuánto cuesta una página web con Possible?",
        answer:
          "Como referencia, una landing page cuesta $119.99, una web profesional $249.99 y una web avanzada desde $600. El precio exacto depende de lo que necesite tu negocio y se confirma en una cotización sin compromiso.",
      },
      {
        question: "¿Cuánto tarda en estar lista mi página web?",
        answer:
          "La entrega estimada es de 1 a 2 semanas para una landing page, de 2 a 4 semanas para una web profesional y de 4 a 8 semanas para una web avanzada.",
      },
      {
        question: "¿Qué incluye un sistema empresarial?",
        answer:
          "Un sistema web a la medida para llevar ingresos, gastos, ganancias, clientes, inventario y reportes en un solo lugar. Los precios de referencia empiezan en $349.99 y todos los planes incluyen capacitación, documentación y soporte por 30 días tras la entrega.",
      },
      {
        question: "¿Possible desarrolla sistemas POS para comercios?",
        answer:
          "Sí. Desarrollamos sistemas de punto de venta para tiendas, pulperías, boutiques, cafeterías y comercios, con ventas, inventario, cierres de caja y reportes. El plan Inicio cuesta $299 y se implementa en 1 a 2 semanas.",
      },
      {
        question: "¿Ofrecen soporte después de publicar la web?",
        answer:
          "Sí. Todos los planes incluyen soporte por 30 días tras la entrega y, después, puedes elegir un plan mensual de soporte y mantenimiento o solicitar una atención puntual.",
      },
      {
        question: "¿Cómo empiezo un proyecto con Possible?",
        answer:
          "Escríbenos por el formulario de contacto, por correo o por WhatsApp. Hablamos sobre tu negocio, diseñamos la solución, la desarrollamos y la publicamos.",
      },
    ],
  },
  en: {
    eyebrow: "FAQ",
    title: "What people ask about Possible",
    description: "Quick answers about our services, reference prices and timelines.",
    items: [
      {
        question: "What does Possible do?",
        answer:
          "Possible builds professional websites, business web systems and POS systems for businesses in Costa Rica. It also offers web support and maintenance plans.",
      },
      {
        question: "How much does a website with Possible cost?",
        answer:
          "As a reference, a landing page costs $119.99, a professional website $249.99 and an advanced website starts at $600. The exact price depends on what your business needs and is confirmed in a no-obligation quote.",
      },
      {
        question: "How long does it take to build my website?",
        answer:
          "Estimated delivery is 1 to 2 weeks for a landing page, 2 to 4 weeks for a professional website and 4 to 8 weeks for an advanced website.",
      },
      {
        question: "What does a business system include?",
        answer:
          "A custom web system to track income, expenses, profits, customers, inventory and reports in one place. Reference prices start at $349.99 and every plan includes training, documentation and 30 days of support after delivery.",
      },
      {
        question: "Does Possible build POS systems for retailers?",
        answer:
          "Yes. We build point-of-sale systems for shops, boutiques, cafés and retailers, with sales, inventory, cash register closing and reports. The Starter plan costs $299 and is implemented in 1 to 2 weeks.",
      },
      {
        question: "Do you offer support after the website goes live?",
        answer:
          "Yes. Every plan includes 30 days of support after delivery, and afterwards you can choose a monthly support and maintenance plan or request one-off help.",
      },
      {
        question: "How do I start a project with Possible?",
        answer:
          "Write to us through the contact form, by email or on WhatsApp. We talk about your business, design the solution, build it and publish it.",
      },
    ],
  },
};
