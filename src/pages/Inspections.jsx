import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Inspections = () => {
  // Datos de ejemplo para drones de inspección
  const inspectionDrones = [
    {
      id: 1,
      name: "Drone Inspección IS-100",
      description: "Equipado con cámara 4K y sensores térmicos para inspecciones detalladas de infraestructuras, edificios y terrenos.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Cámara: 4K con zoom óptico 30x",
        "Cámara térmica: 640x512 px",
        "Autonomía: 35 minutos",
        "Resistencia al viento: Hasta 10m/s",
        "Transmisión en tiempo real: 10km"
      ],
      benefits: [
        "Inspección detallada sin riesgos para el personal",
        "Detección de anomalías térmicas",
        "Documentación visual de alta calidad",
        "Acceso a áreas de difícil acceso",
        "Reducción de tiempos de inspección"
      ]
    },
    {
      id: 2,
      name: "Drone Fotogramétrico FM-200",
      description: "Especializado en fotogrametría y creación de modelos 3D para topografía, minería y construcción.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Cámara: 42MP Full Frame",
        "Precisión: 1-2cm/pixel",
        "Cobertura: 150 hectáreas/vuelo",
        "RTK/PPK integrado",
        "Software de procesamiento incluido"
      ],
      benefits: [
        "Modelos 3D de alta precisión",
        "Cálculo de volúmenes y superficies",
        "Seguimiento de avance de obras",
        "Topografía de terrenos extensos",
        "Documentación detallada del terreno"
      ]
    },
    {
      id: 3,
      name: "Drone Inspección Interior ID-50",
      description: "Diseñado para inspecciones en espacios confinados e interiores con protección contra colisiones y luces LED.",
      image: "https://via.placeholder.com/400x300",
      specs: [
        "Tamaño: Ultracompacto",
        "Iluminación: LED 4000 lúmenes",
        "Protección: Jaula anti-colisión",
        "Cámara: HD con visión nocturna",
        "Autonomía: 15 minutos"
      ],
      benefits: [
        "Inspección de espacios confinados",
        "Evaluación de riesgos sin exposición humana",
        "Documentación de áreas peligrosas",
        "Maniobrabilidad en espacios reducidos",
        "Rápido despliegue en emergencias"
      ]
    }
  ];

  return (
    <div className="service-page inspections-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Inspecciones con Drones</h1>
          <p>Soluciones avanzadas para inspección de infraestructuras, edificios y terrenos</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Inspecciones Precisas y Seguras</h2>
              <p>En Iwiedrones ofrecemos servicios especializados de inspección mediante drones equipados con cámaras de alta resolución, sensores térmicos y tecnología de última generación.</p>
              <p>Nuestras soluciones permiten realizar inspecciones detalladas de infraestructuras, edificios, terrenos y espacios confinados sin poner en riesgo al personal y con resultados de alta precisión.</p>
              
              <h3>Ventajas de las Inspecciones con Drones</h3>
              <ul className="benefits-list">
                <li><span>Mayor seguridad</span> al evitar trabajos en altura o zonas peligrosas</li>
                <li><span>Reducción de costos</span> frente a métodos tradicionales</li>
                <li><span>Acceso a áreas de difícil acceso</span> o peligrosas</li>
                <li><span>Documentación visual completa</span> de alta calidad</li>
                <li><span>Detección temprana</span> de problemas y anomalías</li>
                <li><span>Menor tiempo de inspección</span> y rápida disponibilidad de resultados</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Drone realizando inspección" />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Tipos de Inspecciones</h2>
          
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">🏢</div>
              <h3>Edificios</h3>
              <p>Inspección de fachadas, cubiertas y estructuras para mantenimiento preventivo y detección de daños.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">⚡</div>
              <h3>Infraestructuras Eléctricas</h3>
              <p>Revisión de líneas de alta tensión, torres y subestaciones con cámaras térmicas y visuales.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🏗️</div>
              <h3>Obras y Construcción</h3>
              <p>Seguimiento de avance de obras, topografía y modelos 3D para control de proyectos.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🌉</div>
              <h3>Puentes y Viaductos</h3>
              <p>Inspección detallada de estructuras de difícil acceso para evaluar su estado y necesidades de mantenimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drones Catalog */}
      <section className="drones-catalog">
        <div className="container">
          <h2 className="section-title">Nuestros Drones de Inspección</h2>
          <p className="section-description">Contamos con una flota de drones especializados para diferentes tipos de inspecciones.</p>
          
          <div className="drones-list">
            {inspectionDrones.map(drone => (
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
          <h2 className="section-title">Nuestro Proceso de Inspección</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Planificación</h3>
              <p>Definimos los objetivos, áreas a inspeccionar y seleccionamos el equipo adecuado.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Captura de Datos</h3>
              <p>Realizamos vuelos programados para obtener imágenes y datos de alta calidad.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Procesamiento</h3>
              <p>Analizamos la información recopilada utilizando software especializado.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Informe Detallado</h3>
              <p>Entregamos un informe completo con hallazgos, recomendaciones y documentación visual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Necesitas un servicio de inspección con drones?</h2>
          <p>Contáctanos para una evaluación personalizada y presupuesto sin compromiso.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
        </div>
      </section>
    </div>
  );
};

export default Inspections;
