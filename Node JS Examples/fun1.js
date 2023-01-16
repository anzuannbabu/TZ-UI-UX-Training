function fun(){
	console.log("Say Hello!");
}

function fun2(a){ //Parameter
	console.log("You Passed " + a);
}

function add(a,b){
	return a+b; //Returns a value
}

function addme(a,b){
	var c = parseInt(a) + parseInt(b);
	return c;
}

fun();
fun2(100);

console.log("Result is: " + add(90,20));
var c = add(34,45);
console.log("Result is: " + c);

console.log("Result is: " + add("Hello ","World"));
console.log("Result is: " + addme(90,20));
