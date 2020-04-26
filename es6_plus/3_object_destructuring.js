/**
 * This can be used on objects and arrays
 */

let person = {
    name: 'rik',
    age: 98,
    salary: 122,
    favColor: '#ffffff'
}

function destructuringFunction(personAsInput){
    // here is the destructuring thingie
    let {
        name,
        age, 
        eyeColor = 'unknown', // addin a default value
        favColor: favoriteColor = 'unknown', // renaming a value(with a default value), notice the order first comes the value from the input object second is what we want it to be called
    } = personAsInput;
    console.log('We got the name: ' + name);
    console.log('We got the age: ' + age);
    console.log('We got the eye color: ' + eyeColor);
    console.log('We got the favorite coloer: ' + favoriteColor);
}

destructuringFunction(person);
// We got the name: rik
// We got the age: 98
// We got the eye color: unknown
// We got the favorite coloer: #ffffff

destructuringFunction({name: 'a', age: 'b'});
// We got the name: a
// We got the age: b
// We got the eye color: unknown
// We got the favorite coloer: unknown

// === i guess this is the most usable one
function destructuringTheInput({ name }){
    console.log('Obtained directly from input: ' + name);
}
destructuringTheInput(person);
// Obtained directly from input: rik


let objWithNested = {
    keyOnLevel1 : 'value-on-lvl-1',
    keyForNested : {
        keyOnLevel2 : 'value-on-lvl-2',
        keyWeWillIgnore: 'ignored value'
    }
}

function destructuringNestedFunction(someObjWithNested){
    let {
        keyForNested: { 
            keyOnLevel2  // notice that it will be availble with this name ...
        }
    } = someObjWithNested;
    console.log('Obtained from nested: ' + keyOnLevel2);
}
destructuringNestedFunction(objWithNested);
// Obtained from nested: value-on-lvl-2


let someNumbers = [1 ,2 ,3 ,4];
let [first, second] = someNumbers;
console.log(`First is: ${first} and second is: ${second}`);
// First is: 1 and second is: 2




