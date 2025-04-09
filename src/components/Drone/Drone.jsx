import { useState, useCallback, useRef } from 'react';
import './Drone.css';
import DroneFiltro from './DroneFiltro/DroneFiltro';
import OptimizedImage from '../UI/OptimizedImage/OptimizedImage';

function Drone() {
    const dronesSliderRef = useRef(null);
    const [filter, setFilter] = useState('todos');
    
    const scrollSlider = useCallback((ref, direction) => {
        if (ref.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            ref.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, []);

    const openDroneModal = useCallback((title, description) => {
        setModalInfo({ isOpen: true, title, content: description });
    }, []);

    const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });

    const handleModalBackdropClick = () => {
        setModalInfo({ isOpen: false, title: '', content: '' });
    };

    const closeDroneModal = () => {
        setModalInfo({ isOpen: false, title: '', content: '' });
    };

    const drones = [
        { category: 'agricola', image: '/H32X.webp', title: 'H32X', summary: 'Perfecto para campos pequeños.', description: 'Con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.' },
        { category: 'agricola', image: '/H40X.webp', title: 'H40X', summary: 'Tu mejor compañia en campos medianos.', description: 'Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.' },
        { category: 'agricola', image: '/H60-4.webp', title: 'H60-4', summary: 'Ideal para aplicaciones de precisión.', description: 'Diseñado para aplicaciones de precisión, con un tanque de 30L y tecnología avanzada de pulverización para una cobertura óptima.' },
        { category: 'agricola', image: '/H120.webp', title: 'H120', summary: 'Potencia y eficiencia en un solo equipo.', description: 'Con capacidad de 60L, este dron ofrece una combinación perfecta de potencia y eficiencia para grandes extensiones de terreno.' },
        { category: 'agricola', image: '/H160.webp', title: 'H160', summary: 'La solución definitiva para grandes extensiones.', description: 'Nuestro modelo más avanzado para aplicaciones agrícolas, con un tanque de 80L y la última tecnología en sistemas de pulverización de precisión.' },
        { category: 'agricola', image: '/H200.png', title: 'H200', summary: 'Versatilidad y potencia para múltiples aplicaciones.', description: 'Un dron multipropósito con capacidad de carga de hasta 100kg, ideal para aplicaciones agrícolas intensivas y transporte de materiales.' },
        { category: 'industrial', image: '/H200-TRANSPORTE.webp', title: 'H200 Transporte', summary: 'Especializado en logística y transporte.', description: 'Versión especializada del H200 para transporte de cargas, con capacidad de hasta 100kg y sistemas avanzados de navegación y seguridad.' },
        { category: 'industrial', image: '/H200-EXTINCION.png', title: 'H200 Extinción', summary: 'Combate incendios con tecnología avanzada.', description: 'Equipado con sistemas especializados para combate de incendios, puede transportar hasta 100L de agentes extintores y operar en condiciones extremas.' },
        { category: 'industrial', image: '/H300.png', title: 'H300', summary: 'Nuestra solución más avanzada para aplicaciones industriales.', description: 'El modelo más avanzado de nuestra flota, con capacidad de carga de 150kg y autonomía extendida, ideal para aplicaciones industriales complejas.' },
        { category: 'industrial', image: '/X441.webp', title: 'X441', summary: 'Compacto y versátil para inspecciones.', description: 'Dron compacto equipado con cámaras de alta resolución, ideal para inspecciones visuales y termográficas en entornos industriales.' },
        { category: 'industrial', image: '/X491.webp', title: 'X491', summary: 'Mapeo y fotogrametría de alta precisión.', description: 'Especializado en mapeo y fotogrametría, equipado con sensores multiespectrales y sistemas de posicionamiento de alta precisión.' },
        { category: 'industrial', image: '/CAVALRY-H50L-2.png', title: 'CAVALRY H50L-2', summary: 'Vigilancia y seguridad avanzada.', description: 'Diseñado para aplicaciones de vigilancia y seguridad, con cámaras térmicas, zoom óptico y capacidad de vuelo nocturno.' },
        { category: 'industrial', image: '/SENTINEL-V13-5.jpg', title: 'SENTINEL V13-5', summary: 'Monitoreo de infraestructuras críticas.', description: 'Especializado en monitoreo de infraestructuras críticas, con sensores avanzados para detección de anomalías y sistemas de transmisión de datos en tiempo real.' }
    ];

    const filteredDrones = filter === 'todos' 
        ? drones 
        : drones.filter(drone => drone.category === filter);

    return (
        <div className="home-container">
            {/* Hero Section - Simplificado con capa oscura */}
            <div style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/drones.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '500px' /* Asegura una altura mínima en dispositivos pequeños */
            }}>
                <h1 className="responsive-hero-title" style={{
                    color: 'white',
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)', /* Tamaño de fuente responsivo */
                    textAlign: 'center',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                    padding: '0 15px',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>DRONES</h1>
            </div>

            <section className="drones-catalog-section">
                <div className="container">
                    <h2 className="section-title">NUESTROS DRONES</h2>
                    <div className="section-divider"></div>
                    
                    <DroneFiltro onFilterChange={setFilter} />
                    
                    <div className="drones-slider-container">
                        <button 
                            className="slider-nav-button slider-prev" 
                            onClick={() => scrollSlider(dronesSliderRef, 'left')}
                            aria-label="Ver drones anteriores"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        
                        <div className="drones-slider" ref={dronesSliderRef}>
                            {filteredDrones.map((drone, index) => (
                                <div key={index} className="drone-item">
                                    <OptimizedImage
                                        src={drone.image}
                                        alt={`Drone ${drone.title}`}
                                        width={280}
                                        height={200}
                                        className={drone.title === 'H32X' ? 'drone-image h32x-image' : 'drone-image'}
                                    />
                                    <h3 className="drone-title">{drone.title}</h3>
                                    <p className="drone-summary">{drone.summary}</p>
                                    <button 
                                        className="drone-info-toggle" 
                                        onClick={() => openDroneModal(drone.title, drone.description)}
                                        aria-label={`Ver más información sobre ${drone.title}`}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            className="slider-nav-button slider-next" 
                            onClick={() => scrollSlider(dronesSliderRef, 'right')}
                            aria-label="Ver drones siguientes"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            
            {modalInfo.isOpen && (
                <div className="modal-backdrop" onClick={handleModalBackdropClick}>
                    <div className="modal-card">
                        <button className="modal-close" onClick={closeDroneModal} aria-label="Cerrar modal">
                            <i className="fas fa-times"></i>
                        </button>
                        <h3 className="modal-title">{modalInfo.title}</h3>
                        <div className="modal-divider"></div>
                        <p className="modal-content">{modalInfo.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Drone;