function get(x){     
  console.log(a);  //printing x variable. Value is undefined       
  //declared variable after console hoisted to the top at run time    
  var a = x;        
  //again printing x variable. Value is 3.  
  console.log(a);    
}    
get(4);  