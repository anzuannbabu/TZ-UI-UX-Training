//Tuple Declaration  
let empTuple = ["JavaTpoint", 101, "Abhishek"];     
//Passing tuples in function    
function display(tuple_values:any[]) {    
   for(let i = 0;i<empTuple.length;i++) {     
      console.log(empTuple[i]);    
   }      
}    
//Calling tuple in function    
display(empTuple);  