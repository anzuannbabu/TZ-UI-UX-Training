//Generated by typescript 1.8.10
var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    Greeting.prototype.other = function (x,y) {
        console.log("Hello again!!!");
        if(x>y){
        	console.log(x + " is big");
        }else{
        	console.log(y + " is big");
        }
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
obj.other(22,33);