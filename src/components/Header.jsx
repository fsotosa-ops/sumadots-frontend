// Archivo: src/components/Header.jsx
import logoSumaDots from '../assets/suma-dots-logo-header.svg'; 

function Header() {
    return (
      <header>
        <div className="container navbar">
          
          <a href="/" className="logo">
            <img src={logoSumaDots} alt="Suma dots" />
          </a>

          <nav className="nav-links">
            <a href="#services">Servicios</a>
            <a href="#process">Proceso</a>
            <a href="#contact">Contacto</a>
            
            {/* --- CAMBIO AQUÍ: Botón "Agendar Reunión" eliminado --- */}
            
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;