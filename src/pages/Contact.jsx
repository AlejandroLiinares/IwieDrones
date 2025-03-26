import { useState, useCallback } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Validación básica del formulario
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }
    
    // Simulación de envío del formulario
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por contactarnos! Te responderemos a la brevedad.'
    });

    // En un caso real, aquí se enviaría el formulario a un backend
    console.log('Datos del formulario:', formData);
    
    // Resetear el formulario después de 5 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  }, [formData]);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte con cualquier consulta o solicitud de servicio.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <p>Comunícate con nosotros para obtener más información sobre nuestros servicios o para solicitar una cotización personalizada.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@iwiedrones.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Teléfono</h3>
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Dirección</h3>
                  <p>Av. Principal 123, Santiago, Chile</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábado: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ingresa tu nombre completo"
                  aria-required="true"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ejemplo@correo.com"
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="general">Información General</option>
                  <option value="agricola">Aplicación Agrícola</option>
                  <option value="industrial">Aplicación Industrial</option>
                  <option value="capacitaciones">Capacitaciones</option>
                  <option value="inspecciones">Inspecciones</option>
                  <option value="forestal">Forestal</option>
                  <option value="tecnico">Servicio Técnico</option>
                  <option value="tecnologia">Tecnología Avanzada</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Asunto de tu mensaje"
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  rows="5"
                  aria-required="true"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Nuestra Ubicación</h2>
          <div className="map-container">
            <div className="placeholder-map">
              <p>Mapa de Google Maps se cargará aquí</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
