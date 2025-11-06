import React from 'react';
import '../Customers.css';

import logoFactorSocial from '../assets/customers/factor-social.svg';
import logoWebcarga from '../assets/customers/webcarga.png';

function Customers() {
  return (
    <section className="customers-section">
      <div className="container">
      
        <h2 className="section-title">Confían en Nosotros</h2>
        
        {/* ========================================= */}
        {/* SOLUCIÓN: Cambia <h3> por <p> */}
        {/*
         * Antes era: <h3 className="section-subtitle customers-subtitle">
         * Ahora es:  <p className="section-subtitle customers-subtitle">
         */}
        <p className="section-subtitle customers-subtitle">
          Impulsando a empresas líderes en la industria
        </p>
        {/* Y cierra con </p> */}
        {/* ========================================= */}

        <div className="logo-bar">
          <img src={logoFactorSocial} alt="Logo de Factor Social" />
          <img src={logoWebcarga} alt="Logo de Webcarga" />
        </div>
        
      </div>
    </section>
  );
}

export default Customers;