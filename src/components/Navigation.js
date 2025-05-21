import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [aiMenuOpen, setAiMenuOpen] = useState(false);
    
    return (
        <nav>
            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="ai-dropdown">
                    <span onClick={() => setAiMenuOpen(!aiMenuOpen)}>
                        AI Chat <span className="dropdown-arrow">▼</span>
                    </span>
                    {aiMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/ai-chat" onClick={() => setAiMenuOpen(false)}>Simple Chat</Link></li>
                            <li><Link to="/custom-ai" onClick={() => setAiMenuOpen(false)}>Interactive Chat</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;