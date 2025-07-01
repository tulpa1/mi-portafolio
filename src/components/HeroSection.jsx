// src/components/HeroSection.jsx
import React from "react";
import styles from "./HeroSection.module.css";
import CodeBackground from "./CodeBackground"; // ¡Importa el nuevo componente!

function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* El fondo de código se renderiza primero, detrás del contenido */}
      <CodeBackground />

      {/* Tu contenido principal del Hero Section */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hola, soy Jefferson
        </h1>
        <p className={styles.heroSubtitle}>
          Desarrollador Full-Stack | Apasionado por la tecnología y el diseño
        </p>
        <a href="#projects" className={styles.heroButton}>
          Ver Proyectos
        </a>
      </div>
    </section>
  );
}

export default HeroSection;