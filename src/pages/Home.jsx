import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ServiceSlide from '../components/ServiceSlide';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
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
      title: "Servicios Agrícolas",
      description: "Ofrecemos soluciones de alta precisión para la agricultura con drones especializados en fumigación, siembra y monitoreo de cultivos.",
      image: "/agricola.jpg",
      link: "/services/agricultural"
    },
    {
      id: 2,
      title: "Servicios Industriales",
      description: "Nuestros drones industriales están equipados con tecnología avanzada para inspecciones, mapeo 3D, termografía y más.",
      image: "/industria.jpg",
      link: "/services/industrial"
    },
    {
      id: 3,
      title: "Televigilancia",
      description: "Sistemas de vigilancia aérea con drones para monitoreo de seguridad, control de perímetros y supervisión de eventos.",
      image: "/televigilancia.jpg",
      link: "/services/surveillance"
    },
    {
      id: 4,
      title: "Servicios de Energía",
      description: "Inspección de infraestructuras energéticas, paneles solares y líneas eléctricas con drones equipados con cámaras térmicas y sensores especializados.",
      image: "/energia.jpg",
      link: "/services/energy"
    },
    {
      id: 5,
      title: "Capacitación y Certificación",
      description: "Programas de formación para pilotos de drones con certificación oficial, adaptados a diferentes niveles y necesidades.",
      image: "/capacitacion.jpg",
      link: "/services/training"
    }
  ];
  
  // Datos de los slides de quiénes somos
  const aboutSlides = [
    {
      id: 1,
      title: "QUIÉNES SOMOS",
      description: "Iwie Drones nace en el año 2022 con el objetivo de brindar servicios con drones en diversas áreas como agricultura, procesos industriales, educación, sistemas de energía, televigilancia y entretenimiento. Nos especializamos en ofrecer soluciones tecnológicas avanzadas que optimizan procesos y mejoran la eficiencia en diversos sectores.",
      image: "/quienes-somos.jpg"
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

  const [activeTab, setActiveTab] = useState("Agrícola");

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = '/placeholder-image.jpg'; // Fallback image
    e.target.alt = 'Imagen no disponible';
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
                src="/douglas.webp" 
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

      {/* Drones Section */}
      <section id="drones" className="drones-section" aria-labelledby="drones-title">
        <div className="container">
          <div className="section-header">
            <h2 id="drones-title">NUESTROS DRONES</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="drones-container content-container">
            {/* Tabs de categorías */}
            <div className="drones-tabs" role="tablist" aria-label="Categorías de drones">
              <button 
                className={`tab-btn ${activeTab === "Agrícola" ? "active" : ""}`}
                onClick={() => setActiveTab("Agrícola")}
                role="tab"
                aria-selected={activeTab === "Agrícola"}
                aria-controls="tab-agricola"
                id="tab-btn-agricola"
              >
                Drones Agrícolas
              </button>
              <button 
                className={`tab-btn ${activeTab === "Industrial" ? "active" : ""}`}
                onClick={() => setActiveTab("Industrial")}
                role="tab"
                aria-selected={activeTab === "Industrial"}
                aria-controls="tab-industrial"
                id="tab-btn-industrial"
              >
                Drones Industriales
              </button>
            </div>
            
            {/* Contenido de pestañas */}
            <div className="tab-content">
              <div 
                className={`tab-pane ${activeTab === "Agrícola" ? "active" : ""}`}
                role="tabpanel"
                id="tab-agricola"
                aria-labelledby="tab-btn-agricola"
              >
                <div className="drones-grid">
                  {drones
                    .filter(drone => drone.category === "Agrícola")
                    .map((drone) => (
                      <div key={drone.id} className="drone-card">
                        <h3 className="drone-name">{drone.name}</h3>
                        <div className="drone-image">
                          <img 
                            src={drone.image} 
                            alt={`Drone ${drone.name}`} 
                            onError={handleImageError}
                          />
                        </div>
                        <div className="drone-details">
                          <p className="drone-description">{drone.description}</p>
                          <Link to={`/drones/${drone.id}`} className="drone-info-btn">Ver detalles</Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div 
                className={`tab-pane ${activeTab === "Industrial" ? "active" : ""}`}
                role="tabpanel"
                id="tab-industrial"
                aria-labelledby="tab-btn-industrial"
              >
                <div className="drones-grid">
                  {drones
                    .filter(drone => drone.category === "Industrial")
                    .map((drone) => (
                      <div key={drone.id} className="drone-card">
                        <h3 className="drone-name">{drone.name}</h3>
                        <div className="drone-image">
                          <img 
                            src={drone.image} 
                            alt={`Drone ${drone.name}`}
                            onError={handleImageError}
                          />
                        </div>
                        <div className="drone-details">
                          <p className="drone-description">{drone.description}</p>
                          <Link to={`/drones/${drone.id}`} className="drone-info-btn">Ver detalles</Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
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
