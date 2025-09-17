import React from 'react';
import './AboutMe.css';

export default function Contact() {

    return (
        <>
            <section id="about-me">
                <div className="contenedor">
                    <div className="about-me-image-container">
                        <div className="about-me-image">
                            <img src="https://images.placeholders.dev/?width=720&height=720" alt="Sobre mí" />
                        </div>
                    </div>
                    <div className="about-me-description">
                        <h2>Sobre mí</h2>
                        <p>Hola, soy un desarrollador web apasionado por crear experiencias digitales únicas.</p>
                    </div>
                </div>
            </section>
        </>
    )
}