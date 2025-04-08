import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDronesDropdownOpen, setIsDronesDropdownOpen] = useState(false);
  const [isMembresiaDropdownOpen, setIsMembresiaDropdownOpen] = useState(false);
  const location = useLocation();

  // Controla el scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsDronesDropdownOpen(false);
    setIsMembresiaDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e, type) => {
    e.preventDefault();
    if (type === 'services') {
      setIsDronesDropdownOpen(false);
      setIsMembresiaDropdownOpen(false);
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    } else if (type === 'drones') {
      setIsServicesDropdownOpen(false);
      setIsMembresiaDropdownOpen(false);
      setIsDronesDropdownOpen(!isDronesDropdownOpen);
    } else if (type === 'membresia') {
      setIsServicesDropdownOpen(false);
      setIsDronesDropdownOpen(false);
      setIsMembresiaDropdownOpen(!isMembresiaDropdownOpen);
    }
  };

  const handleDropdownMouseEnter = (type) => {
    if (type === 'services') {
      setIsDronesDropdownOpen(false);
      setIsMembresiaDropdownOpen(false);
      setIsServicesDropdownOpen(true);
    } else if (type === 'drones') {
      setIsServicesDropdownOpen(false);
      setIsMembresiaDropdownOpen(false);
      setIsDronesDropdownOpen(true);
    } else if (type === 'membresia') {
      setIsServicesDropdownOpen(false);
      setIsDronesDropdownOpen(false);
      setIsMembresiaDropdownOpen(true);
    }
  };

  const handleDropdownMouseLeave = (type) => {
    if (type === 'services') {
      setIsServicesDropdownOpen(false);
    } else if (type === 'drones') {
      setIsDronesDropdownOpen(false);
    } else if (type === 'membresia') {
      setIsMembresiaDropdownOpen(false);
    }
  };

  const closeDropdown = (type) => {
    if (type === 'services') {
      setIsServicesDropdownOpen(false);
    } else if (type === 'drones') {
      setIsDronesDropdownOpen(false);
    } else if (type === 'membresia') {
      setIsMembresiaDropdownOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo" aria-label="Ir a la página de inicio">
            <img src="ie.png" alt="Iwie Technologies" className="logo-image" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
              <span className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
                    onMouseEnter={() => handleDropdownMouseEnter('services')}
                    onClick={(e) => toggleDropdown(e, 'services')}
              >
                Servicios
              </span>
              <div 
                className={`services-dropdown ${isServicesDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => handleDropdownMouseEnter('services')}
                onMouseLeave={() => handleDropdownMouseLeave('services')}
              >
                <ul>
                  <li>
                    <Link to="/agricultural" onClick={() => closeDropdown('services')}>Agrícola</Link>
                  </li>
                  <li>
                    <Link to="/mantencion" onClick={() => closeDropdown('services')}>Mantención</Link>
                  </li>
                  <li>
                    <Link to="/reparacion" onClick={() => closeDropdown('services')}>Reparación</Link>
                  </li>
                  <li>
                    <Link to="/repuestos" onClick={() => closeDropdown('services')}>Repuestos</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${location.pathname === '/drones' ? 'active' : ''}`}
                    onMouseEnter={() => handleDropdownMouseEnter('drones')}
                    onClick={(e) => toggleDropdown(e, 'drones')}
              >
                Drones
              </span>
              <div 
                className={`services-dropdown ${isDronesDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => handleDropdownMouseEnter('drones')}
                onMouseLeave={() => handleDropdownMouseLeave('drones')}
              >
                <ul>
                  <li><Link to="/drones" onClick={() => closeDropdown('drones')}>Todos los drones</Link></li>
                  <li><Link to="/drones/agricola" onClick={() => closeDropdown('drones')}>Agrícolas</Link></li>
                  <li><Link to="/drones/industrial" onClick={() => closeDropdown('drones')}>Industriales</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${location.pathname === '/membresias' ? 'active' : ''}`}
                    onMouseEnter={() => handleDropdownMouseEnter('membresia')}
                    onClick={(e) => toggleDropdown(e, 'membresia')}
              >
                Membresía
              </span>
              <div 
                className={`services-dropdown ${isMembresiaDropdownOpen ? 'active' : ''}`}
                onMouseEnter={() => handleDropdownMouseEnter('membresia')}
                onMouseLeave={() => handleDropdownMouseLeave('membresia')}
              >
                <ul>
                  <li><Link to="/membresias" onClick={() => closeDropdown('membresia')}>Operador Full Stack</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}>
                Contáctanos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;