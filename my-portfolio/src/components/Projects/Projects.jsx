import React, { useState } from "react";
import "./Projects.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { FaGlobe } from "react-icons/fa";

import { projects } from "./projectsData.js";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    const handleOpen = (imagenes, idx) => {
        setSlides(imagenes.map((img) => ({ src: img }))); // formatea para Lightbox
        setIndex(idx); // arranca desde la imagen clickeada
        setIsOpen(true);
    };

    return (
        <>
            <section id="proyectos">
                <div className="contenedor">
                    <h2>Proyectos destacados</h2>
                    <div className="grid-proyectos">
                        {projects.map((proyecto, i) => (
                            <div className="proyecto" key={i}>
                                <div className="proyecto-header">
                                    <div className="proyecto-header-left">
                                        <h3>{proyecto.titulo}</h3>
                                        <p>{proyecto.descripcion}</p>
                                    </div>
                                    <div className="proyecto-header-right">
                                        {proyecto.skills.map((skill, idx) => (
                                            <div
                                                className="skill-container"
                                                key={idx}
                                            >
                                                <div className="skill-image">
                                                    <img
                                                        src={skill.imagen}
                                                        alt={skill.nombre}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="proyecto-body">
                                    {proyecto.imagenes.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="proyecto-image"
                                            onClick={() =>
                                                handleOpen(proyecto.imagenes, idx)
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Imagen ${idx + 1} de ${proyecto.titulo}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {proyecto.link && (
                                    <div className="proyecto-link">
                                        <a href={proyecto.link}><FaGlobe size="18" />{proyecto.link}</a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    plugins={[Zoom]}
                    slides={slides}
                    index={index}
                    on={{
                        view: ({ index }) => setIndex(index),
                    }}
                />
            )}
        </>
    );
}
