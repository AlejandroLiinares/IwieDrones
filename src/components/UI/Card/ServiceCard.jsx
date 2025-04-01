import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import Card from './Card';
import './ServiceCard.css';

const ServiceCard = ({ 
  image, 
  title, 
  description, 
  link,
  imageWidth = 280,
  imageHeight = 200,
  className = ''
}) => {
  return (
    <Card className={`service-card ${className}`}>
      <div className="service-card-image-container">
        <OptimizedImage
          src={image}
          alt={`Servicio de ${title}`}
          width={imageWidth}
          height={imageHeight}
          className="service-card-image"
        />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <Link to={link} className="service-card-link">
          Ver más <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
