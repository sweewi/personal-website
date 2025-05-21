import React, { useEffect, useState } from 'react';
import { initDarkMode, toggleDarkMode } from '../assets/js/main';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        // Initialize dark mode based on localStorage
        setIsDarkMode(initDarkMode());
    }, []);
    
    const handleToggle = () => {
        const newMode = toggleDarkMode();
        setIsDarkMode(newMode);
    };
    
    return (
        <button 
            className="dark-mode-toggle" 
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default DarkModeToggle;
