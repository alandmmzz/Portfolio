import React from "react";
import "./WorkProcess.css";
import { FaSearch, FaCode, FaRocket, FaPen } from "react-icons/fa";

export default function WorkProcess() {
  return (
    <>
      <section id="working-process">
        <div className="contenedor">
          <h2>Proceso de trabajo</h2>
          <div className="proccess-card">
            <FaSearch size={32} />
            <h3>1. Análisis y búsqueda</h3>
            <p>
              Entendemos la problemática para buscar la mejor solución, el
              objetivo de la página, los requerimientos, la audiencia, etc.
            </p>
            <img src="../../public/assets/img/working_process/research.jpg" alt="Research" />
          </div>
          <div className="proccess-card">
            <FaPen size={32} />
            <h3>2. Diseño del producto</h3>
            <p>
              Se diseña un prototipo de la solución a implementar, buscando la mejor
              experiencia de usuario y la mejor interfaz posible.
            </p>
            <img src="../../public/assets/img/working_process/mockup.jpg" alt="Mockup" />
          </div>
          <div className="proccess-card">
            <FaCode size={32} />
            <h3>3. Desarollo del producto</h3>
            <p>
                Se desarrolla la solución a partir del prototipo, implementando
                todas las funcionalidades necesarias y optimizando el rendimiento.
            </p>
            <img src="../../public/assets/img/working_process/developing.jpg" alt="Developing" />
          </div>
          <div className="proccess-card">
            <FaRocket size={32} />
            <h3>4. Lazamiento de la web</h3>
            <p>
                Se lanza la solución al público, asegurando que todo funcione
                correctamente y se monitorea su desempeño.
            </p>
            <img src="../../public/assets/img/working_process/launch.webp" alt="Launch" />
          </div>
        </div>
      </section>
    </>
  );
}
