import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDronesDropdownOpen, setIsDronesDropdownOpen] = useState(false);
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
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleDronesDropdown = (e) => {
    e.preventDefault();
    setIsDronesDropdownOpen(!isDronesDropdownOpen);
  };

  const handleServicesDropdownMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleDronesDropdownMouseEnter = () => {
    setIsDronesDropdownOpen(true);
  };

  const handleDronesDropdownMouseLeave = () => {
    setIsDronesDropdownOpen(false);
  };

  const closeDronesDropdown = () => {
    setIsDronesDropdownOpen(false);
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
                    onMouseEnter={toggleServicesDropdown}
                    onClick={(e) => {
                      e.preventDefault();
                      closeServicesDropdown();
                    }}
              >
                Servicios
              </span>
              <div 
                className={`services-dropdown ${isServicesDropdownOpen ? 'active' : ''}`}
                onMouseEnter={handleServicesDropdownMouseEnter}
                onMouseLeave={handleServicesDropdownMouseLeave}
              >
                <ul>
                  <li>
                    <Link to="/agricultural" onClick={closeServicesDropdown}>Agrícola</Link>
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
              <span className={`nav-link ${location.pathname === '/drones' ? 'active' : ''}`}
                    onMouseEnter={toggleDronesDropdown}
                    onClick={(e) => {
                      e.preventDefault();
                      closeDronesDropdown();
                    }}
              >
                Drones
              </span>
              <div 
                className={`services-dropdown ${isDronesDropdownOpen ? 'active' : ''}`}
                onMouseEnter={handleDronesDropdownMouseEnter}
                onMouseLeave={handleDronesDropdownMouseLeave}
              >
                <ul>
                  <li><Link to="/drones" onClick={closeDronesDropdown}>Todos los drones</Link></li>
                  <li><Link to="/drones/agricola" onClick={closeDronesDropdown}>Agrícolas</Link></li>
                  <li><Link to="/drones/industrial" onClick={closeDronesDropdown}>Industriales</Link></li>
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