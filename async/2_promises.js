/**
 * There are 3 states for a promise
 * 1) pending - the operation didn't fire/finish yet
 * 2) fulfilled - finished succesfully
 * 3) rejected - the operation failed
 */

 let myUnchainedPromise = new Promise((resolve, reject) => {
     console.log('This will appear, even though nothing is done with the result');
     resolve('yep');
 });

 let mySuccessPromise = new Promise(
        (
         resolve,
         reject
        ) => {

            setTimeout(
                () => { resolve('success')}
                , 1000
            )
        }
 )

 let myFailingPromise = new Promise(
    (
     resolve,
     reject
    ) => {

        setTimeout(
            () => { reject('failed')}
            , 1000
        )
    }
)

let promiseResultToConsole = (message) => console.log('the result is: ' + message);

console.log('before chaining the success promise');
mySuccessPromise
    .then(promiseResultToConsole);
console.log('after chaining the success promise');

console.log('before chaining the failing promise');
myFailingPromise
    .then(() => console.log('should not be called as we are failing specifically')) // this will not be called
    .catch(promiseResultToConsole)
    .finally(() => console.log('do some clean up?'));
console.log('after chaining the success promise');

// => result
// This will appear, even though nothing is done with the result
// before chaining the success promise
// after chaining the success promise
// before chaining the failing promise
// after chaining the success promise
// the result is: success
// the result is: failed
// do some clean up?
