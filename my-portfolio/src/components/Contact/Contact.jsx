import React from 'react';
import './Contact.css';

export default function Contact() {

    return (
        <>
            <section id="contacto">
                <a href="#contacto">
                    <div className="contenedor">
                        <div className="contacto-hero">
                            <h2>Proyecto en mente?</h2>
                            <h3>Trabajemos juntos</h3>
                        </div>
                        <div className="contacto-mail">
                            <p>Ponete en contacto conmigo.</p>
                            <img src="../assets/img/icons/right-arrow.png" alt="" />
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}