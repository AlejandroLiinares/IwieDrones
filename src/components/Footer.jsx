import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Iwiedrones</h3>
          <p>Soluciones con drones para agricultura, industria, inspecciones y más.</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/agricola">Agrícola</Link></li>
            <li><Link to="/industrial">Industrial</Link></li>
            <li><Link to="/capacitaciones">Capacitaciones</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul className="footer-links">
            <li><Link to="/inspecciones">Inspecciones</Link></li>
            <li><Link to="/forestal">Forestal</Link></li>
            <li><Link to="/servicio-tecnico">Servicio técnico</Link></li>
            <li><Link to="/contactanos">Contáctanos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <address>
            <p>Email: info@iwiedrones.com</p>
            <p>Teléfono: +56 9 1234 5678</p>
            <p>Dirección: Av. Principal 123, Santiago, Chile</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Iwiedrones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
