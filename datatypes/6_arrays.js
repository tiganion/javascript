// === working with arrays ===
console.log('=== Working with arrays section ===');
let array = [1, 2, 3];

console.log('The array is: ' + array);
console.log('The type of an array is: ' + typeof array);

let anotherArray = array;
anotherArray[0] = 9;
console.log('The array after modification through reference is: ' + array);


/**
 * Some methods that can be used on an array:
 */
let numbers = [9, 2, 3, 4, 6];

// === indexOf ===
    console.log('Index of number 4: ' + numbers.indexOf(4));
    // => Index of number 4: 3
    console.log('Index of number 4 but look after index 22: ' + numbers.indexOf(4, 22));
    // => Index of number 4 but look after index 22: -1

// === find === 
    // [returns the first element that matches the predicate]
    let foundValue = numbers.find((value) => {
        return (value === 4 );
    });
    console.log('Value when found using find: ' + foundValue);
    // => Value when found using find: 4

    let notFoundValue = numbers.find((value) => {
        return (value === 22 );
    });
    console.log('Value when NOT found using find: ' + notFoundValue);
    // => Value when NOT found using find: undefined



// === sort ===  
// !!! it changes the original array
    let sortedArray = numbers.sort((a,b) => a-b);
    console.log('Original array: ' + numbers);
    // => Original array: 2,3,4,6,9
    console.log('Sorted array: ' + sortedArray);
    // => Sorted array: 2,3,4,6,9


// === filter ===
    let filterArray = numbers.filter( (value) => value > 5 );
    console.log('Original array: ' + numbers);
    // =>  Original array: 2,3,4,6,9
    console.log('Filtered array: ' + filterArray);
    // =>  Filtered array: 6,9


// === map ===
    let newMappedArray = numbers.map( value => value * 2);
    console.log('Original array: ' + numbers);
    // =>  Original array: 2,3,4,6,9
    console.log('Mapped array: ' + newMappedArray);
    // => Mapped array: 4,6,8,12,18


// === push ===
    let newLenghtOfArray = numbers.push(99);
    console.log('Numbers array: ' + numbers);
    // => Numbers array: 2,3,4,6,9,99

// === pop ===
    let lastNumberFromArray = numbers.pop(newLenghtOfArray)
    console.log('Last number: ' + lastNumberFromArray);
    // => Last number: 99
    console.log('Numbers array: ' + numbers);
    // => Numbers array: 2,3,4,6,9

// === splice ===
    // first arg is - starting index where to insert data
    // second - how many elements to remove
    // third and others - how many to add
    numbers.splice(2, 0, 13 , 12); // this return an empty array as no elements were deleted
    console.log(numbers);
    // => [ 2, 3, 13, 12, 4, 6, 9 ]

    numbers.splice(2, 0, [13 , 12]);
    console.log(numbers);
    // => [ 2, 3, [ 13, 12 ], 13, 12, 4, 6, 9 ]

    numbers.splice(2, 1); // this return an an array with the element that was deleted, [ [13, 12] ]
    console.log(numbers);
    // => [ 2, 3, 13, 12, 4, 6, 9 ]

// === reduce ===
// notice that previousValue will be equal to 100 the first time, then it's going to be the result
    let reduceResult  = numbers.reduce((previousValue, currentArrayValue) => {
        return previousValue + currentArrayValue;
    }, 100);
    console.log('Reduce result: ' + reduceResult);
// === some ===
    console.log('Is there at least one number greater than 3: ' + numbers.some((value) => value > 3));
    // => Is there at least one number greater than 3: true

// === every ===
    console.log('Is EVERY number greater than 3: ' + numbers.every((value) => value > 3));
    // => Is EVERY number greater than 3: false