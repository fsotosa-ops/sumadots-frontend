// Archivo: src/components/ContactForm.jsx
import { useState, useRef } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function ContactForm() {
  // --- Estado para todos los campos del formulario ---
  const [formData, setFormData] = useState({
    servicio: '',
    proyecto: '',
    rubro: '', // Este es el <select>
    rubro_otro: '', // Este es el campo de texto condicional
    'digital-level': '',
    email: '',
  });
  const [phoneValue, setPhoneValue] = useState();

  // --- Estados para la interfaz de usuario (UX) ---
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const formRef = useRef();

  // --- Handler universal para todos los inputs/selects ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- El handleSubmit (asíncrono) para llamar a tu backend ---
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setError(null);

    // Lógica para enviar el rubro correcto
    // Si el rubro es "otro", usa el valor de "rubro_otro". Si no, usa el del select.
    const rubroFinal = formData.rubro === 'otro' ? formData.rubro_otro : formData.rubro;

    const fullData = {
      ...formData,
      rubro: rubroFinal, // Sobreescribimos con el valor final
      phone: phoneValue,
      
      // --- ¡CAMBIO AQUÍ! ---
      // Capturamos la URL actual del navegador para enviarla al backend
      source_url: window.location.href 
    };
    
    // No necesitamos enviar 'rubro_otro' a la API
    delete fullData.rubro_otro; 

    // --- ¡¡ESTA ES LA SECCIÓN MODIFICADA!! ---
    // 1. Lee la variable de entorno (Vite se encarga de elegir el .env correcto)
    const apiUrl = import.meta.env.VITE_API_URL;
    
    try {
      // 2. Apunta a la URL de la variable (sea local o producción)
      const response = await fetch(`${apiUrl}/api/submit-form`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData), // 'fullData' ahora incluye la URL
      });
    // --- FIN DE LA SECCIÓN MODIFICADA ---

      if (!response.ok) {
        throw new Error('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
      }

      setIsLoading(false);
      setIsSubmitted(true); // Muestra el modal de éxito

    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // --- Función para CERRAR el modal y resetear el form ---
  const handleCloseModal = () => {
    setIsSubmitted(false);
    formRef.current.reset(); 
    setFormData({
      servicio: '', proyecto: '', rubro: '', rubro_otro: '', 'digital-level': '', email: '',
    });
    setPhoneValue(undefined); 
    setError(null);
  };

  
  // --- El JSX ahora está conectado a los estados ---
  return (
    <> 
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Hablemos de tu Proyecto</h2>
          <p className="section-subtitle">Completa el formulario o agenda una reunión directa.</p>
          
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="form-grid">
              
              <div className="form-group full-width">
                <label htmlFor="servicio">Servicio de interés</label>
                <select id="servicio" name="servicio" required 
                  value={formData.servicio} onChange={handleChange}
                >
                  <option value="">Seleccione un servicio...</option>
                  <option value="analisis">Analisis de datos y medición de impacto</option>
                  <option value="integraciones">Integraciones</option>
                  <option value="automatizaciones">Automatizaciones</option>
                  <option value="consultoria">Consultoría</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="proyecto">Cuéntanos brevemente tu proyecto</label>
                <textarea 
                  id="proyecto" name="proyecto" required 
                  placeholder="Describe tu desafío o el proyecto que tienes en mente..." 
                  value={formData.proyecto} onChange={handleChange}
                />
              </div>
              
              {/* --- CAMPO RUBRO (SELECT) --- */}
              <div className="form-group">
                <label htmlFor="rubro">Rubro de su organización</label>
                <select id="rubro" name="rubro" required
                  value={formData.rubro} onChange={handleChange}
                >
                  <option value="">Seleccione un rubro...</option>
                  <option value="Retail / Comercio">Retail / Comercio</option>
                  <option value="Minería y Energía">Minería y Energía</option>
                  <option value="Finanzas y Seguros">Finanzas y Seguros</option>
                  <option value="Salud y Asistencia Social">Salud y Asistencia Social</option>
                  <option value="Construción e Inmobiliaria">Construción e Inmobiliaria</option>
                  <option value="Manufactura / Industrial">Manufactura / Industrial</option>
                  <option value="Transporte y Logística">Transporte y Logística</option>
                  <option value="Tecnología y Telecomunicaciones">Tecnología y Telecomunicaciones</option>
                  <option value="Servicios Profesionales">Servicios Profesionales</option>
                  <option value="Educación">Educación</option>
                  <option value="Turismo y Hotelería">Turismo y Hotelería</option>
                  <option value="ONGs / Sin fines de lucro">Organizaciones sin fines de lucro / ONGs</option>
                  <option value="Gobierno / Sector Público">Gobierno / Sector Público</option>
                  <option value="otro">Otro (especificar)</option>
                </select>
              </div>

              {/* --- CAMPO CONDICIONAL "OTRO" --- */}
              {/* Aparece solo si se selecciona "otro" en el select de rubro */}
              {formData.rubro === 'otro' && (
                <div className="form-group">
                  <label htmlFor="rubro_otro">Especifica tu rubro</label>
                  <input type="text" id="rubro_otro" name="rubro_otro" required 
                    placeholder="Ej: Agencia de Medios" 
                    value={formData.rubro_otro} onChange={handleChange}
                  /> 
                </div>
              )}

              {/* --- CAMPO NIVEL DE DIGITALIZACIÓN --- */}
              <div className="form-group">
                <label htmlFor="digital-level">Nivel de digitalización actual</label>
                <select id="digital-level" name="digital-level" required
                  value={formData['digital-level']} onChange={handleChange}
                >
                  <option value="">Seleccione un nivel...</option>
                  <option value="inicial">Inicial (Poco o nada digitalizado)</option>
                  <option value="intermedio">Intermedio (Usamos algunas herramientas)</option>
                  <option value="avanzado">Avanzado (Tenemos sistemas integrados)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required 
                  value={formData.email} onChange={handleChange}
                /> 
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <PhoneInput
                  id="phone" name="phone" required
                  international
                  defaultCountry="CL"
                  value={phoneValue}
                  onChange={setPhoneValue}
                />
              </div>
              
              <div className="form-group full-width">
                <button type="submit" className="cta-button submit-button" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>

              {/* Muestra un mensaje de error en línea si algo falla */}
              {error && (
                <div className="form-group full-width" style={{ color: '#e53e3e', textAlign: 'center' }}>
                  {error}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* --- El POP-UP (Modal) de Éxito --- */}
      {isSubmitted && (
        <div className="modal-overlay">
          <div className="modal-content-box">
            
            <button className="modal-close-button" onClick={handleCloseModal}>
              &times;
            </button>
            
            <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="25" fill="none" stroke="#28a745" strokeWidth="2"/>
              <path fill="none" stroke="#28a745" strokeWidth="3" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>

            <h2 className="section-title">¡Mensaje Enviado!</h2>
            <p className="section-subtitle">
              Muchas gracias por tu interés. Hemos recibido tus datos correctamente y te contactaremos a la brevedad.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;