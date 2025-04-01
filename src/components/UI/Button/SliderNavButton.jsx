import React from 'react';
import './SliderNavButton.css';

const SliderNavButton = ({ direction = 'right', onClick, className = '', ariaLabel }) => {
  return (
    <button 
      className={`slider-nav-button slider-${direction} ${className}`} 
      onClick={onClick}
      aria-label={ariaLabel || `Navegar ${direction === 'left' ? 'anterior' : 'siguiente'}`}
    >
      <i className={`fas fa-chevron-${direction}`}></i>
    </button>
  );
};

export default SliderNavButton;
