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
const FormField = ({ id, label, type = 'text', value, onChange, required = false, placeholder, options = null, rows = null }) => (
  <div className="form-group">
    <label htmlFor={id}>{label} {required && <span className="required">*</span>}</label>
    {type === 'select' ? (
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-required={required}
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
      />
    )}
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
      {/* Hero Section */}
      <section className="service-hero" style={{ 
        backgroundImage: 'url("/contactanos.jpg")'
      }}>
        <div className="container">
          <h1>CONTÁCTANOS</h1>
          <p className="coming-soon">Conéctate con nosotros para más información</p>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-section">
        <div className="container">
          <h2>Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <FormField
              id="name"
              label="Nombre"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
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
              />
              
              <FormField
                id="phone"
                label="Teléfono"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 12345678"
              />
            </div>
            
            <FormField
              id="service"
              label="Servicio de Interés"
              type="select"
              value={formData.service}
              onChange={handleChange}
              options={serviceOptions}
            />
            
            <FormField
              id="subject"
              label="Asunto"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Ej: Consulta sobre servicios agrícolas"
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
            />
            
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>

          {formStatus.submitted && (
            <div className={`form-feedback ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contacto;
