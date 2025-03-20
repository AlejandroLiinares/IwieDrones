import React from 'react';

/**
 * Componente Modal para mostrar información detallada de los drones
 * Se muestra cuando el usuario hace clic en una tarjeta de drone
 */
const DroneModal = ({ drone, isOpen, onClose }) => {
  if (!isOpen || !drone) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image">
          <img src={drone.image} alt={drone.title} />
        </div>
        <h2 className="modal-title">{drone.title}</h2>
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
        
        {/* Badge o etiqueta si existe */}
        {drone.badge && (
          <div className="modal-badge">
            <span>{drone.badge}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DroneModal;
