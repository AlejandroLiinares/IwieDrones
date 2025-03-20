import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DroneCardNew from '../components/DroneCardNew';
import DroneModal from '../components/DroneModal';
import ServiceSlide from '../components/ServiceSlide';
import AboutSlide from '../components/AboutSlide'; // Importar el componente AboutSlide
import '../styles/Home.css';

const Home = () => {
  // Referencias para animaciones de scroll
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const droneRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Estado para el slider de servicios
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideInterval = useRef(null);
  
  // Estado para el slider de quiénes somos
  const [currentAboutSlide, setCurrentAboutSlide] = useState(1);
  
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícola",
      description: "Aplicación precisa de productos fitosanitarios con drones especializados para cultivos.",
      image: "/agricola.jpg",
      link: "/agricola"
    },
    {
      id: 2,
      title: "Industria",
      description: "Soluciones industriales con tecnología de drones para optimizar procesos y seguridad en entornos industriales.",
      image: "/industria.jpg",
      link: "/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Los drones son una herramienta eficaz contra la delincuencia al vigilar grandes sectores.",
      image: "/televigilancia.jpg",
      link: "/televigilancia"
    },
    {
      id: 4,
      title: "Energía",
      description: "Aplicación al área de energías renovables y convencionales. Revisar las instalaciones, granjas fotovoltaicas, torres de alta tensión, entre otras.",
      image: "/energia.jpg",
      link: "/energia"
    },
    {
      id: 5,
      title: "Capacitación",
      description: "Programas de formación especializada para pilotos de drones y personal técnico.",
      image: "/capacitacion.jpg",
      link: "/capacitacion"
    }
  ];
  
  // Datos de los slides de quiénes somos
  const aboutSlides = [
    {
      id: 1,
      title: "Quiénes Somos",
      description: "Iwie Drones nace en el año 2022 con la finalidad de involucrarse en el mercado exponencial de la prestación de servicios con drones. Las categorías de desarrollo involucradas abarcan desde el apoyo al área agrícola, procesos industriales, fomento de la educación, sistemas de energía, servicio de televigilancia, asimismo como el área de entretenimiento.",
      image: "/quienes-somos.jpg"
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
  
  // Estado para controlar el tab activo
  const [activeTab, setActiveTab] = useState('agricolas');
  
  // Estado para el modal
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de los drones
  const drones = {
    agricolas: [
      {
        image: "/MG-1P.png",
        title: "MG-1P",
        description: "Drone agrícola de alta eficiencia para fumigación y siembra.",
        specs: [
          "Capacidad: 10L",
          "Autonomía: 20min",
          "Cobertura: 10ha/h"
        ]
      },
      {
        image: "/T30.png",
        title: "T30",
        description: "Drone de alta capacidad para grandes extensiones agrícolas.",
        specs: [
          "Capacidad: 30L",
          "Autonomía: 25min",
          "Cobertura: 16ha/h"
        ],
        badge: "Nuevo"
      },
      {
        image: "/T20P.png",
        title: "T20P",
        description: "Solución intermedia para fumigación de precisión.",
        specs: [
          "Capacidad: 20L",
          "Autonomía: 23min",
          "Cobertura: 13ha/h"
        ]
      },
      {
        image: "/T10.png",
        title: "T10",
        description: "Drone compacto para agricultura de precisión.",
        specs: [
          "Capacidad: 10L",
          "Autonomía: 18min",
          "Cobertura: 8ha/h"
        ]
      },
      {
        image: "/P100-PRO.png",
        title: "P100 Pro",
        description: "Drone profesional para análisis y mapeo agrícola.",
        specs: [
          "Cámara: 100MP",
          "Autonomía: 45min",
          "Cobertura: 200ha/vuelo"
        ],
        badge: "Pro"
      },
      {
        image: "/P50.png",
        title: "P50",
        description: "Solución económica para análisis y mapeo agrícola.",
        specs: [
          "Cámara: 50MP",
          "Autonomía: 35min",
          "Cobertura: 150ha/vuelo"
        ]
      }
    ],
    industriales: [
      {
        image: "/M300-RTK.png",
        title: "M300 RTK",
        description: "Drone industrial de alta resistencia para inspecciones críticas.",
        specs: [
          "Autonomía: 55min",
          "Resistencia: IP45",
          "Sensores: 6 direcciones"
        ],
        badge: "Premium"
      },
      {
        image: "/M30T.png",
        title: "M30T",
        description: "Drone compacto con cámara térmica para inspecciones industriales.",
        specs: [
          "Cámara: 48MP + Térmica",
          "Autonomía: 40min",
          "Resistencia: IP55"
        ]
      },
      {
        image: "/M3E.png",
        title: "M3E",
        description: "Solución ligera para inspecciones industriales básicas.",
        specs: [
          "Cámara: 20MP",
          "Autonomía: 45min",
          "Peso: 920g"
        ]
      },
      {
        image: "/H20T.png",
        title: "H20T - Cámara",
        description: "Cámara avanzada con capacidades térmicas para inspecciones detalladas.",
        specs: [
          "Zoom: 200x",
          "Resolución térmica: 640x512",
          "Campo visual: 40°"
        ]
      },
      {
        image: "/Z30.png",
        title: "Z30 - Cámara",
        description: "Cámara con zoom potente para inspecciones a distancia.",
        specs: [
          "Zoom: 30x",
          "Resolución: 1080p",
          "Estabilización: 3 ejes"
        ]
      },
      {
        image: "/H200-EXTINCION.png",
        title: "H200 - Extinción de Incendios",
        description: "Especializado en extinción de incendios, ofrece soluciones para situaciones de emergencia.",
        specs: [
          "Capacidad: 92L",
          "Uso: Extinción de incendios",
          "Alta capacidad"
        ]
      }
    ]
  };

  // Estado para controlar el scroll horizontal
  const agricolasRef = useRef(null);
  const industrialesRef = useRef(null);

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

  // Función para abrir el modal con la información del drone
  const openDroneModal = (drone) => {
    setSelectedDrone(drone);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeDroneModal = () => {
    setIsModalOpen(false);
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

  // Función para manejar el scroll horizontal
  const handleScroll = (e) => {
    // Implementación del scroll horizontal
  };

  // Función para cambiar el tab activo
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

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

      {/* Catálogo de Drones Section */}
      <section id="drones" className="drones-section" ref={droneRef}>
        <div className="section-header">
          <h2>NUESTROS DRONES</h2>
        </div>
        
        <div className="drones-tabs">
          <button 
            className={`tab-button ${activeTab === 'agricolas' ? 'active' : ''}`}
            onClick={() => changeTab('agricolas')}
          >
            Agrícolas
          </button>
          <button 
            className={`tab-button ${activeTab === 'industriales' ? 'active' : ''}`}
            onClick={() => changeTab('industriales')}
          >
            Industriales
          </button>
        </div>
        
        <div className="drones-content">
          
          {/* Drones Agrícolas */}
          <div className={`drone-category ${activeTab === 'agricolas' ? 'visible' : 'hidden'}`}>
            <h3 className="category-title">Drones Agrícolas</h3>
            
            {/* Todos los drones agrícolas en una fila */}
            <div className="drone-series">
              <div className="drones-showcase" ref={agricolasRef} onScroll={handleScroll}>
                {drones.agricolas.map((drone, index) => (
                  <DroneCardNew
                    key={index}
                    image={drone.image}
                    title={drone.title}
                    description={drone.description}
                    specs={drone.specs}
                    badge={drone.badge}
                    onClick={() => openDroneModal(drone)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Drones Industriales */}
          <div className={`drone-category ${activeTab === 'industriales' ? 'visible' : 'hidden'}`}>
            <h3 className="category-title">Drones Industriales</h3>
            
            {/* Todos los drones industriales en una fila */}
            <div className="drone-series">
              <div className="drones-showcase" ref={industrialesRef} onScroll={handleScroll}>
                {drones.industriales.map((drone, index) => (
                  <DroneCardNew
                    key={index}
                    image={drone.image}
                    title={drone.title}
                    description={drone.description}
                    specs={drone.specs}
                    badge={drone.badge}
                    onClick={() => openDroneModal(drone)}
                  />
                ))}
              </div>
            </div>
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
      
      {/* Modal para detalles del drone */}
      <DroneModal
        drone={selectedDrone}
        isOpen={isModalOpen}
        onClose={closeDroneModal}
      />
    </div>
  );
};

export default Home;
