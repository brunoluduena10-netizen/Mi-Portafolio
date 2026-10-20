
const projects = [
  {
    title: "Mi portafolio",
    description:
      "Mi primera web personal, creada para presentar mi perfil y mi aprendizaje. Esta es mi primera paguina desarrollada por mi que muestra mis conocimiento actual, tecnologias conocidas, forma de trabajo, diseño e intereses. ",
    technologies: "React · HTML · TypeScript · SCSS",
    status: "finalizado",
  },
  {
    title: "Paguina Web para un gimnasio",
    description:
      "Una página frontend para un gimnasio, con información de planes, horarios y contacto.",
    technologies: "React · HTML · TypeScript · SCSS",
    status: "En desarrollo.",
  },
  {
    title: "Paguina Web para un restaurante",
    description:
      "Una página frontend para un restaurante, con menú, galería y reservas.",
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
            <div className="project-icon">{"------------------------------------------------------------------------------------------------------------------"}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="project-tech">
              {project.technologies}
            </p>
            <span className="project-status">
              {project.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
