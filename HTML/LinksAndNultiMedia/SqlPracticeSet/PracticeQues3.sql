CREATE DATABASE titClg;
USE titClg;

CREATE TABLE titClgInfo(
	id INT PRIMARY KEY,
    name VARCHAR(20),
    course VARCHAR(20),
    marks INT NOT NULL
);

INSERT INTO titClgInfo
(id, name, course, marks)
VALUES
(1, "Adam", "Java", 80),
(2, "Bob", "Python", 74),
(3, "Casey", "C++", 83),
(4, "Druv", "HTML", 47),
(5, "Kamal", "CSS", 96);

ALTER TABLE titClgInfo
CHANGE COLUMN name full_name VARCHAR(20);

SET SQL_SAFE_UPDATES = 0;

DELETE FROM titClgInfo
WHERE marks < 80;

ALTER TABLE titClgInfo
DROP COLUMN course;

SELECT * FROM titClgInfo;
