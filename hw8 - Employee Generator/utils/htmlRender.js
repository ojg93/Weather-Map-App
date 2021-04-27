const path = require("path");
const fs = require("fs");
let templates = path.resolve(__dirname, "../Template");


//making a function that renders all employees
const render = (employees) => {
 const htmlTemplate = [];
 htmlTemplate.push(
    ...employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerRenderer(manager)).join("")
  );
  htmlTemplate.push(
    ...employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerRenderer(engineer)).join("")
  );
  htmlTemplate.push(
    ...employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internRenderer(intern)).join("")
  );
  return mainRenderer(htmlTemplate.join(""));
};


const managerRenderer = (manager) => {
  let temp = fs.readFileSync(path.resolve(templates, "manager.html"), "utf8");
  temp = replacer(temp, "name", manager.getName());
  temp = replacer(temp, "role", manager.getRole());
  temp = replacer(temp, "id", manager.getId());
  temp = replacer(temp, "officeNumber", manager.getOfficeNumber());
  temp = replacer(temp, "email", manager.getEmail());
  return temp;
};


const internRenderer = (intern) => {
  let temp = fs.readFileSync(path.resolve(templates, "intern.html"), "utf8");
  temp = replacer(temp, "name", intern.getName());
  temp = replacer(temp, "role", intern.getRole());
  temp = replacer(temp, "id", intern.getId());
  temp = replacer(temp, "school", intern.getSchool());
  temp = replacer(temp, "email", intern.getEmail());
  return temp;
};


const engineerRenderer = (engineer) => {
  let temp = fs.readFileSync(path.resolve(templates, "engineer.html"), "utf8");
  temp = replacer(temp, "name", engineer.getName());
  temp = replacer(temp, "role", engineer.getRole());
  temp = replacer(temp, "id", engineer.getId());
  temp = replacer(temp, "github", engineer.getGithub());
  temp = replacer(temp, "email", engineer.getEmail());
  return temp;
};

const mainRenderer = (html) => {
  const temp = fs.readFileSync(path.resolve(templates, "main.html"), "utf8");
  return replacer(temp, "layout", html);
};

const replacer = (temp, placeholder, value) => {
  const structure = new RegExp("{{ " + placeholder + " }}", "gm");
  return temp.replace(structure, value);
};



module.exports = render;















