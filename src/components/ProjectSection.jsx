// src/components/ProjectsSection.jsx
import React from 'react';
import projectsData from '../data/projects'; // Importa los datos de tus proyectos
import ProjectCard from './ProjectCard'; // Importa el componente ProjectCard
import styles from './ProjectsSection.module.css'; // Para tus estilos de la sección

function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projets</h2>
      <div className={styles.projectsGrid}>
        {/* Mapea sobre los datos de tus proyectos y renderiza una ProjectCard para cada uno */}
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;