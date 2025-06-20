// src/components/HeroSection.jsx
import React from "react";
import styles from "./HeroSection.module.css"; // Importa los estilos

function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}> {/* Usa la clase CSS Module */}
      <h1 className={styles.heroTitle}>
        Hi, I'm Jefferson Miranda
      </h1>
      <p className={styles.heroSubtitle}>
        Developer Full-Stack | passionate about technology and continuous learning.
      </p>
      <a href="#projects" className={styles.heroButton}>
        View Projects
      </a>
    </section>
  );
}

export default HeroSection;