var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
        return local_num;
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log("Static number: " + Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Class num: " + obj.num_val);
console.log("Local num: "+ obj.storeNum())