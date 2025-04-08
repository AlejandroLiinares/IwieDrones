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
      {/* Hero Section - Simplificado con capa oscura */}
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./reparacion.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '5rem',
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
        }}>REPARACIÓN</h1>
      </div>

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
      <section className="benefits-section" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 style={{ color: '#175DA3' }}>Por Qué Elegirnos</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-clock" style={{ color: '#175DA3' }}></i>
              <h3>Reparación Rápida</h3>
              <p>Minimizamos el tiempo de inactividad con diagnósticos precisos y reparaciones eficientes.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-certificate" style={{ color: '#175DA3' }}></i>
              <h3>Garantía de Calidad</h3>
              <p>Todas nuestras reparaciones cuentan con garantía y utilizamos repuestos originales o de alta calidad.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-user-cog" style={{ color: '#175DA3' }}></i>
              <h3>Técnicos Certificados</h3>
              <p>Nuestro equipo cuenta con certificaciones y amplia experiencia en reparación de drones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ backgroundColor: '#175DA3', color: 'white' }}>
        <div className="container">
          <div className="cta-content">
            <h2 style={{ color: 'white' }}>¿Su drone necesita reparación?</h2>
            <p style={{ color: 'white' }}>Contáctenos hoy mismo para un diagnóstico profesional y una solución adaptada a sus necesidades.</p>
            <Link to="/contacto" className="cta-button" style={{ backgroundColor: 'white', color: '#175DA3' }}>Solicitar Reparación</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reparacion;