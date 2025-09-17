import React from "react";
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
                            Soy Aland Martinez, desarrollador front-end junior
                            con un costado de diseñador UX/UI. Me gusta crear
                            interfaces modernas, limpias y fáciles de usar.
                            Arranqué en el mundo IT con automatizaciones (RPA) y
                            después me pasé al desarrollo web, donde encontré mi
                            lugar combinando código y diseño. ✨ Trabajo con
                            HTML, CSS, JavaScript, React y me divierte meterle
                            onda al diseño con herramientas como Photoshop. 🎨
                            Me interesa mucho la experiencia de usuario, la
                            animación sutil en la web y esos pequeños detalles
                            que hacen que un sitio se sienta vivo. 🚀 Estoy en
                            constante aprendizaje, experimentando con nuevas
                            tecnologías y mejorando mis proyectos para crecer
                            como profesional.
                        </p>
                        <div className="about-me-link">
                            <p>Interesado/a en ver mis proyectos?</p>
                            <a href="#projects" className="btn">Ver proyectos</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
