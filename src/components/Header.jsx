import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

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
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      // Añadir o quitar la clase menu-open al body para prevenir scroll
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return newState;
    });
  }, []);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav-menu');
      const button = document.querySelector('.mobile-menu-button');
      
      if (isMenuOpen && nav && !nav.contains(event.target) && !button.contains(event.target)) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
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
        document.body.classList.remove('menu-open');
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
    const path = location.pathname;
    
    const navItems = [
      { path: '/', index: 0 },
      { path: '/agricola', index: 1 },
      { path: '/industrial', index: 2 },
      { path: '/capacitaciones', index: 3 },
      { path: '/inspecciones', index: 4 },
      { path: '/forestal', index: 5 },
      { path: '/servicio-tecnico', index: 6 },
      { path: '/contactanos', index: 7 }
    ];
    
    const currentItem = navItems.find(item => item.path === path);
    if (currentItem) {
      setActiveIndex(currentItem.index);
    } else {
      setActiveIndex(null);
    }
  }, [location]);

  // Función para cerrar el menú móvil al navegar
  const handleNavigation = useCallback((index) => {
    setActiveIndex(index);
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${activeIndex === 0 ? 'active' : ''}`} 
                onClick={() => handleNavigation(0)}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/agricola" 
                className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} 
                onClick={() => handleNavigation(1)}
              >
                Agrícola
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/industrial" 
                className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} 
                onClick={() => handleNavigation(2)}
              >
                Industrial
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/capacitaciones" 
                className={`nav-link ${activeIndex === 3 ? 'active' : ''}`} 
                onClick={() => handleNavigation(3)}
              >
                Capacitaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/inspecciones" 
                className={`nav-link ${activeIndex === 4 ? 'active' : ''}`} 
                onClick={() => handleNavigation(4)}
              >
                Inspecciones
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/forestal" 
                className={`nav-link ${activeIndex === 5 ? 'active' : ''}`} 
                onClick={() => handleNavigation(5)}
              >
                Forestal
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/servicio-tecnico" 
                className={`nav-link ${activeIndex === 6 ? 'active' : ''}`} 
                onClick={() => handleNavigation(6)}
              >
                Servicio Técnico
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="contact-button">
          <Link 
            to="/contactanos" 
            className={`btn-primary ${activeIndex === 7 ? 'active' : ''}`}
            onClick={() => handleNavigation(7)}
          >
            Contáctanos
          </Link>
        </div>
        
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú"
          aria-expanded={isMenuOpen}
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
