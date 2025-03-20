import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DroneCardNew from '../components/DroneCardNew';
import DroneModal from '../components/DroneModal';
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
  
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agricultura de Precisión",
      description: "Optimiza tus cultivos con nuestras soluciones de mapeo y análisis.",
      image: "/service1.jpg",
      link: "/services/agriculture"
    },
    {
      id: 2,
      title: "Inspección Industrial",
      description: "Inspecciones seguras y eficientes para infraestructuras críticas.",
      image: "/service2.jpg",
      link: "/services/industrial"
    },
    {
      id: 3,
      title: "Topografía y Cartografía",
      description: "Mapeo preciso del terreno con tecnología de vanguardia.",
      image: "/service3.jpg",
      link: "/services/mapping"
    }
  ];
  
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

  // Estado para controlar el tab activo
  const [activeTab, setActiveTab] = useState('agricolas');
  
  // Estado para el modal
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal con la información del drone
  const openDroneModal = (drone) => {
    setSelectedDrone(drone);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeDroneModal = () => {
    setIsModalOpen(false);
  };

  // Estado para controlar el scroll horizontal
  const agricolasRef = useRef(null);
  const industrialesRef = useRef(null);

  // Función para cambiar de slide
  const goToSlide = (slideNumber) => {
    // Ocultar todos los slides
    const slides = document.querySelectorAll('.service-slide');
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Mostrar el slide seleccionado
    const selectedSlide = document.querySelector(`.service-slide[data-slide="${slideNumber}"]`);
    if (selectedSlide) {
      selectedSlide.classList.add('active');
    }
    
    // Actualizar el estado
    setCurrentSlide(slideNumber);
  };

  // Iniciar el slider automático
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      const nextSlide = currentSlide >= serviceSlides.length ? 1 : currentSlide + 1;
      goToSlide(nextSlide);
    }, 5000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide, serviceSlides.length]);

  // Función para ir al slide anterior
  const prevSlide = () => {
    const newSlide = currentSlide <= 1 ? serviceSlides.length : currentSlide - 1;
    goToSlide(newSlide);
  };

  // Función para ir al slide siguiente
  const nextSlide = () => {
    const newSlide = currentSlide >= serviceSlides.length ? 1 : currentSlide + 1;
    goToSlide(newSlide);
  };
  
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
      <section className="hero-section">
        <div className="hero-content">
          <h1>Soluciones con Drones para Agricultura e Industria</h1>
          <p>Tecnología de vanguardia para optimizar procesos y maximizar resultados</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Contáctanos</Link>
            <a href="#services" className="btn-secondary">Nuestros Servicios</a>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="services-section" ref={servicesRef}>
        <div className="section-header">
          <h2>NUESTROS SERVICIOS</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="services-content">
          <div className="services-slider">
            {serviceSlides.map((slide) => (
              <div 
                key={slide.id} 
                className={`service-slide ${slide.id === currentSlide ? 'active' : ''}`}
                data-slide={slide.id}
              >
                <img src={slide.image} alt={slide.title} className="service-slide-image" />
                <div className="service-slide-overlay">
                  <h3 className="service-slide-title">{slide.title}</h3>
                  <p className="service-slide-description">{slide.description}</p>
                  <Link to={slide.link} className="service-slide-link">Saber más</Link>
                </div>
              </div>
            ))}
            
            <button className="slider-arrow prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
            
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
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="section-header">
          <h2>QUIÉNES SOMOS</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>Somos una empresa líder en soluciones con drones para agricultura e industria, con más de 5 años de experiencia en el mercado.</p>
            <p>Nuestro equipo está formado por profesionales altamente capacitados y certificados, con amplia experiencia en el sector.</p>
            <p>Ofrecemos soluciones personalizadas para cada cliente, adaptándonos a sus necesidades específicas y brindando un servicio de calidad.</p>
          </div>
          
          <div className="about-image">
            <img src="/about-image.jpg" alt="Nuestro equipo" />
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
