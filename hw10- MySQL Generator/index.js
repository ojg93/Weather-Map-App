const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "mainTasks",
      choices: [
        "VIEW all employess?",
        "VIEW all employees by MANAGER",
        "VIEW all employees by DEPARTMENT",
        "Exit",
      ],
    },
  ]);
}
// .then((answers) => {
//   switch (answers.mainTasks) {
//     case "VIEW all employees":
//       // askEngineer();
//       break;
//     case "VIEW all employees by MANAGER":
//       // askIntern();
//       break;
//     default:
//       // buildGroup();
//   }
// })

//Create function to show "VIEW ALL EMPLOYEES"
function viewAllEmp() {
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

//Create function to show "VIEW ALL EMPLOYEES BY MANAGER"
function viewAllManager() {
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};
////Create function to show "VIEW ALL EMPLOYEES BY DEPARTMENT"
function viewAllDepartment() {
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};