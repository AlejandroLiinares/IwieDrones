export const CHUNK_NAMES = {
  DRONES: 'drones',
  SERVICES: 'services',
  HOME: 'home',
  AGRICULTURAL: 'agricultural'
};

export const LAZY_LOAD_CONFIG = {
  threshold: 100, // Cargar cuando el elemento esté a 100px de la vista
  rootMargin: '0px 0px 200px 0px', // Margen adicional para cargar antes
  useIntersectionObserver: true,
  scrollPosition: true
};
