//TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const path = require("path");
const render = require("./utils/htmlRender");
const outputDir = path.resolve(__dirname, "Output");
const outputPath = path.join(outputDir, "layout.html");


const groupMembers = [];
const idArray = [];


function appMenu() {
  function askManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Who is the manager of the project?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is their ID number?",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is their office number",
          name: "managerOfficeNumber",
        },
        {
          type: "input",
          message: "What is their email address?",
          name: "managerEmail",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerOfficeNumber,
          answers.managerEmail
        );
        console.log(answers);
        groupMembers.push(manager);
        idArray.push(answers.managerId);
        startQuestion();
        // endQuestion();
      });
  }
  function startQuestion() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee would you like to add?",
          name: "startQuestion",
          choices: ["Intern", "Engineer", "Exit"],
        },
      ])
      .then((answers) => {
        switch (answers.startQuestion) {
          case "Engineer":
            askEngineer();
            break;
          case "Intern":
            askIntern();
            break;
          default:
            buildGroup();
        }
      })
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
          message: "What is their email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What school did they attend?",
          name: "internSchool",
        },
        {
          type: "input",
          message: "What is their github username?",
          name: "internGithub",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internEmail,
          answers.internSchool,
          answers.internGithub
        );
        console.log(answers);
        groupMembers.push(intern);
        idArray.push(answers.internId);
        startQuestion();
        // endQuestion();
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
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is their email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is their github username? ",
          name: "engineerGithub",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        console.log(answers);
        groupMembers.push(engineer);
        idArray.push(answers.engineerId);
        startQuestion();
        // endQuestion();
      });
  }
  function buildGroup() {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    } else {
      fs.writeFileSync(outputPath, render(groupMembers, "utf-8"));
    }
  }
  askManager();
}
appMenu();
// function endQuestion() {
//   inquirer
//     .prompt({
//       type: "list",
//       message: "Would you like to add another employee?",
//       name: "endQuestion",
//       choices: ["yes", "no"],
//     })
//     .then((answer) => {
//       if (answer.endQuestion === "yes") {
//         startQuestion();
//       } else console.log("this is the end");
//     });
// }