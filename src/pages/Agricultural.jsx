import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Agricultural = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("/agricola.jpg")', 
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
          <h1>AGRÍCOLA</h1>
        </div>
      </section>

      {/* Servicios Agrícolas Section */}
      <section className="agricultural-services">
        <div className="container">
          <h2 className="section-title">SERVICIOS</h2>
          <div className="section-divider"></div>
          
          <div className="services-grid">
            {/* Servicio 1 */}
            <div className="service-card">
              <div className="service-image-circle">
                <img src="/pulverizacion.jpg" alt="Pulverizaciones" />
              </div>
              <h3>Pulverizaciones</h3>
              <p>Pulverización de agroquímicos líquidos, aplicación de granulados sólidos y siembra de semillas.</p>
            </div>

            {/* Servicio 2 */}
            <div className="service-card">
              <div className="service-image-circle">
                <img src="/mapa.png" alt="Mapas multiespectrales" />
              </div>
              <h3>Mapas multiespectrales</h3>
              <p>Mapas multiespectrales y térmicos para determinar salud del cultivo según vigor y manejo de riegos prioridad de cuartel.</p>
            </div>

            {/* Servicio 3 */}
            <div className="service-card">
              <div className="service-image-circle">
                <img src="/planimetria.webp" alt="Planimetría" />
              </div>
              <h3>Planimetría</h3>
              <p>Planimetría del sector a plantar para determinar espacios de cuarteles tamaños y zonas específicas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;
