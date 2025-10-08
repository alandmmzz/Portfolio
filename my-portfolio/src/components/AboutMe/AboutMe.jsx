import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./AboutMe.css";

export default function Contact() {
    return (
        <>
            <section id="about-me">
                <div className="contenedor">
                    <div className="about-me-image-container">
                        <div className="about-me-image">
                            <img
                                src="https://images.placeholders.dev/?width=720&height=720"
                                alt="Sobre mí"
                            />
                        </div>
                    </div>
                    <div className="about-me-description">
                        <h2>Sobre mí</h2>
                        <p>
                            Empecé en el mundo IT con automatizaciones (RPA)
                            donde puse a prueba mis conocimientos en pensamiento
                            computacional y después encontré mi lugar en
                            desarrollo web, combinando código y diseño.
                            <br />
                            Me interesa mucho la experiencia de usuario, la
                            animación sutil en la web y esos pequeños detalles
                            que hacen que un sitio se sienta vivo.
                            <br />
                            Estoy en constante aprendizaje, experimentando con
                            nuevas tecnologías y mejorando mis proyectos para
                            crecer como profesional.
                            <br />
                            En mis tiempos libres me puedes encontrar jugando
                            videojuegos o tocando el bajo que son mis hobbies
                            favoritos.
                        </p>
                        <div className="about-me-link">
                            <p>Interesado/a en ver mis proyectos?</p>
                            <Link to="/proyectos" className="btn-arrow">
                                Ver proyectos <IoIosArrowForward size="24" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
