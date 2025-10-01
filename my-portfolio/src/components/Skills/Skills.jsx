import React, { useRef, useEffect, useState } from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", image: "/assets/img/skills/html.png" },
    { name: "CSS", image: "/assets/img/skills/css-3.png" },
    { name: "SASS", image: "/assets/img/skills/sass.png" },
    { name: "Bootstrap", image: "/assets/img/skills/bootstrap.png" },
    { name: "JavaScript", image: "/assets/img/skills/javascript.png" },
    { name: "React JS", image: "/assets/img/skills/react.png" },
    { name: "JQuery", image: "/assets/img/skills/jquery.png" },
    {
      name: "Adobe Illustrator",
      image: "/assets/img/skills/illustrator.png",
    },
    { name: "Shopify", image: "/assets/img/skills/shopify.png" },
    { name: "Adobe Photoshop", image: "/assets/img/skills/photoshop.png" },
    { name: "Figma", image: "/assets/img/skills/figma.png" },
    { name: "GeneXus", image: "/assets/img/skills/genexus.png" },
  ];
  const experiences = [
    {
      title: "Desarrollador Frontend & UXUI Jr.",
      description: `Design and maintain responsive interfaces with HTML, CSS & JS.
        Built mockups in Figma, icons in Illustrator and assets in Photoshop.
        Developed interactive features (e.g. dark mode) with vanilla JS and Jquery.
        Great communication with back-end teams and with big clients like Meta & Microsoft.
        Built pages from scratch using Bootstrap.`,
      company: "Asignet - 2024 - Present",
    },
    {
      title: "RPA Developer",
      description: `Mi foco principal estaba en automatizar la descarga de facturas de portales de telefonía móvil, incluyendo la interacción con formularios web, login de usuarios y navegación de portales.
      Creación de scripts de automatización utilizando HTML, CSS y JavaScript para interactuar con sitios web.
      Mantenimiento y optimización de flujos de trabajo automatizados, adaptándolos a cambios en los portales o en los requerimientos del negocio.`,
      company: "Asignet - 2022 - 2024",
    },
  ];

  const refs = useRef([]);

  return (
    <section id="skills">
      <div className="contenedor">
        <h2>Mi experiencia</h2>
        <h2>Mis skills</h2>

        <div className="experience-container">
          {experiences.map((exp, i) => (
            <div className="experience-row" key={i}>
              <div className="experience-track">
                <div className="track-point"></div>
                {i < experiences.length && <div className="track-line"></div>}
              </div>
              <div
                className="experience-item"
                ref={(el) => (refs.current[i] = el)}
              >
                <h4>{exp.title}</h4>
                <p className="experience-item-description">{exp.description}</p>
                <p>{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-skills">
          {skills.map((skill, i) => (
            <div className="grid-skill-container" key={i}>
              <div className="skill-image">
                <img src={skill.image} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
