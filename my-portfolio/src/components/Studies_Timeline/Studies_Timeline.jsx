import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

import './Studies_Timeline.css';
import Studies from './Studies';
import { studies } from './studiesData.js';

export default function Studies_Timeline() {
    const [selectedStudy, setSelectedStudy] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const imageUrl = selectedStudy?.certification;

    return (
        <section id="studies-timeline">
            <div className="contenedor">
                <h2>Mis estudios</h2>
                <div className="studies-description-container">
                    <div className="container-left" style={selectedStudy?.certification ? {} : { width: "100%" }}>
                        <h3 className="studies-title">
                            {selectedStudy ? selectedStudy.titulo : "Selecciona un estudio"}
                        </h3>
                        <div className="studies-description">
                            <p>{selectedStudy ? selectedStudy.description : "Selecciona un estudio"}</p>
                        </div>
                        <div className="studies-links">
                            <a href="#">Ver más detalles</a>
                        </div>
                    </div>

                    {/* Mostrar imagen solo si hay certificación */}
                    {imageUrl && (
                        <div className="container-right">
                            <div className="studies-image-container">
                                <div className="studies-image">
                                    <img
                                        src={imageUrl}
                                        alt="Certificado"
                                        style={{ cursor: 'zoom-in' }}
                                        onClick={() => setIsOpen(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="studies-content">
                    <Studies data={studies} onSelectStudy={setSelectedStudy} />
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && imageUrl && (
                <Lightbox
                    mainSrc={imageUrl}
                    onCloseRequest={() => setIsOpen(false)}
                    imageTitle={selectedStudy?.titulo}
                    imageCaption={selectedStudy?.description || 'Certificado'}
                />
            )}
        </section>
    );
}
