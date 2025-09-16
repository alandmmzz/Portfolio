import { useState, useRef, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const links = navRef.current.querySelectorAll(".nav-link");
    const activeLink = links[activeIndex];
    const indicator = indicatorRef.current;

    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - navRect.left}px`;
    }
  }, [activeIndex]);

  return (
    <header>
      <div className="contenedor">
        <h1>Aland Martinez's Portfolio</h1>
        <nav className="nav" ref={navRef}>
          {["Inicio", "Servicios", "Proyectos", "Contacto"].map((label, i) => (
            <a
              key={label}
              href="#"
              className={`nav-link ${activeIndex === i ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(i);
              }}
            >
              {label}
            </a>
          ))}
          <span className="nav-indicator" ref={indicatorRef}></span>
        </nav>
      </div>
    </header>
  );
}
