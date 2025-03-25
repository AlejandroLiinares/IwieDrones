import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import DroneCardNew from './DroneCardNew';
import DroneModal from './DroneModal';
import useModal from '../hooks/useModal';

/**
 * Componente de demostración que muestra cómo utilizar DroneCardNew y DroneModal juntos
 * Este componente puede reemplazar la implementación actual en Home.jsx y Agricultural.jsx
 */
const DronesShowcase = ({ drones, category, searchTerm }) => {
  const { isOpen, modalData, openModal, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  
  // Efecto para animar la entrada de los drones
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filtrar drones por categoría y término de búsqueda si se proporcionan
  const filteredDrones = useMemo(() => {
    let filtered = drones;
    
    // Filtrar por categoría si se proporciona
    if (category) {
      filtered = filtered.filter(drone => drone.category === category);
    }
    
    // Filtrar por término de búsqueda si se proporciona
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(drone => 
        drone.name?.toLowerCase().includes(term) || 
        drone.title?.toLowerCase().includes(term) || 
        drone.description?.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [drones, category, searchTerm]);

  // Estado para manejar la carga de datos
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`drones-showcase ${isVisible ? 'visible' : ''}`}>
      {isLoading ? (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Cargando drones...</p>
        </div>
      ) : filteredDrones.length > 0 ? (
        <div className="drones-horizontal-container">
          <div className="drones-horizontal-scroll">
            {filteredDrones.map((drone, index) => (
              <div 
                key={drone.id || `drone-${drone.name}`} 
                className="drone-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DroneCardNew
                  image={drone.image}
                  title={drone.name || drone.title}
                  description={drone.description}
                  specs={drone.specs}
                  badge={drone.badge}
                  onClick={() => openModal(drone)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-drones-message">
          No se encontraron drones{category ? ` en la categoría ${category}` : ''}
          {searchTerm ? ` que coincidan con "${searchTerm}"` : ''}.
        </div>
      )}
      
      {/* Modal para mostrar detalles del drone */}
      <DroneModal
        drone={modalData}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
};

DronesShowcase.propTypes = {
  drones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      specs: PropTypes.arrayOf(PropTypes.string),
      features: PropTypes.arrayOf(PropTypes.string),
      badge: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
  category: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default DronesShowcase;
