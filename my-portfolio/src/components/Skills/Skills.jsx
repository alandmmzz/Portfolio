import React from 'react';
import './Skills.css';

export default function Skills() {

    const skills = [
        { name: "HTML", image: "/assets/img/skills/html.png" },
        { name: "CSS", image: "/assets/img/skills/css-3.png" },
        { name: "SASS", image: "/assets/img/skills/sass.png" },
        { name: "Bootstrap", image: "/assets/img/skills/bootstrap.png" },
        { name: "JavaScript", image: "/assets/img/skills/javascript.png" },
        { name: "React JS", image: "/assets/img/skills/react.png" },
        { name: "JQuery", image: "/assets/img/skills/jquery.png" },
        { name: "Adobe Illustrator", image: "/assets/img/skills/illustrator.png" },
        { name: "Shopify", image: "/assets/img/skills/shopify.png" },
        { name: "Adobe Photoshop", image: "/assets/img/skills/photoshop.png" },
        { name: "Figma", image: "/assets/img/skills/figma.png" },
        { name: "GeneXus", image: "/assets/img/skills/genexus.png" }
    ];

    return (
        <>
            <section id="skills">
                <div className="contenedor">
                    <h2>Mis skills</h2>
                    <div className="experience-container">
                        <h3>Experiencia</h3>
                        <div className='experience-list'>
                            <div className='experience-item'>
                                <h4>Desarrollador Frontend</h4>
                                <p>Empresa XYZ - 2020 - Presente</p>
                            </div>
                            <div className='experience-item'>
                                <h4>Diseñador UI/UX</h4>
                                <p>Empresa ABC - 2018 - 2020</p>
                            </div>
                        </div>
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
        </>
    )
}