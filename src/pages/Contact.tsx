
function Contact() {
  return (
    <section className="contact-page">
      <p className="eyebrow">CONTACTO</p>

      <h1>hablemos y formemos un gran equipo</h1>

      <p className="section-intro">
        Estoy buscando mi primera oportunidad en desarrollo
        frontend y abierto a conocer nuevos proyectos,
        equipos y oportunidades de aprendizaje.
      </p>

      <div className="contact-card">
        <h2>Mis canales de contacto</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:brunoluduena10@gmail.com">
            brunoluduena10@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/brunoluduena10-netizen"
            target="_blank"
            rel="noreferrer"
          >
            Mi perfil de GitHub ↗
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            Mi perfil profesional ↗
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
