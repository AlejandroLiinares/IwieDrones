import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Modal para mostrar información detallada de los drones
 * Se muestra cuando el usuario hace clic en una tarjeta de drone
 * Incluye soporte para modo oscuro y transiciones fluidas
 */
const DroneModal = ({ drone, isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);
  
  // Si el modal no está abierto o no hay datos, no renderizar nada
  if (!isOpen || !drone) return null;

  // Manejar errores de carga de imagen
  const handleImageError = () => {
    console.log(`Error cargando imagen del modal: ${drone.image}`);
    setImageError(true);
  };

  // Determinar la imagen a mostrar (original o placeholder)
  const imageToShow = imageError ? './placeholder-drone.jpg' : drone.image;
  
  // Manejar clic fuera del modal para cerrarlo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Manejar el cierre del modal con animación
  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  };

  // Permitir cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    // Enfocar el modal para mejorar la accesibilidad
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Añadir clase al body para prevenir scroll
    document.body.classList.add('modal-open');
    
    // Iniciar animación de entrada
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  // Obtener el título correcto del drone
  const droneTitle = drone.name || drone.title;

  return (
    <div 
      className={`modal-backdrop active ${isAnimating ? 'animating' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`modal-content ${isAnimating ? 'animating' : ''}`}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <button 
          className="modal-close" 
          onClick={handleClose} 
          aria-label="Cerrar modal"
        >
          ×
        </button>
        
        {/* Imagen en la parte superior */}
        <div className="modal-image">
          <img 
            src={imageToShow} 
            alt={droneTitle} 
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        
        {/* Contenido de texto debajo de la imagen */}
        <div className="modal-text-content">
          {/* Badge o etiqueta si existe */}
          {drone.badge && (
            <div className="modal-badge">
              <span>{drone.badge}</span>
            </div>
          )}
          
          <h2 id="modal-title" className="modal-title">{droneTitle}</h2>
          <p className="modal-subtitle">{drone.description}</p>
          
          {/* Especificaciones técnicas */}
          {drone.specs && drone.specs.length > 0 && (
            <div className="modal-specs">
              <h3>Especificaciones técnicas</h3>
              <ul>
                {drone.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Características adicionales si existen */}
          {drone.features && drone.features.length > 0 && (
            <div className="modal-features">
              <h3>Características destacadas</h3>
              <ul>
                {drone.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Botón para cerrar */}
          <div className="modal-actions">
            <button 
              className="drone-details-btn-new" 
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DroneModal.propTypes = {
  drone: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    specs: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    badge: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default DroneModal;
