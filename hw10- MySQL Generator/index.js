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
          "add ROLE",
          "add DEPARTMENT",
          "add EMPLOYEE",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      if (answers.mainTasks === "VIEW all EMPLOYEES") {
        viewAllEmp();
      }
      if (answers.mainTasks === "VIEW all ROLES") {
        viewAllRoles();
      }
      if (answers.mainTasks === "VIEW all DEPARTMENTS") {
        viewAllDepartment();
      }
      if (answers.mainTasks === "add ROLE") {
        addRole();
      }
      if (answers.mainTasks === "add DEPARTMENT") {
        addDepartment();
      }
      if (answers.mainTasks === "add EMPLOYEE") {
        addEmployee();
      } else console.log("thank you for your submissions");
    });
}

//Create function to show "VIEW ALL EMPLOYEES"
const viewAllEmp = () => {
  connection.query("SELECT * FROM employee;", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};

//Create function to show "VIEW ALL ROLES"
const viewAllRoles = () => {
  connection.query("SELECT * FROM role;", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
//Create function to show "VIEW ALL DEPARTMENT"
function viewAllDepartment() {
  connection.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}

//function thats adds ROLE
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the role you would like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role?",
      },
      {
        name: "departmentId",
        type: "input",
        message: "What is the Id of the role?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",

        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.departmentId,
        },
        (err) => {
          if (err) throw err;
          console.log("Your role was created successfully!");
          mainTasks()
        }
      );
    });
};
//function thats adds DEPARTMENT
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the department you would like to add?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",

        {
          name: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log("Your department was created successfully!");
          mainTasks()
        }
      );
    });
};
//function thats adds EMPLOYEE
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "What is the first name of the employee?",
      },
      {
        name: "last",
        type: "input",
        message: "What is the last name of the employee?",
      },
      {
        name: "roleId",
        type: "input",
        message: "What is the role id",
      },
      {
        name: "managerId",
        type: "input",
        message: "What is the managerId?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",

        {
          first_name: answer.first,
          last_name: answer.last,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        (err) => {
          if (err) throw err;
          console.log("Your department was created successfully!");
          mainTasks()
        }
      );
    });
};

// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;

  mainTasks();
});
