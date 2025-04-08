import React from 'react';
import { Link } from 'react-router-dom';
import './Agricultural.css';
import OptimizedImage from '../../UI/OptimizedImage/OptimizedImage';

// Componente para tarjetas de servicios agrícolas
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

const Agricultural = () => {
  const services = [
    {
      id: 1,
      image: "/pulverizacion.jpg",
      title: "Pulverizaciones",
      description: "Sistema de aplicación de fertilizantes de alta precisión para optimizar el rendimiento de los cultivos."
    },
    {
      id: 2,
      image: "/mapa.png",
      title: "Mapas Multiespectrales",
      description: "Mapas multiespectrales y térmicos para determinar salud del cultivo según vigor y manejo de riegos prioridad de cuartel."
    },
    {
      id: 3,
      image: "/planimetria.webp",
      title: "Planimetría",
      description: "Planimetría del sector a plantar para determinar espacios de cuarteles tamaños y zonas específicas."
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section - Full Screen Background */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("./agricola.jpg")',
        backgroundAttachment: 'fixed' // Para un efecto de parallax al hacer scroll
      }}>
        <div className="container">
          <h1>AGRÍCOLA</h1>
          {/* Eliminamos el texto "Próximamente" */}
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
