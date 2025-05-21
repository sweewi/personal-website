// This file contains utility functions that can be imported into React components

// Smooth scrolling for anchor links
export const smoothScrollToAnchor = (event) => {
  if (event.target.hash) {
    event.preventDefault();
    const element = document.querySelector(event.target.hash);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      // Update URL without page reload
      window.history.pushState(null, '', event.target.hash);
    }
  }
};

// Form validation utility
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

// Dark mode toggle
export const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  return isDarkMode;
};

// Check if user prefers dark mode
export const initDarkMode = () => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    return true;
  }
  return false;
};