import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <PageHeader
        title="Nos services"
        subtitle="Découvrez nos prestations de sécurité professionnelle adaptées à tous vos besoins"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=600&fit=crop"
        breadcrumbItems={[{ label: 'Services' }]}
        size="medium"
      />

      {/* Services Detail */}
      <section className="services-detail">
        <div className="container">
          <div className="services-intro">
            <div className="intro-badge">Expertise</div>
            <h2>Une gamme complète de solutions</h2>
            <p>
              Chez SecuGuard, nous proposons une gamme complète de services de sécurité
              pour répondre aux exigences des entreprises, des collectivités et des particuliers.
              Chaque prestation est personnalisée selon vos besoins spécifiques.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                showDetails={true}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Timeline */}
      <section className="process-section">
        <div className="container">
          <div className="process-wrapper">
            <div className="process-header">
              <span className="section-badge">Méthodologie</span>
              <h2>Notre approche</h2>
              <p>Un processus simple et efficace pour votre sécurité</p>
            </div>

            <div className="timeline-vertical">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">01</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon">🔍</div>
                  <h3>Analyse</h3>
                  <p>Étude approfondie de vos besoins et de votre environnement pour une compréhension complète de vos enjeux de sécurité.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">02</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon">📋</div>
                  <h3>Proposition</h3>
                  <p>Solution personnalisée et devis détaillé sans engagement, adapté à votre budget et à vos contraintes.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">03</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon">🚀</div>
                  <h3>Déploiement</h3>
                  <p>Mise en place rapide et professionnelle de nos équipes qualifiées sur le terrain avec un suivi rigoureux.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">04</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon">📊</div>
                  <h3>Suivi</h3>
                  <p>Reporting régulier, évaluation continue et amélioration permanente de nos services pour votre satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Vous avez un besoin spécifique ?</h2>
              <p>Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution sur mesure</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Demander un devis
                </Link>
                <a href="tel:+33123456789" className="btn btn-outline-light btn-lg">
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
