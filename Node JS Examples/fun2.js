var c = 100; //Global

function addme(a,b){
	var c; //Local
	c = parseInt(a) + parseInt(b);
	return c;
}

function addmore(x){
	c += x; //added to global variable
}

console.log("C: " + c);
console.log("Result is: " + addme(90,20));
addmore(20);
console.log("C: " + c);
