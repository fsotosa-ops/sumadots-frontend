// Archivo: src/App.jsx

// 1. Importamos todos los componentes
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
//import Customers from './components/Customers.jsx'; // <-- 1. IMPORTA EL NUEVO COMPONENTE
import Process from './components/Process.jsx';
import Partners from './components/Partners.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsappButton.jsx';

function App() {
  return (
    // 2. Los organizamos
    <>
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Process />
        <Partners/>
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;