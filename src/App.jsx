import { useEffect, useState } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/rachel.on.purpose/'

const contentPillars = [
  {
    number: '01',
    title: 'At Home',
    description: 'Collected rooms, simple refreshes, and the little details that make a house feel loved.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Warm, light-filled living room with neutral furnishings',
  },
  {
    number: '02',
    title: 'Personal Style',
    description: 'Easy, feminine pieces and everyday favorites chosen for real life—not just the camera.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Neutral wardrobe pieces arranged on a clothing rack',
  },
  {
    number: '03',
    title: 'Everyday Wellness',
    description: 'Unhurried rhythms, nourishing habits, and gentle reminders to make room for what matters.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',
    alt: 'Coffee, notebook, and flowers on a calm morning desk',
  },
]

const gallery = [
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
    alt: 'Modern home exterior surrounded by mature trees',
    caption: 'The corner that always catches the prettiest afternoon light.',
    className: 'gallery-card--wide',
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
    alt: 'Woman smiling in natural window light',
    caption: 'A little life lately—from Georgia, with love.',
    className: 'gallery-card--tall',
  },
  {
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85',
    alt: 'Soft, inviting sofa with textured pillows',
    caption: 'Proof that cozy and pulled-together can live in the same room.',
  },
  {
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
    alt: 'Fresh seasonal vegetables arranged on a table',
    caption: 'A colorful lunch and one small way I reset for the week.',
  },
  {
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85',
    alt: 'Woman wearing an effortless light summer dress',
    caption: 'The easy dress I keep reaching for.',
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85',
    alt: 'Serene bedroom in warm neutral colors',
    caption: 'Simple layers for a room that feels like an exhale.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-fill" cx="17.4" cy="6.7" r="1" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rachel on Purpose, home">
          Rachel <span>on purpose</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#stories" onClick={closeMenu}>Stories</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a className="nav-social" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram <ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Home · Style · Wellbeing</p>
            <h1 id="hero-title">A beautiful life,<br /><em>lived on purpose.</em></h1>
            <p className="hero-intro">
              Finding meaning in the everyday—from a home that welcomes you in to the rituals that help you feel most like yourself.
            </p>
            <a className="button button--dark" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Follow along <ArrowIcon />
            </a>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-image-main">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=90"
                alt="Warm, welcoming living room with natural details"
              />
            </div>
            <div className="hero-image-inset">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=90"
                alt="Rachel, smiling in soft natural light"
              />
            </div>
            <p className="hero-note">Come on in<br />and stay awhile.</p>
          </div>

          <a className="scroll-cue" href="#welcome" aria-label="Scroll to introduction">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="welcome section-pad" id="welcome" data-reveal>
          <p className="section-kicker">The heart behind it all</p>
          <h2>More ease. More beauty.<br />More of what <em>matters.</em></h2>
          <div className="welcome-copy">
            <p className="dropcap">
              Around here, beautiful doesn’t mean perfect. It means a home with its doors open, an outfit that makes the day feel brighter, and routines that leave space for the people you love.
            </p>
            <p>
              Rachel on Purpose is a collection of honest inspiration for creating a life that feels considered—but never complicated. Think of it as a note from a friend who’s always happy to share where she found that lamp.
            </p>
          </div>
        </section>

        <section className="stories section-pad" id="stories" aria-labelledby="stories-title">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">What you’ll find here</p>
              <h2 id="stories-title">Everyday inspiration</h2>
            </div>
            <p>Simple ideas for making home—and life—feel a little more like you.</p>
          </div>

          <div className="pillar-grid">
            {contentPillars.map((pillar, index) => (
              <article className="pillar-card" key={pillar.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                <div className="pillar-image">
                  <img src={pillar.image} alt={pillar.alt} loading="lazy" />
                  <span>{pillar.number}</span>
                </div>
                <div className="pillar-copy">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-break" aria-label="Rachel's philosophy">
          <div className="quote-rule" />
          <blockquote data-reveal>“The loveliest lives aren’t the loudest.<br />They’re the ones that feel like <em>home.</em>”</blockquote>
          <p>— Rachel</p>
        </section>

        <section className="journal section-pad" id="journal" aria-labelledby="journal-title">
          <div className="journal-heading" data-reveal>
            <p className="section-kicker">Life lately</p>
            <h2 id="journal-title">From the journal</h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <InstagramIcon /> @rachel.on.purpose
            </a>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <a
                className={`gallery-card ${item.className ?? ''}`}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                key={item.image}
                data-reveal
                style={{ '--delay': `${(index % 3) * 70}ms` }}
                aria-label={`${item.caption} Open Rachel's Instagram.`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-overlay"><InstagramIcon />{item.caption}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-image" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=90"
              alt="Rachel in an easy, everyday portrait"
              loading="lazy"
            />
            <span className="about-stamp">Based in<br />Evans, GA</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="section-kicker">Well, hello there</p>
            <h2 id="about-title">I’m Rachel.</h2>
            <h3>Homebody, style lover,<br />and believer in the little things.</h3>
            <p>
              From my home in Evans, Georgia, I share the rooms I’m refreshing, the things I’m wearing, and the small habits helping me live with a bit more intention.
            </p>
            <p>
              I’m so glad you found your way here. Pull up a chair—there’s always room for one more.
            </p>
            <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Get to know me on Instagram <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="social-cta" aria-labelledby="social-title">
          <div className="social-cta-inner" data-reveal>
            <InstagramIcon />
            <p className="section-kicker">The door is always open</p>
            <h2 id="social-title">Let’s make the everyday<br /><em>something special.</em></h2>
            <p>Come for the home ideas. Stay for the real life in between.</p>
            <a className="button button--light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Follow @rachel.on.purpose <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#top">Rachel <span>on purpose</span></a>
        <p>Thoughtful living, from the heart of Georgia.</p>
        <div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href="#top">Back to top</a>
        </div>
        <small>© {new Date().getFullYear()} Rachel on Purpose</small>
      </footer>
    </div>
  )
}

export default App
