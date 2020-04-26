// === working with functions ===
console.log('=== Working with functions section ===');

console.log("notice how we call the function before we defined it");
oneFunction();

// defining a function the usual way, this function is hoisted - which kind of means you can call it before you define it ?
function oneFunction(){
   console.log("calling the simple function");
}
oneFunction();
// assinging the function to some var ...
let oneFunctionReference = oneFunction;
// calling through var
oneFunctionReference();

// arrow function
let someFunction = () => {console.log('function was called')}
console.log("The type of the function is: " + typeof someFunction);

someFunction; // this will do nothing
someFunction(); // this calls the fuction

let functionReference = someFunction;
functionReference(); // called the function passed to it ...
