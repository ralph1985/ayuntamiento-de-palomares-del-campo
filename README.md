# Ayuntamiento de Palomares del Campo

Sitio municipal muy básico construido con Astro (v5.16.0) y estilos iniciales
con Tailwind (v3.4.15). Colores diferenciados en cabecera, cuerpo y pie para
tener una estructura clara desde el inicio.

## Scripts

- `npm run dev`: servidor de desarrollo de Astro.
- `npm run build`: genera los archivos estáticos.
- `npm run preview`: sirve la build generada.

## Estructura mínima

- `src/pages/index.astro`: página inicial con el contenido principal.
- `src/layouts/BaseLayout.astro`: layout común con cabecera, cuerpo y footer.
- `astro.config.mjs`: configuración básica de Astro.
- `tailwind.config.mjs` y `postcss.config.cjs`: configuración mínima para Tailwind.
- `src/styles/global.css`: estilos base con Tailwind.

## Notas

- Tailwind se gestiona como dependencia de desarrollo y se procesa vía PostCSS.
