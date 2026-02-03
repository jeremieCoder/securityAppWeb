import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (affichage console)
    console.log('=== Nouveau message de contact ===');
    console.log('Nom:', formData.name);
    console.log('Email:', formData.email);
    console.log('Téléphone:', formData.phone);
    console.log('Sujet:', formData.subject);
    console.log('Message:', formData.message);
    console.log('================================');

    // Simulation d'un délai d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset du status après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Contactez-nous"
        subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop"
        breadcrumbItems={[{ label: 'Contact' }]}
        size="medium"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <span className="section-badge">Coordonnées</span>
              <h2>Parlons de votre projet</h2>
              <p className="info-intro">
                N'hésitez pas à nous contacter pour toute demande d'information
                ou pour obtenir un devis personnalisé.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📍</span>
                  </div>
                  <div>
                    <h4>Adresse</h4>
                    <p>123 Avenue de la Sécurité<br />75001 Paris, France</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📞</span>
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <p><a href="tel:+33123456789">01 23 45 67 89</a></p>
                    <p className="info-note">Disponible 24h/24, 7j/7</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">✉️</span>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:contact@secuguard.fr">contact@secuguard.fr</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">🕐</span>
                  </div>
                  <div>
                    <h4>Horaires d'accueil</h4>
                    <p>Lundi - Vendredi : 8h - 19h<br />Samedi : 9h - 12h</p>
                  </div>
                </div>
              </div>

              <div className="emergency-box">
                <div className="emergency-icon">🚨</div>
                <div className="emergency-content">
                  <h4>Urgence sécurité</h4>
                  <p>Pour toute urgence, contactez notre ligne directe :</p>
                  <a href="tel:+33198765432" className="emergency-phone">
                    01 98 76 54 32
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p>Nous vous répondrons dans les plus brefs délais</p>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <span className="alert-icon">✓</span>
                  <div>
                    <strong>Message envoyé !</strong>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01 23 45 67 89"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="gardiennage">Gardiennage</option>
                      <option value="surveillance">Surveillance de sites</option>
                      <option value="evenementiel">Sécurité événementielle</option>
                      <option value="protection">Protection rapprochée</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">📍</span>
              <h3>Notre adresse</h3>
              <p>123 Avenue de la Sécurité, 75001 Paris</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
