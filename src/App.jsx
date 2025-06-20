import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Ajusta este valor a la altura de tu Header */}
        <HeroSection />
        {/* ...otras secciones */}
      </main>
      {/*<Footer /> */}
    </div>
  );
}

export default App;