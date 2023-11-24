/**
 * @param {number} x
 * @return {boolean}
 */

  
var isPalindrome = function(x) {
    const numStr = x.toString();
    const len = numStr.length;
    for(var i =0; i<len; i++){
        if(numStr[i]!= numStr[len-i-1])return false;
    }
    return true;
};

