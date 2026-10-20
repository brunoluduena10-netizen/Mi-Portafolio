import yo5 from "../assets/images/yo5.jpeg";

function About() {
  return (
    <section className="about-page">
      <p className="eyebrow">SOBRE MÍ</p>

      <div className="about-header">
        <div className="profile-photo">
         
          <img
            src={yo5}
            alt="Mi-foto-de-perfil"
            className="mi-foto-de-perfil"
          />   
        </div>

        <div className="presentacion">
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
            frontend <br />
             y aplicar lo que aprendo en proyectos reales.
          </p>
        </article>
        <hr />
        <article className="info-card">
          <h3>🛠️ Mis habilidades</h3>
          <ul className="skills-list">
            <li>
              <span>JavaScript / TypeScript</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "55%" }}></div>
              </div>
            </li>
            <li>
              <span>React</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
            </li>
            <li>
              <span>SCSS</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "40%" }}></div>
              </div>
            </li>
            <li>
              <span>Git / GitHub</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "50%" }}></div>
              </div>
            </li>
            <li>
              <span>SQL server</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
            </li>
          </ul>
        </article>
        <hr />
        <article className="info-card">
           <h3>🎓 Formación</h3>
          <p>Primario y secundario completos</p>
          <p>
            Ingeniería en Sistemas · 3er año
            <br />
            UTN FRC
          </p>
         
        </article>
        <hr />
        <article className="info-card">
          <h3>🚀 Actualmente</h3>
          <p>
            Estoy construyendo mi portafolio y desarrollando
            aplicaciones <br />
             para practicar programación,
            diseño responsive y organización del código.
          </p>
        </article>
        <hr />
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
