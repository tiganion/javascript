let person = {
    name: 'rik',
    age : 99,
}

Object.keys(person); // this is an array like [ 'name', 'age' ]
for(let propertyName of Object.keys(person)){
    console.log(propertyName);
}

Object.values(person); // this is an array like ['rik' , 99 ]
for(let propertyValue of Object.values(person)){
    console.log(propertyValue);
}

console.log(Object.entries(person)); // [ [ 'name', 'rik' ], [ 'age', 99 ] ]
for(let entry of Object.entries(person)){
    console.log(entry);
}

// this is some syntactical sugar 
for(let [key, value] of Object.entries(person)){
    console.log(key + ' ' + value);
}


let worker = {
    position: 'manager',
    salary: 99
}

// will copy all the properties from the worker to person, and override the value in person if it exists
Object.assign(person, worker);
console.log(person);
// => { name: 'rik', age: 99, position: 'manager', salary: 99 }

// this creates a copy of an object
let anotherPerson = Object.assign( {} , person);