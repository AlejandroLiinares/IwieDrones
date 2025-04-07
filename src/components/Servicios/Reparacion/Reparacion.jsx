import React from 'react';
import { Link } from 'react-router-dom';
import './Reparacion.css';
import OptimizedImage from '../../UI/OptimizedImage/OptimizedImage';

// Componente para tarjetas de servicios de reparación
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <div className="service-image">
      <OptimizedImage src={image} alt={title} width={300} height={200} />
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/contacto" className="service-button">
        Contactar
      </Link>
    </div>
  </div>
);

const Reparacion = () => {
  const services = [
    {
      id: 1,
      image: "/reparacion-motores.jpg",
      title: "Reparación de Motores",
      description: "Servicio especializado en la reparación y sustitución de motores para todo tipo de drones."
    },
    {
      id: 2,
      image: "/reparacion-estructural.jpg",
      title: "Reparación Estructural",
      description: "Reparación de daños en el cuerpo y estructura de los drones, incluyendo brazos, chasis y soportes."
    },
    {
      id: 3,
      image: "/reparacion-electronica.jpg",
      title: "Reparación Electrónica",
      description: "Diagnóstico y reparación de componentes electrónicos, placas controladoras y sistemas de navegación."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("./reparacion.jpg")', 
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
          <h1>REPARACIÓN</h1>
          <p className="hero-subtitle">Soluciones profesionales para la reparación de sus equipos</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Nuestros Servicios de Reparación</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Por Qué Elegirnos</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <h3>Reparación Rápida</h3>
              <p>Minimizamos el tiempo de inactividad con diagnósticos precisos y reparaciones eficientes.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-certificate"></i>
              <h3>Garantía de Calidad</h3>
              <p>Todas nuestras reparaciones cuentan con garantía y utilizamos repuestos originales o de alta calidad.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-user-cog"></i>
              <h3>Técnicos Certificados</h3>
              <p>Nuestro equipo cuenta con certificaciones y amplia experiencia en reparación de drones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Su drone necesita reparación?</h2>
            <p>Contáctenos hoy mismo para un diagnóstico profesional y una solución adaptada a sus necesidades.</p>
            <Link to="/contacto" className="cta-button">Solicitar Reparación</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reparacion;