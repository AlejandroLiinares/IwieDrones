import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente para mostrar slides de servicios en la sección "Nuestros Servicios"
 * Mantiene el diseño original con divisores decorativos azules según las preferencias del cliente
 */
const ServiceSlide = ({ id, title, image, description, link }) => {
  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    e.target.src = '/placeholder-service.jpg'; // Imagen de respaldo
    e.target.alt = 'Servicio - imagen no disponible';
  };

  return (
    <div 
      id={`slide-${id}`} 
      className="slide" 
      aria-labelledby={`service-title-${id}`}
    >
      <div className="slide-content">
        <div className="slide-image">
          <img 
            src={image} 
            alt={`Servicio: ${title}`} 
            onError={handleImageError}
          />
          <div className="slide-overlay"></div>
        </div>
        <div className="slide-text">
          <h3 id={`service-title-${id}`} className="service-title">{title}</h3>
          <div className="section-divider" aria-hidden="true"></div>
          <p className="service-description">{description}</p>
          <Link to={link} className="btn-saber-mas" aria-label={`Conoce más sobre ${title}`}>
            Conoce más <span className="arrow-icon" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;
