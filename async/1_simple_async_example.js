/**
 * Nothing unusual here, 
 * A simple callback example
 */

function doSometing(){
    setTimeout(
        () => console.log('fired after some time')
        , 2000
    );
}


doSometing();
console.log('this should appear before the console log from the callback');

// this is the result
// => this should appear before the console log from the callback
// => fired after some time