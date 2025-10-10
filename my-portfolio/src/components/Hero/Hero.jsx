import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import './Hero.css';

export default function Hero() {

    const [clicked, setClicked] = useState(false);
    const links = [
        {
            title: "Mail",
            image: "/assets/img/hero/email.png",
            description: `alandmmzz@gmail.com`,
            link: `mailto:alandmmzz@gmail.com`,
        },
        {
            title: "LinkedIn",
            image: "/assets/img/hero/linkedin.png",
            description: `aland-martinez`,
            link: `https://www.linkedin.com/in/aland-martinez/`,
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
                        <div className="hero-status">
                            <div className="hero-status-icon"></div>
                            <p className="hero-status-text">Disponible para nuevos proyectos</p>
                        </div>
                        <div className="hero-presentation">Hola, soy Aland,</div>
                        <div className="hero-main-title">
                            <div
                            className={`hero-uxui-image ${clicked ? "clicked" : ""}`}
                            onClick={() => setClicked(true)}
                            ></div>
                            <div className={`hero-and-image ${clicked ? "clicked" : ""}`}>&</div>
                            <div className={`hero-frontend-image ${clicked ? "clicked" : ""}`}>Frontend</div>
                        </div>
                        <div className="hero-image-container-mobile">
                            <img className="hero-image" src='/assets/img/hero/Portfolio-main.webp'></img>
                        </div>
                        <div className="hero-main-description">
                            <p>Programador y diseñador web. Amante del diseño prolijo y de los códigos que funcionan.
                            Me dedico al Front-End y UX/UI, creando experiencias digitales modernas y funcionales.</p>
                            {links.map((link, i) => (
                                <a href={link.link} className="link-container" key={i}>
                                    <span className="link-description">{link.description}</span>
                                    <img src={link.image} alt={link.title} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hero-content-right">
                        <div className="hero-image-container">
                            <img className="hero-image" src='/assets/img/hero/Portfolio-main.webp'></img>
                        </div>
                        <div className="direct-buttons button-group">
                            <div className='group'>
                                <p>Buscás un dev para tu empresa?</p>
                                <Link to="/contacto" className="btn-arrow">
                                    Contratame <IoIosArrowForward size="24" />
                                </Link>
                            </div>
                            <div className='group'>
                                <p>Tenés un proyecto en mente?</p>
                                <Link to="/freelancer" className="btn-arrow">
                                    Trabajemos juntos <IoIosArrowForward size="24" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}