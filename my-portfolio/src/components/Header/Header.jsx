import React from 'react';
import './Header.css';

export default function Header() {

    return (
        <>
            <header>
                <div className="contenedor">
                    <h1>su</h1>
                    <nav>
                        <ul>
                            <li><a href="#sobre-mi">Sobre mí</a></li>
                            <li><a href="#proyectos">Proyectos</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}