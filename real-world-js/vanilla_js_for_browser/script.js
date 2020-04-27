function createMultiplicationTable(rows, cols){
    let html = '<table>';
    // Array(number) will create an empty ? array with number elements
    for(let rowNumber of Array(rows).keys()){
        html += '<tr>';   
            for(let colNumber of Array(cols).keys()){ 
                // another small hack for it to go from 1 to X, instead of 0 to X-1
                html += `<td>${ (rowNumber + 1) * (colNumber + 1)}</td>`
            }
        html += '</tr>';    
    }    
    
    html += '</table>';
    return html;
}

function onGeneratePressed(){
    let rowsInput = document.getElementById('rows-input').value;
    let colsInput = document.getElementById('columns-input').value;

    // because the above return strings
    let rows = Number(rowsInput);
    let columns = Number(colsInput);

    if(!isNaN(rows) && !isNaN(columns)){
        // generate
        let multiplciationTable = createMultiplicationTable(rows, columns);

        //write back to the dom
        document.getElementById("result").innerHTML = multiplciationTable;
    } else {
        alert('use number...');
    }
    
}        
