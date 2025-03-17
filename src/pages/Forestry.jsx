import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Forestry = () => {
  // Datos de ejemplo para drones forestales
  const forestryDrones = [
    {
      id: 1,
      name: "Drone Forestal FF-300",
      description: "Especializado en fumigación forestal para control de plagas y prevención de incendios, con tanque de gran capacidad y resistencia a condiciones adversas.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Tanque: 15L",
        "Autonomía: 25 minutos",
        "Resistencia: IP65",
        "Cobertura: 5 hectáreas/vuelo",
        "Sistema de pulverización ajustable"
      ],
      benefits: [
        "Tratamiento eficiente de grandes áreas forestales",
        "Acceso a zonas de difícil acceso",
        "Aplicación precisa de productos fitosanitarios",
        "Reducción de impacto ambiental",
        "Prevención efectiva de plagas forestales"
      ]
    },
    {
      id: 2,
      name: "Drone Monitoreo Forestal FM-100",
      description: "Equipado con cámaras multiespectrales y térmicas para monitoreo de salud forestal, detección temprana de incendios y seguimiento de especies.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Cámara: Multiespectral 5 bandas",
        "Cámara térmica: 640x512 px",
        "Autonomía: 45 minutos",
        "Alcance: 10km",
        "Transmisión en tiempo real"
      ],
      benefits: [
        "Detección temprana de incendios forestales",
        "Monitoreo de salud de la vegetación",
        "Seguimiento de especies protegidas",
        "Evaluación de daños post-incendio",
        "Mapeo de áreas forestales extensas"
      ]
    },
    {
      id: 3,
      name: "Drone Siembra Forestal FS-200",
      description: "Diseñado para reforestación mediante siembra aérea, con sistema de dispersión de semillas y capacidad para terrenos de difícil acceso.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Capacidad: 10kg de semillas",
        "Autonomía: 30 minutos",
        "Cobertura: 2 hectáreas/vuelo",
        "Sistema de dispersión programable",
        "GPS de alta precisión"
      ],
      benefits: [
        "Reforestación rápida de grandes áreas",
        "Acceso a terrenos escarpados o de difícil acceso",
        "Distribución uniforme de semillas",
        "Programación de patrones de siembra",
        "Reducción de costos de reforestación"
      ]
    }
  ];

  return (
    <div className="service-page forestry-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Servicios Forestales con Drones</h1>
          <p>Soluciones avanzadas para monitoreo, fumigación y protección de áreas forestales</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Tecnología Aérea para la Gestión Forestal</h2>
              <p>En Iwiedrones ofrecemos servicios especializados para el sector forestal mediante el uso de drones equipados con tecnología de última generación para monitoreo, fumigación y protección de bosques y áreas naturales.</p>
              <p>Nuestras soluciones permiten una gestión más eficiente de los recursos forestales, detección temprana de problemas y aplicación precisa de tratamientos, contribuyendo a la conservación y manejo sostenible de los ecosistemas.</p>
              
              <h3>Ventajas de los Drones en el Sector Forestal</h3>
              <ul className="benefits-list">
                <li><span>Monitoreo extensivo</span> de grandes áreas forestales</li>
                <li><span>Detección temprana</span> de incendios y plagas</li>
                <li><span>Acceso a zonas remotas</span> o de difícil acceso</li>
                <li><span>Aplicación precisa</span> de tratamientos fitosanitarios</li>
                <li><span>Reforestación eficiente</span> mediante siembra aérea</li>
                <li><span>Reducción del impacto ambiental</span> en las operaciones forestales</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Drone en entorno forestal" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Aplicaciones Forestales</h2>
          
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">🔥</div>
              <h3>Prevención de Incendios</h3>
              <p>Monitoreo térmico para detección temprana de focos de incendio y vigilancia de áreas de riesgo.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🌲</div>
              <h3>Control de Plagas</h3>
              <p>Fumigación precisa para el control de plagas forestales y enfermedades que afectan a los bosques.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🌱</div>
              <h3>Reforestación</h3>
              <p>Siembra aérea para reforestación de áreas degradadas o afectadas por incendios.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">📊</div>
              <h3>Inventario Forestal</h3>
              <p>Mapeo y análisis de masas forestales para gestión y planificación de recursos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drones Catalog */}
      <section className="drones-catalog">
        <div className="container">
          <h2 className="section-title">Nuestros Drones Forestales</h2>
          <p className="section-description">Contamos con una flota de drones especializados para diferentes aplicaciones en el sector forestal.</p>
          
          <div className="drones-list">
            {forestryDrones.map(drone => (
              <div className="drone-detail-card" key={drone.id}>
                <div className="drone-image">
                  <img src={drone.image} alt={drone.name} />
                </div>
                <div className="drone-info">
                  <h3>{drone.name}</h3>
                  <p className="drone-description">{drone.description}</p>
                  
                  <div className="drone-specs-container">
                    <div className="specs-column">
                      <h4>Especificaciones</h4>
                      <ul className="specs-list">
                        {drone.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="specs-column">
                      <h4>Beneficios</h4>
                      <ul className="benefits-list">
                        {drone.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Casos de Éxito</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <img src="https://via.placeholder.com/300x200" alt="Caso de éxito" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
              <h3>Reserva Natural Los Pinos</h3>
              <p>Implementación de un sistema de monitoreo con drones que permitió detectar un foco de incendio en fase inicial, evitando la pérdida de más de 500 hectáreas de bosque nativo.</p>
            </div>
            <div className="process-step">
              <img src="https://via.placeholder.com/300x200" alt="Caso de éxito" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
              <h3>Parque Nacional Sierra Alta</h3>
              <p>Control efectivo de plaga de escarabajo descortezador mediante fumigación selectiva con drones, preservando la salud de más de 1,000 hectáreas de pinos.</p>
            </div>
            <div className="process-step">
              <img src="https://via.placeholder.com/300x200" alt="Caso de éxito" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
              <h3>Proyecto de Reforestación Valle Verde</h3>
              <p>Reforestación de 200 hectáreas en terrenos escarpados mediante siembra aérea con drones, logrando una tasa de germinación superior al 70%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Necesitas soluciones forestales con drones?</h2>
          <p>Contáctanos para una evaluación personalizada y presupuesto sin compromiso.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
        </div>
      </section>
    </div>
  );
};

export default Forestry;
