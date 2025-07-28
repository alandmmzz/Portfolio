import React from 'react';
import './Projects.css';

export default function Projects() {

    return (
        <>
            <section id="proyectos">
                <div className="contenedor">
                    <h2>Proyectos destacados</h2>
                    <div className="grid-proyectos">
                        <div className="proyecto">
                            <div className="proyecto-header">
                                <div className="proyecto-header-left">
                                    <h3>Empleo actual: Front-End Jr. en Asignet</h3>
                                    <p>Desarrollo front-end y diseño UXUI</p>
                                </div>
                                <div className="proyecto-header-right">
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/html.png" alt="HTML5" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/css.png" alt="CSS" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/jquery.png" alt="JQuery" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/illustrator.png" alt="Adobe Illustrator" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/figma.png" alt="Figma" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="proyecto-body">
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-left">
                                        <img src="./assets/img/proyectos/proyecto1.jpg" alt="Proyecto 1"/>
                                    </div>
                                </div>
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-right"></div>
                                    <div className="proyecto-image image-right"></div>
                                </div>
                            </div>
                        </div>
                        <div className="proyecto">
                            <div className="proyecto-header">
                                <div className="proyecto-header-left">
                                    <h3>Nombre del Proyecto</h3>
                                    <p>Breve descripción. Qué tecnologías usaste, qué rol tuviste, etc.</p>
                                </div>
                                <div className="proyecto-header-right">
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/shopify.png" alt="Shopify" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/figma.png" alt="Figma" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="proyecto-body">
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-left"></div>
                                </div>
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-right"></div>
                                    <div className="proyecto-image image-right"></div>
                                </div>
                            </div>
                        </div>
                        <div className="proyecto">
                            <div className="proyecto-header">
                                <div className="proyecto-header-left">
                                    <h3>Nombre del Proyecto</h3>
                                    <p>Breve descripción. Qué tecnologías usaste, qué rol tuviste, etc.</p>
                                </div>
                                <div className="proyecto-header-right">
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/Bootstrap.png" alt="Bootstrap" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/react.png" alt="React" />
                                        </div>
                                    </div>
                                    <div className="skill-container">
                                        <div className="skill-image">
                                            <img src="./assets/img/skills/firebase.png" alt="Firebase" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="proyecto-body">
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-left"></div>
                                </div>
                                <div className="proyecto-image-container">
                                    <div className="proyecto-image image-right"></div>
                                    <div className="proyecto-image image-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}