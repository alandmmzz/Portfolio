import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "./Studies_Timeline.css";
import Studies from "./Studies";
import { studies } from "./studiesData.js";

export default function Studies_Timeline() {
    const [selectedStudy, setSelectedStudy] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const imageUrl = selectedStudy?.certification;
    const link_name = selectedStudy?.link_name;
    const link_href = selectedStudy?.link_href;

    return (
        <section id="studies-timeline">
            <div className="contenedor">
                <h2>Mis estudios</h2>
                <div className="studies-content">
                    <Studies data={studies} onSelectStudy={setSelectedStudy} />
                </div>
                <div className="studies-description-container">
                    {/* Mostrar imagen solo si hay certificación */}
                    {imageUrl && (
                        <div className="container-image">
                            <div className="studies-image-container">
                                <div className="studies-image">
                                    <img
                                        src={imageUrl}
                                        alt="Certificado"
                                        style={{ cursor: "zoom-in" }}
                                        onClick={() => setIsOpen(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        className="container-data"
                        style={
                            selectedStudy?.certification
                                ? {}
                                : { width: "100%" }
                        }
                    >
                        <h3 className="studies-title">
                            {selectedStudy
                                ? selectedStudy.titulo
                                : "Selecciona un estudio"}
                        </h3>
                        <div className="studies-description">
                            <p>
                                {selectedStudy
                                    ? selectedStudy.description
                                    : "Selecciona un estudio"}
                            </p>
                        </div>

                        {/* Mostrar imagen solo si hay certificación */}
                        {link_name && (
                            <div className="studies-links">
                                <a href={link_href}>{link_name}</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    plugins={[Zoom]}
                    slides={[{ src: imageUrl }]}
                />
            )}
        </section>
    );
}
