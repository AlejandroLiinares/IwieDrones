import React from "react";
import "./ServicioTecnico.css";

// Estilos para el componente
const heroStyle = {
  position: 'relative',
  backgroundImage: 'url("H200.png")', // Usando una imagen existente en public
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1
};

const contentStyle = {
  position: 'relative', 
  zIndex: 2
};

const ServicioTecnico = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={heroStyle}>
        <div className="service-hero-overlay" style={overlayStyle} aria-hidden="true"></div>
        <div className="container" style={contentStyle}>
          <h1>SERVICIO TÉCNICO</h1>
          <p className="coming-soon">Próximamente</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicioTecnico;
