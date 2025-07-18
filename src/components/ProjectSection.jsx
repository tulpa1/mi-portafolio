// src/components/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects'; // Importa los datos de tus proyectos locales
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

import { db } from '../firebaseConfig'; // Asegúrate de que esta ruta sea 100% correcta
import { collection, getDocs, query, orderBy } from 'firebase/firestore';  

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      let loadedProjects = []; // Variable temporal para los proyectos

      try {
        console.log("Intentando cargar desde Firebase..."); // Log 1
        const projectsCollectionRef = collection(db, 'projects');       
        const q = query(projectsCollectionRef, orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        
        const firebaseProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (firebaseProjects.length > 0) {
          loadedProjects = firebaseProjects;
          console.log("Proyectos cargados desde Firebase:", loadedProjects); // Log 2
        } else {
          loadedProjects = projectsData; // Usar datos locales si Firebase está vacío
          console.log("Firebase no devolvió proyectos. Usando datos locales de respaldo:", loadedProjects); // Log 3
          console.warn("No se encontraron proyectos en Firebase. Usando datos locales de respaldo.");
        }

      } catch (err) {
        console.error("Error al cargar los proyectos desde Firebase:", err); // Log 4: Error de Firebase
        setError("No se pudieron cargar los proyectos. Mostrando proyectos de ejemplo."); // Mensaje para el usuario
        loadedProjects = projectsData; // Usar datos locales si hay un error
        console.log("Hubo un error con Firebase. Usando datos locales de respaldo:", loadedProjects); // Log 5
      } finally {
        setProjects(loadedProjects); // Establece los proyectos, ya sean de Firebase o locales
        setLoading(false); 
        console.log("Carga finalizada. Proyectos en estado:", projects); // Log 6 (NOTA: 'projects' aquí puede ser el estado anterior debido al closure)
        console.log("Carga finalizada. Proyectos cargados para setProjects:", loadedProjects); // Log 7 (Mejor para ver el valor que se va a establecer)
      }
    };
    fetchProjects();
  }, []);

  // Asegúrate de que este <p> "probando" se muestre si projects está vacío
  // La condición para mostrar ProjectCard es 'projects.length > 0'
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {loading ? ( // Muestra "Loading..." mientras carga
          <p>Cargando proyectos...</p>
        ) : error ? ( // Muestra el error si existe
          <p className={styles.errorMessage}>{error}</p>
        ) : projects.length > 0 ? ( // Si no hay errores y hay proyectos, mapea
          projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project} 
            />
          ))
        ) : ( // Si no hay proyectos cargados, muestra el mensaje de prueba
          <p>No hay proyectos disponibles para mostrar. (probando fallback)</p>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;