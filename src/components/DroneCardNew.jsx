import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de tarjeta de drone mejorado
 * Muestra información de un drone en un formato de tarjeta interactiva
 * con diseño moderno, soporte para modo oscuro y mejor manejo de espacios
 */
const DroneCardNew = ({ image, title, description, specs, badge, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Manejar errores de carga de imagen
  const handleImageError = () => {
    console.log(`Error cargando imagen: ${image}`);
    setImageError(true);
  };

  // Determinar la imagen a mostrar (original o placeholder)
  const imageToShow = imageError ? './placeholder-drone.jpg' : image;

  return (
    <div 
      className="drone-card-horizontal" 
      onClick={onClick} 
      role="button" 
      tabIndex={0} 
      aria-label={`Ver detalles de ${title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de imagen a la izquierda con efecto de zoom suave */}
      <div className="drone-image-container-horizontal">
        <img 
          src={imageToShow} 
          alt={title} 
          className={`drone-image-horizontal ${isHovered ? 'hovered' : ''}`}
          onError={handleImageError}
          loading="lazy" // Implementación de lazy loading para mejorar rendimiento
        />
        {badge && <span className="drone-badge-horizontal">{badge}</span>}
      </div>
      
      {/* Contenedor de texto a la derecha con mejor distribución */}
      <div className="drone-content-horizontal">
        <div className="drone-content-top">
          <h3 className="drone-title-horizontal">{title}</h3>
          <p className="drone-description-horizontal">{description}</p>
        </div>
        
        {specs && specs.length > 0 && (
          <div className="drone-specs-horizontal">
            <ul>
              {specs.slice(0, 3).map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
              {specs.length > 3 && (
                <li className="more-specs">+{specs.length - 3} más</li>
              )}
            </ul>
          </div>
        )}
        
        <div className="drone-content-bottom">
          <button 
            className="drone-details-btn-horizontal"
            onClick={(e) => {
              e.stopPropagation(); // Evitar doble activación
              onClick();
            }}
            aria-label={`Ver más información sobre ${title}`}
          >
            Más información
          </button>
        </div>
      </div>
    </div>
  );
};

DroneCardNew.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specs: PropTypes.arrayOf(PropTypes.string),
  badge: PropTypes.string,
  onClick: PropTypes.func
};

DroneCardNew.defaultProps = {
  specs: [],
  badge: null,
  onClick: () => {}
};

export default DroneCardNew;
