import { useEffect, useRef, useState } from 'react'
import './App.css'
import { content, cvFiles } from './content'

const STORAGE_KEY = 'lang'

function readLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'es' || saved === 'en' ? saved : null
  } catch {
    return null
  }
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M4 3h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v8m0 0 3.2-3.2M8 10 4.8 6.8M3 13h10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function LanguageGate({ onChoose }) {
  const firstOption = useRef(null)
  const gateEs = content.es.gate
  const gateEn = content.en.gate

  useEffect(() => {
    firstOption.current?.focus()
  }, [])

  return (
    <div className="lang-gate" role="dialog" aria-modal="true" aria-labelledby="lang-gate-title">
      <div className="lang-gate-card">
        <p className="eyebrow"><span className="status-dot" /> {gateEs.command}</p>
        <h2 className="lang-gate-title" id="lang-gate-title">
          {gateEs.title}
          <span>{gateEn.title}</span>
        </h2>

        <div className="lang-options">
          <button
            type="button"
            className="lang-option"
            ref={firstOption}
            onClick={() => onChoose('es')}
          >
            <span className="lang-code">es</span>
            <span className="lang-option-text">
              <strong>{gateEs.options[0].label}</strong>
              <span>{gateEs.options[0].detail}</span>
            </span>
            <span className="lang-arrow" aria-hidden="true">→</span>
          </button>

          <button type="button" className="lang-option" onClick={() => onChoose('en')}>
            <span className="lang-code">en</span>
            <span className="lang-option-text">
              <strong>{gateEn.options[1].label}</strong>
              <span>{gateEn.options[1].detail}</span>
            </span>
            <span className="lang-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <p className="lang-gate-note">
          {gateEs.note} · {gateEn.note}
        </p>
      </div>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState(readLang)
  const active = lang ?? 'es'
  const t = content[active]
  const cv = cvFiles[active]
  const otherLang = active === 'es' ? 'en' : 'es'
  const otherCv = cvFiles[otherLang]

  useEffect(() => {
    document.documentElement.lang = active
    document.title = active === 'en'
      ? 'Pedro.dev — Full Stack Developer'
      : 'Pedro.dev — Desarrollador Full Stack'
  }, [active])

  useEffect(() => {
    document.body.classList.toggle('is-locked', !lang)
  }, [lang])

  function choose(next) {
    setLang(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage bloqueado: la elección dura la sesión */
    }
  }

  return (
    <>
      {!lang && <LanguageGate onChoose={choose} />}

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#inicio" aria-label="pedro.dev, inicio">
            pedro<span>.</span>dev
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            {t.nav.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="lang-toggle" role="group" aria-label="Idioma / Language">
              {(['es', 'en']).map((code) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => choose(code)}
                  aria-pressed={active === code}
                >
                  {code}
                </button>
              ))}
            </div>
            <a className="header-contact" href="#contacto">
              {t.headerCta} <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {t.hero.eyebrow}</p>
            <h1>
              {t.hero.titleA}<span>{t.hero.titleB}</span><br />
              {t.hero.titleC}<br className="desktop-break" /> {t.hero.titleD}
            </h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <a className="button" href="#proyectos">
                {t.hero.primary} <span aria-hidden="true">↓</span>
              </a>
              <a className="button button--ghost" href={cv.href} download={cv.fileName}>
                {t.hero.secondary} <DownloadIcon />
              </a>
            </div>
          </div>

          <aside className="terminal" aria-label={t.hero.terminalFoot}>
            <div className="terminal-bar">
              <span className="dot" /><span className="dot" /><span className="dot dot--accent" />
              <span className="terminal-title">pedro@dev: ~/portfolio</span>
            </div>
            <div className="terminal-body">
              <p><span className="term-prompt">$</span> whoami</p>
              <p className="term-out">{t.hero.terminalUser}</p>
              <p className="term-gap" />
              <p><span className="term-prompt">$</span> cat stack.json</p>
              <pre className="term-block">{t.hero.terminalJson}</pre>
              <p className="term-gap" />
              <p><span className="term-prompt">$</span> status --now</p>
              <p className="term-out">{t.hero.terminalStatus}<span className="term-cursor" /></p>
            </div>
            <div className="terminal-foot">
              <span className="status-dot" /> {t.hero.terminalFoot}
            </div>
          </aside>

          <a className="scroll-note" href="#sobre-mi"><span /> {t.hero.scroll}</a>
        </section>

        <section className="intro section-wrap" id="sobre-mi">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.intro.eyebrow}</p>
              <h2>{t.intro.titleA}<br />{t.intro.titleB}<em>{t.intro.titleEm}</em></h2>
            </div>
            <p className="section-note">{t.intro.note}</p>
          </div>

          <div className="intro-copy">
            <p className="intro-lead">{t.intro.lead}</p>
            <p>{t.intro.body}</p>
            <div className="stack-groups" aria-label={t.intro.stackLabel}>
              {t.intro.groups.map((group) => (
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
              <p className="eyebrow">{t.projects.eyebrow}</p>
              <h2>{t.projects.titleA}<span className="accent">.</span></h2>
            </div>
            <p className="section-note">{t.projects.note}</p>
          </div>

          <div className="project-list">
            {t.projects.items.map((project) => (
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
              <p className="eyebrow">{t.agentic.eyebrow}</p>
              <h2>{t.agentic.titleA}<em>{t.agentic.titleEm}</em><br />{t.agentic.titleB}</h2>
            </div>
            <p className="section-note">{t.agentic.note}</p>
          </div>

          <div className="agentic-grid">
            {t.agentic.steps.map((step, index) => (
              <article className="agentic-card" key={step.title}>
                <span className="agentic-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
            <div className="agentic-tools" aria-label="Tooling">
              {t.agentic.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experiencia">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.experience.eyebrow}</p>
              <h2>{t.experience.titleA}<br /><em>{t.experience.titleEm}</em>{t.experience.titleB}</h2>
            </div>
            <p className="section-note">{t.experience.note}</p>
          </div>

          <div className="timeline">
            {t.experience.jobs.map((job) => (
              <article className="timeline-item" key={job.role}>
                <div className="timeline-date">{job.period}</div>
                <div className="timeline-content">
                  <div className="timeline-title">
                    <h3>{job.role}</h3>
                    <span>{job.company}</span>
                  </div>
                  {job.bullets.length > 0 && (
                    <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cv section-wrap" id="cv">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.cv.eyebrow}</p>
              <h2>{t.cv.titleA}<br /><em>{t.cv.titleEm}</em></h2>
            </div>
            <p className="section-note">{t.cv.note}</p>
          </div>

          <div className="cv-grid">
            <a className="cv-card" href={cv.href} download={cv.fileName}>
              <span className="cv-lang">{cv.lang}</span>
              <span className="cv-info">
                <strong>{cv.title}</strong>
                <span>{cv.meta}</span>
              </span>
              <span className="cv-arrow" aria-hidden="true">↓</span>
            </a>
            <a className="cv-alt" href={otherCv.href} download={otherCv.fileName}>
              {t.cv.other} <DownloadIcon />
            </a>
          </div>
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.titleA}<br /><em>{t.contact.titleEm}</em></h2>
            <p>{t.contact.note}</p>
            <a className="button" href="mailto:espejoparianipedro@gmail.com">
              espejoparianipedro@gmail.com <ArrowIcon />
            </a>
          </div>
          <div className="contact-links">
            {t.contact.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label} <ArrowIcon />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#inicio">pedro<span>.</span>dev</a>
        <p>{t.footer.note}</p>
        <span>© {new Date().getFullYear()} Pedro Espejo Pariani</span>
      </footer>
    </>
  )
}

export default App
