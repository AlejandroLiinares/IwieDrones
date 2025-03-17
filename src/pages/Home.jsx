import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Soluciones Profesionales con Drones</h1>
            <p>Servicios de fumigación agrícola e industrial, inspecciones, capacitaciones y venta de drones de alta tecnología.</p>
            <div className="hero-buttons">
              <Link to="/contactanos" className="btn btn-primary">Solicitar Servicio</Link>
              <Link to="/agricola" className="btn btn-secondary">Conocer Más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Fumigación Agrícola</h3>
              <p>Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.</p>
              <Link to="/agricola" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Fumigación Industrial</h3>
              <p>Soluciones de fumigación para instalaciones industriales y comerciales.</p>
              <Link to="/industrial" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Inspecciones</h3>
              <p>Inspecciones aéreas de infraestructuras, edificios y terrenos con drones equipados con cámaras de alta resolución.</p>
              <Link to="/inspecciones" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🌲</div>
              <h3>Forestal</h3>
              <p>Monitoreo y fumigación de áreas forestales para control de plagas y prevención de incendios.</p>
              <Link to="/forestal" className="service-link">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Catalog Preview */}
      <section className="drone-catalog">
        <div className="container">
          <h2 className="section-title">Catálogo de Drones</h2>
          <p className="section-description">Ofrecemos una amplia variedad de drones para diferentes aplicaciones.</p>
          
          <div className="drones-grid">
            <div className="drone-card">
              <img src="https://via.placeholder.com/300x200" alt="Drone Agrícola" className="drone-image" />
              <h3>Drone Agrícola XF-200</h3>
              <p>Drone especializado para fumigación agrícola con tanque de 20L y autonomía de 30 minutos.</p>
              <div className="drone-specs">
                <span>Autonomía: 30 min</span>
                <span>Capacidad: 20L</span>
                <span>Alcance: 2km</span>
              </div>
            </div>
            <div className="drone-card">
              <img src="https://via.placeholder.com/300x200" alt="Drone Industrial" className="drone-image" />
              <h3>Drone Industrial DI-500</h3>
              <p>Diseñado para aplicaciones industriales con resistencia a condiciones adversas.</p>
              <div className="drone-specs">
                <span>Autonomía: 45 min</span>
                <span>Carga útil: 5kg</span>
                <span>Resistencia: IP65</span>
              </div>
            </div>
            <div className="drone-card">
              <img src="https://via.placeholder.com/300x200" alt="Drone Inspección" className="drone-image" />
              <h3>Drone Inspección IS-100</h3>
              <p>Equipado con cámara 4K y sensores térmicos para inspecciones detalladas.</p>
              <div className="drone-specs">
                <span>Cámara: 4K</span>
                <span>Zoom: 30x</span>
                <span>Autonomía: 35 min</span>
              </div>
            </div>
          </div>
          
          <div className="catalog-cta">
            <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas un servicio personalizado?</h2>
            <p>Nuestro equipo está listo para asesorarte y ofrecerte la mejor solución para tus necesidades.</p>
            <Link to="/contactanos" className="btn btn-light">Contáctanos Ahora</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
