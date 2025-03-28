import React from 'react';
import '../styles/About.css';

// Componente para tarjetas de valores
const ValueCard = ({ icon, title, description }) => (
  <div className="value-card">
    <div className="value-icon">
      <i className={`fas fa-${icon}`}></i>
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

  // Estilos para el hero
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/quienes-somos.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={heroStyle}>
        <div className="about-hero-content">
          <h1>QUIÉNES SOMOS</h1>
          <div className="about-divider" aria-hidden="true"></div>
          <p>
            Iwie nace en el año 2022 con el objetivo de brindar servicios con tecnología avanzada en diversas áreas como 
            agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos 
            especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la 
            eficiencia en diversos sectores.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>Nuestra Misión</h2>
              <p>
                Proporcionar soluciones tecnológicas innovadoras que transformen y optimicen los procesos de nuestros clientes, 
                contribuyendo al desarrollo sostenible y la eficiencia en diversos sectores industriales y agrícolas.
              </p>
            </div>
            <div className="vision-box">
              <h2>Nuestra Visión</h2>
              <p>
                Ser líderes en la implementación de tecnología avanzada en Latinoamérica, reconocidos por nuestra 
                excelencia técnica, innovación constante y compromiso con el desarrollo sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
