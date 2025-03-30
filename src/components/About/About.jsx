import React from "react";
import "./About.css";

// Componente para tarjetas de valores
const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    <div className="value-icon">
      <i className={`fas fa-${icon}`} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const About = () => {
  // Datos de valores para facilitar mantenimiento
  const values = [
    {
      icon: 'lightbulb',
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas soluciones y tecnologías para ofrecer servicios de vanguardia.'
    },
    {
      icon: 'handshake',
      title: 'Compromiso',
      description: 'Nos comprometemos con la satisfacción de nuestros clientes y la calidad de nuestros servicios.'
    },
    {
      icon: 'leaf',
      title: 'Sostenibilidad',
      description: 'Promovemos prácticas sostenibles que respetan el medio ambiente y optimizan recursos.'
    },
    {
      icon: 'users',
      title: 'Trabajo en Equipo',
      description: 'Valoramos la colaboración y el trabajo conjunto para lograr resultados excepcionales.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Nuestra Historia</h1>
          <div className="about-divider" />
          <p>
          Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial 
          de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan 
          desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de 
          energía, servicio de televigilancia, asimismo como el área de entretenimiento.
          </p>
        </div>
      </section>

      {/* Valores Section */}
      <section className="about-values">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="about-mission-vision">
        <div className="container">
          <h2>Misión y Visión</h2>
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>Misión</h3>
              <p>
                Proporcionar soluciones innovadoras con drones que optimicen procesos y mejoren resultados, manteniendo altos estándares de calidad y seguridad.
              </p>
            </div>
            <div className="vision">
              <h3>Visión</h3>
              <p>
                Ser líderes en servicios con drones, reconocidos por nuestra excelencia técnica y compromiso con la innovación y sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
