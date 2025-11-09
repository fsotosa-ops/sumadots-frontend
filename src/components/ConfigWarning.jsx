// Archivo: src/components/ConfigWarning.jsx
// ¡NUEVO!

import React from 'react';

export default function ConfigWarning() {
  // Estilos en línea para que funcione sin CSS extra
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '40px 20px',
      color: 'var(--color-text-light)',
    },
    box: {
      backgroundColor: 'var(--color-base-dark-2)',
      border: '1px solid var(--color-border)',
      borderRadius: '12px',
      padding: '40px',
      maxWidth: '600px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    },
    title: {
      color: '#e53e3e', // Rojo para error
      fontSize: '2rem',
      margin: '0 0 15px 0',
    },
    text: {
      color: 'var(--color-text-secondary)',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    code: {
      backgroundColor: 'var(--color-base-dark)',
      padding: '2px 6px',
      borderRadius: '4px',
      fontFamily: 'monospace',
      color: '#f6e05e', // Amarillo
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Error de Configuración</h2>
        <p style={styles.text}>
          No se detectaron las variables de entorno de Contentful.
          Por favor, crea un archivo <code style={styles.code}>.env</code> en la raíz del proyecto
          y añade <code style={styles.code}>VITE_CONTENTFUL_SPACE_ID</code> y 
          <code style={styles.code}>VITE_CONTENTFUL_ACCESS_TOKEN</code>.
        </p>
      </div>
    </div>
  );
}