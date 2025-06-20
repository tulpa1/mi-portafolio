// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Importa tus estilos como un objeto

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <img src="/images/mi-logo.jpg" alt="Logo" className={styles.logoImage} />
            <a href="#hero" className={styles.logo}>Jefferson Noe Miranda Pineda</a>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#about">About</a></li>
          <li className={styles.navItem}><a href="#projects">Projets</a></li>
          <li className={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;