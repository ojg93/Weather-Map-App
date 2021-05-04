const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Thesameone93",
  database: "companyGenerator_DB",
});

//INQUIRER QUESTIONS
function mainTasks() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "mainTasks",
        choices: [
          "VIEW all EMPLOYEES",
          "VIEW all ROLES",
          "VIEW all DEPARTMENTS",
          "VIEW all employees by MANAGER",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.mainTasks) {
        case "VIEW all EMPLOYEES":
          viewAllEmp();
          break;
        case "VIEW all ROLES":
          viewAllRoles();
          break;
        default:
          console.log("Your input was submitted");
      }
    });
}

//Create function to show "VIEW ALL EMPLOYEES"
const viewAllEmp = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};

//Create function to show "VIEW ALL EMPLOYEES BY MANAGER"
const viewAllRoles = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
////Create function to show "VIEW ALL EMPLOYEES BY DEPARTMENT"
function viewAllDepartment() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}


// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  
mainTasks();
})
