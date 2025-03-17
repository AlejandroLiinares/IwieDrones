import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <h1>Iwiedrones.com</h1>
          </Link>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/agricola" className="nav-link" onClick={() => setIsMenuOpen(false)}>Agrícola</Link>
            </li>
            <li className="nav-item">
              <Link to="/industrial" className="nav-link" onClick={() => setIsMenuOpen(false)}>Industrial</Link>
            </li>
            <li className="nav-item">
              <Link to="/capacitaciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>Capacitaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/inspecciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inspecciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/forestal" className="nav-link" onClick={() => setIsMenuOpen(false)}>Forestal</Link>
            </li>
            <li className="nav-item">
              <Link to="/servicio-tecnico" className="nav-link" onClick={() => setIsMenuOpen(false)}>Servicio técnico</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactanos" className="nav-link contact-link" onClick={() => setIsMenuOpen(false)}>Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
