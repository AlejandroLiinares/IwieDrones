import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import DronesShowcase from '../components/DronesShowcase';

/**
 * Ejemplo de cómo implementar los nuevos componentes en la página Home
 * Este archivo es solo una referencia y no afecta el código existente
 */
const HomeWithComponents = ({ drones }) => {
  const [activeTab, setActiveTab] = useState("Agrícola");
  const [isTabChanging, setIsTabChanging] = useState(false);
  
  // Función para manejar el cambio de pestaña con animación
  const handleTabChange = (tabName) => {
    if (activeTab !== tabName) {
      setIsTabChanging(true);
      setTimeout(() => {
        setActiveTab(tabName);
        setIsTabChanging(false);
      }, 300);
    }
  };

  return (
    <section className="drones-section section-padding" id="drones">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Drones</h2>
          <p className="section-subtitle">
            Descubre nuestra flota de drones especializados para diferentes sectores
          </p>
        </div>
        
        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "Agrícola" ? "active" : ""}`}
              onClick={() => handleTabChange("Agrícola")}
              id="tab-btn-agricola"
              aria-controls="tab-agricola"
              aria-selected={activeTab === "Agrícola"}
            >
              Agrícola
            </button>
            <button
              className={`tab-btn ${activeTab === "Industrial" ? "active" : ""}`}
              onClick={() => handleTabChange("Industrial")}
              id="tab-btn-industrial"
              aria-controls="tab-industrial"
              aria-selected={activeTab === "Industrial"}
            >
              Industrial
            </button>
            <div className="tab-indicator" style={{ left: activeTab === "Agrícola" ? "0%" : "50%" }}></div>
          </div>
          
          <div className={`tab-content-container ${isTabChanging ? "changing" : ""}`}>
            <div
              className={`tab-pane ${activeTab === "Agrícola" ? "active" : ""}`}
              role="tabpanel"
              id="tab-agricola"
              aria-labelledby="tab-btn-agricola"
            >
              {/* Implementación del componente DronesShowcase para drones agrícolas */}
              <DronesShowcase drones={drones} category="Agrícola" />
            </div>
            
            <div
              className={`tab-pane ${activeTab === "Industrial" ? "active" : ""}`}
              role="tabpanel"
              id="tab-industrial"
              aria-labelledby="tab-btn-industrial"
            >
              {/* Implementación del componente DronesShowcase para drones industriales */}
              <DronesShowcase drones={drones} category="Industrial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWithComponents;
