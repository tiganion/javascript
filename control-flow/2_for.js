/**
 * TLDR: there are 3 ways to 'for' loop
 * 1) the universal way; syntax:  for (int i = 0; i < n ; i ++) {}
 * 2) let of, designed for arrays (or iterables?); syntax: for (let value of array){}
 * 3) let in, designed for objects; syntax: for (let key in object){}
 * 
 * Note: if you don't care for the index on the array, you can use forEach
 */

let randomArray = [1,2,3,4];
let randomObject = {
    key1 : 'value1',
    key2 : randomArray,
}


// == the std way
for (let i = 0; i < randomArray.length; i++){
    console.log(`Iterating through array, position: ${i} value: ${randomArray[i]}`);
}
// Iterating through array, position: 0 value: 1
// Iterating through array, position: 1 value: 2
// Iterating through array, position: 2 value: 3
// Iterating through array, position: 3 value: 4



// == let of
for (let value of randomArray){
    console.log(`Iterating through array with 'let of', value: ${value} `);
}
// Iterating through array with 'let of', value: 1
// Iterating through array with 'let of', value: 2
// Iterating through array with 'let of', value: 3
// Iterating through array with 'let of', value: 4


// this will not work, as the 'object' is not iterable
// for (let value of randomObject){
//     console.log(`Iterating through object with 'let of', value: ${value} `);
// }


// == let in
for (let key in randomObject){
    console.log(`Iterating the object properties with 'let in', current: ${key}`)
}
// Iterating the object properties with 'let in', current: key1
// Iterating the object properties with 'let in', current: key2

for (let key in randomArray){
    console.log(`Iterating the array properties with 'let in', current: ${key}`)
}
// Iterating the array properties with 'let in', current: 0
// Iterating the array properties with 'let in', current: 1
// Iterating the array properties with 'let in', current: 2
// Iterating the array properties with 'let in', current: 3


randomArray.forEach((value, index, array) => {
    console.log(`Value: ${value} at index: ${index} in array: ${array}`);
    // this wll chhange the value in the parent array
    array[index] = ++ value;
})

console.log(`The arrays has become: ${randomArray}`);
// The arrays has become: 2,3,4,5
