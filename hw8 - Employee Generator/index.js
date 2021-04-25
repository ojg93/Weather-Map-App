// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const manager = require('./utils/manager')
const engineer = require('./utils/engineer')
const intern = require('./utils/intern')
const path = require('path')


const answersArray = [];

// TODO: Create an array of questions for user input
function startQuestion() {
  inquirer
    .prompt({
      type: "list",
      message: "Which employee would you like to add?",
      name: "startQuestion",
      choices: ["intern", "manager", "engineer"],
    })
    .then((answer) => {
      if (answer.startQuestion === "intern") {
        askIntern();
      } else if (answer.startQuestion === "manager") {
        askManager();
      } else askEngineer();
    });
}

function endQuestion() {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to add another employee?",
      name: "endQuestion",
      choices: ["yes", "no"],
    })
    .then((answer) => {
      if (answer.endQuestion === "yes") {
        startQuestion();
      } else console.log("this is the end");
    });
}

function askManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Who is the manager of the project?",
        name: "manager",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their office number",
        name: "officenumber",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email",
      },
    ])
    .then((answers) => {
      console.log(answers);
      answersArray.push(answers);
      console.log(answersArray);
      endQuestion();
    });
}

function askIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What school did they attend?",
        name: "school",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their github username? ",
        name: "username",
      },
    ])
    .then((answers) => {
      console.log(answers);
      answersArray.push(answers);
      console.log(answersArray);
      endQuestion();
    });
}

function askEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their github username? ",
        name: "username",
      },
    ])
    .then((answers) => {
      console.log(answers);
      answersArray.push(answers);
      console.log(answersArray);
      endQuestion();
    });
}
// console.log(answersArray);
// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
  fs.writeFile(generateMarkdown, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was created!");
  });
}

// TODO: Create a function to initialize app
// function init() {
//   const userResponse = generateMarkdown.makeHtml();

//   askManager();

//   writeToFile("index.html", userResponse);
// }

// Function call to initialize app
startQuestion();
