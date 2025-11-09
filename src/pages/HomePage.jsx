// Archivo: src/pages/HomePage.jsx
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import Partners from '../components/Partners.jsx';
import ContactForm from '../components/ContactForm.jsx';

// Esta es tu página de inicio actual
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Partners />
      <ContactForm />
    </>
  );
}

export default HomePage;