import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Agricultural = () => {
  // Datos de ejemplo para drones agrícolas
  const agriculturalDrones = [
    {
      id: 1,
      name: "Drone Fumigador XF-200",
      description: "Drone especializado para fumigación agrícola con tanque de 20L y autonomía de 30 minutos. Ideal para cultivos de mediana y gran extensión.",
      image: "https://via.placeholder.com/400x300",
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
      image: "https://via.placeholder.com/400x300",
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
      image: "https://via.placeholder.com/400x300",
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

  return (
    <div className="service-page agricultural-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Fumigación Agrícola con Drones</h1>
          <p>Soluciones de precisión para la aplicación de productos fitosanitarios en todo tipo de cultivos</p>
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
                <li><span>Mayor precisión</span> en la aplicación de productos</li>
                <li><span>Reducción significativa</span> en el uso de agua y productos químicos</li>
                <li><span>Acceso a zonas difíciles</span> o con cultivos altos</li>
                <li><span>Menor compactación del suelo</span> al evitar maquinaria pesada</li>
                <li><span>Rapidez y eficiencia</span> en la cobertura de grandes áreas</li>
                <li><span>Menor exposición</span> de los trabajadores a productos químicos</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Drone fumigando cultivos" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Aplicaciones en Agricultura</h2>
          
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">🌾</div>
              <h3>Cultivos Extensivos</h3>
              <p>Maíz, trigo, soja, arroz y otros cultivos de gran extensión donde la eficiencia es clave.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🍇</div>
              <h3>Viñedos</h3>
              <p>Aplicación precisa en hileras de viñedos, incluso en terrenos con pendientes.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🌳</div>
              <h3>Frutales</h3>
              <p>Fumigación uniforme en árboles frutales de diferentes alturas y densidades.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🥦</div>
              <h3>Horticultura</h3>
              <p>Tratamientos específicos para cultivos hortícolas con mínimo impacto.</p>
            </div>
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
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Evaluación Inicial</h3>
              <p>Analizamos las características del terreno, tipo de cultivo y necesidades específicas.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planificación</h3>
              <p>Diseñamos el plan de vuelo y determinamos la dosis y tipo de aplicación óptima.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución</h3>
              <p>Realizamos la fumigación siguiendo el plan establecido con precisión y eficiencia.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Seguimiento</h3>
              <p>Evaluamos los resultados y proporcionamos informes detallados de la aplicación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Necesitas un servicio de fumigación agrícola?</h2>
          <p>Contáctanos para una evaluación personalizada y presupuesto sin compromiso.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;
