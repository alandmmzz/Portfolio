import React from 'react';
import './Hero.css';

export default function Hero() {

    return (
        <>
            <section id="hero">
                <div className="contenedor">
                    <div className="hero-content-left">
                        <div className="hero-presentation">Hola, soy Aland,</div>
                        <div className="hero-main-title">
                            <div className="hero-uxui-image"></div>
                            <div className="hero-and-image">&</div>
                            <div className="hero-frontend-image">Frontend</div>
                        </div>
                        <div className="hero-main-description">
                            <p>Diseñador y programador web rioplatense. Amante del buen diseño, los pixeles prolijos y las cosas que funcionan.</p>
                            <p>Mi camino comenzó con RPA y ahora me dedico al Front-End y UX/UI, creando experiencias digitales modernas y funcionales.</p>
                            <a href="#contacto" className="btn">Contactame</a>
                        </div>
                    </div>
                    <div className="hero-content-right">
                        <div className="hero-image"></div>
                    </div>
                </div>
            </section>
        </>
    )
}