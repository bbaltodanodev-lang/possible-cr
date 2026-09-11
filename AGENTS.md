# BM Solutions — Guía rápida para agentes y desarrolladores

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Reglas del proyecto

- **Contenido editable en `src/data/`** (contacto, servicios, proyectos, navegación). NO hardcodear datos de negocio en componentes.
- **Tipado estricto** en TypeScript. Verifica siempre con `npm run typecheck`.
- **Sin dependencias innecesarias.** Iconos, carrusel y formulario son propios.
- **UX:** todo el contenido visible sin animaciones de entrada; nunca ocultar texto en espera de scroll.
- **Accesibilidad:** HTML semántico, labels reales, `prefers-reduced-motion`, foco visible.
- **SEO:** metadata, schema.org y `sitemap`/`robots` ya configurados en `src/app/`.

## Comandos

```bash
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción
npm run start      # servir build
npm run lint       # ESLint
npm run typecheck  # TypeScript --noEmit
```

## Cómo cambiar datos clave

| Qué | Dónde |
| --- | ----- |
| Email, WhatsApp, ubicación, redes | `src/data/site.ts` |
| Proyectos (agregar/quitar, imágenes) | `src/data/projects.ts` |
| Servicios, beneficios, proceso | `src/data/services.ts` |
| Metadata y schema.org | `src/app/layout.tsx` y `src/lib/seo.ts` |
| Colores y diseño (tokens) | `src/app/globals.css` |