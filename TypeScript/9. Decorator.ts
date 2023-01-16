function f() {  
    console.log("f(): evaluated");  
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("f(): called");  
    }  
}  
  
class C {  
    @f()  
    method() {}  
}  