import './App.css'

const experience = [
  'Desarrollo de interfaces React para módulos de gestión: formularios complejos, tablas filtrables y flujos de carga de datos.',
  'Implementación de APIs REST en .NET con validaciones de negocio y control de acceso.',
  'Optimización de reportes administrativos en SQL Server mediante stored procedures y mejoras en consultas existentes.',
  'Automatización de procesos administrativos con Selenium WebDriver y .NET.',
]

const projects = [
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
]

const stackGroups = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend y datos',
    items: ['C#', '.NET', 'ASP.NET', 'APIs REST', 'SQL Server'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'Docker', 'Selenium', 'Bun', 'ESLint', 'Agile', 'SOLID'],
  },
  {
    title: 'IA y desarrollo agéntico',
    items: ['OpenCode', 'Claude Code', 'Agentes de IA', 'Spec-driven development'],
    highlight: true,
  },
]

const agenticSteps = [
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
]

const cvFiles = [
  {
    lang: 'ES',
    title: 'Currículum en español',
    meta: 'PDF · 385 KB · Septiembre 2026',
    href: `${import.meta.env.BASE_URL}cv/Pedro-Espejo-Pariani-CV-ES.pdf`,
  },
  {
    lang: 'EN',
    title: 'Résumé in English',
    meta: 'PDF · 367 KB · September 2026',
    href: `${import.meta.env.BASE_URL}cv/Pedro-Espejo-Pariani-CV-EN.pdf`,
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M4 3h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#inicio" aria-label="pedro.dev, inicio">
            pedro<span>.</span>dev
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#sobre-mi">sobre mí</a>
            <a href="#proyectos">proyectos</a>
            <a href="#agentico">forma de trabajo</a>
            <a href="#experiencia">experiencia</a>
            <a href="#cv">cv</a>
          </nav>
          <a className="header-contact" href="#contacto">
            Hablemos <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> full stack · desarrollo agéntico · buenos aires</p>
            <h1>
              Hola, soy <span>Pedro.</span><br />
              Creo cosas<br className="desktop-break" /> para la vida real.
            </h1>
            <p className="hero-description">
              Construyo herramientas web que resuelven problemas concretos: interfaces intuitivas,
              APIs y automatizaciones, con flujos de trabajo asistidos por IA.
            </p>
            <div className="hero-actions">
              <a className="button" href="#proyectos">
                Ver proyectos <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#cv">
                Descargar CV <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="terminal" aria-label="Resumen del perfil">
            <div className="terminal-bar">
              <span className="dot" /><span className="dot" /><span className="dot dot--accent" />
              <span className="terminal-title">pedro@dev: ~/portfolio</span>
            </div>
            <div className="terminal-body">
              <p><span className="term-prompt">$</span> whoami</p>
              <p className="term-out">pedro espejo pariani</p>
              <p className="term-gap" />
              <p><span className="term-prompt">$</span> cat stack.json</p>
              <pre className="term-block">{`{
  "rol": "full stack developer",
  "front": ["react", "typescript"],
  "back": ["c#", ".net", "sql server"],
  "extra": ["ia agéntica", "automatización"]
}`}</pre>
              <p className="term-gap" />
              <p><span className="term-prompt">$</span> status --now</p>
              <p className="term-out">trabajando en sarsy s.r.l.<span className="term-cursor" /></p>
            </div>
            <div className="terminal-foot">
              <span className="status-dot" /> disponible para nuevos proyectos
            </div>
          </aside>

          <a className="scroll-note" href="#sobre-mi"><span /> scroll</a>
        </section>

        <section className="intro section-wrap" id="sobre-mi">
          <div className="section-head">
            <div>
              <p className="eyebrow">01 / sobre mí</p>
              <h2>Entre el código<br />y el <em>impacto.</em></h2>
            </div>
            <p className="section-note">
              Me gusta entender el problema antes de escribir la solución. Prefiero menos
              piezas, bien pensadas, antes que muchas a medio terminar.
            </p>
          </div>

          <div className="intro-copy">
            <p className="intro-lead">
              Soy Técnico Universitario en Programación y desarrollador Full Stack en Sarsy S.R.L.
            </p>
            <p>
              En mi día a día trabajo con React, .NET y SQL Server, creando sistemas de gestión y
              automatizando tareas administrativas. Y cada vez más, integro agentes de IA en mi
              forma de programar, sin perder de vista la calidad del código.
            </p>
            <div className="stack-groups" aria-label="Stack tecnológico">
              {stackGroups.map((group) => (
                <div className={`stack-group${group.highlight ? ' stack-group--highlight' : ''}`} key={group.title}>
                  <p className="stack-title">{group.title}</p>
                  <div className="skill-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="proyectos">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / selección de trabajos</p>
              <h2>Hecho con intención<span className="accent">.</span></h2>
            </div>
            <p className="section-note">
              Proyectos personales y académicos<br />que muestran cómo pienso y construyo.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-index">{project.number}</span>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="agentic section-wrap" id="agentico">
          <div className="section-head">
            <div>
              <p className="eyebrow">03 / forma de trabajo</p>
              <h2>Programar con <em>agentes,</em><br />con criterio.</h2>
            </div>
            <p className="section-note">
              Uso herramientas de IA para planificar, implementar y revisar cambios. Las decisiones
              de diseño y la revisión final siguen siendo mías.
            </p>
          </div>

          <div className="agentic-grid">
            {agenticSteps.map((step, index) => (
              <article className="agentic-card" key={step.title}>
                <span className="agentic-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
            <div className="agentic-tools" aria-label="Herramientas de IA">
              <span>OpenCode</span>
              <span>Claude Code</span>
              <span>Git</span>
              <span>Lint &amp; build</span>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experiencia">
          <div className="section-head">
            <div>
              <p className="eyebrow">04 / experiencia &amp; educación</p>
              <h2>Aprender.<br /><em>Construir.</em> Mejorar.</h2>
            </div>
            <p className="section-note">
              Un año y medio construyendo software en producción,<br />
              mientras termino la facultad y sigo estudiando por mi cuenta.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">mar 2025 — actualidad</div>
              <div className="timeline-content">
                <div className="timeline-title">
                  <h3>Full Stack Developer</h3>
                  <span>Sarsy S.R.L. · Buenos Aires</span>
                </div>
                <ul>{experience.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">ago 2023 — dic 2025</div>
              <div className="timeline-content">
                <div className="timeline-title">
                  <h3>Tecnicatura Universitaria en Programación</h3>
                  <span>UTN · Facultad Regional General Pacheco</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cv section-wrap" id="cv">
          <div className="section-head">
            <div>
              <p className="eyebrow">05 / currículum</p>
              <h2>Mi CV, en<br /><em>dos idiomas.</em></h2>
            </div>
            <p className="section-note">
              Español o inglés, mismo recorrido. Descargalo en PDF<br />y escribime si querés el
              detalle de algún proyecto.
            </p>
          </div>

          <div className="cv-grid">
            {cvFiles.map((cv) => (
              <a className="cv-card" href={cv.href} download key={cv.lang}>
                <span className="cv-lang">{cv.lang}</span>
                <span className="cv-info">
                  <strong>{cv.title}</strong>
                  <span>{cv.meta}</span>
                </span>
                <span className="cv-arrow" aria-hidden="true">↓</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow">06 / siguiente paso</p>
            <h2>¿Hacemos algo<br /><em>bueno juntos?</em></h2>
            <p>Si tenés una idea, un desafío o simplemente querés conectar, escribime.</p>
            <a className="button" href="mailto:espejoparianipedro@gmail.com">
              espejoparianipedro@gmail.com <ArrowIcon />
            </a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/pedroespejopariani" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/20Pep" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href="#cv">CV · español / inglés <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#inicio">pedro<span>.</span>dev</a>
        <p>Diseñado y desarrollado con intención.</p>
        <span>© {new Date().getFullYear()} Pedro Espejo Pariani</span>
      </footer>
    </>
  )
}

export default App
