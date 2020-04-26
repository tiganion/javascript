
// === working with booleans ===
console.log('=== Working with booleans section ===');
// booleans are booleans ... however because of JS magic, anything can be a boolean ...

let emptyString = '';
if(emptyString){
    console.log("We should not see this, because emptyString evaluates to false");
} 

if(!emptyString){
    console.log("We should see this, because emptyString is false");
} 

// the usual false == 0 comparison
let zeroValue = 0;
if(zeroValue){
    console.log("We should not see this, because 0 is false");
} 

if(!zeroValue){
    console.log("We should see this, because 0 is false");
} 

if('false'){
    console.log("should see this, because the string has a value")
}

if(NaN){
    console.log("should not see this, NaN evaluates to false")
}

if(0n){
    console.log("should not see this, the (big int) 0 evaluates to false")
}

if(null){
    console.log("should not see this, the null evaluates to false")
}

if(undefined){
    console.log("should not see this, the undefined evaluates to false")
}