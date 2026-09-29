# Rapaz · Estudio jurídico penal (demo)

Landing page demo para un estudio de abogados penalistas ficticio.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) · Motion (Framer Motion) · React Hook Form + Zod.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # producción
```

## Identidad

- **Isotipo:** cabeza de halcón peregrino (SVG propio en `src/components/brand/`). En el hero se dibuja al cargar y la pupila sigue el cursor.
- **Paleta (plumaje del peregrino):** tinta `#121a20`, pizarra `#2b3943`, plumaje `#5d6c76`, niebla `#d9dedd`, papel `#f3f4f1`, cera `#e0ab26`.
- **Tipografía:** Bodoni Moda (títulos) · Hanken Grotesk (texto) · IBM Plex Mono (referencias legales y etiquetas).

## Estructura

```
src/app/            layout (SEO, JSON-LD LegalService, fuentes), page, server action del formulario
src/components/brand  logo estático + halcón animado
src/components/site   header, hero, urgencia, áreas, método, estudio, FAQ, contacto, footer, WhatsApp
src/lib/site.ts       TODO el contenido editable (textos, teléfonos, áreas, equipo, FAQ)
```

## Para pasar a producción

- Conectar el envío del formulario (`src/app/actions.ts`) a un proveedor de correo con la API key en `.env` y agregar rate limiting.
- Reemplazar teléfono, dirección, correo y equipo en `src/lib/site.ts` (hoy son datos ficticios).
- Agregar fotos reales del equipo con `next/image` y una imagen Open Graph (`src/app/opengraph-image.png`).
- Ya incluye: headers de seguridad, validación en servidor, honeypot anti-spam, `prefers-reduced-motion`, foco visible y skip link.
