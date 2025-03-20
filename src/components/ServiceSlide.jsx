import React from 'react';

/**
 * Componente para mostrar slides de servicios en la sección "Nuestros Servicios"
 * Mantiene el diseño original con divisores decorativos azules según las preferencias del cliente
 */
const ServiceSlide = ({ id, title, image, description, link }) => (
  <div id={`slide-${id}`} className="slide slider-slide">
    <div className="slide-content">
      <div className="slide-image slider-image">
        <img src={image} alt={title} />
        <div className="slide-overlay slider-overlay"></div>
      </div>
      <div className="slide-text">
        <h3 className="slider-title">{title}</h3>
        <div className="slider-divider"></div>
        <p className="slider-description">{description}</p>
        <a href={link} className="btn-saber-mas">
          Conoce más <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  </div>
);

export default ServiceSlide;
