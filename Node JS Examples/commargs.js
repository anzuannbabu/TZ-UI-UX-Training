var x = process.argv.slice(2);
var y = process.argv.slice(3);
console.log("x is " + typeof(x))
console.log("y is " + typeof(y))
var z = parseInt(x)/parseInt(y);
console.log("z is " + typeof(z))
console.log("Result is: " + Math.round(z));