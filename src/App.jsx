import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactFom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Ajusta este valor a la altura de tu Header */}
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactForm />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;