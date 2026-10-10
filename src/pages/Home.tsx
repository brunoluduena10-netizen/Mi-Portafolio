
import { Link } from "react-router";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">DESARROLLO FRONTEND</p>

        <h1>
          Ludueña Bruno 
          <span> portafolio</span>
        </h1>

        <p className="hero-description">
          Soy un desarrollador en formación interesado
          en crear páginas web modernas, accesibles y
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
