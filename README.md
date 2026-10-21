# pedro.dev

Portfolio personal de **Pedro Espejo Pariani**, desarrollador Full Stack especializado en React, .NET y SQL Server.

Sitio en vivo: **https://pedroespejo.vercel.app**

Una sola página, sin router ni librerías de UI: tipografía propia, tema oscuro con acento verde terminal y todo el contenido declarado como datos en un archivo.

## Stack

- **React 19** (componentes funcionales, JSX)
- **Vite 8** para dev server y build
- **CSS propio** con custom properties: sin Tailwind, sin UI kit
- **Bun** como package manager y runner
- **ESLint** para lint

## Desarrollo

El proyecto vive en `portafolio/`. Desde esa carpeta:

```bash
bun install
bun run dev      # http://localhost:5173
bun run lint
bun run build
bun run preview
```

No hay script de test ni de typecheck (el proyecto es JS, no TS).

## Estructura

```
portafolio/
├── public/
│   ├── cv/                              # CV en PDF (ES / EN)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx                          # sitio completo + contenido
│   ├── App.css                          # layout y componentes
│   ├── index.css                        # tokens, fuentes y base
│   └── main.jsx                         # entry point
├── index.html
└── vercel.json
```

## Editar contenido

Todo el texto sale de arrays al principio de `portafolio/src/App.jsx`:

| Array | Qué controla |
| --- | --- |
| `experience` | Bullets del puesto en Sarsy S.R.L. |
| `projects` | Los tres proyectos (nombre, tipo, descripción, stack) |
| `stackGroups` | Grupos del stack en "Sobre mí" |
| `agenticSteps` | Los tres pasos de la sección "Forma de trabajo" |
| `cvFiles` | Tarjetas de descarga del CV (idioma, título, peso, ruta) |

Las secciones se navegan por anclas (`#sobre-mi`, `#proyectos`, `#agentico`, `#experiencia`, `#cv`, `#contacto`), así que si agregás una sección nueva, sumá su link en el header.

### Actualizar el CV

1. Reemplazá el PDF en `portafolio/public/cv/` manteniendo el nombre (`Pedro-Espejo-Pariani-CV-ES.pdf` / `-EN.pdf`).
2. Actualizá el texto de `meta` en `cvFiles` con el peso y la fecha nuevos.

### Regenerar la imagen de preview

`portafolio/public/og.png` (1200×630) es lo que se ve al compartir el link en LinkedIn o WhatsApp.

```bash
cd portafolio
bun add -d @napi-rs/canvas
bun run scripts/generate-og.mjs
```

El script usa las fuentes del sistema (Segoe UI y Consolas). Después de regenerarla, borrá la dependencia si no querés mantenerla: `bun remove @napi-rs/canvas`.

## Deploy

Hosteado en **Vercel** con la *Root Directory* del proyecto apuntando a `portafolio/`.

- Config: `portafolio/vercel.json` → build `bun run build`, output `dist`.
- No agregar un `vercel.json` en la raíz del repo: el build ya corre dentro de `portafolio/` y un `cd portafolio` rompe el deploy.
- Cada push a `main` redeploya automáticamente.

Deploy manual:

```bash
cd portafolio
bunx vercel --prod
```

## Contacto

- Email: [espejoparianipedro@gmail.com](mailto:espejoparianipedro@gmail.com)
- LinkedIn: [in/pedroespejopariani](https://www.linkedin.com/in/pedroespejopariani)
- GitHub: [@20Pep](https://github.com/20Pep)
