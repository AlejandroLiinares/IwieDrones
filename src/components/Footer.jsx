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
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Inicio</Link></li>
            <li><Link to="/agricola"><i className="fas fa-chevron-right"></i> Agrícola</Link></li>
            <li><Link to="/industrial"><i className="fas fa-chevron-right"></i> Industrial</Link></li>
            <li><Link to="/capacitaciones"><i className="fas fa-chevron-right"></i> Capacitaciones</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul className="footer-links">
            <li><Link to="/inspecciones"><i className="fas fa-chevron-right"></i> Inspecciones</Link></li>
            <li><Link to="/forestal"><i className="fas fa-chevron-right"></i> Forestal</Link></li>
            <li><Link to="/servicio-tecnico"><i className="fas fa-chevron-right"></i> Servicio técnico</Link></li>
            <li><Link to="/contactanos"><i className="fas fa-chevron-right"></i> Contáctanos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <address>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="footer-contact-text">
                <p>Email: info@iwiedrones.com</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="footer-contact-text">
                <p>Teléfono: +56 9 1234 5678</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="footer-contact-text">
                <p>Dirección: Av. Principal 123, Santiago, Chile</p>
              </div>
            </div>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Iwiedrones. Todos los derechos reservados. Diseñado con <i className="fas fa-heart" style={{color: '#ff6b6b'}}></i> por <a href="#">Iwiedrones Team</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
