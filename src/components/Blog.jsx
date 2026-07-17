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
          {blogPosts.map(({ slug, title, excerpt, tag }) => (
            <Link to={`/blog/${slug}`} className="blog-card" key={slug}>
              <h3 className="blog-title">{title}</h3>
              <p className="blog-excerpt">{excerpt}</p>
              <span className="blog-pill">{tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
