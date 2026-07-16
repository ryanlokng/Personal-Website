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
  );
}
