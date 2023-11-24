/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    var len = digits.length-1;
    digits[len] = digits[len]+1;

    //console.log(digits[len]);
    if(digits[len]>9){
        digits.push(digits[len]%10);
        digits[len] = digits[len]/10;
        
    }
   // console.log(digits);
    return digits;
};

var digits = [9];
    digits = [1,2,3];
    digits = [4,3,2,1];

plusOne(digits);
