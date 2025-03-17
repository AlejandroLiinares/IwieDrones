import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Training = () => {
  // Datos de ejemplo para cursos de capacitación
  const trainingCourses = [
    {
      id: 1,
      name: "Curso Básico de Pilotaje de Drones",
      description: "Aprende los fundamentos del vuelo de drones, normativa vigente y prácticas seguras de operación. Curso ideal para principiantes sin experiencia previa.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 20 horas (10 teóricas, 10 prácticas)",
        "Nivel: Principiante",
        "Incluye: Material didáctico y certificado",
        "Grupos reducidos: Máximo 6 alumnos",
        "Drones incluidos para prácticas"
      ],
      topics: [
        "Principios básicos de vuelo",
        "Normativa aeronáutica vigente",
        "Seguridad operacional",
        "Meteorología básica",
        "Prácticas de vuelo en diferentes escenarios"
      ]
    },
    {
      id: 2,
      name: "Especialización en Fumigación Agrícola",
      description: "Capacitación especializada en el uso de drones para aplicaciones agrícolas, calibración de equipos y técnicas de fumigación de precisión.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 30 horas (15 teóricas, 15 prácticas)",
        "Nivel: Intermedio",
        "Requisito: Curso básico de pilotaje",
        "Incluye: Manual técnico y certificado",
        "Prácticas en campo real"
      ],
      topics: [
        "Tecnología de drones para agricultura",
        "Calibración de equipos de fumigación",
        "Planificación de misiones agrícolas",
        "Productos fitosanitarios y su aplicación",
        "Técnicas avanzadas de fumigación"
      ]
    },
    {
      id: 3,
      name: "Curso Avanzado de Inspecciones Industriales",
      description: "Formación especializada en el uso de drones para inspecciones técnicas, termografía y fotogrametría aplicada a entornos industriales.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 40 horas (20 teóricas, 20 prácticas)",
        "Nivel: Avanzado",
        "Requisito: Experiencia previa en pilotaje",
        "Incluye: Software especializado y certificado",
        "Prácticas en instalaciones industriales"
      ],
      topics: [
        "Termografía y análisis de imágenes térmicas",
        "Fotogrametría y creación de modelos 3D",
        "Inspección de infraestructuras críticas",
        "Procesamiento y análisis de datos",
        "Elaboración de informes técnicos"
      ]
    }
  ];

  return (
    <div className="service-page training-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>Capacitaciones en Drones</h1>
          <p>Formación especializada para pilotos y técnicos en diferentes aplicaciones de drones</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Formación Profesional en Tecnología de Drones</h2>
              <p>En Iwiedrones ofrecemos programas de capacitación diseñados para formar profesionales en el manejo y aplicación de drones en diferentes sectores.</p>
              <p>Nuestros cursos combinan teoría y práctica, con instructores certificados y equipos de última generación para garantizar una formación de calidad.</p>
              
              <h3>¿Por qué elegir nuestras capacitaciones?</h3>
              <ul className="benefits-list">
                <li><span>Instructores certificados</span> con amplia experiencia en el sector</li>
                <li><span>Grupos reducidos</span> para una atención personalizada</li>
                <li><span>Equipos de última generación</span> para prácticas reales</li>
                <li><span>Instalaciones especializadas</span> para diferentes escenarios</li>
                <li><span>Certificación reconocida</span> en el sector</li>
                <li><span>Bolsa de empleo</span> para los mejores alumnos</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://via.placeholder.com/600x400" alt="Capacitación con drones" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog */}
      <section className="drones-catalog">
        <div className="container">
          <h2 className="section-title">Nuestros Cursos</h2>
          <p className="section-description">Ofrecemos diferentes niveles de formación adaptados a tus necesidades y objetivos profesionales.</p>
          
          <div className="drones-list">
            {trainingCourses.map(course => (
              <div className="drone-detail-card" key={course.id}>
                <div className="drone-image">
                  <img src={course.image} alt={course.name} />
                </div>
                <div className="drone-info">
                  <h3>{course.name}</h3>
                  <p className="drone-description">{course.description}</p>
                  
                  <div className="drone-specs-container">
                    <div className="specs-column">
                      <h4>Detalles del Curso</h4>
                      <ul className="specs-list">
                        {course.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="specs-column">
                      <h4>Contenido</h4>
                      <ul className="benefits-list">
                        {course.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
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

      {/* Methodology Section */}
      <section className="applications-section">
        <div className="container">
          <h2 className="section-title">Nuestra Metodología</h2>
          
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-icon">📚</div>
              <h3>Formación Teórica</h3>
              <p>Clases teóricas con material didáctico actualizado y casos prácticos reales.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">✈️</div>
              <h3>Prácticas de Vuelo</h3>
              <p>Sesiones prácticas en diferentes escenarios y condiciones para dominar el pilotaje.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🔧</div>
              <h3>Talleres Técnicos</h3>
              <p>Workshops especializados en mantenimiento, calibración y resolución de problemas.</p>
            </div>
            <div className="application-card">
              <div className="application-icon">🏆</div>
              <h3>Evaluación Continua</h3>
              <p>Sistema de evaluación que garantiza la adquisición de competencias profesionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Lo que Dicen Nuestros Alumnos</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <img src="https://via.placeholder.com/100" alt="Alumno" style={{borderRadius: '50%', marginBottom: '1rem'}} />
              <h3>Carlos Rodríguez</h3>
              <p>"La capacitación superó mis expectativas. Los instructores son excelentes y las prácticas muy completas."</p>
              <div style={{color: '#0056b3', marginTop: '1rem'}}>★★★★★</div>
            </div>
            <div className="process-step">
              <img src="https://via.placeholder.com/100" alt="Alumna" style={{borderRadius: '50%', marginBottom: '1rem'}} />
              <h3>María González</h3>
              <p>"Gracias al curso de fumigación agrícola pude implementar el servicio en mi empresa con excelentes resultados."</p>
              <div style={{color: '#0056b3', marginTop: '1rem'}}>★★★★★</div>
            </div>
            <div className="process-step">
              <img src="https://via.placeholder.com/100" alt="Alumno" style={{borderRadius: '50%', marginBottom: '1rem'}} />
              <h3>Pedro Sánchez</h3>
              <p>"La formación práctica es lo que más valoro. Aprendí a resolver situaciones reales que ahora enfrento en mi trabajo."</p>
              <div style={{color: '#0056b3', marginTop: '1rem'}}>★★★★☆</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>¿Listo para convertirte en un profesional de los drones?</h2>
          <p>Contáctanos para obtener más información sobre nuestros cursos y próximas fechas.</p>
          <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
        </div>
      </section>
    </div>
  );
};

export default Training;
