import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ServiceSlide from '../components/ServiceSlide';
import AboutSlide from '../components/AboutSlide';
import '../styles/Home.css';

const Home = () => {
  // Referencias para animaciones de scroll
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const dronesRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Estado para el slider de servicios
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideInterval = useRef(null);
  
  // Estado para el slider de quiénes somos
  const [currentAboutSlide, setCurrentAboutSlide] = useState(1);
  
  // Estado para las pestañas
  const [currentTab, setCurrentTab] = useState('agricolas');
  
  // Datos de los drones
  const drones = [
    // Drones Agrícolas
    {
      id: 1,
      category: "Agrícola",
      series: "Serie Bee",
      name: "H32X",
      image: "/H32X.webp",
      description: "Diseñado para campos pequeños, con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto."
    },
    {
      id: 2,
      category: "Agrícola",
      series: "Serie Bee",
      name: "H40X",
      image: "/H40X.webp",
      description: "Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas."
    },
    {
      id: 3,
      category: "Agrícola",
      series: "Serie Hercules",
      name: "H120",
      image: "/H120.webp",
      description: "El Hercules H120 gestiona eficientemente campos grandes con un tanque de pulverización de 52L y una capacidad de dispersión de 60kg, reduciendo significativamente el tiempo y los costos de mano de obra."
    },
    {
      id: 4,
      category: "Agrícola",
      series: "Serie Hercules",
      name: "H160",
      image: "/H160.webp",
      description: "El H160 es el buque insignia de la serie Hercules. Con una capacidad de pulverización de 72L~82L, ofrece la solución definitiva para la gestión extensiva de cultivos."
    },
    {
      id: 5,
      category: "Agrícola",
      series: "Serie Roarer",
      name: "H200 Agrícola/Transporte",
      image: "/H200.png",
      description: "Líder del mercado con su capacidad sin igual, el Roarer H200 redefine las operaciones a gran escala con su capacidad de pulverización de 92L y carga útil de 100kg, sirviendo como el dron todo en uno definitivo para pulverización y transporte."
    },
    {
      id: 6,
      category: "Agrícola",
      series: "Serie Roarer",
      name: "H300 Agrícola/Transporte",
      image: "/H300.png",
      description: "El dron agrícola H300 tiene un diseño de plegado hacia arriba, un tanque de 95L y sensores de carga de grado aeroespacial para mayor precisión. Cuenta con un medidor de flujo de ondas milimétricas y soporta hasta 800A de potencia con disipación de calor. La batería inteligente enchufable es compatible con todas las baterías convencionales."
    },
    
    // Drones Industriales
    {
      id: 7,
      category: "Industrial",
      series: "Serie Roarer (Alta Carga)",
      name: "H200 - Extinción de Incendios",
      image: "/H200-EXTINCION.png",
      description: "Carga máxima: 100 kg | Tiempo de vuelo: 40 minutos. Los drones para extinción de incendios son adecuados para uso en áreas montañosas, pastizales, incendios forestales y para extinguir incendios en áreas urbanas específicas."
    },
    {
      id: 8,
      category: "Industrial",
      series: "Serie Roarer (Alta Carga)",
      name: "H200 - Transporte",
      image: "/H200-TRANSPORTE.webp",
      description: "Carga máxima: 100 kg | Tiempo de vuelo: 40 minutos. Los drones de carga pesada se utilizan ampliamente para el transporte de mercancías, frutas y otros artículos, reduciendo los costos de mano de obra y mejorando la eficiencia del trabajo."
    },
    {
      id: 9,
      category: "Industrial",
      series: "Serie Odin (Larga Duración)",
      name: "X491",
      image: "/X491.webp",
      description: "Duración: 120 min | Carga máxima: 5 kg."
    },
    {
      id: 10,
      category: "Industrial",
      series: "Serie Odin (Larga Duración)",
      name: "X441",
      image: "/X441.webp",
      description: "Duración: 60 min | Carga máxima: 2.5 kg."
    },
    {
      id: 11,
      category: "Industrial",
      series: "Otras Series",
      name: "Sentinel V13-5 VTOL",
      image: "/SENTINEL-V13-5.jpg",
      description: "Duración: 200 min | Velocidad máxima de crucero: 108 km/h."
    },
    {
      id: 12,
      category: "Industrial",
      series: "Otras Series",
      name: "Cavalry H50L-2",
      image: "/CAVALRY-H50L-2.png",
      description: "Principalmente utilizado para extinguir incendios en edificios urbanos de gran altura o áreas específicas."
    },
    {
      id: 13,
      category: "Industrial",
      series: "Serie Cavalry",
      name: "H60-4 Dron de Limpieza",
      image: "/H60-4.webp",
      description: "Un dron de limpieza con resistencia al agua IP67, peso total de 21 kg, tiempo de vuelo de 18-35 minutos, y capacidad para limpiar ventanas de gran altura, fachadas de edificios, paneles solares y techos. Cuenta con un sistema de pulverización con presión de agua de 8-30 Mpa y distancia de pulverización de 10-20 metros."
    }
  ];
  
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Servicios de Drones Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con drones especializados en fumigación, siembra y monitoreo de cultivos.",
      image: "/servicio-agricola.jpg",
      link: "/services/agricultural"
    },
    {
      id: 2,
      title: "Servicios de Drones Industriales",
      description: "Nuestros drones industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "/servicio-industrial.jpg",
      link: "/services/industrial"
    },
    {
      id: 3,
      title: "Capacitación y Certificación",
      description: "Programas de formación para pilotos de drones con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "/servicio-capacitacion.jpg",
      link: "/services/training"
    }
  ];
  
  // Datos de los slides de quiénes somos
  const aboutSlides = [
    {
      id: 1,
      title: "Nuestra Historia",
      description: "Fundada en 2018, IWIE nació con la visión de revolucionar la industria agrícola e industrial en Chile a través de la tecnología de drones. Desde entonces, hemos crecido hasta convertirnos en líderes del sector.",
      image: "/historia.jpg"
    },
    {
      id: 2,
      title: "Nuestra Misión",
      description: "Proporcionar soluciones tecnológicas avanzadas con drones que optimicen procesos, mejoren la seguridad y aumenten la eficiencia en diversos sectores industriales y agrícolas.",
      image: "/mision.jpg"
    },
    {
      id: 3,
      title: "Nuestra Visión",
      description: "Ser líderes en la innovación y aplicación de tecnología de drones en Chile, estableciendo nuevos estándares de calidad y servicio en la industria.",
      image: "/vision.jpg"
    }
  ];
  
  // Función genérica para cambiar de slide
  const changeSlide = (slideNumber, slideType, setCurrentSlide) => {
    // Ocultar todos los slides
    const slides = document.querySelectorAll(`.${slideType}-slide`);
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Mostrar el slide seleccionado
    const selectedSlide = document.querySelector(`#${slideType}-slide-${slideNumber}`);
    if (selectedSlide) {
      selectedSlide.style.display = 'block';
    }
    
    // Actualizar el estado
    setCurrentSlide(slideNumber);
  };

  // Funciones para el slider de servicios
  const goToSlide = (slideNumber) => {
    changeSlide(slideNumber, 'slide', setCurrentSlide);
  };

  const prevSlide = () => {
    const newSlide = currentSlide <= 1 ? serviceSlides.length : currentSlide - 1;
    goToSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = currentSlide >= serviceSlides.length ? 1 : currentSlide + 1;
    goToSlide(newSlide);
  };

  // Funciones para el slider de quiénes somos
  const goToAboutSlide = (slideNumber) => {
    changeSlide(slideNumber, 'about', setCurrentAboutSlide);
  };

  const prevAboutSlide = () => {
    const newSlide = currentAboutSlide <= 1 ? aboutSlides.length : currentAboutSlide - 1;
    goToAboutSlide(newSlide);
  };

  const nextAboutSlide = () => {
    const newSlide = currentAboutSlide >= aboutSlides.length ? 1 : currentAboutSlide + 1;
    goToAboutSlide(newSlide);
  };

  // Iniciar el slider automático
  useEffect(() => {
    // Mostrar el primer slide al cargar
    goToSlide(1);
    
    slideInterval.current = setInterval(() => {
      const nextSlide = currentSlide >= serviceSlides.length ? 1 : currentSlide + 1;
      goToSlide(nextSlide);
    }, 5000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);

  // Inicializar el slider de quiénes somos
  useEffect(() => {
    // Mostrar el primer slide al cargar
    goToAboutSlide(1);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <iframe 
            id="youtube-player" 
            src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=VIDEO_ID&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1" 
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="title-container">
              <h2 className="subtitle">IWIE DRONES</h2>
              <div className="hero-divider"></div>
              <h1 className="hero-title">Soluciones con Drones para Agricultura e Industria</h1>
            </div>
            <p>Tecnología de vanguardia para optimizar procesos y maximizar resultados</p>
            <a href="#services" className="cta-button">Más Información</a>
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
          <div className="section-divider"></div>
          
          <div className="services-content">
            <div className="services-slider">
              <div className="slides-container">
                {serviceSlides.map((slide) => (
                  <ServiceSlide
                    key={slide.id}
                    id={slide.id}
                    image={slide.image}
                    title={slide.title}
                    description={slide.description}
                    link={slide.link}
                  />
                ))}
              </div>
              
              <div className="slider-nav">
                <button className="slider-arrow prev" onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-arrow next" onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              
              <div className="slider-dots">
                {serviceSlides.map((slide) => (
                  <span 
                    key={slide.id} 
                    className={`slider-dot ${slide.id === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(slide.id)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="section-header">
          <h2>QUIÉNES SOMOS</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-slider">
            <div className="slides-container">
              {aboutSlides.map((slide) => (
                <AboutSlide
                  key={slide.id}
                  id={slide.id}
                  image={slide.image}
                  title={slide.title}
                  description={slide.description}
                />
              ))}
            </div>
            <div className="slider-nav">
              <button className="slider-arrow prev" onClick={prevAboutSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="slider-arrow next" onClick={nextAboutSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="slider-dots">
              {aboutSlides.map((slide) => (
                <span 
                  key={slide.id} 
                  className={`slider-dot ${slide.id === currentAboutSlide ? 'active' : ''}`}
                  onClick={() => goToAboutSlide(slide.id)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drones Section */}
      <section id="drones" className="drones-section" ref={dronesRef}>
        <div className="section-header">
          <h2>NUESTROS DRONES</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="drones-container content-container">
          {/* Tabs de categorías */}
          <div className="drones-tabs">
            <button 
              className={`tab-btn ${currentTab === 'agricolas' ? 'active' : ''}`}
              onClick={() => setCurrentTab('agricolas')}
            >
              Drones Agrícolas
            </button>
            <button 
              className={`tab-btn ${currentTab === 'industriales' ? 'active' : ''}`}
              onClick={() => setCurrentTab('industriales')}
            >
              Drones Industriales
            </button>
          </div>
          
          {/* Contenido de pestañas */}
          <div className="tab-content">
            {['agricolas', 'industriales'].map((tabName) => (
              <div key={tabName} className={`tab-pane ${currentTab === tabName ? 'active' : ''}`}>
                <div className="drones-grid">
                  {drones
                    .filter(drone => drone.category === (tabName === 'agricolas' ? "Agrícola" : "Industrial"))
                    .map((drone) => (
                      <div key={drone.id} className="drone-card">
                        <h3 className="drone-name">{drone.name}</h3>
                        <div className="drone-image">
                          <img src={drone.image} alt={drone.name} />
                        </div>
                        <div className="drone-details">
                          <p className="drone-description">{drone.description}</p>
                          <button className="drone-info-btn">Ver detalles</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" ref={ctaRef}>
        <div className="cta-content">
          <h2>¿Listo para optimizar tus procesos?</h2>
          <p>Contáctanos hoy mismo y descubre cómo nuestras soluciones con drones pueden ayudarte</p>
          <Link to="/contact" className="btn-primary">Contáctanos</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
