import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app-container">
                <Header />
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));