// src/data/projects.js
const projects = [
  {
    id: 1,
    title: 'Cooperativa Caceenp - NOVA',
    description: 'Migración del Core financiero CNCOOP a NOVA, es un ERP desarrollado originalmente en Oracle forms, por lo cual se migro a la nueva tecnología Oracle Apex, con el fin de modernizar la plataforma y mejorar la experiencia del usuario y optimizar los procesos transaccionales.',
    technologies: ['Oracle PLSQL', 'APEX', 'Oracle Forms', 'JavaScript', 'HTML', 'CSS', 'jasperReports'],
    githubLink: 'https://github.com/tulpa1/Caceenp_Nova_prj.git',
    liveDemoLink: 'https://www.caceenp.coop/',
    image: '/images/ca.jpg' // Guarda tus imágenes en la carpeta public/images
  },
  {
    id: 2,
    title: 'Household Solutions HS - Servi Center Oster',
    description: 'El sistema CRM Oster es una plataforma de gestión de refacciones, se desarrollo un nuevo modulo para los pagos a los centros de servicio(CDS), el cual permite a los usuarios gestionar las liquidaciones de manera eficiente, asegurando un control preciso y una experiencia de usuario fluida.',
    technologies: ['ScriptCase', 'PHP', 'JavaSscript', 'HTML', 'CSS', 'MySQL'],
    githubLink: 'https://github.com/tu-usuario/expense-tracker',
    liveDemoLink: 'https://tu-usuario.netlify.app/expense-tracker-app/',
    image: '/images/sevicenterplus.png'
  },
  // ¡Añade aquí todos tus proyectos! Recuerda incluir enlaces a GitHub y demos en vivo.
];

export default projects;