// Archivo: src/components/ArticleCard.jsx
// ¡NUEVO! Tarjeta de artículo, estilizada como un .service-card

import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ post }) {
  const { title, slug, coverImage, excerpt, tags } = post.fields;
  const imageUrl = coverImage?.fields?.file?.url ? `https:${coverImage.fields.file.url}` : null;

  return (
    // Usamos un Link que envuelve todo y tiene la clase .service-card
    <Link to={`/articles/${slug}`} className="service-card" style={{ textDecoration: 'none' }}>
      
      {/* NUEVA SECCIÓN DE IMAGEN */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="article-card-image" // Añadiremos esta clase en index.css
        />
      )}
      
      {/* <h3> para el título (igual que .service-card) */}
      <h3>{title}</h3>
      
      {/* <p> para el excerpt (igual que .service-card) */}
      <p>{excerpt}</p>
      
      {/* (Opcional) Sección de Tags */}
      {tags && tags.length > 0 && (
        <div className="article-card-tags">
          <span>{tags[0]}</span>
        </div>
      )}
    </Link>
  );
}