import React from 'react';
import './Membresias.css';
import Card from '../UI/Card/Card';

const Membresias = () => {
  // Datos de los planes de membresía
  const membershipPlans = [
    {
      id: 1,
      title: "Aprendiz",
      price: "$1.500.000 + IVA",
      period: "anual",
      features: [
        "Drones hasta 25 L",
        "1 equipo por día",
        "Valor diario: $120.000 (con equipo base)",
        "Valor diario: $180.000 (con camioneta)"
      ],
      recommended: false
    },
    {
      id: 2,
      title: "Emprendedor",
      price: "$3.000.000 + IVA",
      period: "anual",
      features: [
        "Drones hasta 40 L/50 kg",
        "1 equipo por día",
        "Valor diario: $150.000 (equipo base)",
        "Valor diario: $210.000 (con camioneta)"
      ],
      recommended: true
    },
    {
      id: 3,
      title: "Enjambre",
      price: "$6.000.000 + IVA",
      period: "anual",
      features: [
        "Drones hasta 75 L/80 kg",
        "3 equipos por día",
        "Valor diario: $150.000 (equipo base)",
        "Valor diario: $210.000 (con camioneta)"
      ],
      recommended: false
    },
    {
      id: 4,
      title: "Enjambre Pro",
      price: "$9.000.000 + IVA",
      period: "anual",
      features: [
        "Todas las capacidades",
        "5 equipos por día",
        "Valor por operación a definir"
      ],
      recommended: false
    }
  ];


  return (
    <div className="membresias-page">
      {/* Hero Section - Mejorado para responsividad */}
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/membresia.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px', /* Asegura una altura mínima en dispositivos pequeños */
        maxHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', /* Tamaño de fuente responsivo */
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          padding: '0 15px',
          maxWidth: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 2
        }}>MEMBRESÍA</h1>
      </div>


      {/* Planes Section */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700' }}>NUESTROS PLANES DE MEMBRESÍAS</h2>
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
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Qué incluyen los planes de membresía?</h3>
              <p className="faq-answer">Nuestros planes de membresía anual incluyen acceso a equipos de drones según la capacidad contratada. Cada plan ofrece un número específico de equipos por día y diferentes capacidades de carga según el nivel elegido.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Cómo funcionan los valores diarios?</h3>
              <p className="faq-answer">Los valores diarios varían según el plan y el tipo de equipo. Ofrecemos opciones con equipo base o con camioneta, con precios que van desde $120.000 hasta $210.000 dependiendo del plan seleccionado.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Hay costos adicionales que deba conocer?</h3>
              <p className="faq-answer">Se aplica un recargo único de $25.000 por mantención en días correlativos; en días no correlativos, por cada día de uso. Además, cada ciclo de batería usado tendrá un costo de $2.000 + IVA, facturado dentro de las 72 horas hábiles tras la devolución.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question" style={{ color: '#d4af37' }}>¿Cuál es la forma de pago para las membresías?</h3>
              <p className="faq-answer">El pago se realiza a 90 días desde la fecha de emisión de la factura, aunque se autoriza el pago anticipado o pagos parciales. El valor incluye IVA y se factura con fecha de la firma del contrato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Black Theme */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <div className="container">
          <h2 className="cta-title" style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: '700', fontSize: '2.5rem' }}>¿LISTO PARA ELEGIR TU PLAN DE MEMBRESÍA?</h2>
          <p className="cta-description" style={{ color: '#aaaaaa', letterSpacing: '1px', fontSize: '1.2rem', maxWidth: '700px', margin: '1.5rem auto' }}>Accede a nuestra flota de drones profesionales y potencia tus operaciones</p>
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
          }}>Contratar ahora</button>
        </div>
      </section>
    </div>
  );
};

export default Membresias;