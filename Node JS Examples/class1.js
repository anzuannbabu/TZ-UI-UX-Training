function Shape() {//Class
    this.X = 0; //Member data
    this.Y = 0;

    this.move = function (x, y) { //Member function
        this.X = x;
        this.Y = y;
    }
    this.distance_from_origin = function () { 
        return Math.sqrt(this.X*this.X + this.Y*this.Y);
    }
}

var s = new Shape(); //s is object
s.move(3, 4);
console.log("Distance: " + s.distance_from_origin());