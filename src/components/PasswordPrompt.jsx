import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PasswordPrompt.module.css'; // Asegúrate de crear este archivo de estilos

function PasswordPrompt({ setAccessGranted }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores previos

    // *** ¡IMPORTANTE! Este es el correo electrónico que debe coincidir. ***
    // Como se mencionó, esto es una validación básica y el correo es visible en el código fuente.
    // Para seguridad real, se requeriría un sistema de autenticación de backend.
    const REQUIRED_EMAIL = 'jmirand360@gmail.com'; 

    if (email === REQUIRED_EMAIL) {
      // Si el correo es correcto, otorgar acceso
      setAccessGranted(true);
      // Redirigir al formulario de nuevo proyecto
      navigate('/add-project'); 
    } else {
      setError('Correo electrónico incorrecto. Acceso denegado.');
    }
  };

  return (
    <div className={styles.promptContainer}>
      <form onSubmit={handleLogin} className={styles.promptForm}>
        <h2 className={styles.promptTitle}>Acceso Restringido</h2>
        <p className={styles.promptMessage}>Ingresa tu correo electrónico para acceder al formulario de nuevo proyecto.</p>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu_correo@ejemplo.com" // Puedes cambiar este placeholder
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Acceder</button>
      </form>
    </div>
  );
}

export default PasswordPrompt;