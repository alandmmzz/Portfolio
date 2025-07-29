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