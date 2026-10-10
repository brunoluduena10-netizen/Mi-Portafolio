
const projects = [
  {
    title: "Mi portafolio",
    description:
      "Mi primera web personal, creada para presentar mi perfil y mi aprendizaje.",
    technologies: "React · TypeScript · SCSS",
    status: "En desarrollo",
  },
  {
    title: "Lista de tareas",
    description:
      "Una aplicación para crear tareas, marcarlas como completadas y eliminarlas.",
    technologies: "React · TypeScript · SCSS",
    status: "Próximo proyecto",
  },
  {
    title: "Control de gastos",
    description:
      "Una aplicación para registrar gastos, clasificarlos y consultar totales.",
    technologies: "React · TypeScript · SCSS",
    status: "Planificado",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <p className="eyebrow">MIS PROYECTOS</p>
      <h1>Aprender haciendo.</h1>
      <p className="section-intro">
        Estos son los proyectos en los que estoy trabajando
        o que quiero desarrollar para seguir aprendiendo.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">{"< />"}</div>
            <span className="project-status">
              {project.status}
            </span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="project-tech">
              {project.technologies}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
