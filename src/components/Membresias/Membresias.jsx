import React from 'react';
import './Membresias.css';
import Card from '../UI/Card/Card';

const Membresias = () => {
  // Datos de los planes de membresía
  const membershipPlans = [
    {
      id: 1,
      title: "Operador Full-Stack",
      price: "$149.900",
      period: "mensual",
      features: [
        "Certificación oficial de piloto de drones",
        "Capacitación técnica avanzada",
        "Formación en mantenimiento y reparación",
        "Acceso a software especializado",
        "Soporte técnico prioritario",
        "Descuento del 20% en servicios y repuestos",
        "Acceso a eventos exclusivos",
        "Asesoría personalizada"
      ],
      recommended: true
    }
  ];

  // Beneficios de las membresías
  const benefits = [
    {
      id: 1,
      title: "Certificación Profesional",
      description: "Obtén una certificación oficial reconocida en el sector que valida tus habilidades como operador de drones.",
      icon: "fas fa-certificate"
    },
    {
      id: 2,
      title: "Formación Integral",
      description: "Aprende desde el pilotaje hasta el mantenimiento y reparación de drones con nuestro programa completo.",
      icon: "fas fa-graduation-cap"
    },
    {
      id: 3,
      title: "Soporte Técnico Premium",
      description: "Asistencia técnica prioritaria para resolver cualquier problema con tus equipos y optimizar su rendimiento.",
      icon: "fas fa-tools"
    },
    {
      id: 4,
      title: "Acceso a Tecnología Avanzada",
      description: "Utiliza software especializado y equipamiento profesional durante tu formación y en proyectos reales.",
      icon: "fas fa-laptop-code"
    }
  ];

  return (
    <div className="membresias-page">
      {/* Hero Section - Simplificado con capa oscura */}
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/membresia.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '5rem',
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
        }}>MEMBRESÍA</h1>
      </div>

      {/* Beneficios Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700' }}>BENEFICIOS DE SER MIEMBRO</h2>
          <div className="section-divider" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.3), #d4af37, rgba(212,175,55,0.3))', height: '3px', width: '120px' }}></div>
          
          <div className="benefits-grid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-item">
                <div className="benefit-icon">
                  <i className={benefit.icon} style={{ color: '#d4af37' }}></i>
                </div>
                <h3 className="benefit-title" style={{ color: '#ffffff' }}>{benefit.title}</h3>
                <p className="benefit-description" style={{ color: '#ffffff' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700' }}>NUESTRO PROGRAMA</h2>
          <div className="section-divider" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.3), #d4af37, rgba(212,175,55,0.3))', height: '3px', width: '120px' }}></div>
          
          <div className="plans-container">
            {membershipPlans.map(plan => (
              <Card key={plan.id} className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <div className="recommended-badge">Recomendado</div>}
                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="plan-button">
                  Suscribirse
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700' }}>PREGUNTAS FRECUENTES</h2>
          <div className="section-divider" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.3), #d4af37, rgba(212,175,55,0.3))', height: '3px', width: '120px' }}></div>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Cuánto dura el programa de Operador Full-Stack?</h3>
              <p className="faq-answer">El programa completo tiene una duración de 3 meses, con sesiones teóricas y prácticas. La membresía te da acceso continuo a actualizaciones y soporte después de completar la formación.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Qué certificación obtendré al finalizar?</h3>
              <p className="faq-answer">Obtendrás una certificación oficial como Operador de Drones reconocida en el sector, que valida tus habilidades tanto en pilotaje como en mantenimiento y reparación.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Se incluyen prácticas con drones reales?</h3>
              <p className="faq-answer">Sí, el programa incluye sesiones prácticas con diferentes modelos de drones profesionales, tanto para pilotaje como para mantenimiento y reparación.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Necesito experiencia previa con drones?</h3>
              <p className="faq-answer">No se requiere experiencia previa. El programa está diseñado para llevarte desde un nivel principiante hasta convertirte en un operador profesional con conocimientos técnicos avanzados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Black Theme */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <div className="container">
          <h2 className="cta-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700', fontSize: '2.5rem' }}>¿LISTO PARA CONVERTIRTE EN UN OPERADOR FULL-STACK?</h2>
          <p className="cta-description" style={{ color: '#aaaaaa', letterSpacing: '1px', fontSize: '1.2rem', maxWidth: '700px', margin: '1.5rem auto' }}>Comienza tu formación integral y obtén tu certificación profesional</p>
          <button className="cta-button" style={{ 
            backgroundColor: '#d4af37', 
            color: '#000000', 
            padding: '1rem 2.5rem', 
            border: 'none', 
            borderRadius: '50px', 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '2rem'
          }}>Comenzar ahora</button>
        </div>
      </section>
    </div>
  );
};

export default Membresias;