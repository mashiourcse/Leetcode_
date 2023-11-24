/**
 * @param {number} rowIndex
 * @return {number[]}
 */


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  var getRow = function(numRows) {
    
    var row = [];
  
    for( k=0; k<=numRows; k++){
     let coefficient = factorial(numRows) / (factorial(k) * factorial(numRows-k));
     row.push(coefficient);
    }
    return row;
  };
  
  console.log(getRow(0));