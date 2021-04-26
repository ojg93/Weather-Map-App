// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const path = require("path");
const render = require("./utils/htmlRender");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "Layout.html");

const groupMembers = [];
const idArray = [];

function appMenu() {
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
          name: "managerId",
        },
        {
          type: "input",
          message: "What is their office number",
          name: "officenumber",
        },
        {
          type: "input",
          message: "What is their email address?",
          name: "managerEmail",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.manager,
          answers.managerId,
          answers.officeNumber,
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
          choices: ["intern", "manager", "engineer"],
        },
      ])
      .then((answers) => {
        switch (answers.startQuestion) {
          case "engineer":
            askEngineer();
            break;
          case "intern":
            askIntern();
            break;
          default:
            buildGroup();
        }
      });
  }
  function askIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the interns name?",
          name: "intern",
        },
        {
          type: "input",
          message: "What school did they attend?",
          name: "school",
        },
        {
          type: "input",
          message: "What is their email address?",
          name: "interEmail",
        },
        {
          type: "input",
          message: "What is their github username? ",
          name: "internUsername",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.intern,
          answers.school,
          answers.internEmail,
          answers.internUsername
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
          name: "engineer",
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
          name: "engineerUsername",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineer,
          answers.engineerId,
          answers.engineerUsername,
          answers.managerEmail
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