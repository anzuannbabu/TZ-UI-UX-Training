function divide (x,y) {
	if(y==0){
	    throw new Error("You can divide by 0!");
	}else{
		console.log("Result is: ",(x/y))
	}
}

try {
    divide(10,3);
    divide(3,0);
} catch (err) {
    console.log("I caught an error: " + err.message);
}
console.log("program is still running");