// Archivo: src/components/Partners.jsx
import React from 'react';

// --- ¡CAMBIO IMPORTANTE! ---
// Importamos cada logo individualmente desde la carpeta /assets/partners
// (Añade o quita los que necesites)
import logoAzai from '../assets/partners/azai-consultores-2.svg';
import logoGrowth from '../assets/partners/growth-buddies.svg';
import logoRedimpacto from '../assets/partners/redimpacto-cuadrado-blanco.png';
import Mage from '../assets/partners/m-block-green.png'; // Ejemplo de otro

// --- ¡Aquí es donde gestionas tus logos! ---
// La lista ahora usa las variables importadas, no strings de ruta
const partnersList = [
  { name: 'Azai Consultores', logo: logoAzai },
  { name: 'Growth Buddies', logo: logoGrowth },
  { name: 'Red Impacto', logo: logoRedimpacto },
  { name: 'Mage', logo: Mage },
  // { name: 'React', logo: logoReact },
  // ... (añade más partners aquí a medida que importas sus logos)
];

function Partners() {
  return (
    <section id="partners" className="partners-section">
      <div className="container">
        {/* Usa las mismas clases de título que ya tienes */}
        <h2 className="section-title">Nuestros Partners y Alianzas</h2>
        <p className="section-subtitle">
          Construimos sobre la mejor tecnología y colaboramos con líderes de la industria.
        </p>

        <div className="partners-grid">
          {partnersList.map((partner) => (
            <div className="partner-logo" key={partner.name}>
              <img 
                src={partner.logo} // 'partner.logo' es ahora la variable importada
                alt={`Logo de ${partner.name}`} 
                title={partner.name} // Muestra el nombre al pasar el mouse
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;