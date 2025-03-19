import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
    const totalSlides = 5; // Total de slides
    const nextSlideNumber = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    goToSlide(nextSlideNumber);
  };
  
  // Iniciar el slider automático
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

  // Función para manejar las animaciones basadas en scroll
  useEffect(() => {
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

    // Añadir el listener para el scroll
    window.addEventListener('scroll', handleScrollAnimation);
    // Ejecutar una vez al cargar para elementos ya visibles
    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      observer.disconnect();
    };
  }, []);

  // Efecto de parallax para la sección hero
  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');
      
      if (heroSection) {
        // Aplicar el efecto de parallax al fondo
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

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
            <p className="hero-subtitle">Sé parte de</p>
            <div className="slide-divider"></div>
            <h1 className="hero-title">LA INDUSTRIA DEL<br/>FUTURO</h1>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScgwO1KYwaibQZYrREAYoebI05qgcvgikzRHxhDIQUSMTGnhA/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              APRENDE MÁS
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
          <h2 className="section-title">NUESTROS SERVICIOS</h2>
          
          <div className="services-slider">
            <div className="slider-container">
              {/* Slides */}
              <div className="slides-container">
                {/* INDUSTRIA Slide */}
                <div className="slide" id="slide-1">
                  <div className="slide-image">
                    <img src="/industria.jpg" alt="Servicio de Industria" />
                    <div className="slide-overlay"></div>
                    <div className="slide-text">
                      <h3>INDUSTRIA</h3>
                      <div className="slide-divider"></div>
                      <p>Soluciones industriales con tecnología de drones para optimizar procesos y seguridad en entornos industriales.</p>
                      <a href="/industrial" className="btn-saber-mas">SABER MÁS →</a>
                    </div>
                  </div>
                </div>
                
                {/* TELEVIGILANCIA Slide */}
                <div className="slide" id="slide-2">
                  <div className="slide-image">
                    <img src="/televigilancia.jpg" alt="Servicio de Televigilancia" />
                    <div className="slide-overlay"></div>
                    <div className="slide-text">
                      <h3>TELEVIGILANCIA</h3>
                      <div className="slide-divider"></div>
                      <p>Los drones son una herramienta eficaz contra la delincuencia al vigilar grandes sectores.</p>
                      <a href="/televigilancia" className="btn-saber-mas">SABER MÁS →</a>
                    </div>
                  </div>
                </div>
                
                {/* ENERGÍA Slide */}
                <div className="slide" id="slide-3">
                  <div className="slide-image">
                    <img src="/energia.jpg" alt="Servicio de Energía" />
                    <div className="slide-overlay"></div>
                    <div className="slide-text">
                      <h3>ENERGÍA</h3>
                      <div className="slide-divider"></div>
                      <p>Aplicación al área de energías renovables y convencionales. Revisar las instalaciones, granjas fotovoltaicas, torres de alta tensión, entre otras.</p>
                      <a href="/energia" className="btn-saber-mas">SABER MÁS →</a>
                    </div>
                  </div>
                </div>
                
                {/* CAPACITACIÓN Slide */}
                <div className="slide" id="slide-4">
                  <div className="slide-image">
                    <img src="/capacitacion.jpg" alt="Servicio de Capacitación" />
                    <div className="slide-overlay"></div>
                    <div className="slide-text">
                      <h3>CAPACITACIÓN</h3>
                      <div className="slide-divider"></div>
                      <p>Programas de formación especializada para pilotos de drones y personal técnico.</p>
                      <a href="/capacitacion" className="btn-saber-mas">SABER MÁS →</a>
                    </div>
                  </div>
                </div>
                
                {/* AGRÍCOLA Slide */}
                <div className="slide" id="slide-5">
                  <div className="slide-image">
                    <img src="/agricola.jpg" alt="Servicio Agrícola" />
                    <div className="slide-overlay"></div>
                    <div className="slide-text">
                      <h3>AGRÍCOLA</h3>
                      <div className="slide-divider"></div>
                      <p>Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.</p>
                      <a href="/agricola" className="btn-saber-mas">SABER MÁS →</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slider Navigation Dots */}
              <div className="slider-dots">
                <span className="dot active" data-slide="1"></span>
                <span className="dot" data-slide="2"></span>
                <span className="dot" data-slide="3"></span>
                <span className="dot" data-slide="4"></span>
                <span className="dot" data-slide="5"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef} id="sobre-nosotros">
        <div className="quienes-somos-container">
          <div className="quienes-somos-content">
            <h2>QUIÉNES SOMOS</h2>
            <div className="quienes-somos-divider"></div>
            <p>Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de energía, servicio de televigilancia, asimismo como el área de entretenimiento.</p>
            <a href="#" className="saber-mas-btn">SABER MÁS <span className="arrow-icon">→</span></a>
          </div>
        </div>
      </section>

      {/* Drone Catalog Preview */}
      <section className="drone-catalog" ref={droneRef} id="drones">
        <div className="container">
          <h2 className="section-title">Catálogo de Drones</h2>
          <p className="section-description">Ofrecemos una amplia variedad de drones para diferentes aplicaciones, adaptados a las necesidades específicas de cada sector.</p>
          
          <div className="drones-grid">
            <div className="drone-card" data-delay="0">
              <img src="https://via.placeholder.com/600x400" alt="Drone Agrícola" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Agrícola XF-200</h3>
                <p>Drone especializado para fumigación agrícola con tanque de 20L y autonomía de 30 minutos.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 30 min</span>
                  <span className="spec-tag"><i className="fas fa-tint"></i> 20L</span>
                  <span className="spec-tag"><i className="fas fa-broadcast-tower"></i> 2km</span>
                </div>
              </div>
            </div>
            <div className="drone-card" data-delay="200">
              <img src="https://via.placeholder.com/600x400" alt="Drone Industrial" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Industrial DI-500</h3>
                <p>Diseñado para aplicaciones industriales con resistencia a condiciones adversas.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 45 min</span>
                  <span className="spec-tag"><i className="fas fa-weight-hanging"></i> 5kg</span>
                  <span className="spec-tag"><i className="fas fa-shield-alt"></i> IP65</span>
                </div>
              </div>
            </div>
            <div className="drone-card" data-delay="400">
              <img src="https://via.placeholder.com/600x400" alt="Drone Inspección" className="drone-image" />
              <div className="drone-info">
                <h3>Drone Inspección IS-100</h3>
                <p>Equipado con cámara 4K y sensores térmicos para inspecciones detalladas.</p>
                <div className="drone-specs">
                  <span className="spec-tag"><i className="fas fa-camera"></i> 4K</span>
                  <span className="spec-tag"><i className="fas fa-search-plus"></i> 30x</span>
                  <span className="spec-tag"><i className="fas fa-battery-three-quarters"></i> 35 min</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="view-more-container">
            <Link to="/drones" className="btn btn-primary">Ver Catálogo Completo</Link>
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
