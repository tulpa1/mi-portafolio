// src/data/projects.js
const projects = [
  {
    id: 1,
    title: 'Clon de Netflix (demostrativo)',
    description: 'Una recreación de la interfaz de usuario de Netflix usando la API de TMDB para obtener datos de películas.',
    technologies: ['React', 'Firebase', 'CSS3', 'React Router'],
    githubLink: 'https://github.com/tu-usuario/netflix-clone',
    liveDemoLink: 'https://tu-usuario.vercel.app/netflix-clone-demo/',
    image: '/images/netflix-clone-screenshot.jpg' // Guarda tus imágenes en la carpeta public/images
  },
  {
    id: 2,
    title: 'Aplicación de Gestión de Gastos',
    description: 'Una herramienta para llevar un seguimiento de los gastos diarios, con funcionalidades de filtrado y visualización de gráficos.',
    technologies: ['React', 'Context API', 'Chart.js', 'Styled Components'],
    githubLink: 'https://github.com/tu-usuario/expense-tracker',
    liveDemoLink: 'https://tu-usuario.netlify.app/expense-tracker-app/',
    image: '/images/expense-tracker-screenshot.png'
  },
  // ¡Añade aquí todos tus proyectos! Recuerda incluir enlaces a GitHub y demos en vivo.
];

export default projects;