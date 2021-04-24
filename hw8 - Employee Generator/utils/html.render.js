const path = require("path");
const fs = require("fs");

let template = path.resolve(__dirname, "../Template");

let render = (employees) => {
  let htmlTemplate = [];
  htmlTemplate.push(
    ...employees.filter((employee) => employee.getrole() === "manager")
  );
};

