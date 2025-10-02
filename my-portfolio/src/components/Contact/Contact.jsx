import React from 'react';
import { Link } from "react-router-dom";
import './Contact.css';

export default function Contact() {

    return (
        <>
            <section id="contacto">
                <Link to="/contacto" >
                    <div className="contenedor">
                        <div className="contacto-hero">
                            <h3>Proyecto en mente?</h3>
                            <h3>Trabajemos juntos :)</h3>
                        </div>
                        <div className="contacto-mail">
                            <p>Ponete en contacto conmigo.</p>
                            <img src="/assets/img/icons/right-arrow.png" alt="" />
                        </div>
                    </div>                   
                </Link>
            </section>
        </>
    )
}