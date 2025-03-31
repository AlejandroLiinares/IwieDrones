import { useState, useCallback, useRef } from 'react';

function Drone() {
    const dronesSliderRef = useRef(null);
    
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

    return (
        <>
            <section className="drones-catalog-section" id="nuestros-drones">
                <div className="container">
                    <h2 className="section-title">NUESTROS DRONES</h2>
                    
                    <div className="drones-slider-container">
                        <button 
                            className="slider-nav-button slider-prev" 
                            onClick={() => scrollSlider(dronesSliderRef, 'left')}
                            aria-label="Ver drones anteriores"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        
                        <div className="drones-slider" ref={dronesSliderRef}>
                            <div className="drone-item">
                                <img src="/H32X.webp" alt="Drone H32X" className="drone-image h32x-image" />
                                <h3 className="drone-title">H32X</h3>
                                <p className="drone-summary">Perfecto para campos pequeños.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H32X', 'Con capacidad de pulverización de 16L, ofrece fiabilidad y eficiencia en un formato compacto.')}
                                    aria-label="Ver más información sobre H32X"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H40X.webp" alt="Drone H40X" className="drone-image" />
                                <h3 className="drone-title">H40X</h3>
                                <p className="drone-summary">Tu mejor compañia en campos medianos.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H40X', 'Ofrece un tanque de pulverización de 20L para cubrir campos más grandes, siendo una herramienta versátil para diversas aplicaciones agrícolas.')}
                                    aria-label="Ver más información sobre H40X"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H60-4.webp" alt="Drone H60-4" className="drone-image" />
                                <h3 className="drone-title">H60-4</h3>
                                <p className="drone-summary">Ideal para aplicaciones de precisión.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H60-4', 'Diseñado para aplicaciones de precisión, con un tanque de 30L y tecnología avanzada de pulverización para una cobertura óptima.')}
                                    aria-label="Ver más información sobre H60-4"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H120.webp" alt="Drone H120" className="drone-image" />
                                <h3 className="drone-title">H120</h3>
                                <p className="drone-summary">Potencia y eficiencia en un solo equipo.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H120', 'Con capacidad de 60L, este dron ofrece una combinación perfecta de potencia y eficiencia para grandes extensiones de terreno.')}
                                    aria-label="Ver más información sobre H120"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H160.webp" alt="Drone H160" className="drone-image" />
                                <h3 className="drone-title">H160</h3>
                                <p className="drone-summary">La solución definitiva para grandes extensiones.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H160', 'Nuestro modelo más avanzado para aplicaciones agrícolas, con un tanque de 80L y la última tecnología en sistemas de pulverización de precisión.')}
                                    aria-label="Ver más información sobre H160"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H200.png" alt="Drone H200" className="drone-image" />
                                <h3 className="drone-title">H200</h3>
                                <p className="drone-summary">Versatilidad y potencia para múltiples aplicaciones.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H200', 'Un dron multipropósito con capacidad de carga de hasta 100kg, ideal para aplicaciones agrícolas intensivas y transporte de materiales.')}
                                    aria-label="Ver más información sobre H200"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H200-TRANSPORTE.webp" alt="Drone H200 Transporte" className="drone-image" />
                                <h3 className="drone-title">H200 Transporte</h3>
                                <p className="drone-summary">Especializado en logística y transporte.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H200 Transporte', 'Versión especializada del H200 para transporte de cargas, con capacidad de hasta 100kg y sistemas avanzados de navegación y seguridad.')}
                                    aria-label="Ver más información sobre H200 Transporte"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H200-EXTINCION.png" alt="Drone H200 Extinción" className="drone-image" />
                                <h3 className="drone-title">H200 Extinción</h3>
                                <p className="drone-summary">Combate incendios con tecnología avanzada.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H200 Extinción', 'Equipado con sistemas especializados para combate de incendios, puede transportar hasta 100L de agentes extintores y operar en condiciones extremas.')}
                                    aria-label="Ver más información sobre H200 Extinción"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/H300.png" alt="Drone H300" className="drone-image" />
                                <h3 className="drone-title">H300</h3>
                                <p className="drone-summary">Nuestra solución más avanzada para aplicaciones industriales.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('H300', 'El modelo más avanzado de nuestra flota, con capacidad de carga de 150kg y autonomía extendida, ideal para aplicaciones industriales complejas.')}
                                    aria-label="Ver más información sobre H300"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/X441.webp" alt="Drone X441" className="drone-image" />
                                <h3 className="drone-title">X441</h3>
                                <p className="drone-summary">Compacto y versátil para inspecciones.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('X441', 'Dron compacto equipado con cámaras de alta resolución, ideal para inspecciones visuales y termográficas en entornos industriales.')}
                                    aria-label="Ver más información sobre X441"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/X491.webp" alt="Drone X491" className="drone-image" />
                                <h3 className="drone-title">X491</h3>
                                <p className="drone-summary">Mapeo y fotogrametría de alta precisión.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('X491', 'Especializado en mapeo y fotogrametría, equipado con sensores multiespectrales y sistemas de posicionamiento de alta precisión.')}
                                    aria-label="Ver más información sobre X491"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/CAVALRY-H50L-2.png" alt="Drone CAVALRY H50L-2" className="drone-image" />
                                <h3 className="drone-title">CAVALRY H50L-2</h3>
                                <p className="drone-summary">Vigilancia y seguridad avanzada.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('CAVALRY H50L-2', 'Diseñado para aplicaciones de vigilancia y seguridad, con cámaras térmicas, zoom óptico y capacidad de vuelo nocturno.')}
                                    aria-label="Ver más información sobre CAVALRY H50L-2"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="drone-item">
                                <img src="/SENTINEL-V13-5.jpg" alt="Drone SENTINEL V13-5" className="drone-image" />
                                <h3 className="drone-title">SENTINEL V13-5</h3>
                                <p className="drone-summary">Monitoreo de infraestructuras críticas.</p>
                                <button 
                                    className="drone-info-toggle" 
                                    onClick={() => openDroneModal('SENTINEL V13-5', 'Especializado en monitoreo de infraestructuras críticas, con sensores avanzados para detección de anomalías y sistemas de transmisión de datos en tiempo real.')}
                                    aria-label="Ver más información sobre SENTINEL V13-5"
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
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
        </>
    );
}

export default Drone;