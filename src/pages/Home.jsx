import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/temp-fix.css'; // Importar estilos temporales para corregir el filtro oscuro
import '../styles/fix-dividers.css'; // Importar estilos para eliminar divisores decorativos

// Componente para tarjetas de drones
const DroneCard = ({ image, title, description, specs, badge }) => (
  <div className="drone-card">
    <div className="drone-image-container">
      <img src={image} alt={title} className="drone-image" />
      {badge && <span className="drone-badge">{badge}</span>}
    </div>
    <div className="drone-info">
      <h3 className="drone-title">{title}</h3>
      <p className="drone-description">{description}</p>
      <div className="drone-specs">
        {specs.map((spec, index) => (
          <span key={index} className="spec-tag">{spec}</span>
        ))}
      </div>
      <button className="drone-details-btn">Ver detalles <i className="fas fa-arrow-right"></i></button>
    </div>
  </div>
);

// Componente para tarjetas de drones con modal
const DroneCardNew = ({ image, title, description, specs, badge, onClick }) => (
  <div className="drone-card-new" onClick={onClick}>
    <div className="drone-image-container-new">
      <img src={image} alt={title} className="drone-image-new" />
    </div>
    <h3 className="drone-title-new">{title}</h3>
    <p className="drone-description">{description}</p>
    <button className="drone-details-btn-new">Más información</button>
  </div>
);

// Componente Modal para detalles del drone
const DroneModal = ({ drone, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className={`modal-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image">
          <img src={drone.image} alt={drone.title} />
        </div>
        <h2 className="modal-title">{drone.title}</h2>
        <p className="modal-subtitle">{drone.description}</p>
        <div className="modal-specs">
          <h4>Especificaciones técnicas</h4>
          <ul className="modal-specs-list">
            {drone.specs.map((spec, index) => (
              <li key={index}>{typeof spec === 'string' ? spec : spec.props.children[1]}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Componente para slides de servicios
const ServiceSlide = ({ id, image, title, description, link }) => (
  <div className="slide" id={`slide-${id}`}>
    <div className="slide-image">
      <img src={image} alt={`Servicio de ${title}`} />
      <div className="slide-overlay"></div>
      <div className="slide-text">
        <h3>{title}</h3>
        <div className="slide-divider"></div>
        <p>{description}</p>
        <a href={link} className="btn-saber-mas">Saber más →</a>
      </div>
    </div>
  </div>
);

const Home = () => {
  // Referencias para animaciones de scroll
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const droneRef = useRef(null);
  const ctaRef = useRef(null);
  const playerRef = useRef(null);

  // Estado para controlar el slider
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideInterval = useRef(null);
  
  // Datos de servicios para el slider
  const serviceSlides = [
    {
      id: 1,
      title: "Industria",
      image: "/industria.jpg",
      description: "Soluciones industriales con tecnología de drones para optimizar procesos y seguridad en entornos industriales.",
      link: "/industrial"
    },
    {
      id: 2,
      title: "Televigilancia",
      image: "/televigilancia.jpg",
      description: "Los drones son una herramienta eficaz contra la delincuencia al vigilar grandes sectores.",
      link: "/televigilancia"
    },
    {
      id: 3,
      title: "Energía",
      image: "/energia.jpg",
      description: "Aplicación al área de energías renovables y convencionales. Revisar las instalaciones, granjas fotovoltaicas, torres de alta tensión, entre otras.",
      link: "/energia"
    },
    {
      id: 4,
      title: "Capacitación",
      image: "/capacitacion.jpg",
      description: "Programas de formación especializada para pilotos de drones y personal técnico.",
      link: "/capacitacion"
    },
    {
      id: 5,
      title: "Agrícola",
      image: "/agricola.jpg",
      description: "Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.",
      link: "/agricola"
    }
  ];
  
  // Datos de drones agrícolas
  const agriculturalDrones = {
    bee: [
      {
        title: "H32X",
        image: "/H32X.webp",
        description: "Diseñado para campos pequeños, con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.",
        specs: [
          "Capacidad: 16L",
          "Uso: Campos pequeños",
          "Autonomía: 20min"
        ],
        badge: "Compacto"
      },
      {
        title: "H40X",
        image: "/H40X.webp",
        description: "Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.",
        specs: [
          "Capacidad: 20L",
          "Uso: Campos medianos",
          "Autonomía: 25min"
        ],
        badge: "Versátil"
      }
    ],
    hercules: [
      {
        title: "H120",
        image: "/H120.webp",
        description: "El Hercules H120 gestiona eficientemente campos grandes con un tanque de pulverización de 52L y una capacidad de dispersión de 60kg, reduciendo significativamente el tiempo y los costos de mano de obra.",
        specs: [
          "Capacidad: 52L",
          "Dispersión: 60kg",
          "Autonomía: 30min"
        ],
        badge: "Alta capacidad"
      },
      {
        title: "H160",
        image: "/H160.webp",
        description: "El H160 es el buque insignia de la serie Hercules. Con una capacidad de pulverización de 72L~82L, ofrece la solución definitiva para la gestión extensiva de cultivos.",
        specs: [
          "Capacidad: 72L~82L",
          "Uso: Gestión extensiva",
          "Autonomía: 35min"
        ],
        badge: "Premium"
      }
    ],
    roarer: [
      {
        title: "H200 Agrícola/Transporte",
        image: "/H200.png",
        description: "Líder del mercado con su capacidad sin igual, el Roarer H200 redefine las operaciones a gran escala con su capacidad de pulverización de 92L y carga útil de 100kg, sirviendo como el dron todo en uno definitivo para pulverización y transporte.",
        specs: [
          "Capacidad: 92L",
          "Carga útil: 100kg"
        ]
      },
      {
        title: "H300 Agrícola/Transporte",
        image: "/H300.png",
        description: "El dron agrícola H300 tiene un diseño de plegado hacia arriba, un tanque de 95L y sensores de carga de grado aeroespacial para mayor precisión. Cuenta con un medidor de flujo de ondas milimétricas y soporta hasta 800A de potencia con disipación de calor.",
        specs: [
          "Capacidad: 95L",
          "Potencia: 800A",
          "Sensores: Grado aeroespacial"
        ]
      }
    ]
  };
  
  // Datos de drones industriales
  const industrialDrones = {
    roarer: [
      {
        title: "H200 - Extinción de Incendios",
        image: "/H200-EXTINCION.png",
        description: "Especializado en la extinción de incendios, este dron de alta capacidad ofrece soluciones eficientes para situaciones de emergencia en entornos de difícil acceso.",
        specs: [
          "Uso: Extinción de incendios",
          "Alta capacidad"
        ]
      }
    ]
  };

  // Estado para controlar el tab activo
  const [activeTab, setActiveTab] = useState('agricolas');
  
  // Estado para controlar el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  
  // Referencias para el scroll horizontal
  const agricolasRef = useRef(null);
  const industrialesRef = useRef(null);

  // Función para cambiar de slide
  const goToSlide = (slideNumber) => {
    // Ocultar todos los slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
      if (slide.style.opacity === '1') {
        // Animación de salida para el slide actual
        slide.style.opacity = '0';
        slide.style.transform = 'scale(0.95)';
        slide.style.zIndex = '1';
      }
    });
    
    // Mostrar el slide seleccionado
    const selectedSlide = document.getElementById(`slide-${slideNumber}`);
    if (selectedSlide) {
      selectedSlide.style.display = 'block';
      setTimeout(() => {
        // Animación de entrada para el nuevo slide
        selectedSlide.style.opacity = '1';
        selectedSlide.style.transform = 'scale(1)';
        selectedSlide.style.zIndex = '2';
      }, 50);
    }
    
    // Ocultar los slides no seleccionados después de la transición
    setTimeout(() => {
      slides.forEach(slide => {
        if (slide.id !== `slide-${slideNumber}`) {
          slide.style.display = 'none';
        }
      });
    }, 800); // Aumentar el tiempo para coincidir con la duración de la transición CSS
    
    // Actualizar el estado
    setCurrentSlide(slideNumber);
  };
  
  // Función para ir al slide anterior
  const prevSlide = () => {
    const totalSlides = serviceSlides.length;
    const prevSlideNumber = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    goToSlide(prevSlideNumber);
  };
  
  // Función para ir al siguiente slide
  const nextSlide = () => {
    const totalSlides = serviceSlides.length;
    const nextSlideNumber = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    goToSlide(nextSlideNumber);
  };
  
  // Efecto para inicializar el slider y configurar el intervalo
  useEffect(() => {
    // Configurar el intervalo para cambiar automáticamente los slides
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000); // Cambiar cada 5 segundos
    
    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(slideInterval.current);
    };
  }, [currentSlide]); // Dependencia del estado currentSlide

  // Función para cargar la API de YouTube
  useEffect(() => {
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Inicializar el reproductor de YouTube cuando la API esté lista
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '3t-UOzi9j3E',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: '3t-UOzi9j3E',
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
          modestbranding: 1,
          iv_load_policy: 3, // Ocultar anotaciones
          fs: 0, // Deshabilitar pantalla completa
          disablekb: 1, // Deshabilitar controles de teclado
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality('hd1080'); // Forzar calidad 1080p
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Reiniciar el video cuando termina
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      // Limpiar
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Función para manejar el scroll horizontal
  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const container = activeTab === 'agricolas' ? agricolasRef.current : industrialesRef.current;
    if (container) {
      const newPosition = scrollLeft;
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  // Función para abrir el modal con los detalles del drone
  const openDroneModal = (drone) => {
    setSelectedDrone(drone);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  };
  
  // Función para cerrar el modal
  const closeDroneModal = () => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Restaurar scroll del body
  };

  return (
    <div className="home-page" id="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <div id="youtube-player"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="title-container">
              <div className="subtitle">Sé parte de</div>
              <hr className="hero-divider" />
              <h1 className="hero-title">LA INDUSTRIA DEL<br/>FUTURO</h1>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScgwO1KYwaibQZYrREAYoebI05qgcvgikzRHxhDIQUSMTGnhA/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              Aprende más
            </a>
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
      <section className="services" ref={servicesRef} id="servicios">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          
          <div className="services-slider">
            <div className="slider-container">
              {/* Slides */}
              <div className="slides-container">
                {serviceSlides.map(slide => (
                  <ServiceSlide 
                    key={slide.id}
                    id={slide.id}
                    title={slide.title}
                    image={slide.image}
                    description={slide.description}
                    link={slide.link}
                  />
                ))}
              </div>
              
              {/* Navegación */}
              <div className="slider-nav">
                <button 
                  className="prev-slide-btn" 
                  onClick={prevSlide}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  className="next-slide-btn" 
                  onClick={nextSlide}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef} id="sobre-nosotros">
        <div className="quienes-somos-container">
          <div className="quienes-somos-content">
            <h2>Quiénes somos</h2>
            <div className="quienes-somos-divider"></div>
            <p>Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de energía, servicio de televigilancia, asimismo como el área de entretenimiento.</p>
            <a href="#" className="saber-mas-btn">Saber más <span className="arrow-icon">→</span></a>
          </div>
        </div>
      </section>

      {/* Drone Catalog Section */}
      <section className="drone-catalog" ref={droneRef} id="drones">
        <div className="container">
          <h2 className="section-title">NUESTROS DRONES</h2>
          <div className="slide-divider"></div>
          
          {/* Tabs para filtrar categorías */}
          <div className="drone-tabs">
            <button 
              className={`drone-tab ${activeTab === 'agricolas' ? 'active' : ''}`}
              onClick={() => setActiveTab('agricolas')}
            >
              Agrícolas
            </button>
            <button 
              className={`drone-tab ${activeTab === 'industriales' ? 'active' : ''}`}
              onClick={() => setActiveTab('industriales')}
            >
              Industriales
            </button>
          </div>
          
          {/* Drones Agrícolas */}
          <div className={`drone-category ${activeTab === 'agricolas' ? 'visible' : 'hidden'}`}>
            <h3 className="category-title">Drones Agrícolas</h3>
            
            {/* Todos los drones agrícolas en una fila */}
            <div className="drone-series">
              <div className="drones-showcase" ref={agricolasRef} onScroll={handleScroll}>
                {/* H32X */}
                <DroneCardNew
                  image="/H32X.webp"
                  title="H32X"
                  description="Diseñado para campos pequeños, con capacidad de pulverización de 16L."
                  specs={[
                    "Capacidad: 16L",
                    "Uso: Campos pequeños",
                    "Tipo: Pulverización"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.bee[0])}
                />

                {/* H40X */}
                <DroneCardNew
                  image="/H40X.webp"
                  title="H40X"
                  description="Tanque de 20L para cubrir campos más grandes, versátil para diversas aplicaciones."
                  specs={[
                    "Capacidad: 20L",
                    "Uso: Campos medianos",
                    "Tipo: Pulverización"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.bee[1])}
                />

                {/* H120 */}
                <DroneCardNew
                  image="/H120.webp"
                  title="H120"
                  description="Gestiona eficientemente campos grandes con tanque de 52L y dispersión de 60kg."
                  specs={[
                    "Capacidad: 52L",
                    "Dispersión: 60kg",
                    "Autonomía: 30min"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.hercules[0])}
                />

                {/* H160 */}
                <DroneCardNew
                  image="/H160.webp"
                  title="H160"
                  description="Buque insignia con capacidad de pulverización de 72L~82L para gestión extensiva."
                  specs={[
                    "Capacidad: 72L~82L",
                    "Uso: Gestión extensiva",
                    "Autonomía: 35min"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.hercules[1])}
                />

                {/* H200 Agrícola/Transporte */}
                <DroneCardNew
                  image="/H200.png"
                  title="H200 Agrícola/Transporte"
                  description="Líder del mercado con capacidad de pulverización de 92L y carga útil de 100kg."
                  specs={[
                    "Capacidad: 92L",
                    "Carga útil: 100kg"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.roarer[0])}
                />

                {/* H300 Agrícola/Transporte */}
                <DroneCardNew
                  image="/H300.png"
                  title="H300 Agrícola/Transporte"
                  description="Diseño plegable, tanque de 95L y sensores de carga de grado aeroespacial."
                  specs={[
                    "Capacidad: 95L",
                    "Potencia: 800A",
                    "Sensores: Grado aeroespacial"
                  ]}
                  onClick={() => openDroneModal(agriculturalDrones.roarer[1])}
                />
              </div>
            </div>
          </div>
          
          {/* Drones Industriales */}
          <div className={`drone-category ${activeTab === 'industriales' ? 'visible' : 'hidden'}`}>
            <h3 className="category-title">Drones Industriales</h3>
            
            {/* Todos los drones industriales en una fila */}
            <div className="drone-series">
              <div className="drones-showcase" ref={industrialesRef} onScroll={handleScroll}>
                {/* H200 - Extinción de Incendios */}
                <DroneCardNew
                  image="/H200-EXTINCION.png"
                  title="H200 - Extinción de Incendios"
                  description="Especializado en extinción de incendios, ofrece soluciones para situaciones de emergencia."
                  specs={[
                    "Uso: Extinción de incendios",
                    "Alta capacidad"
                  ]}
                  onClick={() => openDroneModal(industrialDrones.roarer[0])}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal para detalles del drone */}
      {selectedDrone && (
        <DroneModal
          drone={selectedDrone}
          isOpen={modalOpen}
          onClose={closeDroneModal}
        />
      )}
    </div>
  );
};

export default Home;
