// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // Para tus estilos
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Si instalas react-icons

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual automáticamente

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          &copy; {currentYear} Jefferson Miranda. Todos los derechos reservados.
        </p>
        <div className={styles.socialLinks}>
          {/* Enlace a GitHub */}
          <a
            href="https://github.com/tulpa1" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub Profile"
          >
            <FaGithub className={styles.icon} />
            GitHub
          </a>
          {/* Enlace a LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jefferson-miranda-776b411ba" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn Profile"
          >
           <FaLinkedin className={styles.icon} /> 
            LinkedIn
          </a>
          {/* anadir redes sociales*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;