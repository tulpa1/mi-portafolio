// src/components/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* Contenedor del Logo/Título */}
      <div className={styles.logoContainer}>
        <a href="#hero" className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <h1 className={styles.logoName}>Jefferson Noe Miranda Pineda</h1>
          <p className={styles.logoTitle}>Ing. Tecnologías Computacionales</p>
        </a>
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
            <a href="#hero" className={styles.navLink} onClick={toggleMenu}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={toggleMenu}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink} onClick={toggleMenu}>Pojects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;