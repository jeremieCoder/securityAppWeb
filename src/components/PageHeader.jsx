import { Link } from 'react-router-dom';
import '../styles/PageHeader.css';

const PageHeader = ({
  title,
  subtitle,
  backgroundImage = null,
  showBreadcrumb = true,
  breadcrumbItems = [],
  alignment = 'center',
  size = 'medium'
}) => {
  const defaultBg = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=600&fit=crop';

  return (
    <header
      className={`page-header page-header--${size} page-header--${alignment}`}
      style={{ backgroundImage: `url(${backgroundImage || defaultBg})` }}
    >
      <div className="page-header__overlay"></div>

      <div className="page-header__pattern"></div>

      <div className="page-header__content">
        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <nav className="page-header__breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/" className="breadcrumb__item">Accueil</Link>
            {breadcrumbItems.map((item, index) => (
              <span key={index}>
                <span className="breadcrumb__separator">/</span>
                {item.path ? (
                  <Link to={item.path} className="breadcrumb__item">{item.label}</Link>
                ) : (
                  <span className="breadcrumb__item breadcrumb__item--current">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="page-header__title">{title}</h1>

        {subtitle && (
          <p className="page-header__subtitle">{subtitle}</p>
        )}

        <div className="page-header__decoration">
          <span className="decoration__line"></span>
          <span className="decoration__icon">🛡️</span>
          <span className="decoration__line"></span>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
