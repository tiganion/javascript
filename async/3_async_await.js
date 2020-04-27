/**
 * syntactic sugar for promises, but there are some rules
 * 1) 'await' can be used ONLY in a function 
 * 2) 'await' can not be used in a base/root file like this one (that's why I have to wrap it in a method)
 * 3) the function that uses await must be labelled with 'async' 
 * 
 * So basically this one is used to get rid of the chainining for the promise like:
 * promise
 *  .then()
 *  .catch()
 *  .finally() 
 * 
 * The main thing is that the function that works with the 'await' must be labeled with 'async' (the interpreter will complain that you have used an await in a non async function)
 * 
 */


function doSomething(){
 return new Promise(
    (
     resolve,
     reject
    ) => {

        setTimeout(
            () => { resolve('success')}
            , 1000
        )
    }
);
}

async function doSomethingAsync(){
    let message = await doSomething();
    console.log(message);
    console.log('This is after await');
}

async function doSomethingAsyncWithTryCatch(){
    try {
        let message = await doSomething();
        console.log('This is after await with try catch: ' + message);
    } catch (error){
        console.log('In case an error happens');
    } finally {
        console.log('To clean up');
    }
}

// this will return the promise :)
async function doSomethingAsyncAndReturn(){
    let message = await doSomething();
    return message;
}

doSomethingAsync();
console.log('This is after doSomethingAsync is called');

// => result
// This is after doSomethingAsync is called
// success
// This is after await


doSomethingAsyncWithTryCatch();
// => result
// This is after await with try catch: success
// To clean up


console.log('before async with return is called');
let resultFromAsync = doSomethingAsyncAndReturn();
console.log('after result was assigned: ' + resultFromAsync);
console.log('after result was printed');
// it appears in the console before the messages from within the other promises, because we have the promise for a result not the actual result ...
// => result 
// before async with return is called
// after result was assigned: [object Promise]
// after result was printed


