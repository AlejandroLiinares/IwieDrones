import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Agricultural from './components/Servicios/Agricultural/Agricultural';
import Industrial from './components/Servicios/Industrial/Industrial';
import Capacitaciones from './components/Servicios/Capacitaciones/Capacitaciones';
import Inspecciones from './components/Servicios/Inspecciones/Inspecciones';
import Forestal from './components/Servicios/Forestal/Forestal';
import ServicioTecnico from './components/Servicios/ServicioTecnico/ServicioTecnico';
import Contacto from './components/Contacto/Contacto';
import Drone from './components/Drone/Drone'; // La importación es correcta

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agricultural" element={<Agricultural />} />
                <Route path="/industrial" element={<Industrial />} />
                <Route path="/capacitaciones" element={<Capacitaciones />} />
                <Route path="/inspecciones" element={<Inspecciones />} />
                <Route path="/forestal" element={<Forestal />} />
                <Route path="/servicio-tecnico" element={<ServicioTecnico />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/drones" element={<Drone />} />
                <Route path="/drones/:category" element={<Drone />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;