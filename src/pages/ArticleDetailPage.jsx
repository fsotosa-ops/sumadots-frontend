// Archivo: src/pages/ArticleDetailPage.jsx
// ¡NUEVO! Página para el detalle del artículo

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../lib/contentfulClient';
import ConfigWarning from '../components/ConfigWarning';

export default function ArticleDetailPage() {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!client) return; 

    client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })
    .then((response) => {
      if (response.items.length > 0) setPost(response.items[0]);
    })
    .catch(console.error);
  }, [slug]);

  if (!client) return <ConfigWarning />;
  if (!post) return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>Cargando...</div>;

  const { title, coverImage, publicationDate, body } = post.fields;
  const imageUrl = coverImage?.fields?.file?.url ? `https:${coverImage.fields.file.url}` : null;
  const formattedDate = new Date(publicationDate).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    // Usamos el .container para centrar el contenido
    <section className="container" style={{ padding: '80px 20px' }}>
      <div className="article-header" style={{ textAlign: 'center' }}>
        <Link to="/articles" className="article-back-link">
          &larr; Volver a todos los artículos
        </Link>
        <h1 className="section-title" style={{ fontSize: '3.5rem', margin: '20px 0' }}>{title}</h1>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>{formattedDate}</p>
      </div>

      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', margin: '0 auto 40px auto' }} 
        />
      )}
      
      {/* El 'prose' le dará estilos al contenido de Contentful */}
      <div className="prose">
        {documentToReactComponents(body)}
      </div>
    </section>
  );
}