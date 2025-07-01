// src/components/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css'; // Para tus estilos

// --- Importar íconos de React Icons ---
// Asegúrate de que react-icons esté instalado: npm install react-icons
import { FaCode, FaServer, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';
// FaCode: para habilidades generales de código/frontend
// FaServer: para backend
// FaDatabase: para bases de datos
// FaTools: para herramientas
// FaLightbulb: para conceptos/metodologías (ideas, innovación)
// Puedes explorar más en https://react-icons.github.io/react-icons/
// y cambiar 'fa' por 'di' (DevIcons) o 'si' (Simple Icons) si prefieres otros.

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={styles.aboutContent}>
          <img
            src="/images/about.jpeg" // Cambia esto por tu imagen
            alt="Jefferson Miranda"
            className={styles.profileImage}
          />
          <div className={styles.textContainer}>
            <p>
              I'm a full-stack developer passionate about creating innovative and efficient web solutions. With a solid foundation in React.js, Node.js, and databases (SQL and NoSQL), I specialize in building robust, scalable applications with intuitive user interfaces.
            </p>
            <p>
              My journey in development began with a curiosity to understand how things work behind a screen, and quickly evolved into a passion for transforming complex ideas into seamless digital experiences. I'm excited to learn new technologies and take on challenges that allow me to grow both professionally and personally.
            </p>

            <div className={styles.skillsList}>
              <h3>Skills</h3>
              <ul>
                <li><FaCode className={styles.skillIcon} /> Frontend: React, JavaScript (ES6+), HTML5, CSS3, Redux</li>
                <li><FaServer className={styles.skillIcon} /> Backend: Node.js, Express.js, REST APIs</li>
                <li><FaDatabase className={styles.skillIcon} /> Bases de Datos: MongoDB, PostgreSQL, MySQL</li>
                <li><FaTools className={styles.skillIcon} /> Herramientas: Git, GitHub, VS Code, npm/Yarn</li>
                <li><FaLightbulb className={styles.skillIcon} /> Conceptos: Responsive Design, CI/CD, Metodologías Ágiles</li>
              </ul>
            </div>

          </div>
        </div>
        <p className={styles.callToAction}>
          Do you have a project in mind or want to connect? No, guys! <a href="#contact" className={styles.contactLink}>contact me</a>!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;