import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/drones.css';
import ServiceSlide from '../components/ServiceSlide';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  // Datos de los slides de servicios
  const serviceSlides = [
    {
      id: 1,
      title: "Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con drones especializados en fumigación, siembra y monitoreo de cultivos.",
      image: "./agricola.jpg",
      link: "/agricola"
    },
    {
      id: 2,
      title: "Industriales",
      description: "Nuestros drones industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "./industria.jpg",
      link: "/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Sistemas de vigilancia aérea con drones para monitoreo de seguridad, control de perímetros y supervisión de eventos.",
      image: "./televigilancia.jpg",
      link: "/services/surveillance"
    },
    {
      id: 4,
      title: "Energía",
      description: "Inspección de infraestructuras energéticas, paneles solares y líneas eléctricas con drones equipados con cámaras térmicas y sensores especializados.",
      image: "./energia.jpg",
      link: "/services/energy"
    },
    {
      id: 5,
      title: "Capacitación y Certificación",
      description: "Programas de formación para pilotos de drones con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "./capacitacion.jpg",
      link: "/services/training"
    }
  ];
  
  // Datos de los slides de quiénes somos
  const aboutSlides = [
    {
      id: 1,
      title: "QUIÉNES SOMOS",
      description: "Iwie Drones nace en el año 2022 con el objetivo de brindar servicios con drones en diversas áreas como agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la eficiencia en diversos sectores.",
      image: "./quienes-somos.jpg"
    }
  ];

  // Reference for the services slider
  const servicesSliderRef = useRef(null);
  
  // Function to handle slide navigation with dynamic slide width calculation
  const handleSlideNavigation = (direction) => {
    const slider = servicesSliderRef.current;
    if (!slider) return;
    
    // Get the actual width of the first slide element for responsive navigation
    const slides = slider.querySelectorAll('.slide');
    if (!slides.length) return;
    
    const slideWidth = slides[0].offsetWidth + 20; // Width + gap
    const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = 'placeholder-drone.png'; // Imagen de respaldo sin barra inicial
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
            aria-label="Video de fondo de Iwie Drones"
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
                <ServiceSlide
                  key={slide.id}
                  id={slide.id}
                  title={slide.title}
                  description={slide.description}
                  image={slide.image}
                  link={slide.link}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="slider-controls">
              <button 
                className="slider-arrow" 
                onClick={() => handleSlideNavigation('left')}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button 
                className="slider-arrow" 
                onClick={() => handleSlideNavigation('right')}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="section-header" style={{ display: 'none' }}>
          <h2 id="about-title">QUIÉNES SOMOS</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-slider">
            <h3 className="slider-title">{aboutSlides[0].title}</h3>
            <div className="slider-divider"></div>
            <p className="slider-description">{aboutSlides[0].description}</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
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
