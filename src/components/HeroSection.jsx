import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = ({
  title,
  subtitle,
  showCta = true,
  backgroundImage = null,
  overlay = true
}) => {
  return (
    <section
      className={`hero ${overlay ? 'hero-overlay' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {showCta && (
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Demander un devis
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Nos services
            </Link>
          </div>
        )}
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </section>
  );
};

export default HeroSection;
