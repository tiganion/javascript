let myFunc = require('./1a_old_way_export_default');
let {myFunc: myFuncDetailed , myString} = require('./1a_old_way_export_detailed');

myFunc();
myFuncDetailed();
console.log(myString);