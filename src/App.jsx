// Archivo: src/App.jsx
import { Routes, Route } from 'react-router-dom';

// 1. Importa tus componentes actuales
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsappButton.jsx';

// 2. Importa las nuevas "Páginas" que crearemos
import HomePage from './pages/HomePage.jsx'; // Renombraremos tu lógica actual a una "página"
import BlogPage from './pages/BlogPage.jsx';   // La nueva lista de artículos
import BlogPost from './pages/BlogPost.jsx'; // El nuevo post individual

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Puedes añadir más rutas aquí, ej: <Route path="/contacto" element={<ContactPage />} /> */}
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;