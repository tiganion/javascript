/**
 * almost nothing fancy here ...
 */
let randValue = 1;
if(randValue === 1){
    console.log("one was entered")
} else if (randValue === 2){
    console.log("two was entered")
} else {
    console.log('value not supported');
}

// ternary operator
let result = (true) ? 'val1' : 'val2';
console.log('Ternary Operator result: ' + result);
// => Ternary Operator result: val1


// below are the common stuff that evaluat to false
// otherwise most of the others will evaluate to true

if(''){ // the usual way would be to use emptyString.lenght === 0 
    console.log('this will not show up');
}

if(0){ 
    console.log('this will not show up');
}

if(0n){ 
    console.log('this will not show up');
}

if(NaN){ 
    console.log('this will not show up');
}

if(undefined){ 
    console.log('this will not show up');
}

if(null){ 
    console.log('this will not show up');
}