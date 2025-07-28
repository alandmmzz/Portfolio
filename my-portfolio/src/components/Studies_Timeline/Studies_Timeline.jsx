import React from 'react';
import './Studies_Timeline.css';

export default function Studies_Timeline() {

    return (
        <>
            <section id="studies-timeline">
                <div className="contenedor">
                    <h2>Mis estudios</h2>
                    <div className="studies-description-container">
                        <div className="container-left">
                            <h3 className="studies-title">Mis estudios</h3>
                            <div className="studies-description">
                                <p>Desde mis inicios en RPA hasta mi actual rol como Front-End y UX/UI, he recorrido un camino lleno de aprendizaje y crecimiento. Aquí te cuento sobre mis estudios y certificaciones más relevantes.</p>
                                <p>Mi formación incluye cursos de Photoshop, Illustrator, JavaScript, React y más. Siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades.</p>
                            </div>
                            <div className="studies-links">
                                <a href="#">Ver más detalles</a>
                            </div>
                        </div>
                        <div className="container-right">
                            <div className="studies-image-container">
                                <div className="studies-image">
                                    <img src="./assets/img/certificados/66205fe55deea300199bad26.png" alt="Mis estudio" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="studies-content">
                        <div className="studies-timeline">
                            <ul className="second-level-studies">
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>Photoshop e Illustrator</h4>
                                    <p>Coderhouse - 2024</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Adobe Photoshop</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Adobe Illustrator</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>Front-End React Dev.</h4>
                                    <p>Coderhouse - 2024</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>React JS</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Firebase</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>JS for Web Developing</h4>
                                    <p>Coderhouse - 2023</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>JavaScript</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>Web Developing</h4>
                                    <p>Coderhouse - 2023</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Bootstrap</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>SCSS</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>CSS3</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>HTML5</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="second-level-studies">
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>Jóvenes a Programar</h4>
                                    <p>Plan Ceibal - 2021</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Genexus Core 17</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>SQL</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Competencias Transversales</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="second-level-studies">
                                <li className="study-item has-details">
                                    <div className="study-circle"></div>
                                    <h4>Facultad de Ingeniería</h4>
                                    <p>UdelaR - 2021</p>
                                    <ul className="studies-details-list">
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Lógica</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Programación 1</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>Mat. Discreta 1</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>GAL2</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>GAL</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>CDIVV</p>
                                        </li>
                                        <li className="studies-detail">
                                            <div className="study-circle"></div>
                                            <p>CDIV</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="studies-connector">
                                <div className="connector-line"></div>
                            </div>
                            <ul className="first-level-studies">
                                <li>
                                    <div className="study-circle"></div>
                                    <h3>Bachillerato Físico-Matemático</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}