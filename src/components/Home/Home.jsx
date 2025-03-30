import { Link } from "react-router-dom";
import "./Home.css";
import "./Hero.css";
import "./Quote.css";
import "./Base.css";
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  // Datos de los slides de servicios Sólo quiero poder hacer los cambios que quiera. 
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con tecnología especializada en aplicación, siembra y monitoreo de cultivos.",
      image: "agricola.jpg",
      link: "/agricola"
    },
    {
      id: 2,
      title: "Industriales",
      description: "Nuestros servicios industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "industria.jpg",
      link: "/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Sistemas de vigilancia para monitoreo de seguridad, control de perímetros y supervisión de eventos.",
      image: "televigilancia.jpg",
      link: "/inspecciones"
    },
    {
      id: 4,
      title: "Energía",
      description: "Inspección de infraestructuras energéticas, paneles solares y líneas eléctricas con tecnología especializada.",
      image: "energia.jpg",
      link: "/industrial"
    },
    {
      id: 5,
      title: "Capacitación y Certificación",
      description: "Programas de formación con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "capacitacion.jpg",
      link: "/capacitaciones"
    }
  ];
  
  // Referencias para los sliders
  const servicesSliderRef = useRef(null);
  const dronesSliderRef = useRef(null);
  
  // Estados para los modales
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });
  const [serviceModal, setServiceModal] = useState({ isOpen: false, title: '', description: '' });

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = '/placeholder.jpg';
  };

  // Función genérica para navegar por cualquier slider
  const scrollSlider = (sliderRef, direction) => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 300;
    const currentScroll = sliderRef.current.scrollLeft;
    
    sliderRef.current.scrollTo({
      left: currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  // Funciones para gestionar modales
  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
  };

  const openModal = (setter, data) => {
    setter({ ...data, isOpen: true });
    toggleBodyScroll(true);
  };

  const closeModal = (setter, currentState) => {
    setter({ ...currentState, isOpen: false });
    toggleBodyScroll(false);
  };

  // Manejadores específicos para cada modal
  const openDroneModal = (title, content) => openModal(setModalInfo, { title, content });
  const closeDroneModal = () => closeModal(setModalInfo, modalInfo);
  
  const openServiceModal = (title, description) => openModal(setServiceModal, { title, description });
  const closeServiceModal = () => closeModal(setServiceModal, serviceModal);

  // Cerrar el modal al hacer clic fuera de la tarjeta
  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      if (modalInfo.isOpen) closeDroneModal();
      if (serviceModal.isOpen) closeServiceModal();
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <iframe 
            id="youtube-player" 
            src="https://www.youtube.com/embed/apmZ_e5tx0c?autoplay=1&mute=1&controls=0&loop=1&playlist=apmZ_e5tx0c&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1" 
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label="Video de fondo"
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="title-container">
              <h2 className="subtitle">Sé parte de</h2>
              <div className="hero-divider"></div>
              <h1 className="hero-title">LA INDUSTRIA DEL FUTURO</h1>
            </div>
            <a href="#servicios" className="cta-button" aria-label="Ver más información sobre nuestros servicios">Más Información</a>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-text">
              <blockquote>
                "Estaremos realmente atrapados con la tecnología cuando todo lo que queramos sean sólo cosas que funcionen."
              </blockquote>
              <cite>– Douglas Adams</cite>
            </div>
            <div className="quote-image">
              <img 
                src="douglas.webp" 
                alt="Douglas Adams" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services" id="servicios">
        <div className="container">
          <h2 className="section-title">NUESTROS SERVICIOS</h2>
          <div className="section-divider"></div>
          
          <div className="services-content">
            <div className="services-slider" ref={servicesSliderRef}>
              {serviceSlides.map((slide) => (
                <div key={slide.id} className="slide">
                  <div className="slide-content">
                    <img src={slide.image} alt={slide.title} onError={handleImageError} />
                    <button 
                      onClick={() => openServiceModal(slide.title, slide.description)}
                      className="slide-info-toggle"
                      aria-label={`Ver más información sobre ${slide.title}`}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <h3 className="slide-overlay-title">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="slider-controls">
              <button 
                className="slider-arrow" 
                onClick={() => scrollSlider(servicesSliderRef, 'left')}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button 
                className="slider-arrow" 
                onClick={() => scrollSlider(servicesSliderRef, 'right')}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="about-us-section" id="quienes-somos">
        <div className="about-us-container">
          <div className="about-us-content">
            <h2 className="section-title">QUIÉNES SOMOS</h2>
            <div className="about-divider"></div>
            <p className="about-description">
              Somos una empresa especializada en servicios con drones, comprometidos con la innovación y la excelencia en cada proyecto que emprendemos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Modal para servicios */}
      {serviceModal.isOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal-card">
            <button className="modal-close" onClick={closeServiceModal} aria-label="Cerrar modal">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="modal-title">{serviceModal.title}</h3>
            <div className="modal-divider"></div>
            <p className="modal-content">{serviceModal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
