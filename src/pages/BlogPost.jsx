// Archivo: src/pages/BlogPost.jsx
// --- CÓDIGO ACTUALIZADO (SOLO EL FORMULARIO) ---

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentfulClient } from "../lib/contentfulClient";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'; 
import './BlogPost.css'; 
import NewsletterForm from '../components/NewsletterForm.jsx';

// --- ¡LÓGICA DE RENDERIZADO SIMPLIFICADA! ---
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      // 1. Revisamos el contenido "crudo" del nodo
      if (node.content && node.content.length === 1 && node.content[0].nodeType === 'text') {
        
        const textValue = node.content[0].value.trim().toUpperCase();
        
        if (textValue === '[SUSCRIBIRSE]') {
          // 2. ¡CAMBIO! Renderizamos SOLO el formulario
          return (
            <div className="post-cta-wrapper">
              <NewsletterForm />
            </div>
          );
        }
      }
      // 3. Si no coincide, devolvemos un párrafo normal
      return <p>{children}</p>;
    },
  },
};

function BlogPost() {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'blogDeSuma', 
      'fields.slug': slug, 
    })
    .then((response) => {
      if (response.items.length > 0) {
        setPost(response.items[0]);
      }
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching post:", error);
      setIsLoading(false);
    });
  }, [slug]); 

  if (isLoading) {
    return <div className="container"><p>Cargando...</p></div>;
  }

  if (!post) {
    return <div className="container"><p>Post no encontrado.</p></div>;
  }

  const publishDate = post.fields.publishDate
    ? new Date(post.fields.publishDate).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null;

  return (
    <article className="blog-post">
      <div className="container-narrow">
        
        <h1>{post.fields.title}</h1>
        {publishDate && (
          <p className="blog-post-date">{publishDate}</p>
        )}
        
        <img 
          className="blog-post-featured-image"
          src={post.fields.featuredImage?.fields.file.url} 
          alt={post.fields.featuredImage?.fields.description || ''}
        />

        <p className="blog-post-excerpt">{post.fields.excerpt}</p>

        <div className="blog-post-content">
          {documentToReactComponents(post.fields.content, renderOptions)}
        </div>
      </div>
    </article>
  );
}

export default BlogPost;