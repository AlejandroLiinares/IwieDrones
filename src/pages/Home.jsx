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
  
  // Función para manejar errores de carga de imágenes
  const handleImageError = (e) => {
    console.log(`Error cargando imagen: ${e.target.src}`);
    e.target.src = 'placeholder.jpg'; // Imagen de respaldo sin barra inicial
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
            <h2 className="section-title">QUIÉNES SOMOS</h2>
            <div className="section-divider"></div>
            <p className="about-description">
              Iwie nace en el año 2022 con el objetivo de brindar servicios con tecnología avanzada en diversas áreas como 
              agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos 
              especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la 
              eficiencia en diversos sectores.
            </p>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar soluciones tecnológicas innovadoras que transformen y optimicen los procesos de nuestros clientes, 
                contribuyendo al desarrollo sostenible y la eficiencia en diversos sectores industriales y agrícolas.
              </p>
            </div>
            <div className="vision-box">
              <h3>Nuestra Visión</h3>
              <p>
                Ser líderes en la implementación de tecnología avanzada en Latinoamérica, reconocidos por nuestra 
                excelencia técnica, innovación constante y compromiso con el desarrollo sostenible.
              </p>
            </div>
          </div>
          
          <div className="values-section">
            <h3 className="values-title">Nuestros Valores</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Innovación</h4>
                <p>Buscamos constantemente nuevas soluciones y tecnologías para ofrecer servicios de vanguardia.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Compromiso</h4>
                <p>Nos comprometemos con la satisfacción de nuestros clientes y la calidad de nuestros servicios.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Sostenibilidad</h4>
                <p>Promovemos prácticas sostenibles que respetan el medio ambiente y optimizan recursos.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Trabajo en Equipo</h4>
                <p>Valoramos la colaboración y el trabajo conjunto para lograr resultados excepcionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
