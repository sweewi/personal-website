#!/usr/bin/env node

// This script helps initialize a GitHub repository for your personal website

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

console.log(`${colors.blue}=== GitHub Repository Setup ===\n${colors.reset}`);
console.log('This script will help you create a GitHub repository for your personal website\n');

// Get GitHub username
rl.question(`${colors.yellow}Enter your GitHub username: ${colors.reset}`, (username) => {
  if (!username) {
    console.log(`${colors.red}Username cannot be empty. Exiting.${colors.reset}`);
    rl.close();
    return;
  }
  
  const repoName = 'personal-website';
  
  // Update package.json with correct homepage URL
  try {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = require(packageJsonPath);
    packageJson.homepage = `https://${username}.github.io/${repoName}`;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`${colors.green}Updated package.json homepage URL${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Failed to update package.json:${colors.reset}`, error);
  }
  
  // Update CNAME file with domain if provided
  rl.question(`${colors.yellow}Do you have a custom domain? (y/n): ${colors.reset}`, (hasDomain) => {
    if (hasDomain.toLowerCase() === 'y') {
      rl.question(`${colors.yellow}Enter your domain name (e.g., example.com): ${colors.reset}`, (domain) => {
        if (domain) {
          try {
            fs.writeFileSync(path.join(__dirname, 'public/CNAME'), domain);
            console.log(`${colors.green}Updated CNAME file with your domain${colors.reset}`);
          } catch (error) {
            console.error(`${colors.red}Failed to update CNAME:${colors.reset}`, error);
          }
        }
        initRepository(username, repoName);
      });
    } else {
      // No custom domain, remove CNAME file if it exists
      try {
        const cnamePath = path.join(__dirname, 'public/CNAME');
        if (fs.existsSync(cnamePath)) {
          fs.unlinkSync(cnamePath);
        }
      } catch (err) {
        // Ignore errors
      }
      initRepository(username, repoName);
    }
  });
});

function initRepository(username, repoName) {
  try {
    // Initialize Git repository
    console.log(`${colors.yellow}Initializing Git repository...${colors.reset}`);
    execSync('git init', { stdio: 'inherit' });
    
    // Add all files
    console.log(`${colors.yellow}Adding files to repository...${colors.reset}`);
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit changes
    console.log(`${colors.yellow}Committing files...${colors.reset}`);
    execSync('git commit -m "Initial commit"', { stdio: 'inherit' });
    
    // Suggest commands to create and push to GitHub
    console.log(`\n${colors.green}Local repository initialized!${colors.reset}`);
    console.log(`\n${colors.blue}To create and push to a GitHub repository, run these commands:${colors.reset}`);
    console.log(`\n1. Create a new repository at https://github.com/new`);
    console.log(`   Name: ${repoName}`);
    console.log(`   Make sure not to initialize it with README, .gitignore, or license`);
    
    console.log(`\n2. Link and push to the remote repository:`);
    console.log(`   git remote add origin https://github.com/${username}/${repoName}.git`);
    console.log(`   git branch -M main`);
    console.log(`   git push -u origin main`);
    
    console.log(`\n3. Deploy your website:`);
    console.log(`   npm run deploy`);
    
    console.log(`\n${colors.green}Your website will be available at:${colors.reset}`);
    
    // Check if custom domain is set
    const cnamePath = path.join(__dirname, 'public/CNAME');
    if (fs.existsSync(cnamePath)) {
      const domain = fs.readFileSync(cnamePath, 'utf8').trim();
      console.log(`   ${domain}`);
    } else {
      console.log(`   https://${username}.github.io/${repoName}`);
    }
    
    rl.close();
  } catch (error) {
    console.error(`${colors.red}Error initializing repository:${colors.reset}`, error);
    rl.close();
  }
}
