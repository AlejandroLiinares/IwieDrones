import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const TechnicalService = () => {
  // Datos de ejemplo para servicios técnicos
  const technicalServices = [
    {
      id: 1,
      name: "Mantenimiento Preventivo",
      description: "Servicio completo de revisión y mantenimiento para prevenir fallos y garantizar el óptimo funcionamiento de sus drones.",
      image: "https://via.placeholder.com/400x300",
      includes: [
        "Revisión completa de componentes",
        "Calibración de sensores y sistemas",
        "Actualización de firmware",
        "Limpieza de componentes",
        "Ajuste de motores y hélices"
      ],
      benefits: [
        "Prevención de fallos durante operaciones",
        "Mayor vida útil del equipo",
        "Optimización del rendimiento",
        "Reducción de costos a largo plazo",
        "Garantía de funcionamiento seguro"
      ]
    },
    {
      id: 2,
      name: "Reparación Especializada",
      description: "Servicio de diagnóstico y reparación de averías en drones de cualquier marca y modelo, con técnicos certificados y piezas originales.",
      image: "https://via.placeholder.com/400x300",
      includes: [
        "Diagnóstico completo",
        "Reparación de componentes electrónicos",
        "Sustitución de piezas dañadas",
        "Reparación de estructuras",
        "Pruebas de funcionamiento"
      ],
      benefits: [
        "Reparación profesional garantizada",
        "Uso de piezas originales o compatibles certificadas",
        "Diagnóstico preciso de problemas",
        "Soluciones adaptadas a cada caso",
        "Asesoramiento técnico personalizado"
      ]
    },
    {
      id: 3,
      name: "Modificaciones y Mejoras",
      description: "Servicio de personalización y mejora de drones para adaptarlos a necesidades específicas o mejorar su rendimiento.",
      image: "https://via.placeholder.com/400x300",
      includes: [
        "Instalación de accesorios especializados",
        "Mejora de sistemas de propulsión",
        "Optimización de baterías",
        "Instalación de sensores adicionales",
        "Personalización de software"
      ],
      benefits: [
        "Adaptación a necesidades específicas",
        "Mejora del rendimiento y autonomía",
        "Ampliación de funcionalidades",
        "Optimización para aplicaciones concretas",
        "Ventaja competitiva en operaciones profesionales"
      ]
    }
  ];

  return (
    <div className="service-page technical-service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Servicio Técnico de Drones</h1>
          <p>Mantenimiento, reparación y optimización de drones de todas las marcas y modelos</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Soporte Técnico Profesional</h2>
              <p>En Iwiedrones contamos con un equipo de técnicos especializados y un taller equipado con la última tecnología para ofrecer servicios de mantenimiento, reparación y optimización de drones de cualquier marca y modelo.</p>
              <p>Nuestro compromiso es garantizar el correcto funcionamiento de sus equipos, prolongar su vida útil y optimizar su rendimiento para que pueda sacar el máximo provecho de su inversión.</p>
              
              <h3>¿Por qué elegir nuestro servicio técnico?</h3>
              <ul className="benefits-list">
                <li><span>Técnicos certificados</span> con amplia experiencia en el sector</li>
                <li><span>Taller especializado</span> con equipamiento de última generación</li>
                <li><span>Piezas originales</span> y componentes certificados</li>
                <li><span>Diagnóstico preciso</span> de problemas y averías</li>
                <li><span>Garantía en todos</span> nuestros servicios</li>
                <li><span>Servicio rápido</span> y eficiente</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Técnico reparando un drone" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="drones-catalog">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios Técnicos</h2>
          <p className="section-description">Ofrecemos una amplia gama de servicios para mantener sus drones en óptimas condiciones.</p>
          
          <div className="drones-list">
            {technicalServices.map(service => (
              <div className="drone-detail-card" key={service.id}>
                <div className="drone-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="drone-info">
                  <h3>{service.name}</h3>
                  <p className="drone-description">{service.description}</p>
                  
                  <div className="drone-specs-container">
                    <div className="specs-column">
                      <h4>Incluye</h4>
                      <ul className="specs-list">
                        {service.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="specs-column">
                      <h4>Beneficios</h4>
                      <ul className="benefits-list">
                        {service.benefits.map((benefit, index) => (
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

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso de Servicio</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Recepción y Diagnóstico</h3>
              <p>Evaluamos el estado del drone y realizamos un diagnóstico detallado para identificar problemas.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Presupuesto</h3>
              <p>Elaboramos un presupuesto detallado con las reparaciones o servicios necesarios.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Servicio Técnico</h3>
              <p>Nuestros técnicos realizan el mantenimiento o reparación con piezas de calidad.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Pruebas y Entrega</h3>
              <p>Realizamos pruebas exhaustivas y entregamos el equipo en perfecto estado de funcionamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="faq-container" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="faq-item" style={{marginBottom: '2rem'}}>
              <h3 style={{color: '#0056b3', marginBottom: '0.5rem'}}>¿Cuánto tiempo tarda el servicio de mantenimiento?</h3>
              <p>El tiempo de servicio depende del tipo de mantenimiento y la complejidad del drone. Generalmente, un mantenimiento preventivo básico se realiza en 24-48 horas.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem'}}>
              <h3 style={{color: '#0056b3', marginBottom: '0.5rem'}}>¿Ofrecen garantía en las reparaciones?</h3>
              <p>Sí, todas nuestras reparaciones tienen una garantía de 3 meses que cubre defectos en las piezas sustituidas y en la mano de obra.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem'}}>
              <h3 style={{color: '#0056b3', marginBottom: '0.5rem'}}>¿Trabajan con todas las marcas de drones?</h3>
              <p>Sí, nuestros técnicos están capacitados para trabajar con drones de cualquier marca y modelo, tanto de uso recreativo como profesional.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem'}}>
              <h3 style={{color: '#0056b3', marginBottom: '0.5rem'}}>¿Qué incluye el mantenimiento preventivo?</h3>
              <p>El mantenimiento preventivo incluye revisión de componentes, calibración de sensores, actualización de firmware, limpieza general, ajuste de motores y hélices, y pruebas de funcionamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Tu drone necesita mantenimiento o reparación?</h2>
          <p>Contáctanos para una evaluación personalizada y presupuesto sin compromiso.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Servicio</Link>
        </div>
      </section>
    </div>
  );
};

export default TechnicalService;
