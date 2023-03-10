function Shape(){ //1.Define empty Class

}
//2.Writing code ouside a class
Shape.prototype.X = 0;//3.Prototype indicates member of a class
Shape.prototype.Y = 0;

Shape.prototype.move = function (x, y) {
     this.X = x;
     this.Y = y;
}
Shape.prototype.distance_from_origin = function () {
     return Math.sqrt(this.X*this.X + this.Y*this.Y);
}
Shape.prototype.area = function () {
     throw new Error("I don't have a form yet");
}
var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());


function Square() { //New class

}
//4.Apply inheritance
Square.prototype = new Shape(); //Square-Child and Shape-Parent class
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width = 0;

Square.prototype.area = function () { //5.Overriding
   return this.Width * this.Width;
}

//6.Implementing Child class
var sq = new Square();
sq.move(-5, -5);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distance_from_origin());