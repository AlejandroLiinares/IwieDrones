import React from 'react';
import { Link } from 'react-router-dom';
import './Repuestos.css';
import OptimizedImage from '../../UI/OptimizedImage/OptimizedImage';

// Componente para tarjetas de repuestos
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <div className="service-image">
      <OptimizedImage src={image} alt={title} width={300} height={200} />
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/contacto" className="service-button">
        Consultar
      </Link>
    </div>
  </div>
);

const Repuestos = () => {
  const repuestos = [
    {
      id: 1,
      image: "/repuestos-motores.jpg",
      title: "Motores y Hélices",
      description: "Amplia variedad de motores y hélices originales y compatibles para diferentes modelos de drones."
    },
    {
      id: 2,
      image: "/repuestos-baterias.jpg",
      title: "Baterías y Cargadores",
      description: "Baterías de alta capacidad y cargadores rápidos para maximizar el tiempo de vuelo de sus drones."
    },
    {
      id: 3,
      image: "/repuestos-electronicos.jpg",
      title: "Componentes Electrónicos",
      description: "Placas controladoras, módulos GPS, sensores y otros componentes electrónicos para todos los modelos."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("./repuestos.jpg")', 
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
          <h1>REPUESTOS</h1>
          <p className="hero-subtitle">Componentes originales y compatibles para todos los modelos de drones</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Catálogo de Repuestos</h2>
          <div className="services-grid">
            {repuestos.map(repuesto => (
              <ServiceCard
                key={repuesto.id}
                image={repuesto.image}
                title={repuesto.title}
                description={repuesto.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Ventajas de Nuestros Repuestos</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <h3>Calidad Garantizada</h3>
              <p>Todos nuestros repuestos cuentan con garantía y son sometidos a rigurosos controles de calidad.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-truck"></i>
              <h3>Envío Rápido</h3>
              <p>Disponemos de stock permanente y servicio de envío rápido a todo el país.</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-tools"></i>
              <h3>Asesoría Técnica</h3>
              <p>Nuestro equipo técnico le ayudará a seleccionar los repuestos adecuados para su equipo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesita repuestos para su drone?</h2>
            <p>Contáctenos para consultar disponibilidad, precios y compatibilidad con su modelo específico.</p>
            <Link to="/contacto" className="cta-button">Solicitar Información</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repuestos;