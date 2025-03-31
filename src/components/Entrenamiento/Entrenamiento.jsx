import React from "react";
import { Link } from "react-router-dom";
import "./Entrenamiento.css";

const Entrenamiento = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("./capacitacion.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="service-hero-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1>CAPACITACIONES</h1>
          <p className="coming-soon">Próximamente</p>
        </div>
      </section>
    </div>
  );
};

export default Entrenamiento;
