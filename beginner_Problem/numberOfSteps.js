/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
    var con = 0;
  
    while(num!=0){
        
        num = (num%2)? num-1 : num/2;
       // console.log(num);
        con++;
    }
  
    return con;
  };
  
  //console.log(numberOfSteps(123));