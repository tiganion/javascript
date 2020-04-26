let singleQuoteString = 'single';
let doubleQuoteString = 'double quote';

let valueToInject = 'this will be injected'
let backticksQuoteString = `Some template where the following will be replaced: ${valueToInject}` ;
// => Some template where the following will be replaced: this will be injected
console.log(backticksQuoteString);
