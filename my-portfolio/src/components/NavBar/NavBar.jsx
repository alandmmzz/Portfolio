import React, { useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const activeLink = navRef.current.querySelector(".nav-link.active");
    const indicator = indicatorRef.current;

    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;

    }
  }, [location]); // 👈 ahora se ejecuta en cada cambio de ruta

  return (
    <header>
      <div className="contenedor-navbar">
        <Link to="/" className="main-title">
          <h1>Aland's Portfolio</h1>
        </Link>

        <nav className="nav" ref={navRef}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/proyectos"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/freelancer"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Freelancer
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => `nav-link ${isActive ? "active contacto" : "contacto"}`}
          >
            Contacto
          </NavLink>
          <span className="nav-indicator" ref={indicatorRef}></span>
        </nav>
        <div className="clear"></div>
      </div>
    </header>
  );
}
