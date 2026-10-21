const base = import.meta.env.BASE_URL

export const cvFiles = {
  es: {
    lang: 'ES',
    title: 'Currículum en español',
    meta: 'PDF · 385 KB · Septiembre 2026',
    href: `${base}cv/Pedro-Espejo-Pariani-CV-ES.pdf`,
    fileName: 'Pedro-Espejo-Pariani-CV-ES.pdf',
  },
  en: {
    lang: 'EN',
    title: 'Résumé in English',
    meta: 'PDF · 367 KB · September 2026',
    href: `${base}cv/Pedro-Espejo-Pariani-CV-EN.pdf`,
    fileName: 'Pedro-Espejo-Pariani-CV-EN.pdf',
  },
}

export const content = {
  es: {
    nav: [
      { href: '#sobre-mi', label: 'sobre mí' },
      { href: '#proyectos', label: 'proyectos' },
      { href: '#agentico', label: 'forma de trabajo' },
      { href: '#experiencia', label: 'experiencia' },
      { href: '#cv', label: 'cv' },
    ],
    headerCta: 'Hablemos',
    hero: {
      eyebrow: 'full stack · desarrollo agéntico · buenos aires',
      titleA: 'Hola, soy ',
      titleB: 'Pedro.',
      titleC: 'Creo cosas',
      titleD: 'para la vida real.',
      description:
        'Construyo herramientas web que resuelven problemas concretos: interfaces intuitivas, APIs y automatizaciones, con flujos de trabajo asistidos por IA.',
      primary: 'Ver proyectos',
      secondary: 'Descargar CV',
      terminalUser: 'pedro espejo pariani',
      terminalJson: `{
  "rol": "full stack developer",
  "front": ["react", "typescript"],
  "back": ["c#", ".net", "sql server"],
  "extra": ["ia agéntica", "automatización"]
}`,
      terminalStatus: 'trabajando en sarsy s.r.l.',
      terminalFoot: 'disponible para nuevos proyectos',
      scroll: 'scroll',
    },
    intro: {
      eyebrow: '01 / sobre mí',
      titleA: 'Entre el código',
      titleB: 'y el ',
      titleEm: 'impacto.',
      note: 'Me gusta entender el problema antes de escribir la solución. Prefiero menos piezas, bien pensadas, antes que muchas a medio terminar.',
      lead: 'Soy Técnico Universitario en Programación y desarrollador Full Stack en Sarsy S.R.L.',
      body: 'En mi día a día trabajo con React, .NET y SQL Server, creando sistemas de gestión y automatizando tareas administrativas. Y cada vez más, integro agentes de IA en mi forma de programar, sin perder de vista la calidad del código.',
      stackLabel: 'Stack tecnológico',
      groups: [
        { title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Tailwind CSS', 'Vite'] },
        { title: 'Backend y datos', items: ['C#', '.NET', 'ASP.NET', 'APIs REST', 'SQL Server'] },
        { title: 'Herramientas', items: ['Git', 'Docker', 'Selenium', 'Bun', 'ESLint', 'Agile', 'SOLID'] },
        { title: 'IA y desarrollo agéntico', items: ['OpenCode', 'Claude Code', 'Agentes de IA', 'Spec-driven development'], highlight: true },
      ],
    },
    projects: {
      eyebrow: '02 / selección de trabajos',
      titleA: 'Hecho con intención',
      note: 'Proyectos personales y académicos que muestran cómo pienso y construyo.',
      items: [
        {
          number: '01',
          name: 'Don Espejo Services',
          type: 'Sitio web · React',
          description:
            'Sitio para una empresa real de servicios, con rutas y contenido optimizados para cada servicio, diseño responsive y metadatos dinámicos.',
          stack: ['React', 'Vite', 'Tailwind CSS'],
        },
        {
          number: '02',
          name: 'Gestión de turnos médicos',
          type: 'Aplicación web · .NET',
          description:
            'Sistema para administrar pacientes, médicos y turnos, con validación de disponibilidad y consultas por fecha y profesional.',
          stack: ['C#', 'ASP.NET', 'SQL Server'],
        },
        {
          number: '03',
          name: 'Pac-Man',
          type: 'Videojuego · C++',
          description:
            'Una versión jugable con lógica de enemigos, colisiones y sistema de puntuación, renderizada en tiempo real.',
          stack: ['C++', 'SFML', 'Game logic'],
        },
      ],
    },
    agentic: {
      eyebrow: '03 / forma de trabajo',
      titleA: 'Programar con ',
      titleEm: 'agentes,',
      titleB: 'con criterio.',
      note: 'Uso herramientas de IA para planificar, implementar y revisar cambios. Las decisiones de diseño y la revisión final siguen siendo mías.',
      steps: [
        {
          title: 'Especificar',
          text: 'Defino el alcance, los criterios de aceptación y las restricciones antes de delegar. El contexto correcto evita cambios innecesarios.',
        },
        {
          title: 'Ejecutar',
          text: 'Trabajo con agentes desde la terminal, como OpenCode y Claude Code, para explorar el código, aplicar cambios y automatizar tareas repetitivas.',
        },
        {
          title: 'Verificar',
          text: 'Reviso cada diferencia y valido con lint, build y pruebas. Nada se da por terminado hasta que cumple lo pedido y funciona.',
        },
      ],
      tools: ['OpenCode', 'Claude Code', 'Git', 'Lint & build'],
    },
    experience: {
      eyebrow: '04 / experiencia & educación',
      titleA: 'Aprender.',
      titleEm: 'Construir.',
      titleB: ' Mejorar.',
      note: 'Un año y medio construyendo software en producción, mientras termino la facultad y sigo estudiando por mi cuenta.',
      jobs: [
        {
          period: 'mar 2025 — actualidad',
          role: 'Full Stack Developer',
          company: 'Sarsy S.R.L. · Buenos Aires',
          bullets: [
            'Desarrollo de interfaces React para módulos de gestión: formularios complejos, tablas filtrables y flujos de carga de datos.',
            'Implementación de APIs REST en .NET con validaciones de negocio y control de acceso.',
            'Optimización de reportes administrativos en SQL Server mediante stored procedures y mejoras en consultas existentes.',
            'Automatización de procesos administrativos con Selenium WebDriver y .NET.',
          ],
        },
        {
          period: 'ago 2023 — dic 2025',
          role: 'Tecnicatura Universitaria en Programación',
          company: 'UTN · Facultad Regional General Pacheco',
          bullets: [],
        },
      ],
    },
    cv: {
      eyebrow: '05 / currículum',
      titleA: 'Mi CV, en',
      titleEm: 'dos idiomas.',
      note: 'Español o inglés, mismo recorrido. Descargalo en PDF y escribime si querés el detalle de algún proyecto.',
      download: 'Descargar CV',
      other: 'También en inglés',
    },
    contact: {
      eyebrow: '06 / siguiente paso',
      titleA: '¿Hacemos algo',
      titleEm: 'bueno juntos?',
      note: 'Si tenés una idea, un desafío o simplemente querés conectar, escribime.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedroespejopariani', external: true },
        { label: 'GitHub', href: 'https://github.com/20Pep', external: true },
        { label: 'CV · español / inglés', href: '#cv', external: false },
      ],
    },
    footer: {
      note: 'Diseñado y desarrollado con intención.',
    },
    gate: {
      command: '$ locale --set',
      title: 'Elegí tu idioma',
      titleAlt: 'Choose your language',
      options: [
        { code: 'es', label: 'Español', detail: 'Portfolio y CV en español' },
        { code: 'en', label: 'English', detail: 'Portfolio and résumé in English' },
      ],
      note: 'Podés cambiarlo cuando quieras',
    },
  },

  en: {
    nav: [
      { href: '#sobre-mi', label: 'about' },
      { href: '#proyectos', label: 'projects' },
      { href: '#agentico', label: 'how I work' },
      { href: '#experiencia', label: 'experience' },
      { href: '#cv', label: 'cv' },
    ],
    headerCta: "Let's talk",
    hero: {
      eyebrow: 'full stack · agentic development · buenos aires',
      titleA: "Hi, I'm ",
      titleB: 'Pedro.',
      titleC: 'I build things',
      titleD: 'for real life.',
      description:
        'I build web tools that solve concrete problems: intuitive interfaces, APIs and automations, with AI-assisted workflows.',
      primary: 'View projects',
      secondary: 'Download CV',
      terminalUser: 'pedro espejo pariani',
      terminalJson: `{
  "role": "full stack developer",
  "front": ["react", "typescript"],
  "back": ["c#", ".net", "sql server"],
  "extra": ["agentic ai", "automation"]
}`,
      terminalStatus: 'working at sarsy s.r.l.',
      terminalFoot: 'available for new projects',
      scroll: 'scroll',
    },
    intro: {
      eyebrow: '01 / about',
      titleA: 'Between code',
      titleB: 'and ',
      titleEm: 'impact.',
      note: "I like to understand the problem before writing the solution. I'd rather have fewer, well-thought-out pieces than many half-finished ones.",
      lead: "I'm a University Technician in Programming and a Full Stack developer at Sarsy S.R.L.",
      body: 'Day to day I work with React, .NET and SQL Server, building management systems and automating administrative tasks. And more and more, I bring AI agents into how I code, without losing sight of code quality.',
      stackLabel: 'Tech stack',
      groups: [
        { title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Tailwind CSS', 'Vite'] },
        { title: 'Backend & data', items: ['C#', '.NET', 'ASP.NET', 'REST APIs', 'SQL Server'] },
        { title: 'Tooling', items: ['Git', 'Docker', 'Selenium', 'Bun', 'ESLint', 'Agile', 'SOLID'] },
        { title: 'AI & agentic development', items: ['OpenCode', 'Claude Code', 'AI agents', 'Spec-driven development'], highlight: true },
      ],
    },
    projects: {
      eyebrow: '02 / selected work',
      titleA: 'Made with intent',
      note: 'Personal and academic projects that show how I think and build.',
      items: [
        {
          number: '01',
          name: 'Don Espejo Services',
          type: 'Website · React',
          description:
            'Website for a real services company, with per-service routes and content, responsive design and dynamic metadata.',
          stack: ['React', 'Vite', 'Tailwind CSS'],
        },
        {
          number: '02',
          name: 'Medical appointment management',
          type: 'Web app · .NET',
          description:
            'System to manage patients, doctors and appointments, with availability validation and queries by date and professional.',
          stack: ['C#', 'ASP.NET', 'SQL Server'],
        },
        {
          number: '03',
          name: 'Pac-Man',
          type: 'Game · C++',
          description:
            'A playable version with enemy logic, collisions and a scoring system, rendered in real time.',
          stack: ['C++', 'SFML', 'Game logic'],
        },
      ],
    },
    agentic: {
      eyebrow: '03 / how I work',
      titleA: 'Coding with ',
      titleEm: 'agents,',
      titleB: 'with judgement.',
      note: 'I use AI tools to plan, implement and review changes. Design decisions and the final review are still mine.',
      steps: [
        {
          title: 'Specify',
          text: 'I define scope, acceptance criteria and constraints before delegating. The right context prevents unnecessary changes.',
        },
        {
          title: 'Execute',
          text: 'I work with agents from the terminal, like OpenCode and Claude Code, to explore the codebase, apply changes and automate repetitive tasks.',
        },
        {
          title: 'Verify',
          text: 'I review every diff and validate with lint, build and tests. Nothing is done until it matches the request and works.',
        },
      ],
      tools: ['OpenCode', 'Claude Code', 'Git', 'Lint & build'],
    },
    experience: {
      eyebrow: '04 / experience & education',
      titleA: 'Learn.',
      titleEm: 'Build.',
      titleB: ' Improve.',
      note: 'A year and a half shipping production software, while I finish my degree and keep studying on my own.',
      jobs: [
        {
          period: 'Mar 2025 — present',
          role: 'Full Stack Developer',
          company: 'Sarsy S.R.L. · Buenos Aires',
          bullets: [
            'Built React interfaces for management modules: complex forms, filterable tables and data-loading flows.',
            'Implemented REST APIs in .NET with business validations and access control.',
            'Optimized administrative reports in SQL Server through stored procedures and improvements to existing queries.',
            'Automated administrative processes with Selenium WebDriver and .NET.',
          ],
        },
        {
          period: 'Aug 2023 — Dec 2025',
          role: 'University Technician in Programming',
          company: 'UTN · General Pacheco Regional Faculty',
          bullets: [],
        },
      ],
    },
    cv: {
      eyebrow: '05 / résumé',
      titleA: 'My CV, in',
      titleEm: 'two languages.',
      note: 'Spanish or English, same journey. Download the PDF and reach out if you want details on any project.',
      download: 'Download CV',
      other: 'Also in Spanish',
    },
    contact: {
      eyebrow: '06 / next step',
      titleA: 'Shall we build',
      titleEm: 'something good?',
      note: 'If you have an idea, a challenge, or just want to connect, write me.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedroespejopariani', external: true },
        { label: 'GitHub', href: 'https://github.com/20Pep', external: true },
        { label: 'CV · Spanish / English', href: '#cv', external: false },
      ],
    },
    footer: {
      note: 'Designed and built with intent.',
    },
    gate: {
      command: '$ locale --set',
      title: 'Choose your language',
      titleAlt: 'Elegí tu idioma',
      options: [
        { code: 'es', label: 'Español', detail: 'Portfolio y CV en español' },
        { code: 'en', label: 'English', detail: 'Portfolio and résumé in English' },
      ],
      note: 'You can change it anytime',
    },
  },
}
