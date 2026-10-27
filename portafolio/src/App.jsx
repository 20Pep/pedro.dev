import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './App.css'
import { content, cvFiles } from './content'

const STORAGE_KEY = 'lang'

const STARS = [
  [88, 64], [210, 132], [318, 48], [402, 190], [520, 96], [612, 34], [700, 152],
  [806, 78], [918, 176], [1042, 52], [1120, 128], [1216, 36], [1302, 168],
  [1388, 92], [64, 240], [168, 306], [286, 260], [398, 330], [498, 246],
  [606, 300], [742, 262], [860, 336], [962, 268], [1080, 316], [1204, 258],
  [1330, 300], [1408, 220],
]

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

function Dunes({ id }) {
  return (
    <svg className="dunes" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-back`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a2c14" stopOpacity=".7" />
          <stop offset="100%" stopColor="#120b06" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-mid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#24150b" stopOpacity=".95" />
          <stop offset="100%" stopColor="#0d0805" stopOpacity=".2" />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#160d07" />
          <stop offset="100%" stopColor="#0a0604" />
        </linearGradient>
      </defs>
      <path
        d="M0 300 C160 258 300 302 470 274 C640 246 760 196 960 232 C1140 264 1280 214 1440 238 L1440 420 L0 420 Z"
        fill={`url(#${id}-back)`}
      />
      <path
        d="M0 300 C160 258 300 302 470 274 C640 246 760 196 960 232 C1140 264 1280 214 1440 238"
        fill="none"
        stroke="rgba(229, 140, 60, .26)"
        strokeWidth="1"
      />
      <path
        d="M0 332 C180 302 300 338 500 314 C700 290 820 256 1020 292 C1200 326 1320 296 1440 306 L1440 420 L0 420 Z"
        fill={`url(#${id}-mid)`}
      />
      <path
        d="M0 332 C180 302 300 338 500 314 C700 290 820 256 1020 292 C1200 326 1320 296 1440 306"
        fill="none"
        stroke="rgba(229, 140, 60, .16)"
        strokeWidth="1"
      />
      <path
        d="M0 374 C220 354 340 386 560 368 C780 350 900 374 1120 360 C1280 350 1360 364 1440 358 L1440 420 L0 420 Z"
        fill={`url(#${id}-front)`}
      />
    </svg>
  )
}

function SandField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let grains = []
    let width = 0
    let height = 0
    let raf = 0

    function seed() {
      const count = Math.min(150, Math.max(36, Math.round((width * height) / 15000)))
      grains = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vx: -(Math.random() * 0.24 + 0.04),
        vy: (Math.random() - 0.5) * 0.06,
        alpha: Math.random() * 0.32 + 0.07,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function paint() {
      ctx.clearRect(0, 0, width, height)
      for (const grain of grains) {
        ctx.beginPath()
        ctx.fillStyle = `rgba(240, 183, 116, ${grain.alpha})`
        ctx.arc(grain.x, grain.y, grain.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function step() {
      for (const grain of grains) {
        grain.phase += 0.012
        grain.x += grain.vx
        grain.y += grain.vy + Math.sin(grain.phase) * 0.1
        if (grain.x < -6) grain.x = width + 6
        if (grain.x > width + 6) grain.x = -6
        if (grain.y < -6) grain.y = height + 6
        if (grain.y > height + 6) grain.y = -6
      }
      paint()
      raf = window.requestAnimationFrame(step)
    }

    function start() {
      window.cancelAnimationFrame(raf)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
      paint()
      if (!reduce) raf = window.requestAnimationFrame(step)
    }

    function onVisibility() {
      if (document.hidden) {
        window.cancelAnimationFrame(raf)
        raf = 0
      } else if (!reduce && !raf) {
        raf = window.requestAnimationFrame(step)
      }
    }

    start()
    window.addEventListener('resize', start)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', start)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas className="sand-field" ref={canvasRef} aria-hidden="true" />
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
  const progressRef = useRef(null)

  useEffect(() => {
    document.documentElement.lang = active
    document.title = active === 'en'
      ? 'Pedro.dev — Full Stack Developer'
      : 'Pedro.dev — Desarrollador Full Stack'
  }, [active])

  useEffect(() => {
    document.body.classList.toggle('is-locked', !lang)
  }, [lang])

  useEffect(() => {
    const node = progressRef.current
    let raf = 0

    function update() {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (node) {
        node.style.setProperty('--p', max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : '0')
      }
    }

    function onScroll() {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
          // devolvemos el control de las transiciones al componente
          window.setTimeout(() => entry.target.removeAttribute('data-reveal'), 1000)
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' })

    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [active])

  function choose(next) {
    setLang(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage bloqueado: la elección dura la sesión */
    }
  }

  function handleGlow(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    event.currentTarget.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    event.currentTarget.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <>
      {!lang && <LanguageGate onChoose={choose} />}

      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <SandField />
      <span className="rail rail--left" aria-hidden="true">buenos aires · 34.6037° s · 58.3816° w</span>
      <span className="rail rail--right" aria-hidden="true">spice · melange · mmxxvi</span>

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
        <section className="hero section-wrap" id="inicio" onPointerMove={handleGlow}>
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="hero-sun" />
            <svg className="hero-stars" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice">
              {STARS.map(([x, y], index) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r={index % 4 === 0 ? 1.5 : 0.9}
                  opacity={index % 5 === 0 ? 0.8 : 0.4}
                />
              ))}
            </svg>
            <div className="hero-haze" />
            <Dunes id="hero" />
          </div>
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" /> {t.hero.eyebrow}</p>
            <h1>
              <span className="hero-hi">{t.hero.titleA}</span>
              <span className="hero-name">{t.hero.titleB}</span>
              <span className="hero-tagline">
                {t.hero.titleC}<br className="desktop-break" /> {t.hero.titleD}
              </span>
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

          <aside
            className="terminal"
            aria-label={t.hero.terminalFoot}
            data-reveal
            style={{ '--reveal-delay': '140ms' }}
          >
            <div className="terminal-bar">
              <span className="dot" /><span className="dot" /><span className="dot dot--accent" />
              <span className="terminal-title">mentat@arrakis · ~/portfolio</span>
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
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.intro.eyebrow}</p>
              <h2>{t.intro.titleA}<br />{t.intro.titleB}<em>{t.intro.titleEm}</em></h2>
            </div>
            <p className="section-note">{t.intro.note}</p>
          </div>

          <div className="intro-copy">
            <p className="intro-lead" data-reveal>{t.intro.lead}</p>
            <p data-reveal style={{ '--reveal-delay': '80ms' }}>{t.intro.body}</p>
            <div className="stack-groups" aria-label={t.intro.stackLabel}>
              {t.intro.groups.map((group, index) => (
                <div
                  className={`stack-group${group.highlight ? ' stack-group--highlight' : ''}`}
                  key={group.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 70}ms` }}
                >
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
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.projects.eyebrow}</p>
              <h2>{t.projects.titleA}<span className="accent">.</span></h2>
            </div>
            <p className="section-note">{t.projects.note}</p>
          </div>

          <div className="project-list">
            {t.projects.items.map((project, index) => (
              <article
                className="project-row"
                key={project.number}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
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
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.agentic.eyebrow}</p>
              <h2>{t.agentic.titleA}<em>{t.agentic.titleEm}</em><br />{t.agentic.titleB}</h2>
            </div>
            <p className="section-note">{t.agentic.note}</p>
          </div>

          <div className="agentic-grid">
            {t.agentic.steps.map((step, index) => (
              <article
                className="agentic-card"
                key={step.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
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
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.experience.eyebrow}</p>
              <h2>{t.experience.titleA}<br /><em>{t.experience.titleEm}</em>{t.experience.titleB}</h2>
            </div>
            <p className="section-note">{t.experience.note}</p>
          </div>

          <div className="timeline">
            {t.experience.jobs.map((job, index) => (
              <article
                className="timeline-item"
                key={job.role}
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
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
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.cv.eyebrow}</p>
              <h2>{t.cv.titleA}<br /><em>{t.cv.titleEm}</em></h2>
            </div>
            <p className="section-note">{t.cv.note}</p>
          </div>

          <div className="cv-grid">
            <a className="cv-card" href={cv.href} download={cv.fileName} data-reveal>
              <span className="cv-lang">{cv.lang}</span>
              <span className="cv-info">
                <strong>{cv.title}</strong>
                <span>{cv.meta}</span>
              </span>
              <span className="cv-arrow" aria-hidden="true">↓</span>
            </a>
            <a
              className="cv-alt"
              href={otherCv.href}
              download={otherCv.fileName}
              data-reveal
              style={{ '--reveal-delay': '90ms' }}
            >
              {t.cv.other} <DownloadIcon />
            </a>
          </div>
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.titleA}<br /><em>{t.contact.titleEm}</em></h2>
            <p>{t.contact.note}</p>
            <a className="button" href="mailto:espejoparianipedro@gmail.com">
              espejoparianipedro@gmail.com <ArrowIcon />
            </a>
          </div>
          <div className="contact-links" data-reveal style={{ '--reveal-delay': '120ms' }}>
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
