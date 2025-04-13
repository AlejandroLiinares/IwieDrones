import React, { useState, useEffect, useRef, useCallback } from 'react';
import './DronesSlider.css';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const DronesSlider = ({ drones, onOpenModal }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentDroneIndex, setCurrentDroneIndex] = useState(0);
  const sliderRef = useRef(null);
  
  // Resetear el índice cuando cambia la lista de drones (por ejemplo, al filtrar)
  useEffect(() => {
    setCurrentDroneIndex(0);
  }, [drones.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollSlider = useCallback((direction) => {
    if (isMobile) {
      // En móvil, navegar por índice
      setCurrentDroneIndex(prevIndex => {
        const newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
        return Math.max(0, Math.min(newIndex, drones.length - 1));
      });
    } else if (sliderRef.current) {
      // En desktop, mantener el comportamiento original
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [isMobile, drones.length]);

  return (
    <div className="drones-slider-container">
      <button 
        className={`slider-nav-button slider-prev ${isMobile && currentDroneIndex === 0 ? 'disabled' : ''}`}
        onClick={() => scrollSlider('left')}
        aria-label="Ver drones anteriores"
        disabled={isMobile && currentDroneIndex === 0}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      {isMobile ? (
        <div className="drones-slider mobile-view">
          {drones.length > 0 ? (
            <div className="drone-item">
              <div className="drone-card">
                <OptimizedImage
                  src={drones[currentDroneIndex].image}
                  alt={`Drone ${drones[currentDroneIndex].title}`}
                  width={280}
                  height={280}
                />
                <div className="drone-card-content">
                  <h3 className="drone-card-title">{drones[currentDroneIndex].title}</h3>
                  <p className="drone-card-summary">{drones[currentDroneIndex].summary}</p>
                  <button 
                    className="drone-card-plus-btn"
                    onClick={() => onOpenModal(drones[currentDroneIndex].title, drones[currentDroneIndex].description)}
                    aria-label={`Más información sobre ${drones[currentDroneIndex].title}`}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-indicator">
                <span>{currentDroneIndex + 1} / {drones.length}</span>
              </div>
            </div>
          ) : (
            <div className="no-drones-message">
              <p>No hay drones disponibles con este filtro.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="drones-slider" ref={sliderRef}>
          {drones.map((drone, index) => (
            <div key={index} className="drone-item">
              <div className="drone-card">
                <OptimizedImage
                  src={drone.image}
                  alt={`Drone ${drone.title}`}
                  width={280}
                  height={280}
                />
                <div className="drone-card-content">
                  <h3 className="drone-card-title">{drone.title}</h3>
                  <p className="drone-card-summary">{drone.summary}</p>
                  <button 
                    className="drone-card-plus-btn"
                    onClick={() => onOpenModal(drone.title, drone.description)}
                    aria-label={`Más información sobre ${drone.title}`}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <button 
        className={`slider-nav-button slider-next ${isMobile && currentDroneIndex === drones.length - 1 ? 'disabled' : ''}`}
        onClick={() => scrollSlider('right')}
        aria-label="Ver drones siguientes"
        disabled={isMobile && currentDroneIndex === drones.length - 1}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default DronesSlider;
