import { useEffect, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
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
            {submitted && (
              <p className="form-status form-status--visible" role="status" aria-live="polite">
                Message sent — I'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
