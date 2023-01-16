let arr:string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   
//Passing arrays in function  
function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr[i]);  
   }    
}  
//Calling arrays in function  
display(arr);  