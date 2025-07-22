// src/components/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ¡Importa Link de react-router-dom!

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar clics en enlaces de navegación
  const handleNavLinkClick = () => {
    setIsOpen(false); // Cierra el menú de hamburguesa al hacer clic en un enlace
  };

  return (
    <header className={styles.header}>
      {/* Contenedor del Logo/Título */}
      <div className={styles.logoContainer}>
        {/* Usamos Link para volver al Home (ruta '/') */}
        <Link to="/" className={styles.logoLink} onClick={handleNavLinkClick}>
          <h1 className={styles.logoName}>Jefferson Noe Miranda Pineda</h1>
          <p className={styles.logoTitle}>Ing. Tecnologías Computacionales</p>
        </Link>
      </div>

      {/* Botón de Hamburguesa */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú de Navegación */}
      {/* Añadimos un overlay para oscurecer el fondo cuando el menú está abierto */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      <nav className={`${styles.nav} ${isOpen ? styles.isOpen : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            {/* Para enlaces a secciones dentro de la misma página, mantén <a> y onClick */}
            <a href="#hero" className={styles.navLink} onClick={handleNavLinkClick}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={handleNavLinkClick}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink} onClick={handleNavLinkClick}>Projects</a> {/* Corregí "Pojects" a "Projects" */}
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={handleNavLinkClick}>Contact</a>
          </li>
          {/* ¡NUEVA OPCIÓN: Nuevo Proyecto! */}
          <li className={styles.navItem}>
            {/* Usamos Link para navegar a la ruta /admin-login */}
            <Link to="/admin-login" className={styles.navLink} onClick={handleNavLinkClick}>
              Nuevo Proyecto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;