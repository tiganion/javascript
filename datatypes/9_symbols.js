/**
 * Two distinct symbols will never be equal to each other, they seem t be used to ensuring uniquiness
 * 
 * //TODO: come back to this one, what are the main usages for it ?
 */

// the arg is the description of the symbol
let randomSymbol = Symbol("some-symbol");
// console.log("Symbol value: " + randomSymbol);
// => TypeError: Cannot convert a Symbol value to a string

/**
 * This is another way of creating them, and it seems to be using some kind of 'symbol pool' because it will return you
 * an already created symbol
 */
let randomSymbol2 = Symbol.for('one');


console.log("Symbol type: " + typeof randomSymbol);
// => Symbol type: symbol


/**
 * Notice that I've used === instead of == , if I would have used == it would be the same result but here is what it means ...
 * 
 * ==   - will do some conversion to the same type (if needed) to do the comparison (this is called type coercion)
 * ===  - does not do the conversion, and checks the values are identical (as they are ...)
 */
console.log("Empty symbol comparisson: " + ( Symbol() === Symbol() ));
// => Empty symbol comparisson: false

console.log("Same value symbol comparisson: " + ( Symbol('one') === Symbol('one') ));
// => Same value symbol comparisson: false

console.log("Same value symbol comparisson but using the 'factory method': " + ( Symbol.for('one') === Symbol.for('one') ));
// => Same value symbol comparisson but using the 'factory method': true

let symbolOneConstructor = Symbol('one');
let symbolOneFactory = Symbol.for('one');
console.log("Same value symbol comparisson but instantiated differently: " + ( symbolOneConstructor === symbolOneFactory ));
// => Same value symbol comparisson but instantiated differently: false


let symbolRef = randomSymbol;
console.log("symbol comparisson through reference: " + ( symbolRef === randomSymbol ));
// => symbol comparisson through reference: true




