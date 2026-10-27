# Repository guidance

- The portfolio app is in `portafolio/`; there is no root package/workspace. Run Bun commands from that directory.
- Stack: React 19 (JSX) + Vite 8. `src/main.jsx` mounts `src/App.jsx`. Global tokens and fonts live in `src/index.css`; all layout and component styles live in `src/App.css` (dark sand/spice theme, Cinzel display type).
- `src/App.jsx` is the whole site: a single-page portfolio with anchor navigation and no router. All copy lives in `src/content.js` as a `content.es` / `content.en` pair; `App.jsx` only maps the active locale to JSX. When adding copy, add it to **both** locales.
- The site is bilingual. On first visit a language gate (`LanguageGate` in `App.jsx`) asks ES/EN and stores the choice in `localStorage` under `lang`; the header toggle switches it later. `document.documentElement.lang` and `document.title` follow the active locale.
- CV downloads are direct (`download` attribute) and depend on the active locale: `cvFiles.es` / `cvFiles.en` in `src/content.js`. The hero button downloads immediately; it must not link to the `#cv` section.
- The CV PDFs are served from `public/cv/` as `Pedro-Espejo-Pariani-CV-ES.pdf` and `Pedro-Espejo-Pariani-CV-EN.pdf`. If the CV is updated in `~/Documents`, copy the new PDF over those files and update the `meta` string (size/date) in `cvFiles`.
- Install with `bun install` and keep `bun.lock` in sync with `package.json`. Do not use npm/yarn for this project.
- Available checks/commands: `bun run dev` (http://localhost:5173), `bun run lint`, `bun run build`, `bun run preview`. There is no test or typecheck script.
- Deploy target is Vercel, with the project's **Root Directory set to `portafolio`**. For that reason the config lives in `portafolio/vercel.json` (build `bun run build`, output `dist`) and must not reference a `portafolio/` prefix or use `cd portafolio`, since the build already runs inside that directory. Deploy with `bunx vercel` from `portafolio/` (or `bunx vercel --prod`). Do not put a `vercel.json` at the repo root: it conflicts with the configured root directory.
- Keep copy in Spanish (rioplatense, informal) and use `import.meta.env.BASE_URL` for any asset referenced from JSX so subpath deploys keep working.
