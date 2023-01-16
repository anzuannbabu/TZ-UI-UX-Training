var c = 10; //Global

if(c>=10){
	(function(){
		var c = 20; //added to local variable
	})();
}

console.log("C: " + c);