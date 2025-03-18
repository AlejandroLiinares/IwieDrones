import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import './App.css'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Páginas
import Home from './pages/Home'
import Agricultural from './pages/Agricultural'
import Industrial from './pages/Industrial'
import Training from './pages/Training'
import Inspections from './pages/Inspections'
import Forestry from './pages/Forestry'
import TechnicalService from './pages/TechnicalService'
import Contact from './pages/Contact'

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
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
