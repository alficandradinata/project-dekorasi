import './App.css'

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '40+', label: 'Launches' },
  { value: '12', label: 'Awards' },
]

const projects = [
  {
    tag: 'Luxury Startup',
    title: 'Apex Motors',
    description: 'High-performance brand system and launch campaign for premium EV experience.',
    className: 'card-one',
  },
  {
    tag: 'SaaS Platform',
    title: 'Helios Cloud',
    description: 'Conversion-focused interface with a minimal, data-driven engine for B2B growth.',
    className: 'card-two',
  },
  {
    tag: 'E-commerce',
    title: 'Ironline Store',
    description: 'Premium storefront design engineered for velocity, trust, and elevated UX.',
    className: 'card-three',
  },
]

const skills = ['UX Strategy', 'UI Systems', 'Brand Design', 'Prototyping', 'Motion', 'Research']

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <nav className="navbar container">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <div className="brand-text">
              <span className="brand-name">Stark</span>
              <span className="brand-tag">Design Lab</span>
            </div>
          </div>

          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="btn btn-primary">Hire Me</a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Built for impact</p>
            <h1>
              I create <span>digital armor</span><br />
              for ambitious brands.
            </h1>
            <p className="lead">
              I’m a product designer and creative technologist crafting premium digital
              experiences with sharp strategy, cinematic visuals, and user-centered systems.
            </p>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#about" className="btn btn-secondary">About Me</a>
            </div>

            <div className="stat-row">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Futuristic armored dashboard illustration">
            <div className="visor-core">
              <div className="visor-ring ring-one"></div>
              <div className="visor-ring ring-two"></div>
              <div className="visor-center">
                <div className="center-glow"></div>
              </div>
            </div>

            <div className="floating-panel panel-left">
              <span>Brand Systems</span>
              <strong>03</strong>
            </div>

            <div className="floating-panel panel-right">
              <span>Performance</span>
              <strong>98%</strong>
            </div>
          </div>
        </section>

        <section className="projects container" id="projects">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Featured builds</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <div className="project-image"></div>
                <div className="project-info">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about container" id="about">
          <div className="about-copy">
            <p className="eyebrow">Why me</p>
            <h2>Designing experiences with precision and presence.</h2>
            <p>
              I blend strategy, storytelling, and modern interface design to turn product ideas into
              magnetic digital experiences. Every project is shaped to feel premium, intuitive, and built
              for measurable growth.
            </p>
          </div>

          <div className="skills-panel">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>{skill}</span>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contact container" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Let’s build</p>
            <h2>Need a digital identity that feels like a flagship launch?</h2>
            <a href="mailto:hello@starkdesignlab.com" className="btn btn-primary">
              hello@starkdesignlab.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Stark Design Lab</span>
          <span>Powered by precision.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
