import { Link, useParams } from 'react-router-dom';
import { projects } from '../data';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section id="project-detail" aria-label="Project not found">
        <div className="container blog-post">
          <Link to="/#projects" className="blog-back">&larr; Back to projects</Link>
          <h1>Project not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section id="project-detail" aria-label={project.title}>
      <div className="container blog-post">
        <Link to="/#projects" className="blog-back">&larr; Back to projects</Link>
        <p className="project-org">{project.org}</p>
        <h1 className="blog-post-title">{project.title}</h1>
        <div className="tech-row project-detail-tech">
          {project.tech.map((chip) => (
            <span className="tech-chip" key={chip}>{chip}</span>
          ))}
        </div>
        <div className="blog-post-body">
          {project.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
