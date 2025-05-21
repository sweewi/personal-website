import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import AIChat from './pages/AIChat';
import CustomAIChat from './pages/CustomAIChat';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/ai-chat" element={<AIChat />} />
                        <Route path="/custom-ai" element={<CustomAIChat />} />
                    </Routes>
                </main>
                <Footer />
                <DarkModeToggle />
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));