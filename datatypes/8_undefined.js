/*
 Usually undefined means that we do not have declared a variable yet, or that
 variable has no value (as oposed to null where you have a specific value of nothing ...)

*/

console.log('Value in undefined variable: ' + typeof notDefined);
// => Value in undefined variable: undefined

console.log('Type of undefined variable: ' + typeof notDefined);
// => Type of undefined variable: undefined

let definedButNoValue;
console.log('Value in \'un-set\' var: ' + definedButNoValue);
// => Value in 'un-set' var: undefined

console.log('Type of for \'un-set\' value in var: ' + typeof definedButNoValue);
// => Type of for 'un-set' value in var: undefined

let someRandomArray = [1,2];
console.log('Accessing out of bounds : ' + someRandomArray[122]);
// => Accessing out of bounds : undefined

let someRandomObject = { 'key' : 'value'};
console.log('Accessing a non-existing key/property in object : ' + someRandomObject.nonExistingKey);
// => Accessing a non-existing key/property in object : undefined

let voidFunction = () => { 
    //doing nothing here
};

console.log('If we assing the result of a function that returns nothing we get: ' + voidFunction());
// => If we assing the result of a function that returns nothing we get: undefined

let printFunction = (msg = 'default') => {
    console.log(msg);
}

printFunction('Hi'); 
// => hi
printFunction(undefined); // basically this triggers the default value, as no value is passed
// => default 
printFunction();
// => default
printFunction(null); // we pass a value of null, it's nothing - but still a value...
// => null
