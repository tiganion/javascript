import {createMultiplicationTable} from './generateTable'


let args = process.argv.slice(2); // this removes the file
let rowsInput = args[0];
let colsInput = args[1];

// because the above return strings
let rows = Number(rowsInput);
let columns = Number(colsInput);

if(!isNaN(rows) && !isNaN(columns)){
    // generate
    let multiplciationTable = createMultiplicationTable(rows, columns);

    //write back to the dom
    console.log(multiplciationTable);
} else {
    console.log('wrong input, use numbers...');
}
    
       