import React from 'react';
import { Link } from 'react-router-dom';
import './Mantencion.css';
import OptimizedImage from '../../UI/OptimizedImage/OptimizedImage';

const Mantencion = () => {
  return (
    <div className="service-page">
      {/* Hero Section - Simplificado con capa oscura */}
      <div style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./mantencion.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
        maxHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 className="responsive-hero-title" style={{
          color: 'white',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          padding: '0 15px',
          maxWidth: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 2
        }}>MANTENCIÓN</h1>
        <h2 style={{
          color: 'white',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          textAlign: 'center',
          marginTop: '1rem',
          fontWeight: 'normal',
          opacity: 0.9,
          zIndex: 2
        }}>Próximamente</h2>
      </div>
    </div>
  );
};

export default Mantencion;