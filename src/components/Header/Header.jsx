import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
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
              <Link to="/servicios" 
                    className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}
                    onMouseEnter={toggleServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                    onClick={closeServicesDropdown}
              >
                Servicios
              </Link>
              <div className={`services-dropdown ${isServicesDropdownOpen ? 'active' : ''}`}>
                <ul>
                  <li>
                    <Link to="/agricola" onClick={closeServicesDropdown}>Agrícola</Link>
                  </li>
                  <li>
                    <Link to="/industrial" onClick={closeServicesDropdown}>Industrial</Link>
                  </li>
                  <li>
                    <Link to="/capacitaciones" onClick={closeServicesDropdown}>Capacitaciones</Link>
                  </li>
                  <li>
                    <Link to="/inspecciones" onClick={closeServicesDropdown}>Inspecciones</Link>
                  </li>
                  <li>
                    <Link to="/forestal" onClick={closeServicesDropdown}>Forestal</Link>
                  </li>
                  <li>
                    <Link to="/servicio-tecnico" onClick={closeServicesDropdown}>Servicio Técnico</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/drones" className={`nav-link ${location.pathname === '/drones' ? 'active' : ''}`}>
                Drones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactanos" className={`nav-link ${location.pathname === '/contactanos' ? 'active' : ''}`}>
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