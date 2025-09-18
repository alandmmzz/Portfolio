import React from 'react';
import './Hero.css';

export default function Hero() {

    const links = [
        {
            title: "LinkedIn",
            image: "/assets/img/hero/linkedin.png",
            description: `aland-martinez`,
            link: `https://www.linkedin.com/in/aland-martinez/`,
        },
        {
            title: "Mail",
            image: "/assets/img/hero/email.png",
            description: `alandmmzz@gmail.com`,
            link: `mailto:alandmmzz@gmail.com`,
        },
        {
            title: "GitHub",
            image: "/assets/img/hero/github.png",
            description: `alandmmzz`,
            link: `https://github.com/alandmmzz`,
        },
    ];

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
                            {links.map((link, i) => (
                                <a href={link.link} className="link-container" key={i}>
                                    <span className="link-description">{link.description}</span>
                                    <img src={link.image} alt={link.title} />
                                </a>
                            ))}
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