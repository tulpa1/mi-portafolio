// src/components/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css'; // Para tus estilos
import { useState } from 'react'; // Para manejar el estado del formulario

function ContactForm() {
  // Estado para manejar el mensaje de envío
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario (recarga de página)
    setStatus('sending'); // Establece el estado a "enviando"

    const form = event.target;
    const data = new FormData(form);
    const formspreeUrl = "https://formspree.io/f/manjprbb"; // <<--- ¡CAMBIA ESTO! Pega tu URL de Formspree aquí

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success'); // Éxito en el envío
        form.reset(); // Limpia el formulario
      } else {
        const result = await response.json();
        setStatus('error'); // Error en el envío
        console.error('Formspree error:', result);
      }
    } catch (error) {
      setStatus('error'); // Error de red
      console.error('Network error:', error);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>Contáctame</h2>
        <p className={styles.description}>
          ¿Tienes un proyecto en mente, una pregunta o simplemente quieres saludar?
          ¡No dudes en rellenar el formulario!
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className={styles.textarea}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === 'sending'} // Deshabilita el botón mientras se envía
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {status === 'success' && (
            <p className={styles.statusMessage + ' ' + styles.success}>
              ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.statusMessage + ' ' + styles.error}>
              Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde o contáctame directamente por email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;