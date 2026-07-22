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
        <h1 className="blog-post-title">{project.detailTitle || project.title}</h1>
        {project.subtitle && <p className="blog-post-subtitle">{project.subtitle}</p>}
        <div className="tech-row project-detail-tech">
          {project.tech.map((chip) => (
            <span className="tech-chip" key={chip}>{chip}</span>
          ))}
        </div>
        <div className="blog-post-body">
          {project.content.map((block, i) => {
            if (block.type === 'heading') return <h2 key={i} className="blog-post-heading">{block.text}</h2>;
            if (block.type === 'image') return <img key={i} src={block.src} alt={block.alt} className="blog-post-image" />;
            if (block.type === 'list') return (
              <ul key={i} className="blog-post-list">
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
