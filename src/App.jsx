import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Componentes
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Agricultural from './components/Agricultural/Agricultural'
import Industrial from './components/Industrial/Industrial'
import Training from './components/Entrenamiento/Entrenamiento'
import Inspection from './components/Inspeccion/Inspeccion'
import Forestal from './components/Forestal/Forestal'
import TechnicalService from './components/ServicioTecnico/ServicioTecnico'
import Contact from './components/Contacto/Contacto'
import AboutUs from './components/AcercaDe/AcercaDe'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agricola" element={<Agricultural />} />
            <Route path="/industrial" element={<Industrial />} />
            <Route path="/capacitaciones" element={<Training />} />
            <Route path="/inspecciones" element={<Inspection />} />
            <Route path="/forestal" element={<Forestal />} />
            <Route path="/servicio-tecnico" element={<TechnicalService />} />
            <Route path="/contactanos" element={<Contact />} />
            <Route path="/quienes-somos" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
