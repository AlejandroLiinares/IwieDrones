import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import DroneCardNew from './DroneCardNew';
import DroneModal from './DroneModal';
import useModal from '../hooks/useModal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="drones-showcase">
      {isLoading ? (
        <div className="loading-indicator">Cargando drones...</div>
      ) : filteredDrones.length > 0 ? (
        <div className="drones-carousel-container">
          <Slider {...sliderSettings}>
            {filteredDrones.map((drone) => (
              <div key={drone.id || `drone-${drone.name}`} className="drone-slide">
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
          </Slider>
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
