import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamMember';
import { team, values, stats } from '../data/team';
import { Link } from 'react-router-dom';
import aboutHeaderImage from '../assets/a4.jpeg';
import companyImage from '../assets/a7.jpeg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <PageHeader
        title="À propos de ABC SECURITY"
        subtitle="Une entreprise de confiance dédiée à votre sécurité depuis plus de 15 ans"
        backgroundImage={aboutHeaderImage}
        breadcrumbItems={[{ label: 'À propos' }]}
        size="medium"
      />

      {/* Company Presentation */}
      <section className="company-section">
        <div className="container">
          <div className="company-content">
            <div className="company-text">
              <span className="section-badge">Notre histoire</span>
              <h2>Plus de 15 ans d'expertise</h2>
              <p>
                Fondée en 2009, ABC SECURITY est née de la volonté de proposer des services
                de sécurité de haute qualité, alliant professionnalisme et proximité client.
              </p>
              <p>
                Au fil des années, nous avons développé notre expertise pour devenir un
                acteur reconnu du secteur de la sécurité privée en France. Notre équipe
                d'agents qualifiés intervient aujourd'hui auprès de plus de 500 clients,
                des PME aux grands groupes internationaux.
              </p>
              <p>
                Notre réussite repose sur des valeurs fortes et un engagement sans faille
                envers la satisfaction de nos clients.
              </p>
            </div>
            <div className="company-image">
              <img
                src={companyImage}
                alt="Équipe ABC SECURITY"
                loading="lazy"
              />
              <div className="image-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">🎯</div>
            <h2>Notre mission</h2>
            <p className="mission-text">
              Assurer la protection des personnes et des biens avec excellence,
              en proposant des solutions de sécurité innovantes et sur mesure,
              tout en maintenant les plus hauts standards éthiques et professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Nos engagements</span>
            <h2>Nos valeurs</h2>
            <p>Les principes qui guident chacune de nos actions</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">0{index + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
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

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">L'équipe</span>
            <h2>Notre équipe dirigeante</h2>
            <p>Des professionnels expérimentés à votre service</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Qualité</span>
            <h2>Nos certifications</h2>
            <p>Des garanties de qualité et de professionnalisme</p>
          </div>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="cert-icon-wrapper">
                <span className="cert-icon">📋</span>
              </div>
              <h4>Autorisation CNAPS</h4>
              <p>Agrément du Conseil National des Activités Privées de Sécurité</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon-wrapper">
                <span className="cert-icon">🏆</span>
              </div>
              <h4>ISO 9001</h4>
              <p>Certification qualité pour nos processus de management</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon-wrapper">
                <span className="cert-icon">🎓</span>
              </div>
              <h4>CQP APS</h4>
              <p>Tous nos agents détiennent le Certificat de Qualification Professionnelle</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon-wrapper">
                <span className="cert-icon">🔥</span>
              </div>
              <h4>SSIAP</h4>
              <p>Agents formés à la sécurité incendie et assistance aux personnes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Rejoignez nos clients satisfaits</h2>
            <p>Découvrez comment ABC SECURITY peut répondre à vos besoins de sécurité</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
