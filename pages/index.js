import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const github = 'https://github.com/KhaingKhant'
const linkedin = 'https://www.linkedin.com/in/khaing-khant-b5ab67188/'
const email = 'khaingkhantjob@gmail.com'
const portraitUrl = process.env.NEXT_PUBLIC_PORTRAIT_URL
const jobs = [
  {
    date: 'MAY 2025 — PRESENT',
    company: 'Big Valley International',
    place: 'Japan',
    role: 'Full-Stack Developer',
    text: 'Making enterprise logistics simpler, faster, and more reliable. Building connected workflows across inventory, loading, and shipping with Vue.js and InterSystems IRIS.'
  },
  {
    date: 'SEP 2023 — FEB 2024',
    company: 'Wunderfauks',
    place: 'Singapore',
    role: 'Full-Stack Engineer',
    text: 'Bringing creative ideas to the browser. Built immersive yearbooks, voice-powered experiences, and campaign games for NAFA, AirAsia, and Resorts World Cruises.'
  },
  {
    date: 'SEP 2021 — AUG 2023',
    company: 'Immin',
    place: 'Singapore · Remote',
    role: 'Software Engineer',
    text: 'Connecting real-time data to real-world actions. Developed exchange features, wallet interfaces, KYC flows, and scheduled services with Quarkus, Flutter, and React Native.'
  },
  {
    date: 'OCT 2018 — AUG 2021',
    company: 'Kumo Solutions',
    place: 'Myanmar',
    role: 'Web Developer',
    text: 'Where it started: turning complex data into useful interfaces. Delivered energy dashboards, reporting tools, and business systems for teams across Singapore, Taiwan, and Myanmar.'
  }
]
function Arrow() {
  return <span aria-hidden="true">↗</span>
}
function Brand() {
  return (
    <span
      className="brand"
      role="img"
      aria-label="Aung Khaing Khant — AKK monogram"
    />
  )
}
function External({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <Arrow />
    </a>
  )
}
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map(item => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setCopyFailed(false)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyFailed(true)
    }
  }
  return (
    <>
      <Head>
        <title>Aung Khaing Khant — Full-Stack Engineer · Kettles</title>
        <meta
          name="description"
          content="Aung Khaing Khant is a senior full-stack engineer based in Japan. Reliable systems, thoughtful interfaces, and creative web experiences. Explore selected work and 7+ years of experience."
        />
        <meta
          property="og:title"
          content="Aung Khaing Khant — Engineering with a creative edge."
        />
        <meta
          property="og:description"
          content="Full-stack engineer in Japan. From enterprise systems to immersive web experiences."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#09090b" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#home" aria-label="Aung Khaing Khant home">
          <Brand />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <Arrow />
        </a>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> BASED IN JAPAN · BUILDING BEYOND
              BORDERS
            </div>
            <p className="intro">Hi, I’m Aung Khaing Khant.</p>
            <h1>
              Engineering.
              <br />
              <span>With a creative</span>
              <br />
              <em>edge.</em>
            </h1>
            <p className="hero-description">
              I build reliable systems and thoughtful digital experiences. From
              the logic behind the scenes to the details you can feel.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="button secondary" href="#contact">
                Get in touch <Arrow />
              </a>
              <a
                className="button secondary"
                href="/assets/aung-khaing-khant-resume.pdf"
                download="Aung-Khaing-Khant-Resume.pdf"
              >
                Download Resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="social-links">
              <External href={github}>GitHub</External>
              <External href={linkedin}>LinkedIn</External>
              <span className="social-divider" />
              <span>Senior Full-Stack Engineer</span>
            </div>
          </div>
          <div className="portrait-stage">
            <div className="portrait-lines" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                src={portraitUrl || '/assets/akk-monogram.svg'}
                alt={
                  portraitUrl
                    ? 'Aung Khaing Khant'
                    : 'Aung Khaing Khant — AKK monogram'
                }
                unoptimized
                fill
                priority
                sizes="(max-width: 760px) 90vw, 440px"
                className={
                  portraitUrl ? 'portrait' : 'portrait portrait-monogram'
                }
              />
              <div className="portrait-shade" />
              <div className="portrait-caption">
                <span>AUNG KHAING KHANT</span>
                <small>Engineer by craft. Curious by nature.</small>
              </div>
            </div>
            <div className="floating-label">
              <span className="code-symbol">&lt;/&gt;</span>
              <div>
                Built with intention.<small>From idea to production.</small>
              </div>
            </div>
            <span className="photo-coordinate">兵庫、日本 / HYOGO, JAPAN</span>
          </div>
        </section>
        <div className="proof-strip container">
          <div>
            <strong>7+</strong>
            <span>years of building</span>
          </div>
          <div>
            <strong>4</strong>
            <span>markets collaborated across</span>
          </div>
          <div>
            <strong>Full stack.</strong>
            <span>From interface to infrastructure.</span>
          </div>
          <a href="#experience">
            A little more about the journey <span aria-hidden="true">↓</span>
          </a>
        </div>
        <section id="work" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">01 / SELECTED WORK</p>
              <h2>
                Different challenges.
                <br />
                <span>The same care.</span>
              </h2>
            </div>
            <p>
              A selection of things I’ve helped build.
              <br />
              Useful in the real world. Considered in every detail.
            </p>
          </div>
          <div className="project-grid">
            <article className="project featured">
              <div
                className="project-visual logistics"
                aria-label="Search time improved from approximately 10 seconds to 2 seconds"
              >
                <div className="visual-top">
                  <span className="tiny-square" /> SYSTEM PERFORMANCE{' '}
                  <span className="visual-status">OPTIMIZED</span>
                </div>
                <div className="speed-number">
                  <span>10s</span>
                  <span className="speed-arrow">→</span>
                  <strong>
                    2s<span>~</span>
                  </strong>
                </div>
                <div className="bars">
                  <div>
                    <span>BEFORE</span>
                    <i />
                    <small>~10.0 s</small>
                  </div>
                  <div>
                    <span>AFTER</span>
                    <i />
                    <small>~2.0 s</small>
                  </div>
                </div>
                <p className="visual-foot">Less waiting. More moving.</p>
              </div>
              <div className="project-content">
                <p className="project-kicker">
                  ENTERPRISE SYSTEMS · BVI · 2025 — PRESENT
                </p>
                <h3>Keeping logistics in motion.</h3>
                <p>
                  I build portal workflows for shipping, inventory, and loading.
                  Replacing repeated queries with cached and batched lookups
                  reduced Shipping Plan Details search from about 10 seconds to
                  2.
                </p>
                <Tags items={['Vue.js', 'IRIS / ObjectScript', 'SQL']} />
                <details>
                  <summary>
                    Behind the improvement <span>+</span>
                  </summary>
                  <p>
                    Repeated per-row master-data queries slowed search. I
                    replaced them with cached and batched lookups while
                    preserving business results, and developed APIs for search,
                    aggregation, status calculations, and quantity conversion.
                  </p>
                </details>
              </div>
            </article>
            <article className="project">
              <div className="project-visual creative">
                <span className="visual-top">CREATIVE DEVELOPMENT / NAFA</span>
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="creative-title">
                  Beyond
                  <br />
                  <i>the page.</i>
                </div>
                <span className="visual-foot">
                  AN INTERACTIVE YEARBOOK EXPERIENCE
                </span>
              </div>
              <div className="project-content">
                <p className="project-kicker">
                  IMMERSIVE WEB · WUNDERFAUKS · 2023 — 2024
                </p>
                <h3>A yearbook that comes alive.</h3>
                <p>
                  Translated NAFA’s creative direction into an interactive web
                  experience, bringing 3D objects, expressive animation, and
                  responsive layouts together.
                </p>
                <Tags items={['Next.js', 'Three.js', 'GSAP']} />
                <details>
                  <summary>
                    Explore the approach <span>+</span>
                  </summary>
                  <p>
                    Built with Next.js and Vite, using Three.js for 3D elements
                    and GSAP for animation. The focus was translating an
                    artistic identity into an experience that works across
                    devices.
                  </p>
                </details>
              </div>
            </article>
            <article className="project">
              <div className="project-visual exchange">
                <span className="visual-top">REAL-TIME SYSTEMS / IMMIN</span>
                <div className="exchange-flow">
                  <span>Market data</span>
                  <i>→</i>
                  <span className="active-node">Reactive API</span>
                  <i>→</i>
                  <span>Interface</span>
                </div>
                <svg
                  className="signal"
                  viewBox="0 0 500 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 75 L40 75 L60 60 L100 60 L120 85 L160 45 L190 55 L230 20 L270 43 L310 33 L350 52 L400 13 L430 28 L470 8 L500 20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 98 H500 M0 65 H500 M0 32 H500"
                    stroke="currentColor"
                    opacity=".1"
                  />
                </svg>
                <span className="visual-foot">CONNECTED BY DESIGN.</span>
              </div>
              <div className="project-content">
                <p className="project-kicker">
                  DIGITAL EXCHANGE · IMMIN · 2021 — 2023
                </p>
                <h3>Built for the next update.</h3>
                <p>
                  Connected wallet overviews, order placement, and a reactive
                  order book with real-time market data. Supported the services
                  and deployments behind the experience.
                </p>
                <Tags
                  items={['Java / Quarkus', 'Flutter', 'GraphQL', 'Docker']}
                />
                <details>
                  <summary>
                    Under the hood <span>+</span>
                  </summary>
                  <p>
                    Developed frontend and backend exchange features, scheduled
                    microservice processes with Quartz, and supported Linux
                    deployments with Docker and Jenkins. Also built React Native
                    KYC flows for the Xallet wallet.
                  </p>
                </details>
              </div>
            </article>
          </div>
          <div className="work-note">
            <span>More code. More curiosity.</span>
            <External href={github}>Explore my GitHub</External>
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="container">
            <p className="eyebrow accent">02 / THE WAY I BUILD</p>
            <div className="about-intro">
              <h2>
                Technical at heart.
                <br />
                <span>Human by design.</span>
              </h2>
              <p>
                I’m a full-stack engineer based in Amagasaki, Japan. Over 7+
                years, I’ve worked on everything from energy-monitoring
                dashboards to immersive brand experiences.
                <br />
                <br />I enjoy making complex things feel simple: understanding
                the problem, connecting the pieces, and caring about how the
                final product works for people.
              </p>
            </div>
            <div className="capabilities">
              <div>
                <span className="cap-icon">[ &nbsp; ]</span>
                <h3>Interfaces with intention.</h3>
                <p>Responsive, reusable, and made for the people using them.</p>
                <Tags items={['React', 'Next.js', 'Vue.js', 'TypeScript']} />
              </div>
              <div>
                <span className="cap-icon">{'{ / }'}</span>
                <h3>Depth behind the details.</h3>
                <p>
                  APIs, data workflows, and systems that connect the whole
                  picture.
                </p>
                <Tags items={['Java', 'Quarkus', 'Node.js', 'IRIS', 'SQL']} />
              </div>
              <div>
                <span className="cap-icon">↗</span>
                <h3>Built to make it out there.</h3>
                <p>
                  From the first working feature to deployment and improvement.
                </p>
                <Tags items={['Docker', 'Jenkins', 'Linux', 'CI/CD']} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section container experience-section"
        >
          <div className="experience-heading">
            <p className="eyebrow accent">03 / THE JOURNEY</p>
            <h2>
              Always building.
              <br />
              <span>Always learning.</span>
            </h2>
            <p>
              Different teams, countries, and challenges.
              <br />
              Each one adding a new perspective.
            </p>
            <span className="journey-note">MYANMAR → SINGAPORE → JAPAN</span>
          </div>
          <div className="timeline">
            {jobs.map((job, i) => (
              <article className="job" key={job.company}>
                <span className={`timeline-dot ${i === 0 ? 'current' : ''}`} />
                <div className="job-date">
                  {job.date}
                  {i === 0 && <span>NOW</span>}
                </div>
                <h3>{job.company}</h3>
                <p className="job-role">
                  {job.role} <span>· {job.place}</span>
                </p>
                <p>{job.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section container">
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow accent">04 / WHAT’S NEXT?</p>
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have a product to build, a challenge to solve,
            <br />
            or just want to say hello? I’d love to hear from you.
          </p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${email}`}>
              Let’s talk <Arrow />
            </a>
            <button className="button secondary" onClick={copyEmail}>
              {copied ? 'Email copied ✓' : 'Copy email'}
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyFailed
              ? `You can reach me at ${email}`
              : copied
              ? 'Email address copied to clipboard.'
              : ''}
          </p>
          <a className="email-link" href={`mailto:${email}`}>
            {email}
          </a>
          <div className="social-links">
            <External href={linkedin}>LinkedIn</External>
            <External href={github}>GitHub</External>
          </div>
        </section>
      </main>
      <footer className="container">
        <a href="#home" aria-label="Aung Khaing Khant back to top">
          <Brand />
        </a>
        <span>© {new Date().getFullYear()} Aung Khaing Khant</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}
