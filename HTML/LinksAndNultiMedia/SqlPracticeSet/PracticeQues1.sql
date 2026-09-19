CREATE DATABASE microsoft;
USE microsoft;

CREATE TABLE empInfo (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT NOT NULL
);

INSERT INTO empInfo
(id, name, salary)
VALUES
(1, "Adam", 25000),
(2, "Bob", 30000),
(3, "Casey", 40000);

SELECT * FROM empInfo;
