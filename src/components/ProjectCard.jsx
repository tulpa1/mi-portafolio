// src/components/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css'; // Para tus estilos de la tarjeta

function ProjectCard({ project }) { // Recibe un objeto 'project' como prop
  return (
    <div className={styles.projectCard}>
      <img
        src={project.image}
        alt={`Captura de pantalla de ${project.title}`}
        className={styles.projectImage}
      />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              GitHub
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoButton}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;