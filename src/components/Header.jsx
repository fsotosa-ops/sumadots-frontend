// Archivo: src/components/Header.jsx
import logoSumaDots from '../assets/suma-dots-logo-header.svg'; 
import { Link } from 'react-router-dom'; // 1. Importa Link

function Header() {
    return (
      <header>
        <div className="container navbar">
          
          <Link to="/" className="logo"> {/* 2. Cambia <a> por Link */}
            <img src={logoSumaDots} alt="Suma dots" />
          </Link>

          <nav className="nav-links">
            <a href="/#services">Servicios</a> {/* Mantenlos como anclas si están en la home */}
            <a href="/#process">Proceso</a>
            <a href="/#contact">Contacto</a>
            <Link to="/blog">Blog</Link> {/* 3. ¡Añade el nuevo enlace al Blog! */}
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;