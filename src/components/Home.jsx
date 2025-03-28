import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Hero.css';
import '../styles/Quote.css';
import '../styles/Drones.css';
import '../styles/Modal.css';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con tecnología especializada en aplicación, siembra y monitoreo de cultivos.",
      image: "./agricola.jpg",
      link: "/agricola"
    },
    {
      id: 2,
      title: "Industriales",
      description: "Nuestros servicios industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "./industria.jpg",
      link: "/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Sistemas de vigilancia para monitoreo de seguridad, control de perímetros y supervisión de eventos.",
      image: "./televigilancia.jpg",
      link: "/services/surveillance"
    },
    {
      id: 4,
      title: "Energía",
      description: "Inspección de infraestructuras energéticas, paneles solares y líneas eléctricas con tecnología especializada.",
      image: "./energia.jpg",
      link: "/services/energy"
    },
    {
      id: 5,
      title: "Capacitación y Certificación",
      description: "Programas de formación con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "./capacitacion.jpg",
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
    e.target.src = 'placeholder.jpg';
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
                src="./douglas.webp" 
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
        <div className="container">
          <div className="about-hero-content">
            <h2 className="about-title">QUIÉNES SOMOS</h2>
            <div className="about-divider"></div>
            <p className="about-description">
              Iwie nace en el año 2022 con el objetivo de brindar servicios con tecnología avanzada en diversas áreas como 
              agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos 
              especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la 
              eficiencia en diversos sectores.
            </p>
          </div>
        </div>
      </section>
      
      {/* Drones Catalog Section */}
      <section className="drones-catalog-section" id="nuestros-drones">
        <div className="container">
          <h2 className="section-title">NUESTROS DRONES</h2>
          
          <div className="drones-slider-container">
            <button 
              className="slider-nav-button slider-prev" 
              onClick={() => scrollSlider(dronesSliderRef, 'left')}
              aria-label="Ver drones anteriores"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="drones-slider" ref={dronesSliderRef}>
              <div className="drone-item">
                <img src="/H32X.webp" alt="Drone H32X" className="drone-image h32x-image" />
                <h3 className="drone-title">H32X</h3>
                <p className="drone-summary">Perfecto para campos pequeños.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H32X', 'Con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.')}
                  aria-label="Ver más información sobre H32X"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H40X.webp" alt="Drone H40X" className="drone-image" />
                <h3 className="drone-title">H40X</h3>
                <p className="drone-summary">Tu mejor compañia en campos medianos.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H40X', 'Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.')}
                  aria-label="Ver más información sobre H40X"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H60-4.webp" alt="Drone H60-4" className="drone-image" />
                <h3 className="drone-title">H60-4</h3>
                <p className="drone-summary">Ideal para aplicaciones de precisión.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H60-4', 'Diseñado para aplicaciones de precisión, con un tanque de 30L y tecnología avanzada de pulverización para una cobertura óptima.')}
                  aria-label="Ver más información sobre H60-4"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H120.webp" alt="Drone H120" className="drone-image" />
                <h3 className="drone-title">H120</h3>
                <p className="drone-summary">Potencia y eficiencia en un solo equipo.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H120', 'Con capacidad de 60L, este dron ofrece una combinación perfecta de potencia y eficiencia para grandes extensiones de terreno.')}
                  aria-label="Ver más información sobre H120"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H160.webp" alt="Drone H160" className="drone-image" />
                <h3 className="drone-title">H160</h3>
                <p className="drone-summary">La solución definitiva para grandes extensiones.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H160', 'Nuestro modelo más avanzado para aplicaciones agrícolas, con un tanque de 80L y la última tecnología en sistemas de pulverización de precisión.')}
                  aria-label="Ver más información sobre H160"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200.png" alt="Drone H200" className="drone-image" />
                <h3 className="drone-title">H200</h3>
                <p className="drone-summary">Versatilidad y potencia para múltiples aplicaciones.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200', 'Un dron multipropósito con capacidad de carga de hasta 100kg, ideal para aplicaciones agrícolas intensivas y transporte de materiales.')}
                  aria-label="Ver más información sobre H200"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-TRANSPORTE.webp" alt="Drone H200 Transporte" className="drone-image" />
                <h3 className="drone-title">H200 Transporte</h3>
                <p className="drone-summary">Especializado en logística y transporte.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Transporte', 'Versión especializada del H200 para transporte de cargas, con capacidad de hasta 100kg y sistemas avanzados de navegación y seguridad.')}
                  aria-label="Ver más información sobre H200 Transporte"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-EXTINCION.png" alt="Drone H200 Extinción" className="drone-image" />
                <h3 className="drone-title">H200 Extinción</h3>
                <p className="drone-summary">Combate incendios con tecnología avanzada.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Extinción', 'Equipado con sistemas especializados para combate de incendios, puede transportar hasta 100L de agentes extintores y operar en condiciones extremas.')}
                  aria-label="Ver más información sobre H200 Extinción"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H300.png" alt="Drone H300" className="drone-image" />
                <h3 className="drone-title">H300</h3>
                <p className="drone-summary">Nuestra solución más avanzada para aplicaciones industriales.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H300', 'El modelo más avanzado de nuestra flota, con capacidad de carga de 150kg y autonomía extendida, ideal para aplicaciones industriales complejas.')}
                  aria-label="Ver más información sobre H300"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X441.webp" alt="Drone X441" className="drone-image" />
                <h3 className="drone-title">X441</h3>
                <p className="drone-summary">Compacto y versátil para inspecciones.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X441', 'Dron compacto equipado con cámaras de alta resolución, ideal para inspecciones visuales y termográficas en entornos industriales.')}
                  aria-label="Ver más información sobre X441"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X491.webp" alt="Drone X491" className="drone-image" />
                <h3 className="drone-title">X491</h3>
                <p className="drone-summary">Mapeo y fotogrametría de alta precisión.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X491', 'Especializado en mapeo y fotogrametría, equipado con sensores multiespectrales y sistemas de posicionamiento de alta precisión.')}
                  aria-label="Ver más información sobre X491"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/CAVALRY-H50L-2.png" alt="Drone CAVALRY H50L-2" className="drone-image" />
                <h3 className="drone-title">CAVALRY H50L-2</h3>
                <p className="drone-summary">Vigilancia y seguridad avanzada.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('CAVALRY H50L-2', 'Diseñado para aplicaciones de vigilancia y seguridad, con cámaras térmicas, zoom óptico y capacidad de vuelo nocturno.')}
                  aria-label="Ver más información sobre CAVALRY H50L-2"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/SENTINEL-V13-5.jpg" alt="Drone SENTINEL V13-5" className="drone-image" />
                <h3 className="drone-title">SENTINEL V13-5</h3>
                <p className="drone-summary">Monitoreo de infraestructuras críticas.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('SENTINEL V13-5', 'Especializado en monitoreo de infraestructuras críticas, con sensores avanzados para detección de anomalías y sistemas de transmisión de datos en tiempo real.')}
                  aria-label="Ver más información sobre SENTINEL V13-5"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            
            <button 
              className="slider-nav-button slider-next" 
              onClick={() => scrollSlider(dronesSliderRef, 'right')}
              aria-label="Ver drones siguientes"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      
      {/* Modal para información del dron */}
      {modalInfo.isOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal-card">
            <button className="modal-close" onClick={closeDroneModal} aria-label="Cerrar modal">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="modal-title">{modalInfo.title}</h3>
            <div className="modal-divider"></div>
            <p className="modal-content">{modalInfo.content}</p>
          </div>
        </div>
      )}
      
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
