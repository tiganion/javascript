// hoisted - can be called before it was defined
hoistedFunction(); 
// => hoisted function called
function hoistedFunction(){
    console.log('hoisted function called');
}

let oldWayFunction = function (arg){
    console.log('the arg is: ' + arg);
}
oldWayFunction('old way');
// => the arg is: old way

let newWayFunction = (arg) => {
    console.log('the arg is: ' + arg);
}
newWayFunction('first new way');
// => the arg is: first new way

// this can be done if there is just one arg
let newWayFunction2 = arg => {
    console.log('the arg is: ' + arg);
}
newWayFunction2('second new way');
// => the arg is: second new way

let newWayFunction3 = () => {
    console.log('no args func called');
}
newWayFunction3();
// => no args func called

// we can drop 
let singleStatementLong = (a , b) => {
    return a + b;
}
console.log('Result from long func definition: ' + singleStatementLong(1, 3));
// => Result from long func definition: 4

// we can drop the return if there is one single 'operation'
let singleStatementShort = (a , b) => a + b;
console.log('Result from short func defintion: ' + singleStatementShort(1, 3));
// => Result from short func defintion: 4

let singleStatementLongWithNoReturn = (a , b) => {
    console.log('some intermediat operation');
    // => some intermediat operation
    a + b; // this is lost
}

console.log('Result for singleStatementLongWithNoReturn: ' + singleStatementLongWithNoReturn(1,3));
// => Result for singleStatementLongWithNoReturn: undefined


let createAnObject = () => ({
    name: 'rik',
    age: 13
});
console.log('Result from creating an object: ' + JSON.stringify(createAnObject()));
// => Result from creating an object: {"name":"rik","age":13}


/**
 * TLDR: arrow functions are 'more' suitable when defining outside of object
 */
let someObjWithArrowFunction = {
    name: 'rik',
    logName: () => {
        console.log('Arrow function in obj: ' + this.name);
    }
}
someObjWithArrowFunction.logName();
// => Arrow function in obj: undefined


let someObjWithUsualFunction = {
    name: 'rik',
    logName: function logName() {
        console.log('Arrow function in obj: ' + this.name);
    }
}
someObjWithUsualFunction.logName();
// => Arrow function in obj: rik



let functionWithDefaultArgs = (arg1 = 'arg1', arg2 = 'arg2', arg3) => {
    console.log(`called with arg1: ${arg1} ; arg2: ${arg2}; arg3: ${arg3}`);
}
functionWithDefaultArgs();
// => called with arg1: arg1 ; arg2: arg2; arg3: undefined
functionWithDefaultArgs(arg3 = 'arg3'); // notice it doesn't work, the value is assgined to the first arg
// => called with arg1: arg3 ; arg2: arg2; arg3: undefined
functionWithDefaultArgs({arg3 : 'arg3'});
// => called with arg1: [object Object] ; arg2: arg2; arg3: undefined












