import { useState, useCallback } from 'react';
import './Contacto.css';

// Opciones de servicios para el formulario
const serviceOptions = [
  { value: 'general', label: 'Información General' },
  { value: 'agricola', label: 'Aplicación Agrícola' },
  { value: 'industrial', label: 'Aplicación Industrial' },
  { value: 'capacitaciones', label: 'Capacitaciones' },
  { value: 'inspecciones', label: 'Inspecciones' },
  { value: 'forestal', label: 'Forestal' },
  { value: 'tecnico', label: 'Servicio Técnico' },
  { value: 'tecnologia', label: 'Tecnología Avanzada' }
];

// Componente para campos de formulario
const FormField = ({ id, label, type = 'text', value, onChange, required = false, placeholder, options = null, rows = null, icon = null }) => (
  <div className="form-group">
    <label htmlFor={id}>{label} {required && <span className="required">*</span>}</label>
    <div className="input-container">
      {icon && <i className={`fas ${icon} input-icon`}></i>}
      {type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          aria-required={required}
          className={icon ? 'has-icon' : ''}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          aria-required={required}
          className={icon ? 'has-icon' : ''}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-required={required}
          className={icon ? 'has-icon' : ''}
        />
      )}
    </div>
  </div>
);

const Contacto = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  // Estado para mensajes de éxito/error
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Manejador de cambios en los campos
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  // Manejador de envío del formulario
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
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.'
    });
  }, [formData]);

  return (
    <div className="service-page">
      {/* Hero Section - Mejorado para responsividad */}
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/contactanos.jpg")',
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
        }}>CONTÁCTANOS</h1>
      </div>

      {/* Formulario de Contacto */}
      <section className="contact-section">
        <div className="container">
          <h2>Envíanos un mensaje</h2>
          <p className="contact-subtitle">Estamos aquí para responder tus consultas y ayudarte con nuestros servicios de drones</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <FormField
              id="name"
              label="Nombre"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              icon="fa-user"
            />
            
            <div className="form-row">
              <FormField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                icon="fa-envelope"
              />
              
              <FormField
                id="phone"
                label="Teléfono"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 12345678"
                icon="fa-phone"
              />
            </div>
            
            <FormField
              id="service"
              label="Servicio de Interés"
              type="select"
              value={formData.service}
              onChange={handleChange}
              options={serviceOptions}
              icon="fa-drone"
            />
            
            <FormField
              id="subject"
              label="Asunto"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Ej: Consulta sobre servicios agrícolas"
              icon="fa-tag"
            />
            
            <FormField
              id="message"
              label="Mensaje"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              icon="fa-comment"
            />
            
            <button type="submit" className="submit-button">
              <i className="fas fa-paper-plane"></i> Enviar Mensaje
            </button>
          </form>

          {formStatus.submitted && (
            <div className={`form-feedback ${formStatus.success ? 'success' : 'error'}`}>
              <i className={`fas ${formStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
              {formStatus.message}
            </div>
          )}
          
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Santiago, Chile</span>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <span>contacto@iwiedrones.cl</span>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <span>+56 9 1234 5678</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
