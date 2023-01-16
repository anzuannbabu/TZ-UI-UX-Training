var x = parseInt(process.argv.slice(2));
var y = parseInt(process.argv.slice(3));

var i;//Start

if(x<=y){
	for(i=x;i<=y;i++){ //End Condition
		console.log("Value is: " + i);
	}
}else{
	for(i=x;i>=y;i--){ //End Condition
		console.log("Value is: " + i);
	}
}