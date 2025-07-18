// src/components/ProjectsSection.jsx
import React, { useState, useEffect } from 'react'; // Importa los Hooks useState y useEffect
import styles from './ProjectsSection.module.css'; // Para tus estilos de la sección
import ProjectCard from './ProjectCard'; // Importa el componente ProjectCard

// Importa los datos de tus proyectos locales como respaldo (fallback)
import localProjectsData from '../data/projects'; 

// Importa las funciones y la instancia de la base de datos de Firebase
import { db } from '../firebase'; // Asegúrate de que 'db' se exporte desde tu archivo firebase.js
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // Funciones para interactuar con Firestore

function ProjectsSection() {
  // Estado para almacenar los proyectos que se mostrarán
  const [projects, setProjects] = useState([]); 
  // Estado para indicar si los datos están cargando
  const [loading, setLoading] = useState(true);   
  // Estado para manejar cualquier error que pueda ocurrir durante la carga
  const [error, setError] = useState(null);       

  // useEffect se ejecuta después de que el componente se renderiza por primera vez
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Crea una referencia a la colección 'projects' en tu base de datos Firestore
        const projectsCollectionRef = collection(db, 'projects'); 
        
        // Crea una consulta para obtener los documentos, opcionalmente ordenados por un campo 'order'
        // Asegúrate de que tus documentos en Firestore tengan un campo numérico llamado 'order'
        // Si no lo necesitas, puedes usar: const q = projectsCollectionRef;
        const q = query(projectsCollectionRef, orderBy('order', 'asc')); 
        
        // Obtiene una instantánea de los documentos que coinciden con la consulta
        const querySnapshot = await getDocs(q); 
        
        // Mapea los documentos de Firestore a un array de objetos JavaScript
        // Cada objeto incluye el 'id' del documento de Firestore y todos sus datos
        const firebaseProjects = querySnapshot.docs.map(doc => ({
          id: doc.id, // El ID único del documento de Firestore
          ...doc.data() // Todos los demás campos del documento (title, description, etc.)
        }));

        // Si se cargaron proyectos desde Firebase, úsalos
        if (firebaseProjects.length > 0) {
          setProjects(firebaseProjects);
        } else {
          // Si no se encontraron proyectos en Firebase, usa los datos locales como respaldo
          setProjects(localProjectsData); 
          console.warn("No se encontraron proyectos en Firebase. Usando datos locales de respaldo.");
        }

      } catch (err) {
        // Si ocurre un error al cargar desde Firebase
        console.error("Error al cargar los proyectos desde Firebase:", err);
        setError("No se pudieron cargar los proyectos desde Firebase. Mostrando proyectos de ejemplo locales.");
        // En caso de error, también usa los datos locales como respaldo
        setProjects(localProjectsData); 
      } finally {
        // Finalmente, establece el estado de carga a falso, independientemente del éxito o error
        setLoading(false); 
      }
    };

    // Llama a la función para cargar los proyectos
    fetchProjects();
  }, []); // El array de dependencias vacío [] asegura que este efecto se ejecute solo una vez al montar el componente

  // Renderizado condicional basado en el estado de carga y error
  if (loading) {
    return (
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p>Cargando proyectos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.errorMessage}>{error}</p> {/* Asegúrate de tener un estilo para .errorMessage */}
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {/* Mapea sobre el array de proyectos y renderiza una ProjectCard para cada uno */}
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          // Mensaje si no hay proyectos disponibles (ni de Firebase ni del respaldo local)
          <p>No hay proyectos disponibles para mostrar.</p> 
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;


