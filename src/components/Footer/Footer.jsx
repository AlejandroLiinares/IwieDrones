import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Iwie Technologies. Todos los derechos reservados. Diseñado con <i className="fas fa-heart" style={{color: '#ff6b6b'}}></i> por <a href="#">Iwie Team</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
