// === working with string ===
console.log('=== Working with strings section ===');
let singleQuote = 'Hello';
let doubleQuotes = "Yello";
let backtick = `What they said`;
console.log('Single quote: ' + singleQuote);
console.log('Double quotes: ' + doubleQuotes);
console.log('backtick quote: ' + backtick);

// usually backticks are used for string templates/interpolation
console.log(`string templates -> ${singleQuote}`);

console.log('escaping the quotes (\') can be done with backslash (\\)');

console.log('5 plus 8 is ' + 5 + 8); // 5 plus 8 is 58
console.log('5 plus 8 is ' + (5 + 8)); //5 plus 8 is 13