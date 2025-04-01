import React from 'react';
import './Membresias.css';
import Card from '../UI/Card/Card';

const Membresias = () => {
  // Datos de los planes de membresía
  const membershipPlans = [
    {
      id: 1,
      title: "Plan Básico",
      price: "$49.900",
      period: "mensual",
      features: [
        "Acceso a capacitaciones básicas",
        "Soporte técnico por correo",
        "Descuento del 5% en servicios",
        "Acceso a eventos mensuales"
      ],
      recommended: false
    },
    {
      id: 2,
      title: "Plan Profesional",
      price: "$89.900",
      period: "mensual",
      features: [
        "Acceso a todas las capacitaciones",
        "Soporte técnico prioritario",
        "Descuento del 15% en servicios",
        "Acceso a eventos exclusivos",
        "1 inspección de equipo mensual"
      ],
      recommended: true
    },
    {
      id: 3,
      title: "Plan Empresarial",
      price: "$199.900",
      period: "mensual",
      features: [
        "Capacitaciones personalizadas",
        "Soporte técnico 24/7",
        "Descuento del 25% en servicios",
        "Acceso VIP a eventos",
        "3 inspecciones de equipo mensuales",
        "Asesoría personalizada"
      ],
      recommended: false
    }
  ];

  // Beneficios de las membresías
  const benefits = [
    {
      id: 1,
      title: "Capacitación Continua",
      description: "Acceso a cursos y talleres especializados para mantenerte actualizado en las últimas tecnologías de drones.",
      icon: "fas fa-graduation-cap"
    },
    {
      id: 2,
      title: "Soporte Técnico",
      description: "Asistencia técnica para resolver problemas y optimizar el rendimiento de tus equipos.",
      icon: "fas fa-tools"
    },
    {
      id: 3,
      title: "Eventos Exclusivos",
      description: "Participa en demostraciones, conferencias y networking con profesionales del sector.",
      icon: "fas fa-calendar-alt"
    },
    {
      id: 4,
      title: "Descuentos Especiales",
      description: "Precios preferenciales en todos nuestros servicios y productos.",
      icon: "fas fa-tags"
    }
  ];

  return (
    <div className="membresias-page">
      {/* Hero Section */}
      <section className="membresias-hero">
        <div className="membresias-hero-overlay"></div>
        <div className="container">
          <h1>MEMBRESÍAS</h1>
          <p className="membresias-subtitle">Únete a nuestra comunidad y accede a beneficios exclusivos</p>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">BENEFICIOS DE SER MIEMBRO</h2>
          <div className="section-divider"></div>
          
          <div className="benefits-grid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-item">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title">NUESTROS PLANES</h2>
          <div className="section-divider"></div>
          
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
          <h2 className="section-title">PREGUNTAS FRECUENTES</h2>
          <div className="section-divider"></div>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">¿Puedo cancelar mi membresía en cualquier momento?</h3>
              <p className="faq-answer">Sí, puedes cancelar tu membresía en cualquier momento. La cancelación será efectiva al finalizar el período de facturación actual.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Cómo puedo acceder a las capacitaciones?</h3>
              <p className="faq-answer">Una vez que te suscribas, recibirás acceso a nuestra plataforma de aprendizaje en línea donde podrás encontrar todas las capacitaciones disponibles según tu plan.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Los descuentos son acumulables con otras promociones?</h3>
              <p className="faq-answer">Los descuentos de membresía no son acumulables con otras promociones o descuentos especiales, se aplicará siempre el descuento mayor.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Hay algún compromiso de permanencia?</h3>
              <p className="faq-answer">No hay compromiso de permanencia. Nuestras membresías funcionan con renovación automática mensual, pero puedes cancelar cuando lo desees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">¿Listo para unirte?</h2>
          <p className="cta-description">Comienza a disfrutar de todos los beneficios que tenemos para ti</p>
          <button className="cta-button">Comenzar ahora</button>
        </div>
      </section>
    </div>
  );
};

export default Membresias;