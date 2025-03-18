import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // Referencias para animaciones de scroll
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const droneRef = useRef(null);
  const ctaRef = useRef(null);
  const playerRef = useRef(null);

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
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-description">Ofrecemos soluciones especializadas con tecnología de drones para diversos sectores</p>
          <div className="services-grid">
            <div className="service-card" data-delay="0">
              <div className="service-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <div className="service-content">
                <h3>Fumigación Agrícola</h3>
                <p>Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.</p>
                <Link to="/agricola" className="service-link">Ver más</Link>
              </div>
            </div>
            <div className="service-card" data-delay="200">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <div className="service-content">
                <h3>Fumigación Industrial</h3>
                <p>Soluciones de fumigación para instalaciones industriales y comerciales.</p>
                <Link to="/industrial" className="service-link">Ver más</Link>
              </div>
            </div>
            <div className="service-card" data-delay="400">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="service-content">
                <h3>Inspecciones</h3>
                <p>Inspecciones aéreas de infraestructuras, edificios y terrenos con drones equipados con cámaras de alta resolución.</p>
                <Link to="/inspecciones" className="service-link">Ver más</Link>
              </div>
            </div>
            <div className="service-card" data-delay="600">
              <div className="service-icon">
                <i className="fas fa-tree"></i>
              </div>
              <div className="service-content">
                <h3>Forestal</h3>
                <p>Monitoreo y fumigación de áreas forestales para control de plagas y prevención de incendios.</p>
                <Link to="/forestal" className="service-link">Ver más</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef} id="sobre-nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre Iwiedrones</h2>
              <p>Somos una empresa líder en soluciones con drones, especializada en servicios de fumigación agrícola e industrial. Nuestro equipo de profesionales cuenta con amplia experiencia y certificaciones para garantizar un servicio de calidad.</p>
              <p>Utilizamos tecnología de vanguardia para ofrecer soluciones eficientes, seguras y respetuosas con el medio ambiente.</p>
              <div className="about-features">
                <div className="feature-item" data-delay="0">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Equipo certificado y con experiencia</div>
                </div>
                <div className="feature-item" data-delay="150">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Tecnología de última generación</div>
                </div>
                <div className="feature-item" data-delay="300">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Soluciones personalizadas</div>
                </div>
                <div className="feature-item" data-delay="450">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>Compromiso con el medio ambiente</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400" alt="Iwiedrones en acción" />
            </div>
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
