import React, { useState } from 'react';
import './DroneFiltro.css';

const DroneFiltro = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState('todos');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="drone-filters">
            <button 
                className={`drone-filter ${activeFilter === 'todos' ? 'active' : ''}`} 
                onClick={() => handleFilterChange('todos')}
            >
                Todos
            </button>
            <button 
                className={`drone-filter ${activeFilter === 'agricola' ? 'active' : ''}`} 
                onClick={() => handleFilterChange('agricola')}
            >
                Agrícolas
            </button>
            <button 
                className={`drone-filter ${activeFilter === 'industrial' ? 'active' : ''}`} 
                onClick={() => handleFilterChange('industrial')}
            >
                Industriales
            </button>
        </div>
    );
};

export default DroneFiltro;