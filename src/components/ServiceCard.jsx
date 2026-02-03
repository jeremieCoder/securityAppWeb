import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({
  service,
  showDetails = false,
  variant = 'default',
  className = ''
}) => {
  const { id, title, icon, description, features } = service;

  const iconMap = {
    '🛡️': { bg: '#e8f4fd', color: '#1e3a5f' },
    '👁️': { bg: '#fff3e6', color: '#d35400' },
    '🎪': { bg: '#f3e8ff', color: '#8e44ad' },
    '🤵': { bg: '#e8f8f5', color: '#16a085' }
  };

  const iconStyle = iconMap[icon] || { bg: '#e8f4fd', color: '#1e3a5f' };

  return (
    <article className={`service-card service-card--${variant} ${className}`}>
      <div className="service-card__header">
        <div
          className="service-card__icon"
          style={{ backgroundColor: iconStyle.bg }}
        >
          <span className="icon__emoji">{icon}</span>
        </div>
        <div className="service-card__number">0{id}</div>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>

        {showDetails && features && (
          <ul className="service-card__features">
            {features.map((feature, index) => (
              <li key={index} className="feature__item">
                <span className="feature__icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 4.5L6.5 11.5L2.5 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="feature__text">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="service-card__footer">
        <Link to="/services" className="service-card__link">
          <span>En savoir plus</span>
          <svg
            className="link__arrow"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="service-card__glow"></div>
    </article>
  );
};

export default ServiceCard;
