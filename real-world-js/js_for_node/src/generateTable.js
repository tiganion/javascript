export function createMultiplicationTable(rows, cols){
    let tableString = '';
    // Array(number) will create an empty ? array with number elements
    for(let rowNumber of Array(rows).keys()){
       
            for(let colNumber of Array(cols).keys()){ 
                // another small hack for it to go from 1 to X, instead of 0 to X-1
                tableString += `${ (rowNumber + 1) * (colNumber + 1)}  `
            }
            tableString += '\n';
    }    
    return tableString;
}
