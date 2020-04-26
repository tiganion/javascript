let myFunc = function(){
    console.log('my func from detailed was called');
}

let myString = 'my string';

// this is the more details exports
module.exports.myFunc = myFunc;
module.exports.myString = myString;

//or 
module.exports = {
    myFunc,
    myString
}