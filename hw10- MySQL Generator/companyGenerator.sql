--mysql -u root -p--
--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Thesameone93'


DROP DATABASE IF EXISTS companyGenerator_DB;
CREATE DATABASE companyGenerator_DB;

USE companyGenerator_DB;

--TABLES--
CREATE TABLE employee(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  manager_id INT UNSIGNED
);

CREATE TABLE department(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,  
first_name VARCHAR(30)
);


CREATE TABLE role(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT UNSIGNED NOT NULL
);


--SEEDS--
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jaq", "Brown", 1, 12);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Norman", "Corlett", 2, 23);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Khafre", "Grampus", 3, 34);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Keith", "Black", 4, 45);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("selina", "Gomez", 5, 56);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chanel", "Westbrook", 6, 67);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harper", "Stevenson", 7, 78);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eva", "Long", 8, 89);

--DEPARTMENT--
INSERT INTO department (first_name)
VALUES ("Engineering"); 
INSERT INTO department (first_name)
VALUES ("Graphics"); 
INSERT INTO department (first_name)
VALUES ("I.T");
INSERT INTO department (first_name)
VALUES ("Accounting"); 
INSERT INTO department (first_name)
VALUES ("Writing");

--ROLE--
INSERT INTO role (title, salary, department_id)
VALUES ("Sr. Engineer", 190000, 10);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Designer", 80000, 20); 
INSERT INTO role (title, salary, department_id)
VALUES ("Jr. Net Tech", 50000, 30); 
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Manager", 100000, 40); 
INSERT INTO role (title, salary, department_id)
VALUES ("Writer", 65000, 50); 
INSERT INTO role (title, salary, department_id)
VALUES ("Jr Accountant", 70000, 60); 
INSERT INTO role (title, salary, department_id)
VALUES ("Design Manager", 102000, 70);
INSERT INTO role (title, salary, department_id)
VALUES ("Head Writer", 95000, 80); 

SELECT employee.first_name, employee.last_name, role.title
FROM role
INNER JOIN employee ON role.id=employee.id

UPDATE role
SET title = 'Alfred Schmidt', City= 'Frankfurt'
WHERE id = 1;