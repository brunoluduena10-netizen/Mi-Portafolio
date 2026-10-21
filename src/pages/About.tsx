import yo5 from "../assets/images/yo5.jpeg";

function About() {
  const skills = [
    { name: "JavaScript / TypeScript", level: 55 },
    { name: "React", level: 45 },
    { name: "SCSS", level: 40 },
    { name: "Git / GitHub", level: 50 },
    { name: "SQL Server", level: 45 },
  ];
  return (
    <section className="about-page">
      <p className="eyebrow">SOBRE MÍ</p>

      <div className="about-header">
        <div className="profile-photo">
         
          <img
            src={yo5}
            alt="foto de Bruno Ludueña"
            className="mi-foto-de-perfil"
          />   
        </div>

        <div>
          <h1>Bruno Daniel Ludueña</h1>
          <h2>Desarrollador frontend en formación</h2>

          <p>
            Estoy aprendiendo desarrollo y trabajando
            en mis primeros proyectos con React, TypeScript
            y SCSS. Me interesa seguir creciendo, aprender
            buenas prácticas y formar parte de un equipo
            de desarrollo.
          </p>
        </div>
      </div>
      <hr />
      <div className="about-grid">
        <article className="info-card">
           <h3>🎯 Mi objetivo</h3>
          <p>
            Conseguir mi primera oportunidad laboral en desarrollo
            frontend y aplicar lo que aprendo en proyectos reales.
          </p>
        </article>
        
        <article className="info-card">
          <h3>🛠️ Mis habilidades</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill.name}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <h3>🎓 Formación</h3>
          <p>Primario y secundario completos</p>
          <p>
            Ingeniería en Sistemas · 3er año
            UTN FRC
          </p>
        </article>

        <article className="info-card">
          <h3>🚀 Actualmente</h3>
          <p>
            Estoy construyendo mi portafolio y desarrollando
            aplicaciones
            para practicar programación,
            diseño responsive y organización del código.
          </p>
        </article>

      </div>

      <a
        className="button-primary"
        href="mailto:brunoluduena10@gmail.com"
      >
        Contactarme ↗
      </a>
    </section>
  );
}

export default About;
