// Archivo: src/components/BlogHero.jsx
// --- CÓDIGO ACTUALIZADO (AHORA USA EL COMPONENTE) ---

import React from 'react';
import './BlogHero.css';
import sumaHeroBanner from '../assets/SumaBlogHero_V4.svg';
import NewsletterForm from './NewsletterForm.jsx'; // 1. Importa el form

function BlogHero() {
  return (
    <section className="blog-hero">
      
      {/* DIV FULL-WIDTH PARA EL BANNER */}
      <div className="hero-banner-wrapper">
        <img 
          src={sumaHeroBanner}
          alt="La Bitácora de Suma Banner"
          className="hero-banner-image"
        />
      </div>

      {/* DIV CON MARGEN (.container) PARA EL TEXTO */}
      <div className="container">
        <div className="hero-text">
          
          <h1 className="section-title">
            La Bitácora de <span className="highlight-suma">Suma</span>
          </h1>
          
          <p className="section-subtitle">
            Conectando los <i>dots</i> de la data, la estrategia y el impacto. 
            Tu dosis de conocimiento, directo desde el <i>data&nbsp;center</i>.
          </p>

          {/* 2. Reemplaza el <form> por el componente */}
          <NewsletterForm />

        </div>
      </div>
    </section>
  );
}

export default BlogHero;