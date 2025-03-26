import { Link } from 'react-router-dom';
import '../styles/Home.css';
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

  // Función para cerrar el modal
  const closeModal = () => {
    setModalInfo({
      ...modalInfo,
      isOpen: false
    });
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  };

  // Cerrar el modal al hacer clic fuera de la tarjeta
  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
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
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                  <img src={slide.image} alt={slide.title} onError={handleImageError} />
                  <a href={slide.link} className="slide-link">Ver más</a>
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
                  
                  // Get the actual width of the first slide element for responsive navigation
                  const slides = slider.querySelectorAll('.slide');
                  if (!slides.length) return;
                  
                  const slideWidth = slides[0].offsetWidth + 20; // Width + gap
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
                  
                  // Get the actual width of the first slide element for responsive navigation
                  const slides = slider.querySelectorAll('.slide');
                  if (!slides.length) return;
                  
                  const slideWidth = slides[0].offsetWidth + 20; // Width + gap
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
            <h2 className="section-title about-title">QUIÉNES SOMOS</h2>
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
          <div className="section-divider"></div>
          
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
                <p className="drone-summary">Descripción breve del H40X.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H40X', 'Información detallada sobre el dron H40X.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H120.webp" alt="Drone H120" className="drone-image" />
                <h3 className="drone-title">H120</h3>
                <p className="drone-summary">Descripción breve del H120.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H120', 'Información detallada sobre el dron H120.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H160.webp" alt="Drone H160" className="drone-image" />
                <h3 className="drone-title">H160</h3>
                <p className="drone-summary">Descripción breve del H160.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H160', 'Información detallada sobre el dron H160.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200.png" alt="Drone H200" className="drone-image" />
                <h3 className="drone-title">H200 Agrícola y Transporte</h3>
                <p className="drone-summary">Descripción breve del H200 Agrícola y Transporte.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Agrícola y Transporte', 'Información detallada sobre el dron H200 Agrícola y Transporte.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H300.png" alt="Drone H300" className="drone-image" />
                <h3 className="drone-title">H300 Agrícola y Transporte</h3>
                <p className="drone-summary">Descripción breve del H300 Agrícola y Transporte.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H300 Agrícola y Transporte', 'Información detallada sobre el dron H300 Agrícola y Transporte.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-EXTINCION.png" alt="Drone H200 Extinción" className="drone-image" />
                <h3 className="drone-title">H200 Extinción de incendios</h3>
                <p className="drone-summary">Descripción breve del H200 Extinción de incendios.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Extinción de incendios', 'Información detallada sobre el dron H200 Extinción de incendios.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H200-TRANSPORTE.webp" alt="Drone H200 Transporte" className="drone-image" />
                <h3 className="drone-title">H200 Transporte</h3>
                <p className="drone-summary">Descripción breve del H200 Transporte.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H200 Transporte', 'Información detallada sobre el dron H200 Transporte.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X491.webp" alt="Drone X491" className="drone-image" />
                <h3 className="drone-title">X491</h3>
                <p className="drone-summary">Descripción breve del X491.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X491', 'Información detallada sobre el dron X491.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/X441.webp" alt="Drone X441" className="drone-image" />
                <h3 className="drone-title">X441</h3>
                <p className="drone-summary">Descripción breve del X441.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('X441', 'Información detallada sobre el dron X441.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/SENTINEL-V13-5.jpg" alt="Drone SENTINEL V13-5" className="drone-image" />
                <h3 className="drone-title">Sentinel V13-5 VTOL</h3>
                <p className="drone-summary">Descripción breve del Sentinel V13-5 VTOL.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('Sentinel V13-5 VTOL', 'Información detallada sobre el dron Sentinel V13-5 VTOL.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/CAVALRY-H50L-2.png" alt="Drone CAVALRY H50L-2" className="drone-image" />
                <h3 className="drone-title">Cavalry H50L-2</h3>
                <p className="drone-summary">Descripción breve del Cavalry H50L-2.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('Cavalry H50L-2', 'Información detallada sobre el dron Cavalry H50L-2.')}
                  aria-label="Ver más información"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="drone-item">
                <img src="/H60-4.webp" alt="Drone H60-4" className="drone-image" />
                <h3 className="drone-title">H60-4</h3>
                <p className="drone-summary">Descripción breve del H60-4.</p>
                <button 
                  className="drone-info-toggle" 
                  onClick={() => openDroneModal('H60-4', 'Información detallada sobre el dron H60-4.')}
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
      
      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para optimizar tus procesos?</h2>
          <p>Contáctanos hoy mismo y descubre cómo nuestras soluciones pueden ayudarte</p>
          <Link to="/contact" className="btn-primary">Contáctanos</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
