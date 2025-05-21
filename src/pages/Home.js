import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <h1>Welcome to My Personal Website</h1>
                <p className="subtitle">Web Developer | Designer | Creator</p>
                <a href="#contact" className="cta-button">Get In Touch</a>
            </section>
            
            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Description of project 1 goes here.</p>
                        <a href="/projects" className="project-link">View Details</a>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Description of project 2 goes here.</p>
                        <a href="/projects" className="project-link">View Details</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;