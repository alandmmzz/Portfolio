// Footer.jsx
import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // íconos

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content contenedor">
        <p>© 2025 Aland Martinez — Hecho con React, JS y CSS puro</p>

        <div className="footer-links">
          <a href="https://github.com/alandmmzz" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aland-martinez" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.instagram.com/alandmmzz" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
