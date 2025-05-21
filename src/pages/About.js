import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>About Me</h1>
                <p className="intro">Welcome to my personal website! I'm a passionate web developer dedicated to creating beautiful and functional digital experiences.</p>
            </section>
            
            <section className="about-content">
                <div className="bio">
                    <h2>My Journey</h2>
                    <p>I began my journey in web development several years ago, driven by a passion for combining creativity with technical problem-solving. With experience in both frontend and backend technologies, I enjoy building responsive, user-friendly applications that deliver real value.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and community forums.</p>
                </div>
                
                <div className="skills">
                    <h2>Skills & Expertise</h2>
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Backend Development</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>RESTful APIs</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;