import React from 'react';

const Projects = () => {
    // Sample project data - in a real application, this might come from an API or CMS
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A fully responsive e-commerce website with product listings, shopping cart, and checkout functionality.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            imageUrl: 'https://via.placeholder.com/300x200',
            githubUrl: 'https://github.com/yourusername/ecommerce-project',
            liveUrl: 'https://your-ecommerce-site.com'
        },
        {
            id: 2,
            title: 'Weather Dashboard',
            description: 'An interactive weather dashboard that displays current weather conditions and forecasts for any location.',
            technologies: ['JavaScript', 'OpenWeather API', 'HTML/CSS', 'Responsive Design'],
            imageUrl: 'https://via.placeholder.com/300x200',
            githubUrl: 'https://github.com/yourusername/weather-dashboard',
            liveUrl: 'https://your-weather-app.com'
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'A productivity application for managing tasks, deadlines, and projects with user authentication.',
            technologies: ['React', 'Firebase', 'Material UI', 'CSS'],
            imageUrl: 'https://via.placeholder.com/300x200',
            githubUrl: 'https://github.com/yourusername/task-manager',
            liveUrl: 'https://your-task-app.com'
        },
    ];

    return (
        <div className="projects-container">
            <section className="projects-hero">
                <h1>My Projects</h1>
                <p className="subtitle">A selection of my recent work and personal projects</p>
            </section>
            
            <section className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                                    View Code
                                </a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            
            <section className="other-projects">
                <h2>Other Notable Projects</h2>
                <p>Check out more of my work on <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </section>
        </div>
    );
};

export default Projects;