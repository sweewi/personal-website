# Personal Website

This is a personal website project that showcases my work, skills, and interests. The website is structured to provide a clean and user-friendly experience, built with React and hosted on GitHub Pages.

## Project Structure

The project is organized as follows:

```
personal-website
├── public
│   ├── favicon.ico        # Favicon for the website
│   ├── index.html         # HTML template for React
│   └── robots.txt         # Controls how search engines index the site
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css # CSS styles for the website
│   │   └── js
│   │       └── main.js    # JavaScript code for interactivity
│   ├── components
│   │   ├── Footer.js      # Footer component
│   │   ├── Header.js      # Header component
│   │   └── Navigation.js  # Navigation component
│   ├── pages
│   │   ├── About.js       # About page component
│   │   ├── Contact.js     # Contact page component
│   │   ├── Home.js        # Home page component
│   │   └── Projects.js    # Projects page component
│   └── index.js           # Entry point of the application
├── .gitignore             # Git ignore file
├── package.json           # npm configuration file
├── webpack.config.js      # Webpack configuration
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Deployment to GitHub Pages

1. Make sure the `homepage` field in `package.json` is set to your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/personal-website"
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Custom Domain Setup

If you have a custom domain:

1. Create a file named `CNAME` in the `public` directory with your domain name
2. Configure your domain's DNS settings as per GitHub Pages documentation

4. Start the development server:
   ```
   npm start
   ```

## Features

- Responsive design
- Interactive components
- Easy navigation
- Showcase of projects and skills

## License

This project is licensed under the MIT License.