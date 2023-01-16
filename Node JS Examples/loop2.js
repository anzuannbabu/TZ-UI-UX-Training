var x = parseInt(process.argv.slice(2));
var y = parseInt(process.argv.slice(3));

var i=x;//Start

if(x<=y){
	while(i<=y){ //End Condition
		console.log("Value is: " + i);
		i = i+1; //Increment
	}
}else{
	while(i>=y){ //End Condition
		console.log("Value is: " + i);
		i = i-1; //Increment
	}
}