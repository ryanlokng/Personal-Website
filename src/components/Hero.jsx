export default function Hero() {
  return (
    <section id="home" aria-label="Home">
      <div className="container">
        <div className="hero-content">
          <img
            src="/Gemini_Generated_Image_gatk1dgatk1dgatk.png"
            alt="Ryan Ng"
            className="hero-photo"
            width={164}
            height={164}
            loading="eager"
            decoding="async"
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
  );
}
