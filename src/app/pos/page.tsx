"use client";

import { useLanguage } from "@/i18n/provider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";

const content = {
  es: {
    eyebrow: "Sistemas POS · Punto de venta",
    title: "Vende más rápido y controla tu negocio desde un solo lugar.",
    description: "Un sistema POS diseñado para tiendas, pulperías, boutiques, cafeterías y comercios que necesitan cobrar, controlar inventario y entender sus números sin complicaciones.",
    cta: "Cotizar mi sistema POS",
    benefitsTitle: "Todo lo que tu punto de venta necesita",
    benefits: [
      ["layout", "Punto de venta ágil", "Registra ventas, aplica descuentos y cobra con rapidez desde cualquier dispositivo."],
      ["package", "Inventario en tiempo real", "Controla existencias, mínimos, entradas y salidas para evitar quiebres de stock."],
      ["users", "Clientes y proveedores", "Guarda información, historial de compras y datos útiles para atender mejor."],
      ["trendingUp", "Ventas y ganancias", "Consulta ingresos, productos más vendidos y resultados por periodo."],
      ["barChart", "Reportes claros", "Obtén reportes de caja, ventas e inventario para tomar decisiones con confianza."],
      ["shield", "Usuarios y permisos", "Define accesos para cajeros, administradores y propietarios."],
      ["zap", "Automatización", "Reduce tareas manuales con alertas, cierres de caja y procesos conectados."],
      ["globe", "Acceso desde cualquier lugar", "Tu operación disponible en computadora, tablet o teléfono."],
    ] as const,
    scopeTitle: "Elige el alcance de tu sistema",
    scopes: [
      ["Inicio", "$299", "Operación esencial para comenzar a vender con orden y control.", ["Punto de venta ágil", "Catálogo centralizado de productos", "Control de existencias", "Cierres de caja precisos", "Instalación en cualquier computadora", "Acceso seguro desde navegador"]],
      ["Crecimiento", "$499", "Más visibilidad y control para negocios en expansión.", ["Gestión de clientes y proveedores", "Reportes comerciales detallados", "Control de compras y abastecimiento", "Usuarios y permisos por rol", "Alertas de inventario", "Instalación en varias máquinas", "Respaldo y sincronización de datos"]],
      ["A la medida", "Cotización", "Una plataforma diseñada alrededor de los procesos específicos de tu negocio.", ["Facturación electrónica", "Integración con dispositivos y periféricos", "Módulos personalizados", "Automatización de procesos", "Soporte prioritario", "Despliegue en cualquier equipo", "Configuración de red y sucursales"]],
    ] as const,
  },
  en: {
    eyebrow: "POS systems · Point of sale",
    title: "Sell faster and run your business from one place.",
    description: "A POS system designed for shops, boutiques, cafés and retailers that need to take payments, control inventory and understand their numbers without complexity.",
    cta: "Get my POS quote",
    benefitsTitle: "Everything your point of sale needs",
    benefits: [
      ["layout", "Fast point of sale", "Register sales, apply discounts and take payments quickly from any device."],
      ["package", "Real-time inventory", "Track stock, minimums, purchases and sales to prevent shortages."],
      ["users", "Customers and suppliers", "Keep useful information and purchase history to serve people better."],
      ["trendingUp", "Sales and profits", "See revenue, top products and results by period."],
      ["barChart", "Clear reports", "Get cash, sales and inventory reports for confident decisions."],
      ["shield", "Users and permissions", "Set access levels for cashiers, managers and owners."],
      ["zap", "Automation", "Reduce manual work with alerts, cash closing and connected processes."],
      ["globe", "Access anywhere", "Keep your operation available on computer, tablet or phone."],
    ] as const,
    scopeTitle: "Choose your system scope",
    scopes: [
      ["Starter", "$299", "Sales, products, basic inventory and cash closing.", ["Fast point of sale", "Product catalog", "Basic inventory", "Cash closing", "Install on any computer", "Browser access"]],
      ["Growth", "$499", "Everything above plus customers, suppliers, reports and users.", ["Customers and suppliers", "Sales reports", "Purchase control", "Users with permissions", "Inventory alerts", "Install across multiple machines", "Backup and sync"]],
      ["Custom", "Quote", "Integrations, electronic invoicing and modules specific to your business.", ["Electronic invoicing", "Device integrations", "Custom modules", "Automations", "Priority support", "Deploy on any device", "Network and branch setup"]],
    ] as const,
  },
} as const;

export default function PosPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const benefitIcons = ["layout", "trendingUp", "users", "shield", "barChart"] as const;
  return (
    <main className="bg-black">
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_24rem_at_15%_-20%,rgba(22,139,255,0.16),transparent),radial-gradient(36rem_22rem_at_90%_-10%,rgba(138,0,255,0.16),transparent)]" />
        <Container className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gradient">{t.eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-body sm:text-lg">{t.description}</p>
          <div className="mt-8"><Button href="/#contacto" size="lg">{t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button></div>
        </Container>
      </section>
      <section className="bg-surface py-20 sm:py-24"><Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.benefitsTitle}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.benefits.map(([icon, title, description]) => <article key={title} className="rounded-2xl border border-line bg-card p-6 shadow-soft"><span className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-300"><DynamicIcon name={icon} className="size-5" /></span><h3 className="mt-4 text-[15px] font-semibold text-strong">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-faint">{description}</p></article>)}</div>
      </Container></section>
      <section className="bg-page py-20 sm:py-24"><Container><h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.scopeTitle}</h2><div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">{t.scopes.map(([name, price, description, benefits], i) => <article key={name} className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${i === 1 ? "border-brand-400/60 bg-brand-tint shadow-[0_0_60px_rgba(138,0,255,0.2)]" : i === 2 ? "border-brand-300/60 bg-gradient-to-br from-brand-tint to-card shadow-[0_0_60px_rgba(0,123,255,0.18)]" : "border-white/10 bg-card"}`}>{i === 1 && <span className="mb-5 w-fit rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">{lang === "es" ? "Más popular" : "Most popular"}</span>}{i === 2 && <span className="mb-5 flex w-fit items-center gap-2 rounded-full border border-brand-300/40 bg-brand-tint px-3 py-1 text-xs font-bold text-brand-100"><DynamicIcon name="zap" className="size-3.5" />{lang === "es" ? "Máxima personalización" : "Maximum customization"}</span>}<p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">{name}</p><p className={`mt-3 font-black tracking-tight ${i === 2 ? "text-5xl text-brand-100" : "text-4xl text-white"}`}>{price}</p><div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-body"><DynamicIcon name="clock" className="size-4 text-neon-blue" />{lang === "es" ? "Implementación: " : "Delivery: "}<span className="font-bold text-white">{i === 0 ? "1–2 semanas" : i === 1 ? "2–3 semanas" : lang === "es" ? "Según alcance" : "Based on scope"}</span></div><p className="mt-5 min-h-12 text-sm leading-relaxed text-body">{description}</p>{i === 2 && <p className="mt-4 border-l-2 border-neon-pink/70 pl-3 text-sm font-medium text-brand-100">{lang === "es" ? "Una operación conectada, preparada para crecer contigo." : "A connected operation ready to grow with you."}</p>}<ul className="mt-7 flex-1 space-y-3 text-sm text-body">{benefits.map((benefit, benefitIndex) => <li key={benefit} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand-300"><DynamicIcon name={benefitIcons[benefitIndex % benefitIcons.length]} className="size-3.5" /></span><span>{benefit}</span></li>)}</ul><Button href="/#contacto" className="mt-8 w-full justify-center" variant={i > 0 ? "primary" : "secondary"}>{i === 2 ? (lang === "es" ? "Cotizar mi sistema POS" : "Quote my POS system") : t.cta}<DynamicIcon name="arrowRight" className="size-4" /></Button></article>)}</div></Container></section>
      <FinalCta />
      <ContactSection />
    </main>
  );
}
