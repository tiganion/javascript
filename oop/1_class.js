class Person {
    constructor(name, age = 13){
        this.name = name;
        this.age = age;
        this.randomValue = 'something';
        // there is no private - yet, this seems to be a convention to treat _ as private
        this._kindOfPrivate = 'not so private';
    }

    personMethod(arg){
        return `${this.name} and ${arg}`; 
    }

    // this will not fail with an exception, will simply return an undefined 
    static badStaticMethod(){
        return this.age; // as there is no this in a static context
    }

    static goodStaticMethod(){
        return 7;
    }
}

let person1 = new Person('Aladin', 18);
console.log('Type of person:  ' + typeof person1);
// => Type of person:  object
console.log('Full person as string ' + person1);
// => Full person as string [object Object]
console.log('Full person as string ' + JSON.stringify(person1));
// => Full person as string {"name":"Aladin","age":18,"randomValue":"something"}
console.log(`Full person as string ${person1}`);
// => Full person as string [object Object]
console.log('The private thingie: ' + person1._kindOfPrivate);
// => The private thingie: not so private

console.log('Just the name ' + person1.name);
// => Just the name Aladin

let person2 = new Person('Bladin'); // this works because age has a default value
console.log(person2.personMethod('lorem ipsum'));
// => Bladin and lorem ipsum

// person1.goodStaticMethod(); - this doesn;t work, static method access is done just through the class name
console.log('Calling the good static method: ' + Person.goodStaticMethod());
// => Calling the good static method: 7
console.log('Calling the bad static method: ' + Person.badStaticMethod());
// => Calling the bad static method: undefined




// inheritance
class Employee extends Person {
    constructor(name, salary){
        super(name); // age is optional
        this.salary = salary;
        this.valueForShadowing = 'in employee';
    }

    personMethod(arg){
        // super.personMethod(arg) can be called to get the parent method result
        return `calling from employee: ${this.name} and ${arg}`; 
    }

}

let employee = new Employee('Cladin', 12);
console.log('Calling person method on employee: ' + employee.personMethod('lorem again'));
// => Calling person method on employee: calling from employee: Cladin and lorem again


console.log('Employee instance of Person: ' + (employee instanceof Person)); // true
console.log('Employee instance of Employee: ' + (employee instanceof Employee)); // true
console.log('Person instance of Employee: ' + (person2 instanceof Employee)); // false





