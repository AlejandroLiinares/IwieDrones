import React from 'react';

const AboutSlide = ({ id, title, description, image }) => {
  return (
    <div id={`about-slide-${id}`} className="about-slide slider-slide">
      <div className="about-slide-content">
        <div className="about-slide-image slider-image">
          <img src={image} alt={title} />
          <div className="about-slide-overlay slider-overlay"></div>
        </div>
        <div className="about-slide-info">
          <h3 className="slider-title">{title}</h3>
          <div className="slider-divider"></div>
          <p className="slider-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
