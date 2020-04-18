--Drops existing database to repopulate--
DROP DATABASE IF EXISTS bamazon;
--Creates new database--
CREATE database bamazon;
--tells mySQL to use bamazon for the query--
USE bamazon;

--creates a table with columns for distinguishing characteristics of each product--
CREATE TABLE products(
	item_id INT(3) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

--adds the following mock items into the products table--
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (1, "tent", "camping", 149.99, 10),
	   (2, "shoes", "apparel", 99.99, 30),
	   (3, "helmet", "sports", 29.99, 15),
	   (4, "knives", "kitchen", 59.99, 14),
	   (5, "pants", "apparel", 39.99, 25),
	   (6, "polos", "apparel", 19.99, 45),
	   (7, "lamp", "home goods", 49.99, 11),
	   (8, "soccer ball", "sports", 19.99, 25),
	   (9, "LG 55'' OLED TV", "electronics", 1499.99, 15),
	   (10, "Instant Pot", "kitchen", 69.99, 17)