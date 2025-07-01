// src/data/projects.js
const projects = [
  {
    id: 1,
    title: 'Cooperativa Caceenp - NOVA',
    description: 'Migration of the CNCOOP Financial Core to NOVA, an ERP originally developed in Oracle Forms, was therefore migrated to the new Oracle Apex technology, in order to modernize the platform and improve the user experience and optimize transactional processes.',
    technologies: ['Oracle PLSQL', 'APEX', 'Oracle Forms', 'JavaScript', 'HTML', 'CSS', 'jasperReports'],
    githubLink: 'https://github.com/tulpa1/Caceenp_Nova_prj.git',
    liveDemoLink: 'https://www.caceenp.coop/',
    image: '/mi-portafolio/images/ca.jpg' // Guarda tus imágenes en la carpeta public/images
  },
  {
    id: 2,
    title: 'Household Solutions HS - Servi Center Oster',
    description: 'The Oster CRM system is a spare parts management platform. A new module for service center payments (CDS) has been developed, allowing users to manage settlements efficiently, ensuring precise control and a seamless user experience.',
    technologies: ['ScriptCase', 'PHP', 'JavaSscript', 'HTML', 'CSS', 'MySQL'],
    githubLink: 'https://github.com/tulpa1/crm_oster_liquidaciones.git',
    liveDemoLink: 'https://servicenterplus.com/app_Login/',
    image: '/mi-portafolio/images/sevicenterplus.png'
  },
  // ¡Añade aquí todos tus proyectos! Recuerda incluir enlaces a GitHub y demos en vivo.
];

export default projects;