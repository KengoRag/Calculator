/*
This is my calculator without conditional statements

 var x = 100
var y = 420
var z = 1231

function Calculator(num1, num2, num3) {
	return num1 * num1 + num3 - num2 / num1;
}

var output = Calculator(x,y,z);

console.log(output); */

var output; 
var gg = "For 'x' your options are either to add, subtract, multiply, or divide with the 2 numbers 'y' and 'z'.";
function calculator(x, y, z) {
	if (x == "add") {
		output = y + z;

	} else if (x == "subtract") {
		output= y  - z; 

	}else if (x == "multiply") {
		output = y * z;

	} else if (x == "divide") {
		output = y / z;

	} else {
		output= "Only input 'add', 'subtract', 'multiply', and 'divide' for the operation. Thank you!."
	}
}

calculator("divide", 24, 6);

console.log(output);