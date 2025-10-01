import React, { useState } from "react";
import "./ContactContainer.css";
import emailjs from "emailjs-com";

export default function ContactContainer() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pxakzue",
                "template_5w1xxsq",
                e.target,
                "RVYuXIuq0erQjAdcF"
            )
            .then(
                (result) => {
                    console.log("Mensaje enviado!", result.text);
                },
                (error) => {
                    console.log("Error:", error.text);
                }
            );

        e.target.reset(); // limpia el form
    }

    return (
        <section id="contact-form" className="contact-section">
            <div className="contenedor">
                <h2>Contacto</h2>
                <p>Ante cualquier consulta, dejame tu mensaje acá.</p>

                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-column focus-effect">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Nombre"
                                required
                                className="effect-8"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>

                        <div className="form-column focus-effect">
                            <input
                                type="text"
                                name="user_surname"
                                placeholder="Apellido"
                                required
                                className="effect-8"
                            />
                            <span className="focus-border">
                                <i></i>
                            </span>
                        </div>
                    </div>
                    <div className="form-row focus-effect">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="effect-8"
                        />
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="form-row focus-effect">
                        <textarea
                            name="message"
                            placeholder="Tu mensaje..."
                            rows="5"
                            required
                            className="effect-8"
                        ></textarea>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>

                    <button className="btn" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
