/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(c!=r)
     c = c/r;
   var elements = [];
   for( var i=0; i<mat.length; i++){
     for( var j=0; j<mat[i].length; j++){
       //console.log(mat[i][j]);
       elements.push(mat[i][j]);
     }
   }
  
 var newMat = [];
 let k = 0;
   for( var i=0; i<r; i++){
     let temp = [];
     for( var j=0; j<c; j++){
       
       temp.push(elements[k]);
       k++;   
     }
     //console.log(temp);
     newMat.push(temp);
   }
  // console.log(elements)
  // console.log(newMat);
   return newMat;
 };