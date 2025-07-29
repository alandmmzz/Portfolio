import React from 'react';
import './Studies_Timeline.css';
import Studies from './Studies';
import { studies } from './studiesData.js'; // el JSON

export default function Studies_Timeline() {
    return (
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
                    <Studies data={studies} />
                </div>
            </div>
        </section>
    );
}
