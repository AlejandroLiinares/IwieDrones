import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Industrial = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1>INDUSTRIAL</h1>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>PROXIMAMENTE</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrial;
