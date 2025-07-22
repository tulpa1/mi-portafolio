import React from 'react';
import ProjectForm from '../components/ProjectForm'; // Importa tu ProjectForm

function AddProject() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', paddingTop: '100px' }}> {/* Añadido paddingTop para evitar que el form quede debajo del header */}
      <ProjectForm />
    </div>
  );
}

export default AddProject;