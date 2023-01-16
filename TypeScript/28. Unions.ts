function display(value: (number | string))  
{  
    if(typeof(value) === "number")  
        console.log('The given value is of type number.');  
    else if(typeof(value) === "string")  
        console.log('The given value is of type string.');  
}  
display(123);  
display("ABC");