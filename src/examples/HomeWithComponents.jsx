import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Versión simplificada del componente de ejemplo HomeWithComponents
 * Esta versión no depende de los componentes eliminados
 */
const HomeWithComponents = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>IWIE</h1>
          <p className="hero-subtitle">Tecnología avanzada para optimizar procesos</p>
          <div className="hero-buttons">
            <a href="#services" className="btn-primary">Nuestros Servicios</a>
            <Link to="/contactanos" className="btn-secondary">Contáctanos</Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>NUESTROS SERVICIOS</h2>
            <p className="section-description">
              Ofrecemos soluciones tecnológicas avanzadas para diversos sectores, 
              adaptadas a las necesidades específicas de cada cliente.
            </p>
          </div>
          
          <div className="services-content">
            <div className="placeholder-message" style={{ 
              textAlign: 'center', 
              padding: '50px', 
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              margin: '0 auto',
              maxWidth: '800px'
            }}>
              <p>Sección en proceso de rediseño</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para optimizar tus procesos?</h2>
          <p>Contáctanos hoy mismo y descubre cómo nuestras soluciones pueden ayudarte</p>
          <Link to="/contact" className="btn-primary">Contáctanos</Link>
        </div>
      </section>
    </div>
  );
};

export default HomeWithComponents;
