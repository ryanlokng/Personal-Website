export default function About() {
  return (
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
            <a href="/Ng-Chun-Lok-Ryan_Resume.pdf" download className="resume-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v9M4.5 7l3.5 3.5L11.5 7M2 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
