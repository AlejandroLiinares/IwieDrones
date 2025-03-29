import React from 'react';
import { Link } from 'react-router-dom';
import Agricultural from './components/Agricultural'

// Componente para tarjetas de servicios agrícolas
const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <div className="service-image-circle">
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Agricultural = () => {
  // Datos de servicios agrícolas
  const agriculturalServices = [
    {
      id: 1,
      image: "/pulverizacion.jpg",
      title: "Pulverizaciones",
      description: "Pulverización de agroquímicos líquidos, aplicación de granulados sólidos y siembra de semillas."
    },
    {
      id: 2,
      image: "/mapa.png",
      title: "Mapas multiespectrales",
      description: "Mapas multiespectrales y térmicos para determinar salud del cultivo según vigor y manejo de riegos prioridad de cuartel."
    },
    {
      id: 3,
      image: "/planimetria.webp",
      title: "Planimetría",
      description: "Planimetría del sector a plantar para determinar espacios de cuarteles tamaños y zonas específicas."
    }
  ];

  // Estilos para el hero
  const heroStyle = {
    backgroundImage: 'url("/agricola.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  };

  // Estilos para el overlay
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={heroStyle}>
        <div className="service-hero-overlay" style={overlayStyle}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1>AGRÍCOLA</h1>
        </div>
      </section>

      {/* Servicios Agrícolas Section */}
      <section className="agricultural-services">
        <div className="container">
          <h2 className="section-title">SERVICIOS</h2>
          <div className="section-divider" aria-hidden="true"></div>
          
          <div className="services-grid">
            {agriculturalServices.map(service => (
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
