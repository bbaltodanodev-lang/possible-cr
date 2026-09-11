# BM Solutions

Sitio web empresarial de **BM Solutions**: una empresa de tecnología que desarrolla **sistemas web empresariales** y **páginas web profesionales** para pequeños y medianos negocios.

Diseñado como landing page de alta conversión: rápido, minimalista, profesional, accesible y optimizado para SEO técnico (Core Web Vitals, schema.org, metadata, sitemap, robots).

---

## Tecnologías

- **Next.js** (App Router) — React 19, server components
- **TypeScript** — tipado estricto
- **Tailwind CSS v4** — sistema de diseño con tokens
- **next/font** — fuente Inter autooptimizada (sin peticiones externas)

Sin librerías innecesarias: iconos SVG propios, carrusel propio, formulario propio.

---

## Estructura

```
src/
  app/                 # Layout, página principal, sitemap, robots, manifest, 404
  components/
    layout/            # Navbar, Footer, botón WhatsApp
    sections/          # Cada sección de la landing
    ui/                # Button, Container, SectionHeader, ServiceCard, Icons…
  data/                # TODA la configuración y contenido editable
  lib/                 # Utilidades y helpers de schema.org
  types/               # Tipos compartidos
```

Principio clave: **todo el contenido editable vive en `src/data/`**. Editar el sitio casi nunca requiere tocar componentes.

---

## Instalación y desarrollo

Requisitos: Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

Comandos:

| Comando            | Descripción                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Servidor de desarrollo         |
| `npm run build`    | Build de producción            |
| `npm run start`    | Servir el build                |
| `npm run lint`     | ESLint                         |
| `npm run typecheck`| TypeScript sin emitir          |

---

## Variables de entorno

Copia `.env.example` → `.env.local` y ajusta:

- `NEXT_PUBLIC_SITE_URL` — dominio público del sitio.
- `NEXT_PUBLIC_CONTACT_ENDPOINT` — endpoint opcional del formulario de contacto. Si queda vacío, se usa `/api/contact`, que reenvía las solicitudes al correo de BM Solutions.

> Nunca subas `.env.local` ni secretos al repositorio.

---

## Cómo cambiar el contenido

### Datos de contacto y empresa
Edita `src/data/site.ts`:

- Email, teléfono/WhatsApp (`whatsappNumber`: solo dígitos con código de país, ej. `50688888888`; vacío oculta el botón flotante y las opciones de WhatsApp)
- Ciudad, provincia, dirección, horarios, área de servicio (SEO local)
- Redes sociales (Instagram, Facebook, LinkedIn, X)

### Proyectos
Edita `src/data/projects.ts`. La sección muestra actualmente 8 proyectos con capturas
(archivos en `public/projects/`, desde `Imágenes/Proyectos`). Los nombres son provisionales
("Proyecto 01…08"): actualiza `name`, `category`, `description` y `technologies` con los
datos reales de cada captura.

Para agregar un proyecto: copia la captura a `public/projects/` y agrega un elemento con
`image: "/projects/tu-captura.jpg"`.

> Si un proyecto no tiene `image`, se muestra una representación visual automática
> (`visual: "institutional" | "restaurant" | "local"`).

### Servicios, beneficios y proceso
Edita `src/data/services.ts`: funciones del sistema, personalización, beneficios, servicios web, diferenciador y pasos del proceso.

---

## Deployment

Compatible con **Vercel**, **Netlify** o cualquier servicio de Node.js:

1. Sube el proyecto a un repositorio (GitHub).
2. Configura las variables de entorno en la plataforma.
3. Build automático (`npm run build`).

Para un dominio propio, configura el dominio en la plataforma, actualiza `NEXT_PUBLIC_SITE_URL` y, si aplica, el `metadataBase` en `src/app/layout.tsx`.

---

## SEO

Ya implementado:

- Metadata completa (title template, description, canonical, Open Graph, Twitter)
- `sitemap.xml` y `robots.txt` generados
- Schema.org: `Organization`, `WebSite` y `Service` (sistemas web y páginas web)
- HTML semántico, un solo `h1`, headings ordenados
- Imagen Open Graph y apple-icon generados en `src/app/`
- **SEO local**: completa `city`, `region`, `address`, `areaServed` y `googleBusinessProfile` en `src/data/site.ts` (no se inventan datos)

---

## Performance y UX

- Contenido 100% pre-renderizado y disponible al instante (sin animaciones que oculten texto)
- Animaciones solo micro (hover, transiciones) y se desactivan con `prefers-reduced-motion`
- Imágenes: ninguna dependencia externa; los visuals del dashboard y proyectos son componentes ligeros
- Accesibilidad: skip-link, formulario con labels/errores, foco visible, `aria` mínima y pertinente, navegación por teclado

## Extensibilidad (futuro)

La arquitectura permite agregar sin reestructurar:

- Blog / casos de estudio (rutas en `app/`)
- Página detalle por proyecto
- Testimonios reales
- Multiidioma
- Login / dashboard de clientes
- CMS o analytics

---

© 2026 BM Solutions. Todos los derechos reservados.
