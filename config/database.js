const Sequelize = require("sequelize");

//////////////////////////////////////////////////enter your user & password

module.exports = new Sequelize("star_db", "root", "1982", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});



// Test code for Travis
var num1 = parseInt(prompt("Give me a number!"));
var num2 = parseInt(prompt("Give me another number!"));
var result;

var operation = prompt("What would you like to do? (add, subtract, multiply, divide)").toUpperCase();

if (operation === "ADD") {
  result = num1 + num2;
  alert("The sum of " + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "SUBTRACT") 
{
result = num_1 - num_2;
alert('The difference between ' + num_1 + " and " + num_2 + " is " + result);
} 
else if (operation === "MULTIPLY") {
    result = num_1 * num_2;
    alert('The product of ' + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "DIVIDE") {
result = num_1 / num_2;
  alert('The quotient of ' + num_1 + " and " + num_2 + " is " + result);
} else {
alert("Not a valid option!");
} 