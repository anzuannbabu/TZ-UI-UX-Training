function Message() {
   var message = 'hello'; //Define Property
   function setMessage(newMessage) { //Update property only when valu changed
      if (!newMessage) 
         throw new Error('cannot set empty message');
      message = newMessage;
   }
   function getMessage() { //Read Property
      return message;
   }
   function printMessage() { //Print Property
      console.log(message); 
   }
   return {
      setMessage: setMessage,
      getMessage: getMessage,
      printMessage: printMessage
   }; 
} 
// Pattern in use 
var hi1 = Message(); 
hi1.printMessage(); // hello 

var hi2 = Message(); 
hi2.setMessage("hi"); //Modified with setter
hi2.printMessage(); // hi 

hi1.printMessage(); // hello 