/**
 * TLDR:
 * var - function scope, most of the time this should not be used
 * let - block scope, as soon as you close the block '}' it will not exist
 * const - block scope & can't be changed later
 * 
 */
// this is how you define the variables
var varVariable = 10;
let letVariable = 11;
const constant = 13; // this can't be changed later, final in Java
globalVariable = 14; // valid, but not a good idea

/**
 * Shadowing for variables works
 */
if(true){
    let varVariable = 55;
    console.log(`Shadowing 'varVariable' ${varVariable}`);
    // => Shadowing 'varVariable' 55
}
console.log(`Out of shadowing 'varVariable' block: ${varVariable}`);
// => Out of shadowing 'varVariable' block: 10


// find out the type of variables
/**
 * NOTE javascript actually is thinking a little bit differently : the value within the variable has a type, not the variable itself
 * so we kind of find out the type of the value inside
 */ 
let number = 1;
console.log('Type of our number var: ' + typeof number);
let string = 'string';
console.log('Type of our string var: ' + typeof string);


// ===  more about variable scopes ====
function someFunction(){
 var functionScoped = 'function scoped';
 let blockScoped = 'block scoped';

 console.log(functionScoped);
 console.log(blockScoped);
}

someFunction();
// both will fail as these are undefined within this scope
// console.log(functionScoped);
// console.log(blockScoped);

console.log('----');
if(true) { //just to enter the block
    var functionScoped = 'function scoped'; // in this case, function scope is kind of the file
    let blockScoped = 'block scoped';
    const constVariable = 'some value';

    console.log(functionScoped);
    console.log(blockScoped);
}

console.log(functionScoped);
// console.log(blockScoped); // this fails, as the block was closed with }
// console.log(constVariable); // this fails, as the block was closed with }


/**
 * VAR is quite bad, imagine you did not know that functionScoped existed, and right now we've just overriden it
 */

if (true){
    var functionScoped = 13;
}
console.log(`functionScoped value after override: ${functionScoped}`);
// => functionScoped value after override: 13


// looking into 'global'

function checkingGlobal(){
    newGlobalValueFromFunction = 1;
}
// by calling this method we are creating the global value
checkingGlobal(); // comment this one out for the console.log to fail as the variable will not exist 
console.log(`Global value from function: ${newGlobalValueFromFunction}`);