import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { FaReact, FaShopify, FaWordpress } from "react-icons/fa"; // íconos

export default function Services() {
  return (
    <>
      <section id="services">
        <div className="contenedor">
            <h2>Servicios</h2>
            <div className="service-card">
                <div className="card-header">
                    <FaReact size={32} />
                    <h3>Desarrollo Web en React</h3>
                </div>
                <div className="card-body">
                    <p>Desarrollo de cualquier tipo de solución web completamente hecha a partir de React, sin limitaciones de una plantilla y con todos los features que se requieran hechos a la medida.</p>
                </div>
                <img src="../../../public/assets/img/services/react-development.webp" alt="React" />
            </div>
            <div className="service-card">
                <div className="card-header">
                    <FaShopify size={32} />
                    <h3>E-Shop usando Shopify</h3>
                </div>
                <div className="card-body">
                    <p>Desarrollo de un e-shop hecho a partir de la herramienta Shopify. Perfecto para tiendas que buscan una solución rápida sin estresarse por un diseño complejo.</p>
                </div>
                <img src="../../../public/assets/img/services/shopify-development.webp" alt="Shopify" />
            </div>
            <div className="service-card">
                <div className="card-header">
                    <FaWordpress size={32} />
                    <h3>Desarrollo Web en Wordpress</h3>
                </div>
                <div className="card-body">
                    <p>Desarrollo de un sitio web usando una plantilla de Wordpress, ideal para quienes buscan crear un sitio web de forma rápida sin salirse mucho del molde.</p>
                </div>
                <img src="../../../public/assets/img/services/wordpress-development.jpg" alt="Wordpress" />
            </div>
            <div className="contact-link">
              <p>Buscas una cotización?</p>
              <Link to="/contacto" className="btn">
                Dejame un mensaje
              </Link>
            </div>
        </div>
      </section>
    </>
  );
}
 