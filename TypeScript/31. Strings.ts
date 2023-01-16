let empName:string = "Rohit Sharma";   
let compName:string = "JavaTpoint";   
// Pre-ES6  
let empDetail1: string = empName + " works in the " + compName + " company.";   
// Post-ES6  
let empDetail2: string = `${empName} works in the ${compName} company.`;   
console.log("Before ES6: " +empDetail1);  
console.log("After ES6: " +empDetail2);  