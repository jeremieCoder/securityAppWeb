import '../styles/TeamMember.css';

const TeamMember = ({ member }) => {
  const { name, role, image, description, linkedin } = member;

  return (
    <div className="team-member">
      <div className="member-image-container">
        <img
          src={image}
          alt={name}
          className="member-image"
          loading="lazy"
        />
        <div className="member-overlay">
          {linkedin && (
            <a
              href={linkedin}
              className="member-social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${name}`}
            >
              in
            </a>
          )}
        </div>
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
