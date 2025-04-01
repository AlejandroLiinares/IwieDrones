import { Link } from "react-router-dom";
import "./Base.css";
import "./Hero.css";
import "./Home.css";
import "./Quote.css";
import { useRef, useState } from 'react';

const Home = () => {
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con tecnología especializada en aplicación, siembra y monitoreo de cultivos.",
      image: "/agricola.jpg",
      link: "/agricola"
    },
    {
      id: 2,
      title: "Industriales",
      description: "Nuestros servicios industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "/industria.jpg",
      link: "/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Sistemas de vigilancia para monitoreo de seguridad, control de perímetros y supervisión de eventos.",
      image: "/televigilancia.jpg",
      link: "/inspecciones"
    },
    {
      id: 4,
      title: "Energía",
      description: "Inspección de infraestructuras energéticas, paneles solares y líneas eléctricas con tecnología especializada.",
      image: "/energia.jpg",
      link: "/industrial"
    },
    {
      id: 5,
      title: "Capacitación y Certificación",
      description: "Programas de formación con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "/capacitacion.jpg",
      link: "/capacitaciones"
    }
  ];

  // Estados para los modales
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });
  const [serviceModal, setServiceModal] = useState({ isOpen: false, title: '', description: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos de las redes sociales
  const socialLinks = [
    {
      id: 1,
      icon: "fab fa-tiktok",
      url: "https://www.tiktok.com/@iwiedrones",
      alt: "TikTok"
    },
    {
      id: 2,
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/iwiedrones/",
      alt: "Instagram"
    },
    {
      id: 3,
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/people/Iwie-Drones/100092530085647/",
      alt: "Facebook"
    }
  ];

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = '/placeholder.jpg';
  };

  // Funciones para gestionar modales
  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
  };

  const openModal = (setter, data) => {
    setter({ ...data, isOpen: true });
    setTimeout(() => {
      toggleBodyScroll(true);
    }, 100);
  };

  const closeModal = (setter, currentState) => {
    setter({ ...currentState, isOpen: false });
    setTimeout(() => {
      toggleBodyScroll(false);
    }, 100);
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

  const handleSlideClick = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
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
                src="/douglas.webp" 
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
            <div className="services-slider" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {serviceSlides.map((slide) => (
                <div key={slide.id} className="slide">
                  <div className="slide-content">
                    <img src={slide.image} alt={slide.title} onError={handleImageError} />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        openServiceModal(slide.title, slide.description);
                      }}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleSlideClick('left');
                }}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button 
                className="slider-arrow" 
                onClick={(e) => {
                  e.preventDefault();
                  handleSlideClick('right');
                }}
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
        <div className="about-us-background">
          <img src="/quienes-somos.jpg" alt="Quienes Somos" className="about-us-image" />
        </div>
        <div className="about-us-overlay"></div>
        <div className="about-us-content">
          <h2 className="section-title">QUIÉNES SOMOS</h2>
          <div className="about-divider"></div>
          <p className="about-subtitle">
            Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de energía, servicio de televigilancia, asimismo como el área de entretenimiento.
          </p>
        </div>
      </section>
      
      {/* Social Networks Section */}
      <section className="social-networks-section" id="redes">
        <div className="container">
          <h2 className="section-title">NUESTRAS REDES</h2>
          <div className="section-divider"></div>
          
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`Visitar ${link.alt}`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
