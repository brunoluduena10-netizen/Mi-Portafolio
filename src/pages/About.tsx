import messi from "../assets/images/messi.jpg";

function About() {
  return (
    <section className="about-page">
      <p className="eyebrow">SOBRE MÍ</p>

      <div className="about-header">
        <div className="profile-photo">
         
          <img
  src={messi}
  alt="Mi foto de perfil"
  className="foto-perfil"
/>   
        </div>

        <div>
          <h1>Hola, soy Bruno</h1>
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

      <div className="about-grid">
        <article className="info-card">
          <h3>Mi objetivo</h3>
          <p>
            Conseguir mi primera oportunidad laboral en
            desarrollo frontend y aplicar lo que aprendo
            en proyectos reales.
          </p>
        </article>

        <article className="info-card">
          <h3>Mis habilidades</h3>
          <ul>
            <li>JavaScript y TypeScript en aprendizaje</li>
            <li>React en aprendizaje</li>
            <li>SCSS en aprendizaje</li>
            <li>Git y GitHub en aprendizaje</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Formación</h3>
          <p>
            primario y secundario completo
            Estudiante de Ingenieria en Sistemas de 3er año en la UTN frc
          </p>
         
        </article>

        <article className="info-card">
          <h3>Actualmente</h3>
          <p>
            Estoy construyendo mi portafolio y desarrollando
            aplicaciones para practicar programación,
            diseño responsive y organización del código.
          </p>
        </article>
      </div>

      <a
        className="button-primary"
        href="mailto:tu-correo@ejemplo.com"
      >
        Contactarme ↗
      </a>
    </section>
  );
}

export default About;
