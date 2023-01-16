var name1:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name1) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)
var str = '1' //Type Ssertion
var str2:number = <number> <any> str   //str is now of type number 
console.log(str2)
var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12"; //Inferred typing
console.log(num);