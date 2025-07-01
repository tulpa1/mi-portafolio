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
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.description}>
          Do you have a project in mind, a question, or just want to say hello?
          Don't hesitate to fill out the form!
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
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
            <label htmlFor="message" className={styles.label}>Message:</label>
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
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className={styles.statusMessage + ' ' + styles.success}>
              Thanks for your message! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.statusMessage + ' ' + styles.error}>
              There was an error sending your message. Please try again later or contact me directly by email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;