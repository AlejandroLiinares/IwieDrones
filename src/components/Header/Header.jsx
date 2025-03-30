import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo" aria-label="Ir a la página de inicio">
            <img src="/ie.png" alt="Iwie Technologies" className="logo-image" />
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
              <Link to="/agricola" className={`nav-link ${location.pathname === '/agricola' ? 'active' : ''}`}>
                Agrícola
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/industrial" className={`nav-link ${location.pathname === '/industrial' ? 'active' : ''}`}>
                Industrial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/capacitaciones" className={`nav-link ${location.pathname === '/capacitaciones' ? 'active' : ''}`}>
                Capacitaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inspecciones" className={`nav-link ${location.pathname === '/inspecciones' ? 'active' : ''}`}>
                Inspecciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/forestal" className={`nav-link ${location.pathname === '/forestal' ? 'active' : ''}`}>
                Forestal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicio-tecnico" className={`nav-link ${location.pathname === '/servicio-tecnico' ? 'active' : ''}`}>
                Servicio Técnico
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