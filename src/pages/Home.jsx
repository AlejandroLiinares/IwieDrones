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
              <Link to="/contactanos" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Solicitar Servicio
              </Link>
              <Link to="/agricola" className="btn btn-secondary">
                <i className="fas fa-info-circle"></i> Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-description">Ofrecemos soluciones especializadas con tecnología de drones para diversos sectores</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Fumigación Agrícola</h3>
              <p>Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.</p>
              <Link to="/agricola" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Fumigación Industrial</h3>
              <p>Soluciones de fumigación para instalaciones industriales y comerciales.</p>
              <Link to="/industrial" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Inspecciones</h3>
              <p>Inspecciones aéreas de infraestructuras, edificios y terrenos con drones equipados con cámaras de alta resolución.</p>
              <Link to="/inspecciones" className="service-link">Ver más</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tree"></i>
              </div>
              <h3>Forestal</h3>
              <p>Monitoreo y fumigación de áreas forestales para control de plagas y prevención de incendios.</p>
              <Link to="/forestal" className="service-link">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre Iwiedrones</h2>
              <p>Somos una empresa líder en soluciones con drones, especializada en servicios de fumigación agrícola e industrial. Nuestro equipo de profesionales cuenta con amplia experiencia y certificaciones para garantizar un servicio de calidad.</p>
              <p>Utilizamos tecnología de vanguardia para ofrecer soluciones eficientes, seguras y respetuosas con el medio ambiente.</p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Equipo certificado y con experiencia</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Tecnología de última generación</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Soluciones personalizadas</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Compromiso con el medio ambiente</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400" alt="Iwiedrones en acción" />
            </div>
          </div>
        </div>
      </section>

      {/* Drone Catalog Preview */}
      <section className="drone-catalog">
        <div className="container">
          <h2 className="section-title">Catálogo de Drones</h2>
          <p className="section-description">Ofrecemos una amplia variedad de drones para diferentes aplicaciones, adaptados a las necesidades específicas de cada sector.</p>
          
          <div className="drones-grid">
            <div className="drone-card">
              <img src="https://via.placeholder.com/600x400" alt="Drone Agrícola" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Agrícola XF-200</h3>
                <p>Drone especializado para fumigación agrícola con tanque de 20L y autonomía de 30 minutos.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 30 min</span>
                  <span className="spec-tag"><i className="fas fa-tint"></i> 20L</span>
                  <span className="spec-tag"><i className="fas fa-broadcast-tower"></i> 2km</span>
                </div>
              </div>
            </div>
            <div className="drone-card">
              <img src="https://via.placeholder.com/600x400" alt="Drone Industrial" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Industrial DI-500</h3>
                <p>Diseñado para aplicaciones industriales con resistencia a condiciones adversas.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 45 min</span>
                  <span className="spec-tag"><i className="fas fa-weight-hanging"></i> 5kg</span>
                  <span className="spec-tag"><i className="fas fa-shield-alt"></i> IP65</span>
                </div>
              </div>
            </div>
            <div className="drone-card">
              <img src="https://via.placeholder.com/600x400" alt="Drone Inspección" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Inspección IS-100</h3>
                <p>Equipado con cámara 4K y sensores térmicos para inspecciones detalladas.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-camera"></i> 4K</span>
                  <span className="spec-tag"><i className="fas fa-search-plus"></i> 30x</span>
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 35 min</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="view-more-container">
            <Link to="/drones" className="btn btn-primary">Ver Catálogo Completo</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas un servicio personalizado?</h2>
            <p>Nuestro equipo está listo para asesorarte y ofrecerte la mejor solución para tus necesidades específicas.</p>
            <Link to="/contactanos" className="btn btn-light">
              <i className="fas fa-envelope"></i> Contáctanos Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
