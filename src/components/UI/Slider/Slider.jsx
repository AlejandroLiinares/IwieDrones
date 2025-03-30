import React, { useRef, useCallback } from 'react';
import './Slider.css';

const Slider = ({ children, className = '' }) => {
  const sliderRef = useRef(null);

  const scrollSlider = useCallback((direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = direction === 'left' ? -slider.offsetWidth : slider.offsetWidth;
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className={`slider-container ${className}`}>
      <button 
        className="slider-nav-button slider-prev" 
        onClick={() => scrollSlider('left')}
        aria-label="Anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div 
        className="slider-content" 
        ref={sliderRef}
      >
        {children}
      </div>
      
      <button 
        className="slider-nav-button slider-next" 
        onClick={() => scrollSlider('right')}
        aria-label="Siguiente"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
