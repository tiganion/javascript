/**
 * == vs === 
 * ==   - will do some conversion to the same type (if needed) to do the comparison (this is called type coercion)
 * ===  - does not do the conversion, and checks the values are identical (as they are ...)
 * 
 * As a rule of thumb, use the === and if you 'know' you want to compare 2 different data types, just convert/cast them, ex: Number('5') ...
 */


 console.log(5 == 5); // true
 console.log(5 == '5'); // true
 console.log('5' === 5); // false
 console.log(5 === '5'); // false
 console.log("5" === '5'); // true
 console.log('5' == 5n); // true
 console.log('5n' == 5n); // false
 
 // 
 console.log('');
 console.log(0 == '0'); // true
 console.log(0 == ''); // true
 console.log(0 == []); // true
 console.log([] == 0); // true
 console.log(0 == null); // false
 console.log(0 == undefined); // false

 console.log('');
 console.log('true' == true); // false
 console.log(true == 'true'); // false
 console.log('false' == false); // false
 console.log(false == 'false'); // false

 //
 // Note: arrays and objects equality check is done on the reference not on the values inside
 //
 console.log('array');
 console.log([1,2] == [1,2]); // false
 console.log([1,2] === [1,2]); // false
 console.log([1,2] == [1,2,3]); // false
 let array = [1,2];
 let secondArray = array;
 console.log(array == secondArray); // true
 console.log(array === secondArray); // true

 console.log('object');
 console.log({1 : 1} == {1 : 1}); // false
 console.log({1 : 1} === {1 : 1}); // false
 let object = { 1 : 1 };
 let secondObject = object;
 console.log(object == secondObject); // true
 console.log(object === secondObject); // true
