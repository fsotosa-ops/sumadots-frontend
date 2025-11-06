// Archivo: src/components/Hero.jsx

function Hero() {
  return (
    <section className="hero" id="hero">
      
      <video 
        className="hero-video-bg"
        src="/hero-video.mp4" 
        autoPlay
        muted
        playsInline
        loop
      >
        Tu navegador no soporta el video.
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-content-centered">

        <h1>
          Conectando los 
          <span className="highlight-dots"> puntos (dots) </span> 
          hacia tu Rentabilidad
        </h1>
        
        <p className="subtitle">
          Datos, automatización e impacto medible para tu organización
        </p>

        <div className="hero-cta">
          <a 
            // --- CAMBIO AQUÍ: Link de Calendly actualizado ---
            href="https://calendar.app.google/V63XytW1VbK9Vydm9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button" // El CSS se encargará de darle el nuevo estilo
          >
            Agenda tu Sesión Estratégica
          </a>
        </div>

        {/* ========================================= */}
        {/* === CAMBIO: SECCIÓN DE "TARJETAS" ELIMINADA === */}
        {/* ========================================= */}
        
      </div>
    </section>
  );
}

export default Hero;