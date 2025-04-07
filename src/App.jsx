import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Agricultural from './components/Servicios/Agricultural/Agricultural';
import Mantencion from './components/Servicios/Mantencion/Mantencion';
import Reparacion from './components/Servicios/Reparacion/Reparacion';
import Repuestos from './components/Servicios/Repuestos/Repuestos';
import Drone from './components/Drone/Drone'; // La importación es correcta
import Membresias from './components/Membresias/Membresias';
import Contacto from './components/Contacto/Contacto';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agricultural" element={<Agricultural />} />
                <Route path="/mantencion" element={<Mantencion />} />
                <Route path="/reparacion" element={<Reparacion />} />
                <Route path="/repuestos" element={<Repuestos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/drones" element={<Drone />} />
                <Route path="/drones/:category" element={<Drone />} />
                <Route path="/membresias" element={<Membresias />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;