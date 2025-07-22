// src/components/ProjectForm.jsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

import styles from '../components/ProjectForm.module.css';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null); // Para el archivo de imagen seleccionado
  const [technologies, setTechnologies] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveDemoLink, setLiveDemoLink] = useState('');
  const [order, setOrder] = useState('');
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false); // Para mostrar estado de subida

  // **Credenciales de Cloudinary (¡CUIDADO CON EL API SECRET!)**
  // Para un frontend, SOLO necesitas el Cloud Name y el Upload Preset Name.
  // NUNCA PONGAS TU API SECRET AQUÍ.
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; // Lo obtendrás del .env
  const CLOUDINARY_UPLOAD_PRESET = 'portafolio_unsigned_upload'; // Usa el nombre de tu preset configurado

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setUploading(true); // Indicar que se está subiendo

    if (!title || !description || !imageFile || !technologies || !order) {
      setMessage('Por favor, completa todos los campos obligatorios y selecciona una imagen.');
      setUploading(false);
      return;
    }

    try {
      // 1. Subir la imagen a Cloudinary
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      // Opcional: folder para organizar tus imágenes en Cloudinary
      formData.append('folder', 'portafolio_proyectos');

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dsgsf2r6x/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!cloudinaryResponse.ok) {
        throw new Error(`Error al subir la imagen a Cloudinary: ${cloudinaryResponse.statusText}`);
      }

      const cloudinaryData = await cloudinaryResponse.json();
      const imageUrl = cloudinaryData.secure_url; // Obtiene la URL segura de la imagen

      // 2. Convertir el string de tecnologías a un array
      const technologiesArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech !== '');

      // 3. Guardar los datos del proyecto (incluyendo la URL de la imagen) en Firestore
      const projectsCollectionRef = collection(db, 'projects');
      await addDoc(projectsCollectionRef, {
        title,
        description,
        image: imageUrl, // ¡Guardamos la URL de Cloudinary!
        technologies: technologiesArray,
        githubLink,
        liveDemoLink,
        order: parseInt(order, 10),
        createdAt: new Date()
      });

      setMessage('¡Proyecto añadido con éxito!');
      // Limpiar el formulario
      setTitle('');
      setDescription('');
      setImageFile(null); // Limpiar el archivo seleccionado
      setTechnologies('');
      setGithubLink('');
      setLiveDemoLink('');
      setOrder('');
      // Para limpiar el input de tipo "file"
      document.getElementById('imageFile').value = '';

    } catch (error) {
      console.error("Error al añadir el proyecto o subir imagen: ", error);
      setMessage(`Error: ${error.message || 'Hubo un problema al añadir el proyecto.'}`);
    } finally {
      setUploading(false); // Finalizar la subida
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Añadir Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit} className={styles.projectForm}>
        {/* Campo Título */}
        <div className={styles.formGroup}>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Campo Descripción */}
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Campo para la SUBIDA DE IMAGEN (input type="file") */}
        <div className={styles.formGroup}>
          <label htmlFor="imageFile">Seleccionar Imagen:</label>
          <input
            type="file"
            id="imageFile"
            onChange={handleFileChange}
            required
            accept="image/*" // Solo permite archivos de imagen
          />
          {imageFile && <p className={styles.selectedFileName}>Archivo seleccionado: {imageFile.name}</p>}
        </div>

        {/* Campo Tecnologías */}
        <div className={styles.formGroup}>
          <label htmlFor="technologies">Tecnologías (separadas por comas):</label>
          <input
            type="text"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
            placeholder="React, Firebase, CSS"
          />
        </div>

        {/* Campo Enlace GitHub */}
        <div className={styles.formGroup}>
          <label htmlFor="githubLink">Enlace GitHub (opcional):</label>
          <input
            type="url"
            id="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            placeholder="https://github.com/tu-usuario/tu-repo"
          />
        </div>

        {/* Campo Enlace Live Demo */}
        <div className={styles.formGroup}>
          <label htmlFor="liveDemoLink">Enlace Live Demo (opcional):</label>
          <input
            type="url"
            id="liveDemoLink"
            value={liveDemoLink}
            onChange={(e) => setLiveDemoLink(e.target.value)}
            placeholder="https://tu-demo.com"
          />
        </div>

        {/* Campo Orden */}
        <div className={styles.formGroup}>
          <label htmlFor="order">Orden (número):</label>
          <input
            type="number"
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
            min="1"
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={uploading}>
          {uploading ? 'Subiendo imagen...' : 'Añadir Proyecto'}
        </button>

        {message && <p className={styles.formMessage}>{message}</p>}
      </form>
    </div>
  );
}

export default ProjectForm;