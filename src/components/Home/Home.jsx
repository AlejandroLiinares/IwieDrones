import { Link } from "react-router-dom";
import "./Home.css";
import { useRef, useState } from 'react';
import ServiceCard from '../UI/Card/ServiceCard';
import SliderNavButton from '../UI/Button/SliderNavButton';
import DroneFiltro from '../Drone/DroneFiltro/DroneFiltro';
import OptimizedImage from '../UI/OptimizedImage/OptimizedImage';

const Home = () => {
  // Estados para los modales
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });
  const [serviceModal, setServiceModal] = useState({ isOpen: false, title: '', description: '' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const dronesSliderRef = useRef(null);
  const [filter, setFilter] = useState('todos');

  // Datos de los drones
  const drones = [
    { category: 'agricola', image: '/H32X.webp', title: 'H32X', summary: 'Perfecto para campos pequeños.', description: 'Con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.' },
    { category: 'agricola', image: '/H40X.webp', title: 'H40X', summary: 'Tu mejor compañia en campos medianos.', description: 'Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.' },
    { category: 'agricola', image: '/H60-4.webp', title: 'H60-4', summary: 'Ideal para aplicaciones de precisión.', description: 'Diseñado para aplicaciones de precisión, con un tanque de 30L y tecnología avanzada de pulverización para una cobertura óptima.' },
    { category: 'agricola', image: '/H120.webp', title: 'H120', summary: 'Potencia y eficiencia en un solo equipo.', description: 'Con capacidad de 60L, este dron ofrece una combinación perfecta de potencia y eficiencia para grandes extensiones de terreno.' },
    { category: 'agricola', image: '/H160.webp', title: 'H160', summary: 'La solución definitiva para grandes extensiones.', description: 'Nuestro modelo más avanzado para aplicaciones agrícolas, con un tanque de 80L y la última tecnología en sistemas de pulverización de precisión.' },
    { category: 'agricola', image: '/H200.png', title: 'H200', summary: 'Versatilidad y potencia para múltiples aplicaciones.', description: 'Un dron multipropósito con capacidad de carga de hasta 100kg, ideal para aplicaciones agrícolas intensivas y transporte de materiales.' },
    { category: 'industrial', image: '/H200-TRANSPORTE.webp', title: 'H200 Transporte', summary: 'Especializado en logística y transporte.', description: 'Versión especializada del H200 para transporte de cargas, con capacidad de hasta 100kg y sistemas avanzados de navegación y seguridad.' },
    { category: 'industrial', image: '/H200-EXTINCION.png', title: 'H200 Extinción', summary: 'Combate incendios con tecnología avanzada.', description: 'Equipado con sistemas especializados para combate de incendios, puede transportar hasta 100L de agentes extintores y operar en condiciones extremas.' },
    { category: 'industrial', image: '/H300.png', title: 'H300', summary: 'Nuestra solución más avanzada para aplicaciones industriales.', description: 'El modelo más avanzado de nuestra flota, con capacidad de carga de 150kg y autonomía extendida, ideal para aplicaciones industriales complejas.' },
    { category: 'industrial', image: '/X441.webp', title: 'X441', summary: 'Compacto y versátil para inspecciones.', description: 'Dron compacto equipado con cámaras de alta resolución, ideal para inspecciones visuales y termográficas en entornos industriales.' },
    { category: 'industrial', image: '/X491.webp', title: 'X491', summary: 'Mapeo y fotogrametría de alta precisión.', description: 'Especializado en mapeo y fotogrametría, equipado con sensores multiespectrales y sistemas de posicionamiento de alta precisión.' },
    { category: 'industrial', image: '/CAVALRY-H50L-2.png', title: 'CAVALRY H50L-2', summary: 'Vigilancia y seguridad avanzada.', description: 'Diseñado para aplicaciones de vigilancia y seguridad, con cámaras térmicas, zoom óptico y capacidad de vuelo nocturno.' },
    { category: 'industrial', image: '/SENTINEL-V13-5.jpg', title: 'SENTINEL V13-5', summary: 'Monitoreo de infraestructuras críticas.', description: 'Especializado en monitoreo de infraestructuras críticas, con sensores avanzados para detección de anomalías y sistemas de transmisión de datos en tiempo real.' }
  ];

  // Funciones para gestionar el scroll y el modal
  const scrollSlider = (direction) => {
    if (dronesSliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      dronesSliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openDroneModal = (title, description) => {
    setModalInfo({ isOpen: true, title, content: description });
  };

  const closeDroneModal = () => {
    setModalInfo({ isOpen: false, title: '', content: '' });
  };

  const handleModalBackdropClick = () => {
    closeDroneModal();
  };

  const filteredDrones = filter === 'todos' 
    ? drones 
    : drones.filter(drone => drone.category === filter);

  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con tecnología especializada en aplicación, siembra y monitoreo de cultivos.",
      image: "/agricola.jpg",
      link: "/agricultural"
    },
    {
      id: 2,
      title: "Mantención",
      description: "Servicio especializado para mantener sus drones en óptimas condiciones y extender su vida útil.",
      image: "/mantencion.jpg",
      link: "/mantencion"
    },
    {
      id: 3,
      title: "Reparación",
      description: "Soluciones profesionales para la reparación de sus equipos con técnicos certificados y repuestos originales.",
      image: "/reparacion.jpg",
      link: "/reparacion"
    },
    {
      id: 4,
      title: "Repuestos",
      description: "Componentes originales y compatibles para todos los modelos de drones con garantía de calidad.",
      image: "/repuestos.jpg",
      link: "/repuestos"
    }
  ];

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
  const openServiceModal = (title, description) => openModal(setServiceModal, { title, description });
  const closeServiceModal = () => closeModal(setServiceModal, serviceModal);

  // Cerrar el modal al hacer clic fuera de la tarjeta
  const handleServiceModalBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeServiceModal();
    }
  };

  const handleSlideClick = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
    }
  };

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
    },
    {
      id: 4,
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/@IwieDrones",
      alt: "YouTube"
    }
  ];

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = '/placeholder.jpg';
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="title-container">
              <h2 className="subtitle">Sé parte de</h2>
              <div className="hero-divider"></div>
              <h1 className="hero-title">LA INDUSTRIA DEL FUTURO</h1>
            </div>
            <Link to="/drones" className="cta-button" aria-label="Ver catálogo de drones">Nuestros Drones</Link>
          </div>
        </div>
      </section>

      {/* Drones Section */}
      <section className="drones-catalog-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', color: '#0a3d62', marginBottom: '15px' }}>NUESTROS DRONES</h2>
          <div className="section-divider" style={{ margin: '0 auto 40px', backgroundColor: '#0a3d62' }}></div>
          
          <DroneFiltro onFilterChange={setFilter} />
          
          <div className="drones-slider-container">
            <button 
              className="slider-nav-button slider-prev" 
              onClick={() => scrollSlider('left')}
              aria-label="Ver drones anteriores"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="drones-slider" ref={dronesSliderRef}>
              {filteredDrones.map((drone, index) => (
                <div key={index} className="drone-item">
                  <div className="drone-card">
                    <OptimizedImage
                      src={drone.image}
                      alt={`Drone ${drone.title}`}
                      width={280}
                      height={280}
                    />
                    <div className="drone-card-content">
                      <h3 className="drone-card-title">{drone.title}</h3>
                      <p className="drone-card-summary">{drone.summary}</p>
                      <button 
                        className="drone-card-plus-btn"
                        onClick={() => openDroneModal(drone.title, drone.description)}
                        aria-label={`Más información sobre ${drone.title}`}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="slider-nav-button slider-next" 
              onClick={() => scrollSlider('right')}
              aria-label="Ver drones siguientes"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Modal para drones */}
      {modalInfo.isOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal-content drone-modal">
            <button className="modal-close" onClick={closeDroneModal} aria-label="Cerrar modal">
              <i className="fas fa-times"></i>
            </button>
            <h3>{modalInfo.title}</h3>
            <p>{modalInfo.content}</p>
          </div>
        </div>
      )}

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
          <h2 className="section-title" style={{ color: '#0a3d62' }}>NUESTROS SERVICIOS</h2>
          <div className="section-divider" style={{ backgroundColor: '#0a3d62' }}></div>
          
          <div className="services-content">
            <div className="services-slider-container">
              <div className="services-slider" style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}>
                {serviceSlides.map((slide) => (
                  <div key={slide.id} className="slide" style={{ padding: '0 10px' }}>
                    <div className="service-card" style={{ height: '480px', width: '350px' }}>
                      <div className="service-card-image" style={{ height: '100%' }}>
                        <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="service-card-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1) 100%)' }}>
                          <h3 className="service-card-title" style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>{slide.title}</h3>
                          <button 
                            className="service-card-plus-btn"
                            onClick={() => openServiceModal(slide.title, slide.description)}
                            aria-label={`Más información sobre ${slide.title}`}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="slider-nav-buttons">
              <SliderNavButton 
                direction="left" 
                onClick={() => handleSlideClick('left')}
                ariaLabel="Ver servicio anterior"
              />
              <SliderNavButton 
                direction="right" 
                onClick={() => handleSlideClick('right')}
                ariaLabel="Ver servicio siguiente"
              />
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
          <div className="about-divider" style={{ 
            background: 'linear-gradient(to right,rgb(33, 145, 226),rgb(83, 180, 250),rgb(107, 193, 254))', 
            height: '3px', 
            width: '120px', 
            marginBottom: '20px',
            boxShadow: '0 2px 5px rgba(30, 144, 255, 0.4)'
          }}></div>
          <p className="about-subtitle">
            Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de energía, servicio de televigilancia, asimismo como el área de entretenimiento.
          </p>
          <Link to="/drones" className="about-cta-button" aria-label="Más información sobre nuestros drones">Más Información</Link>
        </div>
      </section>
      
      {/* Social Networks Section */}
      <section className="social-networks-section" id="redes">
        <div className="container">
          <h2 className="section-title" style={{ color: '#0a3d62' }}>NUESTRAS REDES</h2>
          <div className="section-divider" style={{ backgroundColor: '#0a3d62' }}></div>
          
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

      {/* Modal para servicios */}
      {serviceModal.isOpen && (
        <div className="modal-backdrop" onClick={handleServiceModalBackdropClick}>
          <div className="modal-content service-modal">
            <button className="modal-close" onClick={closeServiceModal} aria-label="Cerrar modal">
              <i className="fas fa-times"></i>
            </button>
            <h3>{serviceModal.title}</h3>
            <p>{serviceModal.description}</p>
            <div className="modal-actions">
              <Link 
                to={serviceSlides.find(slide => slide.title === serviceModal.title)?.link || '/'} 
                className="modal-action-button"
              >
                Ver más detalles
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
