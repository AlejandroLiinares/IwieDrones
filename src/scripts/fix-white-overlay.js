/**
 * Script para eliminar cualquier capa blanca que esté cubriendo la página
 * Este script debe ser importado en el componente principal
 */

// Función para eliminar la capa blanca
const removeWhiteOverlay = () => {
  console.log('Ejecutando script para eliminar capa blanca...');
  
  // Eliminar cualquier elemento que pueda estar causando la capa blanca
  const removeElements = () => {
    // Buscar elementos con posición fija que cubran toda la pantalla
    const overlays = document.querySelectorAll('div[style*="position: fixed"][style*="top: 0"][style*="left: 0"][style*="width: 100%"][style*="height: 100%"]');
    overlays.forEach(overlay => {
      if (!overlay.classList.contains('modal-backdrop') || !overlay.classList.contains('active')) {
        console.log('Eliminando overlay:', overlay);
        overlay.style.display = 'none';
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '-9999';
      }
    });

    // Buscar elementos con nombres comunes de overlay
    const commonOverlays = document.querySelectorAll('[class*="overlay"]:not(.hero-overlay), [class*="backdrop"]:not(.modal-backdrop.active), [class*="cover"], [class*="layer"], [class*="mask"], [class*="screen"]');
    commonOverlays.forEach(overlay => {
      console.log('Eliminando overlay común:', overlay);
      overlay.style.display = 'none';
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      overlay.style.zIndex = '-9999';
    });

    // Buscar elementos con fondo blanco y posición fija
    const whiteBackgrounds = document.querySelectorAll('div[style*="background-color: white"][style*="position: fixed"], div[style*="background-color: #fff"][style*="position: fixed"], div[style*="background-color: #ffffff"][style*="position: fixed"], div[style*="background: white"][style*="position: fixed"], div[style*="background: #fff"][style*="position: fixed"], div[style*="background: #ffffff"][style*="position: fixed"]');
    whiteBackgrounds.forEach(element => {
      if (!element.classList.contains('modal-backdrop') || !element.classList.contains('active')) {
        console.log('Eliminando elemento con fondo blanco:', element);
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '-9999';
      }
    });

    // Asegurar que el contenido principal sea visible
    document.body.style.overflow = 'auto';
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    const root = document.getElementById('root');
    if (root) {
      root.style.visibility = 'visible';
      root.style.opacity = '1';
    }
    
    const homePage = document.querySelector('.home-page');
    if (homePage) {
      homePage.style.visibility = 'visible';
      homePage.style.opacity = '1';
      homePage.style.position = 'relative';
      homePage.style.zIndex = '1';
    }
  };

  // Ejecutar la función inmediatamente
  removeElements();

  // Ejecutar la función cada 100ms durante 5 segundos para asegurar que no aparezca ninguna capa blanca
  let count = 0;
  const interval = setInterval(() => {
    removeElements();
    count++;
    if (count >= 50) { // 5 segundos (50 * 100ms)
      clearInterval(interval);
      console.log('Finalizada la eliminación de capas blancas');
    }
  }, 100);

  // Observar cambios en el DOM para eliminar nuevos elementos que puedan aparecer
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        removeElements();
      }
    });
  });

  // Configurar el observador para que observe todo el documento
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Detener el observador después de 10 segundos
  setTimeout(() => {
    observer.disconnect();
    console.log('Observador desconectado');
  }, 10000);
};

// Ejecutar la función cuando el DOM esté cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeWhiteOverlay);
} else {
  removeWhiteOverlay();
}

// Ejecutar la función cuando la ventana esté completamente cargada
window.addEventListener('load', removeWhiteOverlay);

// Exportar la función para poder usarla en otros archivos
export default removeWhiteOverlay;
