import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Detectar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al inicio para establecer el estado correcto
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manejar el toggle del menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Añadir o quitar la clase menu-open al body para prevenir scroll
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav-menu');
      const button = document.querySelector('.mobile-menu-button');
      
      if (isMenuOpen && nav && !nav.contains(event.target) && !button.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar el menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Deshabilitar el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Determinar la página activa basada en la URL actual
  useEffect(() => {
    const path = window.location.pathname;
    const navItems = [
      { path: '/', index: 0 },
      { path: '/#servicios', index: 1 },
      { path: '/#sobre-nosotros', index: 2 },
      { path: '/#drones', index: 3 },
      { path: '/capacitaciones', index: 4 },
      { path: '/contactanos', index: 5 }
    ];
    
    const currentItem = navItems.find(item => item.path === path);
    if (currentItem) {
      setActiveIndex(currentItem.index);
    } else {
      setActiveIndex(null);
    }
  }, []);

  // Función para el desplazamiento suave
  const handleSmoothScroll = (e, targetId) => {
    // Solo para enlaces internos que comienzan con #
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Cerrar el menú móvil si está abierto
        if (isMenuOpen) {
          toggleMenu();
        }
        
        // Calcular la posición de desplazamiento teniendo en cuenta el header
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Realizar el desplazamiento suave
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={() => setActiveIndex(0)}>
            <img src="/logo.png" alt="Iwiedrones Logo" />
            <span>Iwiedrones</span>
          </Link>
        </div>
        
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú principal"
          aria-expanded={isMenuOpen}
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${activeIndex === 0 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(0);
                  handleSmoothScroll(e, '#home');
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/#servicios" 
                className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(1);
                  handleSmoothScroll(e, '#servicios');
                }}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/#sobre-nosotros" 
                className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(2);
                  handleSmoothScroll(e, '#sobre-nosotros');
                }}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/#drones" 
                className={`nav-link ${activeIndex === 3 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(3);
                  handleSmoothScroll(e, '#drones');
                }}
              >
                Drones
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/capacitaciones" 
                className={`nav-link ${activeIndex === 4 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(4);
                  handleSmoothScroll(e, '#capacitaciones');
                }}
              >
                Capacitaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contactanos" 
                className={`nav-link contact-link ${activeIndex === 5 ? 'active' : ''}`} 
                onClick={(e) => {
                  setActiveIndex(5);
                  handleSmoothScroll(e, '#contactanos');
                }}
              >
                <span>Contáctanos</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
