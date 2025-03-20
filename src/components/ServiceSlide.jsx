import React from 'react';

/**
 * Componente para mostrar slides de servicios en la sección "Nuestros Servicios"
 * Mantiene el diseño original con divisores decorativos azules según las preferencias del cliente
 */
const ServiceSlide = ({ id, title, image, description, link }) => (
  <div id={`slide-${id}`} className="slide">
    <div className="slide-content">
      <div className="slide-image">
        <img src={image} alt={title} />
      </div>
      <div className="slide-info">
        <h3 className="slide-title">{title}</h3>
        <div className="slide-divider"></div>
        <p className="slide-description">{description}</p>
        <a href={link} className="slide-link">
          Conoce más <span className="arrow-icon">→</span>
        </a>
      </div>
    </div>
  </div>
);

export default ServiceSlide;
