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
        image: "/Dron.png",
        description: "Diseñado para campos pequeños, con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 16L</>,
          <><i className="fas fa-leaf"></i> Uso: Campos pequeños</>,
          <><i className="fas fa-battery-three-quarters"></i> Autonomía: 20min</>
        ],
        badge: "Compacto"
      },
      {
        title: "H40X",
        image: "/Dron.png",
        description: "Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 20L</>,
          <><i className="fas fa-leaf"></i> Uso: Campos medianos</>,
          <><i className="fas fa-battery-three-quarters"></i> Autonomía: 25min</>
        ],
        badge: "Versátil"
      }
    ],
    hercules: [
      {
        title: "H120",
        image: "/Dron.png",
        description: "El Hercules H120 gestiona eficientemente campos grandes con un tanque de pulverización de 52L y una capacidad de dispersión de 60kg, reduciendo significativamente el tiempo y los costos de mano de obra.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 52L</>,
          <><i className="fas fa-weight-hanging"></i> Dispersión: 60kg</>,
          <><i className="fas fa-battery-three-quarters"></i> Autonomía: 30min</>
        ],
        badge: "Alta capacidad"
      },
      {
        title: "H160",
        image: "/Dron.png",
        description: "El H160 es el buque insignia de la serie Hercules. Con una capacidad de pulverización de 72L~82L, ofrece la solución definitiva para la gestión extensiva de cultivos.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 72L~82L</>,
          <><i className="fas fa-leaf"></i> Uso: Gestión extensiva</>,
          <><i className="fas fa-battery-three-quarters"></i> Autonomía: 35min</>
        ],
        badge: "Premium"
      }
    ],
    roarer: [
      {
        title: "H200 Agrícola/Transporte",
        image: "/Dron.png",
        description: "Líder del mercado con su capacidad sin igual, el Roarer H200 redefine las operaciones a gran escala con su capacidad de pulverización de 92L y carga útil de 100kg, sirviendo como el dron todo en uno definitivo para pulverización y transporte.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 92L</>,
          <><i className="fas fa-weight-hanging"></i> Carga útil: 100kg</>
        ]
      },
      {
        title: "H300 Agrícola/Transporte",
        image: "/Dron.png",
        description: "El dron agrícola H300 tiene un diseño de plegado hacia arriba, un tanque de 95L y sensores de carga de grado aeroespacial para mayor precisión. Cuenta con un medidor de flujo de ondas milimétricas y soporta hasta 800A de potencia con disipación de calor.",
        specs: [
          <><i className="fas fa-tint"></i> Capacidad: 95L</>,
          <><i className="fas fa-bolt"></i> Potencia: 800A</>,
          <><i className="fas fa-microchip"></i> Sensores: Grado aeroespacial</>
        ]
      }
    ]
  };
  
  // Datos de drones industriales
  const industrialDrones = {
    roarer: [
      {
        title: "H200 - Extinción de Incendios",
        image: "/Dron.png",
        description: "Especializado en la extinción de incendios, este dron de alta capacidad ofrece soluciones eficientes para situaciones de emergencia en entornos de difícil acceso.",
        specs: [
          <><i className="fas fa-fire-extinguisher"></i> Uso: Extinción de incendios</>,
          <><i className="fas fa-weight-hanging"></i> Alta capacidad</>
        ]
      }
    ]
  };

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
    
    // Actualizar los dots de navegación
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    const activeDot = document.querySelector(`.dot[data-slide="${slideNumber}"]`);
    if (activeDot) {
      activeDot.classList.add('active');
    }
    
    // Actualizar el estado
    setCurrentSlide(slideNumber);
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
    
    // Agregar event listeners para los dots de navegación
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideNumber = parseInt(dot.getAttribute('data-slide'));
        goToSlide(slideNumber);
        
        // Reiniciar el intervalo cuando se hace clic en un dot
        clearInterval(slideInterval.current);
        slideInterval.current = setInterval(() => {
          nextSlide();
        }, 5000);
      });
    });
    
    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(slideInterval.current);
    };
  }, [currentSlide]); // Dependencia del estado currentSlide

  // Efecto para cargar la API de YouTube
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

  // Efecto combinado para manejar animaciones y efectos de scroll
  useEffect(() => {
    // Función para manejar las animaciones basadas en scroll
    const handleScrollAnimation = () => {
      const sections = [
        { ref: servicesRef, className: 'animate-services' },
        { ref: aboutRef, className: 'animate-about' },
        { ref: droneRef, className: 'animate-drones' },
        { ref: ctaRef, className: 'animate-cta' }
      ];

      sections.forEach(({ ref, className }) => {
        if (ref.current) {
          const sectionTop = ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight * 0.8) {
            ref.current.classList.add(className);
          }
        }
      });
    };

    // Función para manejar el efecto parallax
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');
      
      if (heroSection) {
        // Aplicar el efecto de parallax al fondo
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    // Observador de intersección para animaciones más eficientes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    // Seleccionar todos los elementos que queremos animar
    document.querySelectorAll('.service-card, .drone-card, .feature-item').forEach(el => {
      observer.observe(el);
    });

    // Función combinada para manejar todos los efectos de scroll
    const handleScroll = () => {
      handleScrollAnimation();
      handleParallax();
    };

    // Añadir el listener para el scroll
    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al cargar para elementos ya visibles
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const [activeTab, setActiveTab] = useState('agricolas'); // Estado para controlar el tab activo

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
          <div className="slide-divider"></div>
          
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
              
              {/* Slider Navigation Dots */}
              <div className="slider-dots">
                {serviceSlides.map(slide => (
                  <span 
                    key={slide.id}
                    className={`dot ${currentSlide === slide.id ? 'active' : ''}`} 
                    data-slide={slide.id}
                  ></span>
                ))}
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
            
            {/* Serie Bee */}
            <div className="drone-series">
              <h4 className="series-title">Serie Bee</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">H32X</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H32X" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 16L</li>
                      <li>Uso: Campos pequeños</li>
                      <li>Tipo: Pulverización</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">H40X</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H40X" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 20L</li>
                      <li>Uso: Campos medianos</li>
                      <li>Tipo: Pulverización</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serie Hercules */}
            <div className="drone-series">
              <h4 className="series-title">Serie Hercules</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">H120</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H120" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 52L</li>
                      <li>Dispersión: 60kg</li>
                      <li>Uso: Campos grandes</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">H160</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H160" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 72L~82L</li>
                      <li>Uso: Gestión extensiva</li>
                      <li>Tipo: Pulverización</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serie Roarer Agrícola */}
            <div className="drone-series">
              <h4 className="series-title">Serie Roarer</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">H200</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H200" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 92L</li>
                      <li>Carga útil: 100kg</li>
                      <li>Uso: Pulverización/Transporte</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">H300</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H300" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Capacidad: 95L</li>
                      <li>Diseño: Plegado hacia arriba</li>
                      <li>Batería: Inteligente enchufable</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Drones Industriales */}
          <div className={`drone-category ${activeTab === 'industriales' ? 'visible' : 'hidden'}`}>
            <h3 className="category-title">Drones Industriales</h3>
            
            {/* Serie Roarer Industrial */}
            <div className="drone-series">
              <h4 className="series-title">Serie Roarer (Alta Carga)</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">H200 Extinción</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H200 Extinción" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Carga máxima: 100kg</li>
                      <li>Tiempo de vuelo: 40 min</li>
                      <li>Uso: Extinción de incendios</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">H200 Transporte</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H200 Transporte" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Carga máxima: 100kg</li>
                      <li>Tiempo de vuelo: 40 min</li>
                      <li>Uso: Transporte de mercancías</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serie Odin */}
            <div className="drone-series">
              <h4 className="series-title">Serie Odin (Larga Duración)</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">X491</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="X491" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Duración: 120 min</li>
                      <li>Carga máxima: 5kg</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">X441</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="X441" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Duración: 60 min</li>
                      <li>Carga máxima: 2.5kg</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Otras Series */}
            <div className="drone-series">
              <h4 className="series-title">Otras Series</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">Sentinel V13-5</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="Sentinel V13-5" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Duración: 200 min</li>
                      <li>Velocidad: 108 km/h</li>
                      <li>Tipo: VTOL Inspección</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>

                <div className="drone-card-new">
                  <h3 className="drone-title-new">Cavalry H50L-2</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="Cavalry H50L-2" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Uso: Extinción de incendios</li>
                      <li>Función: Rompimiento de ventanas</li>
                      <li>Área: Edificios de gran altura</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serie Cavalry */}
            <div className="drone-series">
              <h4 className="series-title">Serie Cavalry</h4>
              <div className="drones-showcase">
                <div className="drone-card-new">
                  <h3 className="drone-title-new">H60-4</h3>
                  <div className="drone-image-container-new">
                    <img src="/Dron.png" alt="H60-4" className="drone-image-new" />
                  </div>
                  <div className="drone-specs-overlay">
                    <ul className="drone-specs-list">
                      <li>Resistencia: IP67</li>
                      <li>Peso: 21kg</li>
                      <li>Tiempo de vuelo: 18-35 min</li>
                      <li>Uso: Limpieza</li>
                    </ul>
                    <button className="drone-details-btn-new">Ver detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef} id="contactanos">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas un servicio personalizado?</h2>
            <p>Nuestro equipo está listo para asesorarte y ofrecerte la mejor solución para tus necesidades específicas.</p>
            <Link to="/contactanos" className="btn btn-light">
              <i className="fas fa-envelope"></i> Contáctanos Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
