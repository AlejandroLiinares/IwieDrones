import React from "react";
import "./Inspecciones.css";

const Inspecciones = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("/inspecciones.jpg")', 
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
          backgroundColor: 'var(--primary-color-overlay)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1>INSPECCIONES</h1>
          <p className="coming-soon">Próximamente</p>
        </div>
      </section>
    </div>
  );
};

export default Inspecciones;
