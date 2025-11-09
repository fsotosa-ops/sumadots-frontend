// Archivo: src/pages/ArticlesPage.jsx
// ¡NUEVO! Página para la lista de artículos

import React, { useState, useEffect } from 'react';
import { client } from '../lib/contentfulClient';
import ArticleCard from '../components/ArticleCard';
import ConfigWarning from '../components/ConfigWarning';

export default function ArticlesPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!client) return; 
    
    client.getEntries({
      content_type: 'blogPost', // Usa el ID de tu Contentful
      order: '-fields.publicationDate',
    })
    .then((response) => setPosts(response.items))
    .catch(console.error);
  }, []);

  if (!client) {
    return <ConfigWarning />;
  }

  return (
    // Reutilizamos tus clases CSS existentes de la sección "Services"
    <section id="articles" className="services">
      <div className="container">
        <h2 className="section-title">Articles</h2>
        <p className="section-subtitle">
          Explorando data, tech y estrategia.
        </p>
        
        {/* Reutilizamos la grid de servicios para las tarjetas del blog */}
        <div className="services-grid">
          {posts.map((post) => (
            <ArticleCard key={post.sys.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}