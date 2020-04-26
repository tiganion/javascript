/**
 * this - current execution context, if it's not called in a class the '
 */

 let getNameFunction = function(){
     return `The name is ${this.name}`;
 }
console.log(getNameFunction()); 
// =>  The name is undefined

 let person = {
     name: 'roberto',
     getNameFunction // if the key and value have the same name - you can write it just once
 }
 
console.log(person.getNameFunction());
// => The name is roberto

let setNameFunction = function(){
    this.name = 'some-other-name';
}
// console.log(name);  this fails, as the name is not defined
setNameFunction();
console.log(name); //some-other-name ; so all is ok ... a global property is available now


let someOtherFunction = function(){
    let randVar = 'pretty-sure-it-is-random';
    console.log(this.randVar);
}
someOtherFunction(); // undefined


// so why it works with classes ...
// it is because of the new keyword, it 'creates a context'
let car = function(color){
    this.color = color;
}
let myCar = new car('green');
console.log(myCar.color); // green