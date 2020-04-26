// === working with numbers, see big numbers at the end ===
console.log('=== Working with numbers section ===');
// Note: all number values are stored as 64bit floating points
// It is a well known issue that comparing digits in JS will not work always as expected

let integerNumber = 13;
let floatingPointNumber = 12.13;
// both are numbers


let hexNumber = 0x2A;
console.log('Hex number: '  + hexNumber);
// => Hex number: 42

let binaryNumber = 0b101010;
console.log('Binary number: '  + binaryNumber);
// => Binary number: 42
let octalNumber = 0o52;
console.log('Octal number: '  + octalNumber);
// => Octal number: 42

let bigNumber = 3e12;
console.log('Big number: ' + bigNumber);
// => Big number: 3000000000000

// adding a digit with a string is 'acceptable'
let value = 10 * 'some-string';
console.log('Product of number and string: ' + value);
// => Product of number and string: NaN
console.log('Type of: ' + typeof value);
// => Type of: number
console.log('Is NaN: ' + isNaN(value));
// => Is NaN: true


// dividing by 0 is possible
let divisionResult = 9 / 0;
console.log('Divions by 0 result: ' + divisionResult);
// => Divions by 0 result: Infinity
console.log('Type of: ' + typeof divisionResult); 
// => Type of: number


/**
 * Working with numbers in JS is troublesome ... 
 * that's why they introduced the  `bigint` that is supposed to solve the issue with big integer numbers
 */
let x = 123456789012345678901234567890;
console.log('X is: ' + x);
// => X is: 1.2345678901234568e+29
console.log('The type of X is: ' + typeof x);
// => The type of X is: number

x = 123456789012345678901234567890n;
console.log('X as bigInt is: ' + x);
// => X as bigInt is: 123456789012345678901234567890
console.log('The type of X as bigInt is: ' + typeof x);
// => The type of X as bigInt is: bigint

// attempt to sum big int with a number will fail at runtime
// console.log(x + 12); 
// => TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(x + BigInt(12));
// => 123456789012345678901234567902n

console.log('Dividing numbers: ' + (10 / 3 ));
// => Dividing numbers: 3.3333333333333335

console.log('Dividing bigints numbers: ' + (10n / 3n ));
// => Dividing bigints numbers: 3
