# Repository guidance

- The portfolio app is in `portafolio/`; there is no root package/workspace. Run Bun commands from that directory.
- Stack: React 19 (JSX) + Vite 8. `src/main.jsx` mounts `src/App.jsx`. Global tokens and fonts live in `src/index.css`; all layout and component styles live in `src/App.css` (dark theme, terminal-green accent).
- `src/App.jsx` is the whole site: a single-page portfolio with anchor navigation. Content is data-driven (`experience`, `projects`, `stackGroups`, `agenticSteps`, `cvFiles`) and mapped to JSX. Add content there, not in new pages; there is no router.
- The CV PDFs are served from `public/cv/` as `Pedro-Espejo-Pariani-CV-ES.pdf` and `Pedro-Espejo-Pariani-CV-EN.pdf`. If the CV is updated in `~/Documents`, copy the new PDF over those files and update the `meta` string (size/date) in `cvFiles`.
- Install with `bun install` and keep `bun.lock` in sync with `package.json`. Do not use npm/yarn for this project.
- Available checks/commands: `bun run dev` (http://localhost:5173), `bun run lint`, `bun run build`, `bun run preview`. There is no test or typecheck script.
- Deploy target is Vercel. `vercel.json` at the repo root builds `portafolio/` and serves `portafolio/dist`, so importing the repo at root works without extra settings. Deploy with `bunx vercel` from the repo root (or `bunx vercel --prod`).
- Keep copy in Spanish (rioplatense, informal) and use `import.meta.env.BASE_URL` for any asset referenced from JSX so subpath deploys keep working.
