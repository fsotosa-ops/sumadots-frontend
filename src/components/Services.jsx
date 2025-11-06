// Archivo: src/components/Services.jsx
// ESTE CÓDIGO AÑADE LOS ICONOS DE VUELTA

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Soluciones Enfocadas en Resultados</h2>
        <p className="section-subtitle">No vendemos servicios, implementamos soluciones que generan rentabilidad social y económica.</p>
        
        <div className="services-grid">
          
          {/* Card 1 con Icono */}
          <div className="service-card">
            <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            <h3>Análisis de Datos e Impacto</h3>
            <p>Medimos lo que importa. Transformamos tus datos en informes claros para tomar decisiones y atraer fondos.</p>
          </div>

          {/* Card 2 con Icono */}
          <div className="service-card">
            <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <h3>Automatización y IA</h3>
            <p>Optimizamos tus procesos. Ahorra tiempo y recursos automatizando tareas repetitivas con IA.</p>
          </div>

          {/* Card 3 con Icono */}
          <div className="service-card">
            <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <h3>Estrategia de Crecimiento</h3>
            <p>Definimos el camino. Creamos planes de crecimiento sostenibles basados en evidencia para PyMEs y ONGs.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;