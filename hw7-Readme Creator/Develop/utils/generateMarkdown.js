// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === true){
    return `[![License: ${license}]`

  } else return ''
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, color) {
  if (license === true){
    return "(https://img.shields.io/badge/License-" + (license) + (color) + ".svg)]"
    
  } else return "" 
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === true){
    return //license section of readme

  } else return ""
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## *TABLE OF CONTENTS*
            
  - [Title](#title) 
  - [Username](#username) 
  - [Description](#description) 
  - [Email](#email) 
  - [installation](#installatio
  - [License](#license)
  - [Usage](#usage) 
  - [Contribution](#contribution)  
  - [Tests](#tests) 

          
  ## TITLE:
  ${data.title}
         
  ## username:
  ${data.username}
         
  ## description:
  ${data.description}
          
  ## email:
  ${data.email}
          
  ## test:
  ${data.test}

  ## license:
  ${data.license}
          
  ## contrbution:
  ${data.contribution}
          
  ## usage:
  ${data.usage}
          
  ## installation: 
  ${data.installation}
`;
}

module.exports = generateMarkdown;
