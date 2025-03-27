import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  // Datos de los slides de servicios Una hora de chamba
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
      link: "/services/training"
    }
  ];
  
  // Reference for the services slider
  const servicesSliderRef = useRef(null);
  
  // Reference for the drones slider
  const dronesSliderRef = useRef(null);
  
  // Estado para controlar el modal de información del dron
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    title: '',
    content: ''
  });
  
  // Estado para controlar el modal de servicios
  const [serviceModal, setServiceModal] = useState({
    isOpen: false,
    title: '',
    description: ''
  });

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = 'placeholder.jpg'; // Imagen de respaldo sin barra inicial
  };

  // Función para navegar por el slider de drones
  const scrollDrones = (direction) => {
    if (dronesSliderRef.current) {
      const scrollAmount = 300; // Ajustar según sea necesario
      const currentScroll = dronesSliderRef.current.scrollLeft;
      
      if (direction === 'left') {
        dronesSliderRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      } else {
        dronesSliderRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  // Función para abrir el modal con la información del dron
  const openDroneModal = (title, content) => {
    setModalInfo({
      isOpen: true,
      title,
      content
    });
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  // Función para abrir el modal de servicios
  const openServiceModal = (title, description) => {
    setServiceModal({
      isOpen: true,
      title,
      description
    });
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalInfo({
      ...modalInfo,
      isOpen: false
    });
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  };

  // Función para cerrar el modal de servicios
  const closeServiceModal = () => {
    setServiceModal({
      ...serviceModal,
      isOpen: false
    });
    document.body.style.overflow = 'auto';
  };

  // Cerrar el modal al hacer clic fuera de la tarjeta
  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
      closeServiceModal();
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
                onClick={() => {
                  const slider = servicesSliderRef.current;
                  if (!slider) return;
                  
                  const slides = slider.querySelectorAll('.slide');
                  if (!slides.length) return;
                  
                  const slideWidth = slides[0].offsetWidth + 20;
                  const scrollAmount = -slideWidth;
                  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button 
                className="slider-arrow" 
                onClick={() => {
                  const slider = servicesSliderRef.current;
                  if (!slider) return;
                  
                  const slides = slider.querySelectorAll('.slide');
                  if (!slides.length) return;
                  
                  const slideWidth = slides[0].offsetWidth + 20;
                  const scrollAmount = slideWidth;
                  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
              onClick={() => scrollDrones('left')}
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
                  aria-label="Ver más información"
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
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H120.webp" alt="Drone H120" className="drone-image" />
                <h3 className="drone-title">H120</h3>
                <p className="drone-summary">Tus sueños hechos realidad para campos grandes.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H120', 'Gestiona eficientemente campos grandes con un tanque de pulverización de 52L y una capacidad de dispersión de 60kg, reduciendo significativamente el tiempo y los costos de mano de obra.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H160.webp" alt="Drone H160" className="drone-image" />
                <h3 className="drone-title">H160</h3>
                <p className="drone-summary">La buena gestión se comparte.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H160', 'El buque insignia de la serie Hercules. Con una capacidad de pulverización de 72L~82L, ofrece la solución definitiva para la gestión extensiva de cultivos.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200.png" alt="Drone H200" className="drone-image" />
                <h3 className="drone-title">H200 Agrícola y Transporte</h3>
                <p className="drone-summary">La perfección por los aires.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Agrícola y Transporte', 'Líder del mercado con su capacidad sin igual, el Roarer H200 redefine las operaciones a gran escala con su capacidad de pulverización de 92L y carga útil de 100kg, sirviendo como el dron todo en uno definitivo para pulverización y transporte.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H300.png" alt="Drone H300" className="drone-image" />
                <h3 className="drone-title">H300 Agrícola y Transporte</h3>
                <p className="drone-summary">Optimus-Drone-Prime</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H300 Agrícola y Transporte', 'Diseño de plegado hacia arriba, un tanque de 95L y sensores de carga de grado aeroespacial para mayor precisión. Cuenta con un medidor de flujo de ondas milimétricas y soporta hasta 800A de potencia con disipación de calor. La batería inteligente enchufable es compatible con todas las baterías convencionales.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-EXTINCION.png" alt="Drone H200 Extinción" className="drone-image" />
                <h3 className="drone-title">H200 Extinción de incendios</h3>
                <p className="drone-summary">Las llamas no se apagan solas.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Extinción de incendios', 'Carga máxima: 100 kg | Tiempo de vuelo: 40 minutos. Los drones para extinción de incendios son adecuados para uso en áreas montañosas, pastizales, incendios forestales y para extinguir incendios en áreas urbanas específicas.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-TRANSPORTE.webp" alt="Drone H200 Transporte" className="drone-image" />
                <h3 className="drone-title">H200 Transporte</h3>
                <p className="drone-summary">Déjamelo todo a mí.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Transporte', 'Carga máxima: 100 kg | Tiempo de vuelo: 40 minutos. Los drones de carga pesada se utilizan ampliamente para el transporte de mercancías, frutas y otros artículos, reduciendo los costos de mano de obra y mejorando la eficiencia del trabajo.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X491.webp" alt="Drone X491" className="drone-image" />
                <h3 className="drone-title">X491</h3>
                <p className="drone-summary">Contigo en las buenas y en las malas.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X491', 'Duración: 120 min | Carga máxima: 5 kg.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X441.webp" alt="Drone X441" className="drone-image" />
                <h3 className="drone-title">X441</h3>
                <p className="drone-summary">Optimización ideal.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X441', 'Duración: 60 min | Carga máxima: 2.5 kg.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/SENTINEL-V13-5.jpg" alt="Drone SENTINEL V13-5" className="drone-image" />
                <h3 className="drone-title">Sentinel V13-5 VTOL</h3>
                <p className="drone-summary">Veamos quién observa más.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('Sentinel V13-5 VTOL', 'Duración: 200 min | Velocidad máxima de crucero: 108 km/h.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/CAVALRY-H50L-2.png" alt="Drone CAVALRY H50L-2" className="drone-image" />
                <h3 className="drone-title">Cavalry H50L-2</h3>
                <p className="drone-summary">¿Alguien dijo "Rompimiento de Ventanas"?</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('Cavalry H50L-2', 'Principalmente utilizado para extinguir incendios en edificios urbanos de gran altura o áreas específicas.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H60-4.webp" alt="Drone H60-4" className="drone-image" />
                <h3 className="drone-title">H60-4</h3>
                <p className="drone-summary">Limpieza y pulverización por excelencia.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H60-4', 'Un dron de limpieza con resistencia al agua IP67, peso total de 21 kg, tiempo de vuelo de 18-35 minutos, y capacidad para limpiar ventanas de gran altura, fachadas de edificios, paneles solares y techos. Cuenta con un sistema de pulverización con presión de agua de 8-30 Mpa y distancia de pulverización de 10-20 metros.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            
            <button 
              className="slider-nav-button slider-next" 
              onClick={() => scrollDrones('right')}
              aria-label="Ver más drones"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      
      {/* Modal para información detallada del dron */}
      {modalInfo.isOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal-card">
            <button className="modal-close-btn" onClick={closeModal} aria-label="Cerrar">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="modal-title">{modalInfo.title}</h3>
            <div className="modal-content">
              <p>{modalInfo.content}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal de servicios */}
      {serviceModal.isOpen && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="service-modal">
            <div className="modal-header">
              <h3 className="modal-title">{serviceModal.title}</h3>
              <button className="modal-close" onClick={closeServiceModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-content">
              <p className="modal-description">{serviceModal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
