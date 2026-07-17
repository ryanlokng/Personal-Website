import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section id="blog-post" aria-label="Blog post not found">
        <div className="container blog-post">
          <Link to="/#blog" className="blog-back">&larr; Back to blog</Link>
          <h1>Post not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section id="blog-post" aria-label={post.title}>
      <div className="container blog-post">
        <Link to="/#blog" className="blog-back">&larr; Back to blog</Link>
        <span className="blog-pill">{post.tag}</span>
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-body">
          {post.content.map((block, i) => (
            block.type === 'image'
              ? <img key={i} src={block.src} alt={block.alt} className="blog-post-image" />
              : <p key={i}>{block.text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
