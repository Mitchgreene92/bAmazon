# bAmazon App - HW9 of UT Coding Bootcamp

**Created by: `Mitch Greene`**

**Date: `April 2020`**

---

## <h2>Overview/Purpose</h2>
The bAmazon app utilizes a command line interface method to search for products contained within a SQL database with quantities and prices. A user can order items to successfully update the database.

The app requires a user to run the code in the .sql file in MySQL and update the javascript file with their password. 

## <h2>How to use the  bAmazon App</h2>
After you have successfully set up the mySQL server, get dependencies from the node package manager in terminal:
* `npm i mysql`
* `npm i inquirer`
* `npm i cli-table`


**Viewing products on the database**

command: `node bAmazonCust.js`

Node will then display the product database in a table.

![Screenshots](/screenshots/database.png)

---

**Purchasing a product**

First enter the `item id` and then the `quantity` of item you would like to purchase.
The script will then subtract these items from the database if there is sufficient stock, 
and show your total cost and update the database. 

![Screenshots](/screenshots/purchase.png)

---

**If there is insufficient stock**
If the database lacks sufficient stock of an item, it will output that the sale cannot be completed.

![Screenshots](/screenshots/outofstock.png)

---
<h2>Technologies Used</h2>
`javascript` `node` `mysql`

<h3>Node packages used</h3>
`inquirer` `cli-table` `mysql`
