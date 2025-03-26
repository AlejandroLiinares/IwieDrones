import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Training = () => {
  // Datos de ejemplo para cursos de capacitación
  const trainingCourses = [
    {
      id: 1,
      name: "Curso Básico de Tecnología Avanzada",
      description: "Aprende los fundamentos de la tecnología avanzada, normativa vigente y prácticas seguras de operación. Curso ideal para principiantes sin experiencia previa.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 20 horas (10 teóricas, 10 prácticas)",
        "Nivel: Principiante",
        "Incluye: Material didáctico y certificado",
        "Grupos reducidos: Máximo 6 alumnos",
        "Equipamiento incluido para prácticas"
      ],
      topics: [
        "Principios básicos de operación",
        "Normativa técnica vigente",
        "Seguridad operacional",
        "Meteorología básica",
        "Prácticas en diferentes escenarios"
      ]
    },
    {
      id: 2,
      name: "Especialización en Aplicaciones Agrícolas",
      description: "Capacitación especializada en el uso de tecnología para aplicaciones agrícolas, calibración de equipos y técnicas de aplicación de precisión.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 30 horas (15 teóricas, 15 prácticas)",
        "Nivel: Intermedio",
        "Requisito: Curso básico de operación",
        "Incluye: Manual técnico y certificado",
        "Prácticas en campo real"
      ],
      topics: [
        "Tecnología avanzada para agricultura",
        "Calibración de equipos de aplicación",
        "Planificación de operaciones agrícolas",
        "Productos fitosanitarios y su aplicación",
        "Técnicas avanzadas de aplicación"
      ]
    },
    {
      id: 3,
      name: "Curso Avanzado de Inspecciones Industriales",
      description: "Formación especializada en el uso de tecnología para inspecciones técnicas, termografía y fotogrametría aplicada a entornos industriales.",
      image: "https://via.placeholder.com/400x300",
      details: [
        "Duración: 40 horas (20 teóricas, 20 prácticas)",
        "Nivel: Avanzado",
        "Requisito: Curso básico de operación",
        "Incluye: Software especializado y certificado",
        "Prácticas en instalaciones industriales reales"
      ],
      topics: [
        "Inspección de infraestructuras",
        "Termografía industrial",
        "Fotogrametría y modelado 3D",
        "Análisis e interpretación de datos",
        "Elaboración de informes técnicos"
      ]
    }
  ];

  // Datos para instructores
  const instructors = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      position: "Instructor Principal",
      bio: "Ingeniero con más de 10 años de experiencia en el sector. Especialista en tecnología avanzada y aplicaciones industriales.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "María González",
      position: "Especialista en Agricultura",
      bio: "Ingeniera agrónoma con especialización en agricultura de precisión. Experta en aplicaciones tecnológicas para el sector agrícola.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Juan Martínez",
      position: "Especialista Técnico",
      bio: "Técnico especializado con certificaciones internacionales. Experto en mantenimiento y reparación de equipos tecnológicos avanzados.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container-fluid">
          <div className="container">
            <h1>Capacitación y Certificación</h1>
            <p className="hero-description">
              Formación profesional con los más altos estándares de calidad. Nuestros cursos te preparan para dominar 
              la tecnología avanzada y sus aplicaciones en diversos sectores.
            </p>
            <div className="hero-buttons">
              <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
              <a href="#cursos" className="btn btn-outline-light">Ver Cursos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Cursos</h2>
            <p className="section-description">
              Ofrecemos una amplia gama de cursos diseñados para diferentes niveles y necesidades específicas.
              Todos nuestros programas combinan teoría y práctica para garantizar un aprendizaje efectivo.
            </p>
          </div>

          <div className="courses-grid">
            {trainingCourses.map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-image">
                  <img src={course.image} alt={course.name} />
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-details">
                    <div className="details-section">
                      <h4>Detalles del Curso</h4>
                      <ul>
                        {course.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="topics-section">
                      <h4>Contenido</h4>
                      <ul>
                        {course.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="course-footer">
                    <Link to="/contactanos" className="btn btn-primary">Inscribirme</Link>
                    <span className="course-id">Código: CURSO-{course.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Instructores</h2>
            <p className="section-description">
              Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector.
            </p>
          </div>

          <div className="instructors-grid">
            {instructors.map(instructor => (
              <div className="instructor-card" key={instructor.id}>
                <div className="instructor-image">
                  <img src={instructor.image} alt={instructor.name} />
                </div>
                <div className="instructor-info">
                  <h3>{instructor.name}</h3>
                  <p className="instructor-position">{instructor.position}</p>
                  <p className="instructor-bio">{instructor.bio}</p>
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
            <h2>¿Listo para iniciar tu formación?</h2>
            <p>
              Contáctanos hoy mismo para recibir más información sobre nuestros cursos y fechas disponibles.
            </p>
            <div className="cta-buttons">
              <Link to="/contactanos" className="btn btn-primary">Solicitar Información</Link>
              <a href="#cursos" className="btn btn-outline-light">Ver Todos los Cursos</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
