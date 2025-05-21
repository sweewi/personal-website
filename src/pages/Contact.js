import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send the form data to a server
        // For this demo, we'll just show a success message
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! I will get back to you soon.'
        });
    };
    
    return (
        <div className="contact-container">
            <h1>Get In Touch</h1>
            
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Feel free to reach out to me through this form or using the contact details below.</p>
                    
                    <div className="contact-methods">
                        <div className="contact-method">
                            <h3>Email</h3>
                            <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
                        </div>
                        
                        <div className="contact-method">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-container">
                    {formStatus.submitted ? (
                        <div className="form-success">
                            <p>{formStatus.message}</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5" 
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;