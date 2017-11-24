/* Ask for values
	var a = prompt("Enter value for a");
	var b = prompt("Enter value for b");
*/

//Values are fixed

var a = 0;
var b = 0;
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value > 0) {
	console.log("I am positive");
} else if (value < 0) {
	console.log("I am negative");
} else {
	console.log("I am a Zero");
}

