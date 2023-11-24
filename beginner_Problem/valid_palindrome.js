/**
 * @param {string} s
 * @return {boolean}
 */

function isLetter(character) {
    return /^[a-zA-Z0-9]$/.test(character);
  }
  var isPalindrome = function(s) {
   var l = s.split('').map((letter) => (isLetter(letter))? letter.toLowerCase() : '' ).join('');
   var len = l.length;
   
   for( var i=0, j=len-1; i<len; i++,j--){
    if(l[i]!=l[j])return false;
   }
   return true;
  };
  
  console.log(isPalindrome("0P"));