import { projects } from '../data';

export default function Projects() {
  const singleColumn = projects.length === 1;

  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <span className="section-label">Work</span>
        <h2>Projects</h2>
        <div className={`projects-grid${singleColumn ? ' projects-grid--single' : ''}`}>
          {projects.map(({ org, title, desc, tech }) => (
            <div className="project-card" key={title}>
              <p className="project-org">{org}</p>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <div className="tech-row">
                {tech.map((chip) => (
                  <span className="tech-chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
