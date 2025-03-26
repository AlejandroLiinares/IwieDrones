import React from 'react';
import '../styles/About.css';

const About = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/quienes-somos.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  };

  return (
    <div className="about-page">
      <section className="about-hero" style={heroStyle}>
        <div className="about-hero-content">
          <h1>QUIÉNES SOMOS</h1>
          <div className="about-divider"></div>
          <p>
            Iwie nace en el año 2022 con el objetivo de brindar servicios con tecnología avanzada en diversas áreas como 
            agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos 
            especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la 
            eficiencia en diversos sectores.
          </p>
        </div>
      </section>

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

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas soluciones y tecnologías para ofrecer servicios de vanguardia.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Compromiso</h3>
              <p>Nos comprometemos con la satisfacción de nuestros clientes y la calidad de nuestros servicios.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sostenibilidad</h3>
              <p>Promovemos prácticas sostenibles que respetan el medio ambiente y optimizan recursos.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Trabajo en Equipo</h3>
              <p>Valoramos la colaboración y el trabajo conjunto para lograr resultados excepcionales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
