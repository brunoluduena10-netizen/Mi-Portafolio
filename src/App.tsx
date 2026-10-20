
import { NavLink, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <NavLink to="/" className="logo">
          mi<span>portafolio.</span>
        </NavLink>

        <nav>
          <NavLink to="/" end>inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </header>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="*"
            element={<h1>Página no encontrada</h1>}
          />
        </Routes>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} · Mi portafolio</p>
        <a href="mailto:tu-correo@ejemplo.com">
          Contactarme
        </a>
      </footer>
    </div>
  );
}

export default App;
