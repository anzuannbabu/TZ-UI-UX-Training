function fun(){
	console.log("Ok");
	function myfun(){
		console.log("I am inside");
	}
	setTimeout(myfun, 5000);
}
setTimeout(fun, 5000);