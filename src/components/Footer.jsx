import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🛡️</span>
              <span className="logo-text">SecuGuard</span>
            </div>
            <p className="footer-description">
              Votre partenaire de confiance pour tous vos besoins en sécurité et gardiennage depuis plus de 15 ans.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Gardiennage</Link></li>
              <li><Link to="/services">Surveillance</Link></li>
              <li><Link to="/services">Événementiel</Link></li>
              <li><Link to="/services">Protection</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Avenue de la Sécurité<br />75001 Paris, France</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+33123456789">01 23 45 67 89</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:contact@secuguard.fr">contact@secuguard.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SecuGuard. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
