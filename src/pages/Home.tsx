
import { Link } from "react-router";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">DESARROLLO FRONTEND · PORTAFOLIO</p>

        <h1>
          Hola soy Bruno Ludueña
          <span> Desarrollador en formación</span>
        </h1>

        <p className="hero-description">
          Estoy estudiando ingeniería en sistemas y aprendiendo 
          a crear aplicaciones web modernas. Interesado
          en crear páginas accesibles interactivas y
          fáciles de usar con react, typeScript y scss.
        </p>

        <div className="hero-actions">
          <Link to="/proyectos" className="button-primary">
            Ver proyectos ↗
          </Link>

          <Link to="/sobre-mi" className="button-secondary">
            Conocer mi perfil
          </Link>
        </div>

        <div className="tech-list">
          <span>React</span>
          <span>HTML</span>
          <span>TypeScript</span>
          <span>SCSS</span>
        </div>
      </div>

      <div className="hero-card">
        <p>Aprender · Crear · Mejorar</p>
      </div>
    </section>
  );
}

export default Home;
