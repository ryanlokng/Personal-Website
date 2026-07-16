import { useState, useEffect } from 'react';
import './styles.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function openMenu() {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About me', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const blogPosts = [
    {
      title: 'How automation cleaned up 3 months of Excel chaos at HAECO',
      excerpt: 'A behind-the-scenes look at building a practical automation solution during my internship — and what I learned about change management inside large organisations.',
      tag: 'Operations',
    },
    {
      title: 'What aviation taught me about precision in engineering',
      excerpt: "Reflections from working within Cathay Pacific's corporate teams — the rigour of aviation translated into everyday workflow habits and systems thinking.",
      tag: 'Reflections',
    },
    {
      title: 'Running 20 km and shipping side projects: the overlap',
      excerpt: 'What long-distance running has in common with building systems — patience, iteration, and the stubborn refusal to stop before the finish line.',
      tag: 'Personal',
    },
  ];

  return (
    <>
      <header className="nav" role="banner">
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
        >
          <span /><span /><span />
        </button>
        <a href="#home" className="nav-logo" aria-label="Ryan Ng — home">RN</a>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <nav>
          <ul className="menu-nav">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="menu-link" onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-footer">
          <span className="menu-divider" />
          <span className="menu-tagline">Winners don't give up</span>
        </div>
      </div>

      <section id="home" aria-label="Home">
        <div className="container">
          <div className="hero-content">
            <img
              src="mrmxundd-Gemini_Generated_Image_gatk1dgatk1dgatk.png"
              alt="Ryan Ng"
              className="hero-photo"
            />
            <h1 className="hero-name">Ryan Ng</h1>
            <p className="hero-eyebrow">Engineering Student · University of Hong Kong</p>
            <p className="hero-tagline-mark">Winners don't give up</p>
            <a href="#about" className="hero-cta">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="hero-scroll" aria-hidden="true">Scroll to explore</div>
          </div>
        </div>
      </section>

      <section id="about" aria-label="About me">
        <div className="container">
          <div className="about-header">
            <span className="section-label">About me</span>
            <h2>Engineering meets<br />the real world</h2>
          </div>
          <div className="about-grid">
            <div className="about-bio">
              <p>
                I'm an engineering student at the <strong>University of Hong Kong</strong>, bridging
                digital solutions and the financial sector through hands-on experience in corporate,
                commercial, and operations environments.
              </p>
              <p>
                Through internships at <strong>HAECO</strong> and <strong>Cathay Pacific</strong>,
                I've worked on automations that cleaned up Excel workflows, streamlined
                interdepartmental communications, and improved coordination between clients and
                corporate teams. I'm drawn to building systems that make processes faster, clearer,
                and more effective.
              </p>
              <p>
                Beyond my internship experience, I bring a strong interest in using technology to
                solve practical business problems with precision and impact.
              </p>
              <a href="mrmy2s7i-Ng-Chun-Lok-Ryan_Resume.pdf" download className="resume-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1v9M4.5 7l3.5 3.5L11.5 7M2 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" aria-label="Blog">
        <div className="container">
          <div className="blog-header">
            <div>
              <span className="section-label">Writing</span>
              <h2>Blog</h2>
            </div>
          </div>
          <div className="blog-grid">
            {blogPosts.map(({ title, excerpt, tag }) => (
              <a href="#" className="blog-card" key={title}>
                <p className="blog-status">Coming soon</p>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <span className="blog-pill">{tag}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" aria-label="Projects">
        <div className="container">
          <span className="section-label">Work</span>
          <h2>Projects</h2>
          <div className="projects-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '600px' }}>
            <div className="project-card">
              <p className="project-org">Personal · Ongoing</p>
              <h3 className="project-title">SpeakFlow — AI Interview Prep</h3>
              <p className="project-desc">
                Building an AI-powered interview practice tool with voice interaction, countdown
                timers, and real-time feedback across banking, consulting, and software engineering
                verticals.
              </p>
              <div className="tech-row">
                <span className="tech-chip">AI / LLM</span>
                <span className="tech-chip">Voice UX</span>
                <span className="tech-chip">Web Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Contact">
        <div className="container">
          <span className="section-label">Get in touch</span>
          <h2>Let's connect</h2>
          <div className="contact-grid">
            <div className="contact-intro">
              <p>
                Whether you're a recruiter, a peer, or someone who wants to build something
                together — I'd love to hear from you.
              </p>
              <div className="contact-links">
                <a href="mailto:ryanlokng@gmail.com" className="contact-link">
                  <span className="link-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M1 2.5L10 9L19 2.5M2 1h16a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="#2563a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  ryanlokng@gmail.com
                </a>
                <a href="https://www.linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563a0">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
                <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563a0">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Name</label>
                  <input type="text" id="cf-name" name="name" placeholder="Your name" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email</label>
                  <input type="email" id="cf-email" name="email" placeholder="you@email.com" required autoComplete="email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" placeholder="What's on your mind?" required />
              </div>
              <button type="submit" className="form-submit">Send message</button>
              {formSubmitted && (
                <p className="form-status" role="status" aria-live="polite" style={{ display: 'block' }}>
                  Message sent — I'll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer role="contentinfo">
        <div className="footer-inner">
          <span className="footer-copy">© 2025 Ryan Ng</span>
          <span className="footer-tag">Winners don't give up</span>
          <span className="footer-copy">HKU Engineering</span>
        </div>
      </footer>
    </>
  );
}
