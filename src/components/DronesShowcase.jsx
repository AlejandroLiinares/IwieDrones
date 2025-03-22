import React, { useState, useMemo } from 'react';
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
    <div className="drones-showcase">
      {isLoading ? (
        <div className="loading-indicator">Cargando drones...</div>
      ) : filteredDrones.length > 0 ? (
        <div className="drones-grid">
          {filteredDrones.map((drone) => (
            <DroneCardNew
              key={drone.id || `drone-${drone.name}`}
              image={drone.image}
              title={drone.name || drone.title}
              description={drone.description}
              specs={drone.specs}
              badge={drone.badge}
              onClick={() => openModal(drone)}
            />
          ))}
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
      category: PropTypes.string,
      specs: PropTypes.arrayOf(PropTypes.string),
      badge: PropTypes.string
    })
  ).isRequired,
  category: PropTypes.string,
  searchTerm: PropTypes.string
};

DronesShowcase.defaultProps = {
  category: '',
  searchTerm: ''
};

export default DronesShowcase;
