import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="ABC SECURITY" className="logo-img" />
          <span className="logo-text">ABC SECURITY</span>
        </Link>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="navbar-item">
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item navbar-cta">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Devis gratuit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
