//Generated by typescript 1.8.10
var Greeting = (function () {
   function Greeting() {
   }
   Greeting.prototype.greet = function () {
      console.log("Hello World!!!");
   };
	return Greeting;
}());

var obj = new Greeting();
obj.greet()