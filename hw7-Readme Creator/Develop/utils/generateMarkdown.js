// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## *TABLE OF CONTENTS*
            
            - [Title](#title) 
            - [Username](#username) 
            - [Description](#description) 
            - [Email](#email) 
            - [installation](#installation)
            - [Usage](#usage) 
            - [Contribution](#contribution)  
            - [Tests](#tests) 

          ${data.title}
          # title:
          
          ${data.username}
          # username:
          
          ${data.description}
          ## description:
          
          ${data.email}
          ## email:
        
          ${data.test}
          # test

          ${data.contribution}
          # contrbution:

          ${data.usage}
          # usage:
          
          ${data.installation}
          # installation: 

`;
}

module.exports = generateMarkdown;
