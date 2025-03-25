import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Iwie Drones Logo" className="logo-image" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`main-navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === '/agricola' ? 'active' : ''}>
              <Link to="/agricola">Agrícola</Link>
            </li>
            <li className={location.pathname === '/industrial' ? 'active' : ''}>
              <Link to="/industrial">Industrial</Link>
            </li>
            <li className={location.pathname === '/capacitaciones' ? 'active' : ''}>
              <Link to="/capacitaciones">Capacitaciones</Link>
            </li>
            <li className={location.pathname === '/inspecciones' ? 'active' : ''}>
              <Link to="/inspecciones">Inspecciones</Link>
            </li>
            <li className={location.pathname === '/forestal' ? 'active' : ''}>
              <Link to="/forestal">Forestal</Link>
            </li>
            <li className={location.pathname === '/servicio-tecnico' ? 'active' : ''}>
              <Link to="/servicio-tecnico">Servicio Técnico</Link>
            </li>
            <li className={location.pathname === '/contactanos' ? 'active' : ''}>
              <Link to="/contactanos">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;