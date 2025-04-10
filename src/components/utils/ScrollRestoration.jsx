import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente de utilidad que restaura el scroll cuando cambia la ruta
 * Se debe colocar en App.jsx para que funcione en toda la aplicación
 */
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Restaurar el scroll al cambiar de página
    window.scrollTo(0, 0);
    
    // Asegurarse de que el scroll del body esté habilitado
    document.body.style.overflow = 'auto';
    
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollRestoration;
