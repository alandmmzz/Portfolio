import React from 'react';
import './Hero.css';

export default function Hero() {

    return (
        <>
            <section id="hero">
                <div className="contenedor">
                    <div className="hero-content-left">
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
                        <div className="hero-image">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#745a13" d="M34.8,-59.5C47.4,-53.1,61.4,-48.3,68,-38.7C74.6,-29,73.8,-14.5,69.1,-2.8C64.3,9,55.5,18,47.6,25.4C39.7,32.8,32.7,38.6,24.9,50.6C17.1,62.7,8.5,81,-3,86.2C-14.6,91.5,-29.2,83.6,-39.5,73C-49.8,62.4,-55.8,49,-60.1,36.4C-64.5,23.8,-67.2,11.9,-70.2,-1.8C-73.3,-15.4,-76.7,-30.9,-71.1,-41.2C-65.4,-51.6,-50.6,-56.8,-37.3,-62.8C-23.9,-68.8,-12,-75.5,-0.4,-74.8C11.1,-74.1,22.3,-66,34.8,-59.5Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}