import React from 'react';
import { Link } from 'react-router-dom';
import './Mantencion.css';
import OptimizedImage from '../../UI/OptimizedImage/OptimizedImage';

// Componente para tarjetas de servicios de mantención
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

const Mantencion = () => {
  const services = [
    {
      id: 1,
      image: "/mantencion-preventiva.jpg",
      title: "Mantención Preventiva",
      description: "Servicio de mantención programada para prevenir fallos y extender la vida útil de sus drones."
    },
    {
      id: 2,
      image: "/mantencion-correctiva.jpg",
      title: "Mantención Correctiva",
      description: "Diagnóstico y solución de problemas específicos para restaurar la funcionalidad óptima de sus equipos."
    },
    {
      id: 3,
      image: "/mantencion-programada.jpg",
      title: "Mantención Programada",
      description: "Planes de mantención periódica adaptados a las necesidades específicas de su flota de drones."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section - Simplificado */}
      <div style={{ 
        backgroundImage: 'url("./mantencion.jpg")',
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
        }}>MANTENCIÓN</h1>
      </div>

      <section className="services-section">
        <div className="container">
          <h2>Nuestros Servicios de Mantención</h2>
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
          <h2>Beneficios de Nuestro Servicio</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <h3>Mayor Vida Útil</h3>
              <p>Mantenimiento regular que extiende significativamente la vida útil de sus equipos.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Prevención de Fallos</h3>
              <p>Identificación temprana de posibles problemas antes de que causen daños mayores.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-tools"></i>
              <h3>Técnicos Especializados</h3>
              <p>Nuestro equipo cuenta con certificaciones y amplia experiencia en mantención de drones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesita un servicio de mantención para sus drones?</h2>
            <p>Contáctenos hoy mismo para programar una revisión o solicitar más información sobre nuestros servicios.</p>
            <Link to="/contacto" className="cta-button">Solicitar Servicio</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mantencion;