import { useState, useCallback, useEffect } from 'react';

/**
 * Hook personalizado para manejar el estado y la lógica de los modales
 * @returns {Object} Objeto con el estado y las funciones para abrir y cerrar el modal
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [animationState, setAnimationState] = useState('closed'); // 'closed', 'opening', 'open', 'closing'

  /**
   * Abre el modal y establece los datos a mostrar
   * @param {Object} data - Datos a mostrar en el modal
   */
  const openModal = useCallback((data) => {
    setModalData(data);
    setIsOpen(true);
    setAnimationState('opening');
    
    // Prevenir el desplazamiento del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }, []);

  /**
   * Cierra el modal y limpia los datos
   */
  const closeModal = useCallback(() => {
    setAnimationState('closing');
    
    // Restaurar el desplazamiento del body cuando el modal se cierra
    document.body.style.overflow = 'auto';
    
    // Esperar a que termine la animación antes de cerrar completamente
    setTimeout(() => {
      setIsOpen(false);
      setAnimationState('closed');
      
      // Limpiar los datos después de un breve retraso
      setTimeout(() => {
        setModalData(null);
      }, 100);
    }, 300);
  }, []);

  // Manejar el evento de escape para cerrar el modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, closeModal]);

  return {
    isOpen,
    modalData,
    animationState,
    openModal,
    closeModal
  };
};

export default useModal;
