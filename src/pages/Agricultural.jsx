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
  // Datos de ejemplo para drones agrícolas
  const agriculturalDrones = [
    {
      id: 1,
      name: "Drone Fumigador XF-200",
      description: "Drone especializado para fumigación agrícola con tanque de 20L y autonomía de 30 minutos. Ideal para cultivos de mediana y gran extensión.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: [
        "Tanque: 20L",
        "Autonomía: 30 minutos",
        "Velocidad: 10m/s",
        "Cobertura: 10 hectáreas/hora",
        "Resistencia al viento: Hasta 8m/s"
      ],
      benefits: [
        "Reducción del 80% en uso de agua",
        "Aplicación precisa y uniforme",
        "Acceso a áreas de difícil acceso",
        "Reducción de exposición a químicos",
        "Menor compactación del suelo"
      ]
    },
    {
      id: 2,
      name: "Drone Agrícola Multisensor AG-100",
      description: "Equipado con cámaras multiespectrales para análisis de cultivos, detección de estrés hídrico, deficiencias nutricionales y presencia de plagas.",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: [
        "Cámara: Multiespectral 5 bandas",
        "Autonomía: 45 minutos",
        "Cobertura: 100 hectáreas/vuelo",
        "Precisión: 2cm/pixel",
        "Software incluido: Análisis NDVI"
      ],
      benefits: [
        "Detección temprana de problemas",
        "Mapeo de variabilidad del cultivo",
        "Optimización de insumos",
        "Monitoreo de crecimiento",
        "Informes detallados de salud vegetal"
      ]
    },
    {
      id: 3,
      name: "Drone Fumigador Compacto XF-100",
      description: "Versión compacta para pequeños agricultores y terrenos de difícil acceso. Fácil de transportar y operar.",
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specs: [
        "Tanque: 10L",
        "Autonomía: 20 minutos",
        "Peso: 12kg (sin carga)",
        "Ancho de pulverización: 4-5m",
        "Baterías intercambiables"
      ],
      benefits: [
        "Ideal para agricultura de precisión",
        "Fácil transporte y manejo",
        "Bajo costo operativo",
        "Rápido retorno de inversión",
        "Mantenimiento sencillo"
      ]
    }
  ];

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
      description: "Fumigación uniforme en árboles frutales de diferentes alturas y densidades."
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
      description: "Diseñamos el plan de vuelo y determinamos la dosis y tipo de aplicación óptima.",
      icon: faClipboardCheck
    },
    {
      number: 3,
      title: "Ejecución",
      description: "Realizamos la fumigación siguiendo el plan establecido con precisión y eficiencia.",
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
            <h1>Servicios de Drones Agrícolas</h1>
            <p className="hero-description">
              Optimiza tus cultivos con tecnología de vanguardia. Nuestros drones agrícolas ofrecen fumigación precisa, 
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
            <h2>Ventajas de la Fumigación con Drones</h2>
            <p className="section-description">
              La fumigación con drones representa una revolución en la agricultura moderna, 
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
              Nuestros servicios de fumigación con drones son ideales para diversos tipos de cultivos y escenarios agrícolas.
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

      {/* Drones Catalog Section */}
      <section className="drones-section">
        <div className="container">
          <div className="section-header">
            <h2>Catálogo de Drones Agrícolas</h2>
            <p className="section-description">
              Contamos con una amplia gama de drones especializados para diferentes necesidades agrícolas.
            </p>
          </div>
          <div className="drones-grid">
            {agriculturalDrones.map(drone => (
              <div className="drone-card" key={drone.id}>
                <div className="drone-image">
                  <img src={drone.image} alt={drone.name} />
                </div>
                <div className="drone-content">
                  <h3>{drone.name}</h3>
                  <p>{drone.description}</p>
                  <div className="drone-details">
                    <div className="specs">
                      <h4>Especificaciones</h4>
                      <ul className="specs-list">
                        {drone.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="benefits">
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
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo nuestros servicios de drones pueden transformar tus operaciones agrícolas.
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary">Solicitar Presupuesto</Link>
              <Link to="/contacto" className="btn btn-secondary">Más Información</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;
