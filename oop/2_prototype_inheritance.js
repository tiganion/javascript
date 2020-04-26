/**
 * JS dones't have classes,
 * yes it has the class keyword and you can have some inheritance and stuff - but this all is syntactical sugar
 * 
 * under the hood JS uses proptotypes, kind of JSON blueprints of what an object is
 * 
 * below is some raw way of working with prototype based inheritance, but as a TLDR: don't do this 
 */

class Person {
    constructor(name, age = 13){
        this.name = name;
        this.age = age;
    }

    personMethod(arg){
        return `${this.name} and ${arg}`; 
    }
}

let personAsARawPrototype = {
    name: 'blading',
    age : 22,
    personMehod: function personMethod(arg){
        return `${this.name} and ${arg}`; 
    }
}


let personFromRawPrototype = Object.create(personAsARawPrototype);
personFromRawPrototype.favYear = '2000' // basically add any wanted behaviour on top of the parent ...
let personFromRawPrototype2 = Object.create(personAsARawPrototype);
console.log('Is the person from prototype instance of the Person class we have defined: ' + (personFromRawPrototype instanceof Person));
// => Is the person from prototype instance of the Person class we have defined: false

personFromRawPrototype2.name = 'jhon doe';
console.log('Value from person1 prototype: ' + personFromRawPrototype.name);
console.log('Value from person2 prototype: ' + personFromRawPrototype2.name);
// => Value from person1 prototype: blading
// => Value from person2 prototype: jhon doe


/*
 wilderness starts here, let's update the parent, which kind of is the blueprint
 */

console.log('Value from raw person: ' + personAsARawPrototype.name);
console.log('Value from person prototype: ' + personFromRawPrototype.name);
// => Value from raw person: blading
// => Value from person prototype: blading


// we change the value in the 'parent' here (and the child wil be updated as well)
personAsARawPrototype.name = 'changed';
console.log('Value from raw person: ' + personAsARawPrototype.name);
console.log('Value from person prototype: ' + personFromRawPrototype.name);
// => Value from raw person: changed
// => Value from person prototype: changed

// we change the value in the 'child' (the parent isn't updated)
personFromRawPrototype.name = 'changed again';
console.log('Value from raw person: ' + personAsARawPrototype.name);
console.log('Value from person prototype: ' + personFromRawPrototype.name);
// => Value from raw person: changed
// => Value from person prototype: changed again

// we change the value in the parent again, but this time the child is not updated as it has it's own value
personAsARawPrototype.name = 'last change';
console.log('Value from raw person: ' + personAsARawPrototype.name);
console.log('Value from person prototype: ' + personFromRawPrototype.name);
// => Value from raw person: last change
// => Value from person prototype: changed again


// so let's delete a property on the child => it will still exist, and just be the value in the parent
delete personFromRawPrototype.name;
console.log('Value from raw person: ' + personAsARawPrototype.name);
console.log('Value from person prototype: ' + personFromRawPrototype.name);
// => Value from raw person: last change
// => Value from person prototype: last change



console.log('All properties in person obtained from prototype: :');
console.log(personFromRawPrototype); // { favYear: '2000' }
// quite strange, but is seems this is the only property that  is different from the one in the parent so it 'owns' it, let's change the one that already exists
personFromRawPrototype.name = 'juan doe'
// so even though the 'object' has much more (age and the method) it owns just these 2 properties
console.log(personFromRawPrototype); // { favYear: '2000', name: 'juan doe' }



// now let's test thath the usual way we work with is not 'buggy'
class Employee extends Person {
    constructor(name, salary) { // the age is missing
        super(name);
        this.salary = salary;
    }
}


let person = new Person('juan do', 12);
let employee = new Employee('another huan do', 222);

console.log(`Person name: ${person.name}`); // Person name: juan do
console.log(`Person age: ${person.age}`); //Person age: 12
console.log('Person as json: ' + JSON.stringify(person)); //Person as json: {"name":"juan do","age":12}
console.log(`Employee name: ${employee.name}`); //Employee name: another huan do
console.log(`Employee age: ${employee.age}`); // Employee age: 13
console.log(`Employee salary: ${employee.salary}`); //Employee salary: 222
console.log('Employee as json: ' + JSON.stringify(employee)); // Employee as json: {"name":"another huan do","age":13,"salary":222}

delete employee.name;
console.log(`Employee name: ${employee.name}`); // Employee name: undefined
console.log('Employee as json: ' + JSON.stringify(employee)); //Employee as json: {"age":13,"salary":222}

delete employee.age;
console.log(`Employee age: ${employee.age}`); // Employee age: undefined
console.log('Employee as json: ' + JSON.stringify(employee)); //Employee as json: {"salary":222}
