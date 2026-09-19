CREATE DATABASE placement;
USE placement;

CREATE TABLE placementInfo(
	id INT PRIMARY KEY,
    name VARCHAR(20),
    course VARCHAR(20),
    salary INT NOT NULL
);

INSERT INTO placementInfo
(id, name, course, salary)
VALUES
(1, "Adam", "Java", 25000),
(2, "Bob", "Python", 30000),
(3, "Casey", "C++", 40000),
(4, "Druv", "HTML", 55000),
(5, "Kamal", "CSS", 20000);

SELECT * FROM placementInfo;

ALTER TABLE placementInfo
ADD COLUMN age INT NOT NULL DEFAULT 19;

ALTER TABLE placementInfo
MODIFY COLUMN age VARCHAR(20);

ALTER TABLE placementInfo
CHANGE age new_age INT;

ALTER TABLE placementInfo
DROP COLUMN new_age;

ALTER TABLE placementInfo
RENAME TO placementDetails;

SELECT * FROM placementDetails;