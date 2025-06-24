// src/components/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css'; // Para tus estilos

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>Sobre Mí</h2>
        <div className={styles.aboutContent}>
          {/* Puedes añadir una imagen tuya aquí si quieres, colócala en public/images/ */}
          {/* <img
            src="/images/tu-foto-perfil-larga.jpg" // Cambia esto por tu imagen
            alt="Jefferson Miranda"
            className={styles.profileImage}
          /> */}
          <div className={styles.textContainer}>
            <p>
              ¡Hola! Soy **Jefferson Miranda**, un desarrollador Full-Stack apasionado por crear soluciones web innovadoras y eficientes. Con una sólida base en **React.js, Node.js y bases de datos (SQL y NoSQL)**, me especializo en construir aplicaciones robustas, escalables y con interfaces de usuario intuitivas.
            </p>
            <p>
              Mi viaje en el desarrollo comenzó con la curiosidad de entender cómo funcionan las cosas detrás de una pantalla, y rápidamente se convirtió en una pasión por transformar ideas complejas en experiencias digitales fluidas. Me entusiasma aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer tanto profesional como personalmente.
            </p>
            <p>
              Más allá del código, disfruto de [menciona un hobby o interés, ej. "resolver rompecabezas lógicos", "leer sobre IA", "el diseño gráfico básico"]. Siempre estoy buscando proyectos que me permitan combinar mi creatividad con mis habilidades técnicas para entregar valor real.
            </p>
            {/* Puedes añadir una lista de habilidades aquí si lo prefieres en formato de píldoras */}
            {/*
            <div className={styles.skillsList}>
              <h3>Mis Habilidades Clave:</h3>
              <ul>
                <li>**Frontend:** React, JavaScript (ES6+), HTML5, CSS3, Redux</li>
                <li>**Backend:** Node.js, Express.js, REST APIs</li>
                <li>**Bases de Datos:** MongoDB, PostgreSQL, MySQL</li>
                <li>**Herramientas:** Git, GitHub, VS Code, npm/Yarn</li>
                <li>**Conceptos:** Responsive Design, CI/CD, Metodologías Ágiles</li>
              </ul>
            </div>
            */}
          </div>
        </div>
        <p className={styles.callToAction}>
          ¿Tienes un proyecto en mente o quieres conectar? ¡No dudes en <a href="#contact" className={styles.contactLink}>contactarme</a>!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;