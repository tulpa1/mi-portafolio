import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes actuales de tu portafolio
import Header from './components/Header'; // Asumo que este es tu Navbar
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactFom'; // Asegúrate que sea ContactForm o ContactFom
import Footer from './components/Footer';
import GridProject from './components/ProjectGrid';

// Nuevos componentes para la administración
import AddProject from './components/AddProject'; // Esta será la página que contiene tu ProjectForm
import PasswordPrompt from './components/PasswordPrompt'; // El componente para la validación de correo

function App() {
  // Estado para controlar si el acceso al formulario de administración está concedido
  const [accessGranted, setAccessGranted] = useState(false);

  return (
    <Router basename="/mi-portafolio"> 
      <div className="portfolio-app">
        {/* El Header (Navbar) estará siempre visible */}
        <Header /> 

        <main className='main-content' > 
          <Routes>
            {/* Ruta para la página principal del portafolio */}
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ProjectSection />
                  <ContactForm />
                </>
              } 
            />

            {/* Ruta protegida para el formulario de añadir proyecto */}
            <Route
              path="/grid-projects" 
              element={accessGranted ? <GridProject /> : <Navigate to="/admin-login" replace />}
            />

            <Route 
              path="/add-project" 
              element={accessGranted ? <AddProject /> : <Navigate to="/admin-login" replace />} 
            />
            
            {/* Ruta para el formulario de inicio de sesión de administrador (validación por correo) */}
            <Route 
              path="/admin-login" 
              element={<PasswordPrompt setAccessGranted={setAccessGranted} />} 
            />

            {/* Si tienes otras rutas o secciones, las añadirías aquí */}
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
          </Routes>
        </main>
        
        {/* El Footer estará siempre visible */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;