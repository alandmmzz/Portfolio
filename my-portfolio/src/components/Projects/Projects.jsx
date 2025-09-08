import React from "react";
import "./Projects.css";
import { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  const handleOpen = (imagenes, index) => {
    setImages(imagenes);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const proyectos = [
    {
      titulo: "Empleo actual: Front-End Jr. en Asignet",
      descripcion: "Desarrollo front-end y diseño UXUI",
      skills: [
        { nombre: "HTML", imagen: "/assets/img/skills/html.png" },
        { nombre: "CSS", imagen: "/assets/img/skills/css-3.png" },
        { nombre: "JQuery", imagen: "/assets/img/skills/jquery.png" },
        {
          nombre: "Adobe Illustrator",
          imagen: "/assets/img/skills/illustrator.png",
        },
        { nombre: "Figma", imagen: "/assets/img/skills/figma.png" },
      ],
      imagenes: [
        "/assets/img/proyectos/Asignet1.jpg",
        "/assets/img/proyectos/Asignet2.png",
        "/assets/img/proyectos/Asignet3.png",
      ],
    },
    {
      titulo: "ProiPhone",
      descripcion:
        "Diseño y maquetación de la tienda online, implementando layouts personalizados en Shopify y optimizando la experiencia de usuario. Actualmente me encargo del mantenimiento y la actualización de contenidos, asegurando la coherencia visual y la correcta funcionalidad del sitio.",
      skills: [
        { nombre: "Shopify", imagen: "/assets/img/skills/shopify.png" },
        { nombre: "Figma", imagen: "/assets/img/skills/figma.png" },
      ],
      imagenes: [
        "/assets/img/proyectos/ProiPhone2.png",
        "/assets/img/proyectos/ProiPhone1.png",
        "/assets/img/proyectos/ProiPhone3.png",
      ],
    },
    {
      titulo: "Nombre del Proyecto",
      descripcion:
        "Breve descripción. Qué tecnologías usaste, qué rol tuviste, etc.",
      skills: [
        { nombre: "Bootstrap", imagen: "/assets/img/skills/bootstrap.png" },
        { nombre: "React", imagen: "/assets/img/skills/react.png" },
        { nombre: "Firebase", imagen: "/assets/img/skills/firebase.png" },
      ],
      imagenes: [null, null, null],
    },
  ];

  return (
    <>
      <section id="proyectos">
        <div className="contenedor">
          <h2>Proyectos destacados</h2>
          <div className="grid-proyectos">
            {proyectos.map((proyecto, i) => (
              <div className="proyecto" key={i}>
                <div className="proyecto-header">
                  {" "}
                  <div className="proyecto-header-left">
                    {" "}
                    <h3>{proyecto.titulo}</h3> <p>{proyecto.descripcion}</p>{" "}
                  </div>{" "}
                  <div className="proyecto-header-right">
                    {" "}
                    {proyecto.skills.map((skill, idx) => (
                      <div className="skill-container" key={idx}>
                        {" "}
                        <div className="skill-image">
                          {" "}
                          <img src={skill.imagen} alt={skill.nombre} />{" "}
                        </div>{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </div>
                <div className="proyecto-body">
                  {proyecto.imagenes.map((img, idx) => (
                    <div
                      key={idx}
                      className="proyecto-image"
                      onClick={() => handleOpen(proyecto.imagenes, idx)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={img}
                        alt={`Imagen ${idx + 1} de ${proyecto.titulo}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
