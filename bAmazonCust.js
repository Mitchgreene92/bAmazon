//dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");

//setup connection to MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

//attempt to connect and throw an error if it does not work
connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as thread Id: " + connection.threadId);
});

//Sets up product list from database
var productList = function() {
    var search = "Select * FROM products";
    connection.query(search, function(err, res) {
        if(err) throw err;
        var showTable = new cliTable ({
            head: ["item ID", "Product", "Category", "Price", "Quantity"],
            colWidths: [10,20,20,10,15]
        });
        for(var i=0; i < res.length; i++){
            showTable.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(showTable.toString());
        purchaseItem();
    });
}

//Prompts user in case user would like to purchase item
function purchaseItem(){
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please enter item ID of item you would like to purchase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many would you like to purchase?",
            filter: Number
        },
    ]).then(function(response){
        var quantity = response.Quantity;
        var itemId = response.id;
        orderItem(itemId, quantity);
    });
};

//handles the back end of purchasing item to update database
function orderItem(id, quantNeeded) {
    connection.query('Select * FROM products WHERE item_id = ' + id, function(err,res){
        if(err){
            console.log(err);
        };
        if (quantNeeded <= res[0].stock_quantity)
        {
            var totalCost = res[0].price * quantNeeded;
            console.log("Sufficient quantity is available for your order.");
            console.log("Total cost for " + quantNeeded + "s " + res[0].product_name + " is " + totalCost);
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantNeeded + " WHERE item_id = " + id);
        }
        else
        {
            console.log("We don't have that many "+ res[0].product_name + "s in stock!")
        }
        productList();
    });
};

productList();