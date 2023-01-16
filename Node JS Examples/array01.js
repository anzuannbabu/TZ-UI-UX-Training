var sum = 0;
for(i=2;i<process.argv.length;i++){
	console.log("Value is: " + process.argv[i]);
	sum = sum + parseInt(process.argv[i]);
}
console.log("Sum is: " + sum)