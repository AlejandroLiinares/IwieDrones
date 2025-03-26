import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faTint, 
  faMapMarkedAlt, 
  faShieldAlt, 
  faChartLine, 
  faTools, 
  faSearchPlus, 
  faClipboardCheck 
} from '@fortawesome/free-solid-svg-icons';

const Agricultural = () => {
  // Aplicaciones en agricultura
  const applications = [
    {
      icon: faLeaf,
      title: "Cultivos Extensivos",
      description: "Maíz, trigo, soja, arroz y otros cultivos de gran extensión donde la eficiencia es clave."
    },
    {
      icon: faTint,
      title: "Viñedos",
      description: "Aplicación precisa en hileras de viñedos, incluso en terrenos con pendientes."
    },
    {
      icon: faMapMarkedAlt,
      title: "Frutales",
      description: "Aplicación uniforme en árboles frutales de diferentes alturas y densidades."
    },
    {
      icon: faShieldAlt,
      title: "Horticultura",
      description: "Tratamientos específicos para cultivos hortícolas con mínimo impacto."
    }
  ];

  // Proceso de trabajo
  const processSteps = [
    {
      number: 1,
      title: "Evaluación Inicial",
      description: "Analizamos las características del terreno, tipo de cultivo y necesidades específicas.",
      icon: faSearchPlus
    },
    {
      number: 2,
      title: "Planificación",
      description: "Diseñamos el plan de trabajo y determinamos la dosis y tipo de aplicación óptima.",
      icon: faClipboardCheck
    },
    {
      number: 3,
      title: "Ejecución",
      description: "Realizamos la aplicación siguiendo el plan establecido con precisión y eficiencia.",
      icon: faTools
    },
    {
      number: 4,
      title: "Seguimiento",
      description: "Evaluamos los resultados y proporcionamos informes detallados de la aplicación.",
      icon: faChartLine
    }
  ];

  // Beneficios principales
  const mainBenefits = [
    {
      title: "Mayor precisión",
      description: "en la aplicación de productos"
    },
    {
      title: "Reducción significativa",
      description: "en el uso de agua y productos químicos"
    },
    {
      title: "Acceso a zonas difíciles",
      description: "o con cultivos altos"
    },
    {
      title: "Menor compactación del suelo",
      description: "al evitar maquinaria pesada"
    },
    {
      title: "Rapidez y eficiencia",
      description: "en la cobertura de grandes áreas"
    },
    {
      title: "Menor exposición",
      description: "de los trabajadores a productos químicos"
    }
  ];

  return (
    <div className="agricultural-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container-fluid">
          <div className="container">
            <h1>Servicios Agrícolas Avanzados</h1>
            <p className="hero-description">
              Optimiza tus cultivos con tecnología de vanguardia. Nuestros servicios ofrecen aplicación precisa, 
              monitoreo de cultivos y mapeo detallado para maximizar tu rendimiento y reducir costos.
            </p>
            <div className="hero-buttons">
              <Link to="/contactanos" className="btn btn-primary btn-icon">
                <FontAwesomeIcon icon={faClipboardCheck} /> Solicitar Cotización
              </Link>
              <a href="#servicios" className="btn btn-outline-light btn-icon">
                <FontAwesomeIcon icon={faSearchPlus} /> Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <h2>Ventajas de Nuestra Tecnología de Aplicación</h2>
            <p className="section-description">
              Nuestra tecnología de aplicación representa una revolución en la agricultura moderna, 
              ofreciendo numerosas ventajas frente a los métodos tradicionales.
            </p>
          </div>
          <div className="benefits-container">
            <ul className="benefits-list">
              <li>Reducción del 80% en uso de agua</li>
              <li>Aplicación precisa y uniforme de agroquímicos</li>
              <li>Acceso a áreas de difícil acceso o con obstáculos</li>
              <li>Reducción de la exposición humana a productos químicos</li>
              <li>Menor compactación del suelo</li>
              <li>Mayor velocidad de aplicación</li>
              <li>Reducción de costos operativos</li>
              <li>Menor impacto ambiental</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section">
        <div className="container">
          <div className="section-header">
            <h2>Aplicaciones</h2>
            <p className="section-description">
              Nuestros servicios de aplicación son ideales para diversos tipos de cultivos y escenarios agrícolas.
            </p>
          </div>
          <div className="applications-grid">
            {applications.map((app, index) => (
              <div className="application-card" key={index}>
                <div className="application-icon">
                  <FontAwesomeIcon icon={app.icon} />
                </div>
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestro Proceso</h2>
            <p className="section-description">
              Implementamos un proceso eficiente y profesional para garantizar resultados óptimos en cada servicio.
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{index + 1}</div>
                <div className="process-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para revolucionar tu agricultura?</h2>
            <p>
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo nuestros servicios pueden transformar tus operaciones agrícolas.
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary">Solicitar Presupuesto</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;
