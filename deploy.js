// Simple script to automate GitHub Pages deployment

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

try {
  // Check if dist directory exists
  if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
    console.log(`${colors.yellow}No dist folder found. Building project first...${colors.reset}`);
    execSync('npm run build', { stdio: 'inherit' });
  }

  // Copy CNAME file to dist if it exists
  if (fs.existsSync(path.resolve(__dirname, 'public/CNAME'))) {
    console.log(`${colors.blue}Copying CNAME file to dist folder...${colors.reset}`);
    fs.copyFileSync(
      path.resolve(__dirname, 'public/CNAME'),
      path.resolve(__dirname, 'dist/CNAME')
    );
  }

  // Deploy to GitHub Pages
  console.log(`${colors.yellow}Deploying to GitHub Pages...${colors.reset}`);
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log(`${colors.green}Successfully deployed to GitHub Pages!${colors.reset}`);
  console.log(`${colors.blue}Your site should be available in a few minutes at the URL specified in your package.json's homepage field.${colors.reset}`);

} catch (error) {
  console.error(`${colors.red}Deployment failed:${colors.reset}`, error);
  process.exit(1);
}
