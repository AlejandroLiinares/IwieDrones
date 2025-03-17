import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <h1>Iwiedrones.com</h1>
          </Link>
        </div>

        <button className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menú principal">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agricola" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Agrícola
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/industrial" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Industrial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/capacitaciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Capacitaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inspecciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Inspecciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/forestal" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Forestal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicio-tecnico" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Servicio técnico
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactanos" className="nav-link contact-link" onClick={() => setIsMenuOpen(false)}>
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
