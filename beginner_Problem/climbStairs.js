/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    

    var con = 0;
    for(var i =1; i<=n; i++){
      if(n%i==0)con++;
    }
  
    return con;
  };
  
  var testCase = [2,3,4,5,6,7,8,9,10];
  
  testCase.map( (value) => console.log(climbStairs(value)));
  
  