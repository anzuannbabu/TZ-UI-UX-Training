var x = parseInt(process.argv.slice(2));
var y = parseInt(process.argv.slice(3));

if(y!=0){
	var z = x / y;
	console.log("Result is: " + z);
}else{
	console.log("No Result is");
}