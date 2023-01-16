// ES5: Without arrow function  
var getResult = function(username, points) {  
  return username + ' scored ' + points + ' points!';  
};  
  
// ES6: With arrow function  
var getResult = (username: string, points: number): string => {  
  return `${ username } scored ${ points } points!`;  
}  