import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { stats } from '../data/team';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection
        title="Votre sécurité, notre priorité"
        subtitle="SecuGuard vous accompagne avec des solutions de sécurité et de gardiennage sur mesure, adaptées à vos besoins professionnels et personnels."
      />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Nos expertises</span>
            <h2>Des solutions de sécurité sur mesure</h2>
            <p>Découvrez nos services professionnels adaptés à tous vos besoins</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-content">
            <div className="why-us-text">
              <span className="section-badge">Nos atouts</span>
              <h2>Pourquoi choisir SecuGuard ?</h2>
              <ul className="why-us-list">
                <li>
                  <div className="check-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="list-content">
                    <strong>Expertise reconnue</strong>
                    <p>Plus de 15 ans d'expérience dans le secteur de la sécurité privée</p>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="list-content">
                    <strong>Équipes qualifiées</strong>
                    <p>Tous nos agents sont certifiés et formés en continu</p>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="list-content">
                    <strong>Disponibilité 24/7</strong>
                    <p>Une équipe à votre écoute jour et nuit, 365 jours par an</p>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="list-content">
                    <strong>Solutions sur mesure</strong>
                    <p>Des prestations adaptées à vos besoins spécifiques</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-us-image">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=500&fit=crop"
                alt="Équipe de sécurité professionnelle"
                loading="lazy"
              />
              <div className="image-floating-card">
                <div className="floating-icon">🛡️</div>
                <div className="floating-text">
                  <span className="floating-number">500+</span>
                  <span className="floating-label">Clients satisfaits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="container">
          <p className="trusted-text">Ils nous font confiance</p>
          <div className="trusted-logos">
            <div className="logo-item">Entreprise A</div>
            <div className="logo-item">Entreprise B</div>
            <div className="logo-item">Entreprise C</div>
            <div className="logo-item">Entreprise D</div>
            <div className="logo-item">Entreprise E</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">📞</div>
            <h2>Besoin d'une solution de sécurité ?</h2>
            <p>Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts vous répondra sous 24h.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Demander un devis gratuit
              </Link>
              <a href="tel:+33123456789" className="btn btn-outline-light btn-lg">
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
