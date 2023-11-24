/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var x = parseInt((Math.log(n) / Math.log(3)));
    var p = Math.pow(3,x);    
    return (n==p)? true : false;
};

var testCases = [27,9,10,0,-1,81];

testCases.map( (value)=>{
  console.log(isPowerOfThree(value));
})


