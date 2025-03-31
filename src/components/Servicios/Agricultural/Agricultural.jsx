import React from 'react';
import { Link } from 'react-router-dom';
import './Agricultural.css';

// Componente para tarjetas de servicios agrícolas
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <div className="service-image">
      <img src={image} alt={title} />
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

const Agricultural = () => {
  const services = [
    {
      id: 1,
      image: "/agricola1.jpg",
      title: "Aplicación de Fertilizantes",
      description: "Sistema de aplicación de fertilizantes de alta precisión para optimizar el rendimiento de los cultivos."
    },
    {
      id: 2,
      image: "/agricola2.jpg",
      title: "Control de Plagas",
      description: "Monitoreo y control de plagas mediante drones equipados con sensores térmicos y multiespectrales."
    },
    {
      id: 3,
      image: "/agricola3.jpg",
      title: "Monitoreo de Cultivos",
      description: "Sistema de monitoreo continuo de cultivos para detectar problemas tempranos y optimizar recursos."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("./agricola.jpg")', 
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
          <p className="coming-soon">Próximamente</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Nuestros Servicios</h2>
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
    </div>
  );
};

export default Agricultural;
