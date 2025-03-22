import React from 'react';
import DroneCardNew from '../components/DroneCardNew';
import DroneModal from '../components/DroneModal';
import useModal from '../hooks/useModal';

/**
 * Componente de demostración para visualizar el nuevo diseño de tarjetas de drones
 * con la imagen arriba y el texto debajo
 */
const DronesCardDemo = () => {
  const { isOpen, modalData, openModal, closeModal } = useModal();
  
  // Datos de ejemplo para las tarjetas
  const demoData = [
    {
      id: 1,
      name: 'Drone Agrícola X1',
      image: '/images/drones/drone1.jpg',
      description: 'Drone especializado para monitoreo de cultivos y fumigación de precisión.',
      specs: ['Autonomía: 45 min', 'Carga útil: 10kg', 'Resistente al agua'],
      badge: 'Nuevo',
      category: 'Agrícola'
    },
    {
      id: 2,
      name: 'Drone Industrial Pro',
      image: '/images/drones/drone2.jpg',
      description: 'Solución robusta para inspecciones industriales en entornos exigentes.',
      specs: ['Autonomía: 35 min', 'Cámara térmica', 'Resistente a impactos'],
      category: 'Industrial'
    },
    {
      id: 3,
      name: 'Drone Cartográfico Z3',
      image: '/images/drones/drone3.jpg',
      description: 'Diseñado para mapeo de terrenos y generación de modelos 3D de alta precisión.',
      specs: ['Autonomía: 60 min', 'Cámara 48MP', 'GPS RTK'],
      badge: 'Destacado',
      category: 'Agrícola'
    }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Demostración de Tarjetas de Drones</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Nuevo diseño con la imagen arriba y el texto debajo, similar al diseño de MacBook Air
      </p>
      
      <div className="drones-grid">
        {demoData.map(drone => (
          <DroneCardNew
            key={drone.id}
            image={drone.image}
            title={drone.name}
            description={drone.description}
            specs={drone.specs}
            badge={drone.badge}
            onClick={() => openModal(drone)}
          />
        ))}
      </div>
      
      {/* Modal para mostrar detalles del drone */}
      <DroneModal
        drone={modalData}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default DronesCardDemo;
