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
    <div className="service-page agricultural-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Fumigación Agrícola con Drones</h1>
          <p>Soluciones de precisión para la aplicación de productos fitosanitarios en todo tipo de cultivos</p>
          <div className="service-hero-buttons">
            <Link to="/contacto" className="btn btn-primary">Solicitar Presupuesto</Link>
            <Link to="/servicios" className="btn btn-outline">Ver Todos los Servicios</Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Tecnología de Vanguardia para el Campo</h2>
              <p>En Iwiedrones ofrecemos servicios especializados de fumigación agrícola mediante drones, una alternativa eficiente y precisa frente a los métodos tradicionales.</p>
              <p>Nuestros drones están equipados con sistemas de pulverización de última generación que permiten una aplicación uniforme y controlada, reduciendo el desperdicio de producto y minimizando el impacto ambiental.</p>
              
              <h3>Ventajas de la Fumigación con Drones</h3>
              <ul className="benefits-list">
                {mainBenefits.map((benefit, index) => (
                  <li key={index}><span>{benefit.title}</span> {benefit.description}</li>
                ))}
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1586768045025-5ce7a4f8d5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Drone fumigando cultivos" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Aplicaciones en Agricultura</h2>
          
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

      {/* Drones Catalog */}
      <section className="drones-catalog">
        <div className="container">
          <h2 className="section-title">Nuestros Drones Agrícolas</h2>
          <p className="section-description">Contamos con una flota de drones especializados para diferentes necesidades agrícolas.</p>
          
          <div className="drones-list">
            {agriculturalDrones.map(drone => (
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

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
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
            <p>Contáctanos hoy mismo para una evaluación personalizada de tus necesidades agrícolas y descubre cómo nuestros drones pueden transformar tu productividad.</p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-light">Solicitar Información</Link>
              <a href="tel:+123456789" className="btn btn-outline-light">Llamar Ahora</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;
