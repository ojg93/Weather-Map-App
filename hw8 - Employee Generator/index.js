// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions =
  [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a brief desctiption of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'How do use your project? ',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who contributed to your project? ',
      name: 'contribution',
      
    },
    {
      type: 'input',
      message: 'What  license do you use? ',
      name: 'license',
      choices: ('MIT', 'ISC', 'Mozilla')
               
    },
    {
      type: 'input',
      message: 'How do install your project? ',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'How do you test your project? ',
      name: 'test',
      
    }
  ]
       
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  fs.writeFile("README.md", data ,function(err){
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");

  })

}
 
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    
  const userResponse = generateMarkdown(data);
  
  writeToFile("README.md", userResponse);   
  
})   

}


// Function call to initialize app
init();

