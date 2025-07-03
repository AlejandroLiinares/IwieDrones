import React from 'react';
import './DroneBanner.css';

const DroneBanner = () => {
  const handleReserveClick = () => {
    const phoneNumber = '56958108312';
    const message = 'Hola! me gustaria Reservar el Dron Spider H-300...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="hero-drone-banner" style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      <div className="drone-banner-container" style={{ width: '100%' }}>
        <div className="drone-banner-image">
          <img src="/H300.png" alt="Dron Spider H-300" />
        </div>
        <div className="drone-banner-content">
          <div className="banner-offer-tag">¡OFERTA DE LANZAMIENTO!</div>
          <h3 className="drone-banner-title">Dron Spider H-300, <br /> <span>100 Litros de Capacidad</span></h3>
          <div className="drone-banner-price">
            <span className="price-amount">$39.900.000 IVA Incluido</span>
          </div>
          <div className="drone-banner-urgency">
            <span className="urgency-text">¡Solo 10 cupos disponibles!</span>
          </div>
          <button className="drone-banner-button" onClick={handleReserveClick}>
            RESERVAR AHORA
          </button>
        </div>
      </div>
    </div>
  );
};

export default DroneBanner;
