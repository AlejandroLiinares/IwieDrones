import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de tarjeta de drone mejorado
 * Muestra información de un drone en un formato de tarjeta interactiva
 * con la imagen arriba y el texto debajo
 */
const DroneCardNew = ({ image, title, description, specs, badge, onClick }) => {
  const [imageError, setImageError] = useState(false);
  
  // Manejar errores de carga de imagen
  const handleImageError = () => {
    console.log(`Error cargando imagen: ${image}`);
    setImageError(true);
  };

  // Determinar la imagen a mostrar (original o placeholder)
  const imageToShow = imageError ? './placeholder-drone.jpg' : image;

  return (
    <div className="drone-card-new" onClick={onClick} role="button" tabIndex={0} aria-label={`Ver detalles de ${title}`}>
      {/* Contenedor de imagen en la parte superior */}
      <div className="drone-image-container-new">
        <img 
          src={imageToShow} 
          alt={title} 
          className="drone-image-new" 
          onError={handleImageError}
        />
        {badge && <span className="drone-badge-new">{badge}</span>}
      </div>
      
      {/* Contenedor de texto debajo de la imagen */}
      <div className="drone-content-new">
        <h3 className="drone-title-new">{title}</h3>
        <p className="drone-description-new">{description}</p>
        
        {specs && specs.length > 0 && (
          <div className="drone-specs-new">
            <ul>
              {specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
        
        <button 
          className="drone-details-btn-new"
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
