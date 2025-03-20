import React from 'react';

const DroneCardNew = ({ image, title, description, specs, badge, onClick }) => {
  return (
    <div className="drone-card-new" onClick={onClick}>
      <div className="drone-image-container-new">
        <img src={image} alt={title} className="drone-image-new" />
        {badge && <span className="drone-badge-new">{badge}</span>}
      </div>
      <h3 className="drone-title-new">{title}</h3>
      <p className="drone-description-new">{description}</p>
      <div className="drone-specs-new">
        <ul>
          {specs && specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      <button className="drone-details-btn-new">Más información</button>
    </div>
  );
};

export default DroneCardNew;
