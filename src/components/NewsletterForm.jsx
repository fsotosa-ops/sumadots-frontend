// Archivo: src/components/NewsletterForm.jsx

import React, { useState } from 'react';
import './NewsletterForm.css'; // Crearemos este CSS

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const formData = {
      email: email,
      servicio: 'Suscripción Newsletter',
      proyecto: 'Suscripción desde La Bitácora de Suma',
      source_url: window.location.href
    };

    try {
      const response = await fetch(`${apiUrl}/api/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo completar el registro. Intenta de nuevo.');
      }
      
      setStatus('success');
      setEmail(''); 
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <div className="newsletter-form-wrapper">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="email"
          className="newsletter-input"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="cta-button newsletter-cta-button"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Suscríbete'}
        </button>
      </form>
      
      {/* Mensajes de estado (éxito o error) */}
      {status === 'success' && (
        <p className="form-message success">
          ¡Genial! Ya estás suscrito.
        </p>
      )}
      {status === 'error' && (
        <p className="form-message error">
          Hubo un error. Por favor, intenta más tarde.
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;