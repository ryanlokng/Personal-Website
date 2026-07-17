import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section id="blog" aria-label="Blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <span className="section-label">Writing</span>
            <h2>Blog</h2>
          </div>
        </div>
        <div className="blog-grid">
          {blogPosts.map(({ slug, title, excerpt, tag, date }) => (
            <Link to={`/blog/${slug}`} className="blog-card" key={slug}>
              <h3 className="blog-title">{title}</h3>
              <p className="blog-excerpt">{excerpt}</p>
              <div className="blog-meta">
                <span className="blog-pill">{tag}</span>
                <span className="blog-date">{date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
