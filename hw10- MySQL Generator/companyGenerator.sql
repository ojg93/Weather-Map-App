DROP DATABASE IF EXISTS companyGenerator_DB;
CREATE DATABASE companyGenerator_DB;

USE companyGenerator_DB;

--TABLES--
CREATE TABLE employee(
  INTEGER PRIMARY KEY (id),
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10),
  manager_id INTEGER(10)
);

CREATE TABLE department(
  INTEGER PRIMARY KEY (id),
  first_name VARCHAR(30)
);

CREATE TABLE role(
  INTEGER PRIMARY KEY (id),
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER
);


--SEEDS--
INSERT INTO employee (first_name)
VALUES ("Jaq"), ("Norman"), ("Khafre"), ("Keith"), ("Selina"), ("Chanel"), ("Harper"), ("Eva");
INSERT INTO employee (last_name)
VALUES ("Brown"), ("Corlett"), ("Grampus"), ("Black"), ("Gomez"), ("Wesbrook"), ("Stevenson"), ("Long");
INSERT INTO employee (role_id)
VALUES (1), (2), (3), (4), (5), (6), (7), (8);
INSERT INTO employee (manager_id)
VALUES (12), (23), (34), (45), (56), (67), (78), (89);




INSERT INTO department (name)
VALUES ("Engineering"), ("Graphics"), ("I.T"), ("Accounting"), ("Writing");




INSERT INTO role (title)
VALUES ("Sr. Engineer"), ("Lead Designer") ("Jr. Net Tech"), ("Accounting Manager"), ("Writer"), ("jr. Accountant"), ("Design Manager"), ("Head Writer");
INSERT INTO role (salary)
VALUES
INSERT INTO role (department_id)
VALUES (10), (20), (30), (40), (50);