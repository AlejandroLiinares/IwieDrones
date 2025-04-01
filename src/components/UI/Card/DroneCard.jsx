import React from 'react';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import Button from '../Button/Button';
import Card from './Card';
import './DroneCard.css';

const DroneCard = ({ 
  image, 
  title, 
  summary, 
  description, 
  onInfoClick,
  imageWidth = 280,
  imageHeight = 200,
  className = ''
}) => {
  return (
    <Card className={`drone-card ${className}`}>
      <div className="drone-card-image-container">
        <OptimizedImage
          src={image}
          alt={`${title}`}
          width={imageWidth}
          height={imageHeight}
          className="drone-card-image"
        />
      </div>
      <div className="drone-card-content">
        <h3 className="drone-card-title">{title}</h3>
        <p className="drone-card-summary">{summary}</p>
        <button 
          className="drone-card-info-toggle" 
          onClick={() => onInfoClick(title, description)}
          aria-label={`Ver más información sobre ${title}`}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </Card>
  );
};

export default DroneCard;
