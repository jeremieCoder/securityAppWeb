export const services = [
  {
    id: 1,
    title: "Gardiennage",
    icon: "🛡️",
    description: "Protection permanente de vos locaux par des agents qualifiés. Surveillance 24h/24, contrôle d'accès et rondes régulières.",
    features: [
      "Agents certifiés CQP APS",
      "Surveillance 24h/24, 7j/7",
      "Contrôle d'accès rigoureux",
      "Rondes de sécurité",
      "Rapports d'intervention détaillés"
    ]
  },
  {
    id: 2,
    title: "Surveillance de sites",
    icon: "👁️",
    description: "Monitoring professionnel de vos installations industrielles, commerciales ou résidentielles avec intervention rapide.",
    features: [
      "Surveillance vidéo en temps réel",
      "Détection d'intrusion",
      "Intervention rapide",
      "Protection des périmètres",
      "Gestion des alarmes"
    ]
  },
  {
    id: 3,
    title: "Sécurité événementielle",
    icon: "🎪",
    description: "Sécurisation complète de vos événements : concerts, salons, conférences, mariages et manifestations sportives.",
    features: [
      "Gestion des flux de personnes",
      "Contrôle des accès",
      "Équipes SSIAP",
      "Coordination avec les autorités",
      "Plans d'évacuation"
    ]
  },
  {
    id: 4,
    title: "Protection rapprochée",
    icon: "🤵",
    description: "Service de protection personnalisé pour dirigeants, personnalités et particuliers nécessitant une sécurité renforcée.",
    features: [
      "Agents hautement qualifiés",
      "Analyse des risques",
      "Escorte et accompagnement",
      "Discrétion absolue",
      "Disponibilité 24h/24"
    ]
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === parseInt(id));
};
