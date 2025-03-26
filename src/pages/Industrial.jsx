import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Industrial = () => {
  // Datos de ejemplo para equipos industriales
  const industrialTech = [
    {
      id: 1,
      name: "Sistema Industrial DI-500",
      description: "Equipo especializado para aplicaciones industriales con resistencia a condiciones adversas y capacidad para transportar equipos de fumigación industrial.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Carga útil: 5kg",
        "Autonomía: 45 minutos",
        "Resistencia: IP65",
        "Alcance: 5km",
        "Velocidad máxima: 15m/s"
      ],
      benefits: [
        "Alta resistencia a condiciones adversas",
        "Capacidad para transportar equipos pesados",
        "Sistema de navegación preciso",
        "Operación en entornos complejos",
        "Bajo nivel de ruido"
      ]
    },
    {
      id: 2,
      name: "Sistema Fumigador Industrial IF-300",
      description: "Equipado con sistemas de fumigación de alta presión para aplicaciones industriales, incluyendo desinfección de grandes superficies y control de plagas.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Tanque: 15L",
        "Presión: Hasta 10 bar",
        "Cobertura: 5000m²/hora",
        "Baterías intercambiables",
        "Sistema de pulverización ajustable"
      ],
      benefits: [
        "Desinfección rápida de grandes áreas",
        "Aplicación uniforme y controlada",
        "Acceso a zonas de difícil acceso",
        "Reducción de riesgos para operarios",
        "Ahorro de tiempo y recursos"
      ]
    },
    {
      id: 3,
      name: "Sistema Térmico Industrial IT-200",
      description: "Equipado con cámaras térmicas para inspección industrial, detección de fugas y puntos calientes en instalaciones.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Cámara térmica: 640x512 px",
        "Sensibilidad térmica: <50mK",
        "Autonomía: 35 minutos",
        "Transmisión en vivo",
        "Software de análisis incluido"
      ],
      benefits: [
        "Detección temprana de problemas",
        "Inspección sin interrumpir operaciones",
        "Reducción de costos de mantenimiento",
        "Aumento de la seguridad",
        "Documentación detallada"
      ]
    }
  ];

  return (
    <div className="service-page industrial-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Fumigación Industrial con Tecnología Avanzada</h1>
          <p>Soluciones avanzadas para desinfección, control de plagas y aplicaciones industriales</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Tecnología Avanzada para Entornos Industriales</h2>
              <p>En Iwie Technologies ofrecemos servicios especializados de fumigación industrial mediante tecnología avanzada, una solución eficiente y segura para instalaciones de todo tipo.</p>
              <p>Nuestros equipos industriales están diseñados para operar en entornos complejos y cuentan con sistemas de pulverización de alta presión que garantizan una aplicación efectiva de productos desinfectantes y biocidas.</p>
              
              <h3>Ventajas de la Fumigación Industrial con Tecnología Avanzada</h3>
              <ul className="benefits-list">
                <li><span>Acceso a áreas de difícil acceso</span> como techos, fachadas y estructuras elevadas</li>
                <li><span>Reducción de riesgos</span> para el personal de mantenimiento</li>
                <li><span>Aplicación uniforme</span> en grandes superficies</li>
                <li><span>Mayor eficiencia</span> en tiempo y recursos</li>
                <li><span>Documentación visual</span> del proceso de aplicación</li>
                <li><span>Mínima interrupción</span> de las operaciones</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Tecnología en entorno industrial" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Aplicaciones Industriales</h2>
          
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">🏭</div>
              <h3>Plantas Industriales</h3>
              <p>Desinfección y control de plagas en instalaciones industriales y zonas de producción.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🏢</div>
              <h3>Edificios Comerciales</h3>
              <p>Fumigación de fachadas, techos y áreas comunes en centros comerciales y oficinas.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🏗️</div>
              <h3>Infraestructuras</h3>
              <p>Tratamiento de puentes, torres y otras estructuras de gran altura o difícil acceso.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🏥</div>
              <h3>Instalaciones Sanitarias</h3>
              <p>Desinfección especializada para hospitales, clínicas y centros de salud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Catalog */}
      <section className="tech-catalog">
        <div className="container">
          <h2 className="section-title">Nuestra Tecnología Industrial</h2>
          <p className="section-description">Contamos con equipos especializados para diferentes necesidades industriales.</p>
          
          <div className="tech-list">
            {industrialTech.map(tech => (
              <div className="tech-detail-card" key={tech.id}>
                <div className="tech-image">
                  <img src={tech.image} alt={tech.name} />
                </div>
                <div className="tech-info">
                  <h3>{tech.name}</h3>
                  <p className="tech-description">{tech.description}</p>
                  
                  <div className="tech-specs-container">
                    <div className="specs-column">
                      <h4>Especificaciones</h4>
                      <ul className="specs-list">
                        {tech.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="specs-column">
                      <h4>Beneficios</h4>
                      <ul className="benefits-list">
                        {tech.benefits.map((benefit, index) => (
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
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Evaluación</h3>
              <p>Analizamos las instalaciones, necesidades específicas y requisitos de seguridad.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planificación</h3>
              <p>Diseñamos un plan de acción detallado y seleccionamos los productos adecuados.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución</h3>
              <p>Realizamos la fumigación con precisión, siguiendo todos los protocolos de seguridad.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Documentación</h3>
              <p>Proporcionamos informes detallados y certificados de los tratamientos realizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Necesitas un servicio de fumigación industrial?</h2>
          <p>Contáctanos para una evaluación personalizada y presupuesto sin compromiso.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
        </div>
      </section>
    </div>
  );
};

export default Industrial;
