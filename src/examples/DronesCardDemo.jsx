import React from 'react';

/**
 * Versión simplificada del componente de demostración para visualizar tarjetas
 * Esta versión no depende de los componentes eliminados
 */
const TechDemoCard = () => {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Demostración de Tarjetas Tecnológicas</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Esta sección está en proceso de rediseño.
      </p>
      
      <div className="placeholder-message" style={{ 
        textAlign: 'center', 
        padding: '50px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        margin: '0 auto',
        maxWidth: '800px'
      }}>
        <p>Contenido en desarrollo</p>
      </div>
    </div>
  );
};

export default TechDemoCard;