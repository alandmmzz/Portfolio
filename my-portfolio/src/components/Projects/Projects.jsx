import React from 'react';
import './Projects.css';

export default function Projects() {

    const proyectos = [
        {
            titulo: "Empleo actual: Front-End Jr. en Asignet",
            descripcion: "Desarrollo front-end y diseño UXUI",
            skills: [
                { nombre: "HTML", imagen: "/assets/img/skills/html.png" },
                { nombre: "CSS", imagen: "/assets/img/skills/css-3.png" },
                { nombre: "JQuery", imagen: "/assets/img/skills/jquery.png" },
                { nombre: "Adobe Illustrator", imagen: "/assets/img/skills/illustrator.png" },
                { nombre: "Figma", imagen: "/assets/img/skills/figma.png" },
            ],
            imagenes: [
                "/assets/img/proyectos/proyecto1.jpg",
                null, // si la querés vacía (por ahora)
                null
            ]
        },
        {
            titulo: "Nombre del Proyecto",
            descripcion: "Breve descripción. Qué tecnologías usaste, qué rol tuviste, etc.",
            skills: [
                { nombre: "Shopify", imagen: "/assets/img/skills/shopify.png" },
                { nombre: "Figma", imagen: "/assets/img/skills/figma.png" }
            ],
            imagenes: [
                null,
                null,
                null
            ]
        },
        {
            titulo: "Nombre del Proyecto",
            descripcion: "Breve descripción. Qué tecnologías usaste, qué rol tuviste, etc.",
            skills: [
                { nombre: "Bootstrap", imagen: "/assets/img/skills/bootstrap.png" },
                { nombre: "React", imagen: "/assets/img/skills/react.png" },
                { nombre: "Firebase", imagen: "/assets/img/skills/firebase.png" },
            ],
            imagenes: [
                null,
                null,
                null
            ]
        }
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
                                    <div className="proyecto-header-left">
                                        <h3>{proyecto.titulo}</h3>
                                        <p>{proyecto.descripcion}</p>
                                    </div>
                                    <div className="proyecto-header-right">
                                        {proyecto.skills.map((skill, idx) => (
                                            <div className="skill-container" key={idx}>
                                                <div className="skill-image">
                                                    <img src={skill.imagen} alt={skill.nombre} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="proyecto-body">
                                    <div className="proyecto-image-container">
                                        <div className="proyecto-image image-left">
                                            {proyecto.imagenes[0] && <img src={proyecto.imagenes[0]} alt={`Imagen 1 de ${proyecto.titulo}`} />}
                                        </div>
                                    </div>
                                    <div className="proyecto-image-container">
                                        <div className="proyecto-image image-right">
                                            {proyecto.imagenes[1] && <img src={proyecto.imagenes[1]} alt={`Imagen 2 de ${proyecto.titulo}`} />}
                                        </div>
                                        <div className="proyecto-image image-right">
                                            {proyecto.imagenes[2] && <img src={proyecto.imagenes[2]} alt={`Imagen 3 de ${proyecto.titulo}`} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}