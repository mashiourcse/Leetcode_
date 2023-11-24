/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var str = [];
    
    for( var i=1; i<n+1; i++){
      
      if( i%3 == 0 && i%5 == 0) 
          str.push("FizzBuzz");
      else if( i%3 == 0){
          str.push("Fizz");
        } 
        else if( i%5 == 0){
          str.push("Buzz");
        } else{
          str.push(`${i}`);
        }
  
    }
  
    return str;
  };
  
  //console.log(fizzBuzz(15));