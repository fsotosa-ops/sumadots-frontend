// Archivo: src/pages/BlogPage.jsx
// --- CÓDIGO ACTUALIZADO ---

import { useState, useEffect } from 'react';
import { contentfulClient } from '../lib/contentfulClient';
import { Link } from 'react-router-dom';
import './BlogPage.css'; 

// --- ¡NUEVA IMPORTACIÓN! ---
import BlogHero from '../components/BlogHero.jsx';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'blogDeSuma', 
      order: '-fields.publishDate', 
    })
    .then((response) => {
      setPosts(response.items);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <BlogHero />
        <div className="container"><p>Cargando posts...</p></div>
      </>
    );
  }

  return (
    <>
      {/* --- ¡NUEVO HERO AQUÍ! --- */}
      <BlogHero />
    
      {/* La lista de artículos ahora empieza aquí */}
      <section id="blog-list" className="blog-list-section">
        <div className="container">
          
          {/* Los títulos <h2...> y <p...> se movieron al BlogHero */}
          
          <div className="blog-grid">
            {posts.map((post) => {
              const publishDate = post.fields.publishDate
                ? new Date(post.fields.publishDate).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })
                : null;

              return (
                <Link 
                  to={`/blog/${post.fields.slug}`} 
                  key={post.sys.id} 
                  className="blog-card"
                >
                  <div className="blog-card-image">
                    <img 
                      src={post.fields.featuredImage?.fields.file.url} 
                      alt={post.fields.featuredImage?.fields.description || ''}
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-metadata">
                      {publishDate && (
                        <span className="blog-card-tag">{publishDate}</span>
                      )}
                    </div>
                    <h3>{post.fields.title}</h3>
                    <p>{post.fields.excerpt}</p>
                    <span className="read-more">Ver más &gt;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;