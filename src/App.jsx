import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/variables.css'
import './styles/base.css'
import './styles/utilities.css'
import './styles/buttons.css'
import './styles/cards.css'
import './styles/sections.css'
import './styles/global.css'
import './App.css'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Agricultural from './components/Agricultural'
import Industrial from './components/Industrial/Industrial'
import Training from './components/Training/Training'
import Inspections from './components/Inspection/Inspection'
import Forestry from './components/Forestry/Forestry'
import TechnicalService from './components/TechnicalService/TechnicalService'
import Contact from './components/Contact'
import About from './components/About'

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
            <Route path="/inspecciones" element={<Inspections />} />
            <Route path="/forestal" element={<Forestry />} />
            <Route path="/servicio-tecnico" element={<TechnicalService />} />
            <Route path="/contactanos" element={<Contact />} />
            <Route path="/quienes-somos" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
