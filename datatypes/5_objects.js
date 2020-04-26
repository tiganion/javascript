// === working with objects ===
console.log('=== Working with objects section ===');

let someRandomThing = null;
console.log("Type of a null: " + typeof null);
// => Type of a null: object


// this is not pure OOP, it's kind of working with JSONs

let object = {key: "value"};
console.log("Simply passing the object to console log: " + object);
console.log("Type of : " + typeof object);
console.log("Properly stringify-ing it ? " + JSON.stringify(object));

console.log("Showing the value using dot: " + object.key);
console.log("Showing the value using square brackes: " + object['key']);
console.log("Showing the value using square brackes and the name misspelled : " + object['kEy']);

object.key = 13;
console.log("Changed the value using dot: " + object.key);

object['key'] = 14;
console.log("Changed the value using square brackets: " + object.key);

// objects are assigned by reference (and arrays)
let object2 = object;
object2.key = 20;
console.log("The object state was changed in the reference: " + JSON.stringify(object)); // ==> The object state was changed in the reference: {"key":20}

// object creation
let name = 'Ricardo';
let age = Infinity;

let person = {
    name,
    age
}

console.log("So instantiating objects when property key == property name works: " + JSON.stringify(person));
// => So instantiating objects when property key == property name works: {"name":"Ricardo","age":null}



let anotherPerson = {
    name,
    ageModified: age
}

console.log("So instantiating objects with mixed properties " + JSON.stringify(anotherPerson));
// => So instantiating objects with mixed properties {"name":"Ricardo","ageModified":null}

let oneMorePerson = {
    'name' : name, // usually these are used when the name is more complicated or uses some special chars (dashes, or operations)
    ageModified: age
}

console.log("So instantiating objects with property keys in quotes " + JSON.stringify(oneMorePerson));
// => So instantiating objects with property keys in quotes {"name":"Ricardo","ageModified":null}