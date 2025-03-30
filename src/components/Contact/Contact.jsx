import { useState, useCallback } from 'react';
import './Contact.css';

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

const Contact = () => {
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
      {/* Hero Section - Simplificado */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte con cualquier consulta o solicitud de servicio.</p>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <h2>Envíanos un Mensaje</h2>
            
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <FormField
                id="name"
                label="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                required={true}
                placeholder="Ingresa tu nombre completo"
              />
              
              <div className="form-row">
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  placeholder="ejemplo@correo.com"
                />
                
                <FormField
                  id="phone"
                  label="Teléfono"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+56 9 XXXX XXXX"
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
                required={true}
                placeholder="Asunto de tu mensaje"
              />
              
              <FormField
                id="message"
                label="Mensaje"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required={true}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
              />
              
              <button type="submit" className="submit-button">
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
