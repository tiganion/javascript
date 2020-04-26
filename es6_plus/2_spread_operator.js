/**
 * we look at the 3 dots (...) before an obj or array, mainly it is used
 * * to combine objects or arrays
 * * getting function arguments as an array
 * * passing array elements as arguments
 */

let obj1 = {
    prop1 : 'prop1',
    prop2 : 'prop2',
}
let obj2 = {
    prop2 : 'prop2-from-obj2', 
    prop3 : 'prop3',
}

let obj3 = {
    ...obj1, 
    ...obj2, // notice this will override the prop2 from obj1 because it clashes 
}
console.log( JSON.stringify(obj3) );
// => {"prop1":"prop1","prop2":"prop2-from-obj2","prop3":"prop3"}


let array1 = [1,2,3];
let array2 = [4,5,6];
let arrayCopy = [
    ...array1,
    ...array2,
]

console.log(arrayCopy);
// => [ 1, 2, 3, 4, 5, 6 ]

function someMethodForArray(arg1, arg2, arg3){
    console.log('sum is: ' + (arg1 + arg2 + arg3));
}
someMethodForArray(array1);
// => sum is: 1,2,3undefinedundefined

someMethodForArray(...array1);
// => sum is: 6

someMethodForArray(...arrayCopy); //the other arguemnts are dropped
// => sum is: 6


function someMethodForObject(arg){
    console.log(arg);
}
// someMethodForObject(...obj1); // this doesn't work, look for the object destructuring
