CREATE DATABASE customerDetails;
USE customerDetails;

CREATE TABLE paymentData(
	cusID INT UNIQUE,
    name VARCHAR(50),
    mode VARCHAR(20),
    city VARCHAR(20)
);

INSERT INTO paymentData
(cusID, name, mode, city)
VALUES
(101, "Olivia Barrett", "Netbanking", "Portland"),
(102, "Ethan Sinclair", "Credit Card", "Miami"),
(103, "Maya Hernandez", "Credit Card", "Seattle"),
(104, "Liam Donovan", "Netbanking", "Denver"),
(105, "Sophia Nguyen", "Credit Card", "New Orleans"),
(106, "Caleb Foster", "Debit Card", "Minneapolis"),
(107, "Ava Patel", "Debit Card", "Phoenix"),
(108, "Lucas Carten", "Netbanking", "Boston"),
(109, "Isabella Martinez", "Netbanking", "Nashville"),
(110, "Jackson Brooks", "Credit Card", "Boston");

SELECT mode, COUNT(cusID)
FROM paymentData
GROUP BY mode; 


