/**
 * @param {string} s
 * @return {number}
 */
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }
  
  var lengthOfLastWord = function(s) {
    var fletter = false;
    var fspace = false;
  
    var l = s.length;
    let con = 0;
  
    for( var i=l-1; i>=0; i--){
      if(isLetter(s[i])){
        fletter = true;
        con++;
        //console.log(s[i]);
      }
      if(fletter && s[i]==' '){
        return con;
      }
    }
  
    return con;
  
  };
  
  console.log(lengthOfLastWord("   fly me   to   the moon  "));
  console.log(lengthOfLastWord("luffy is still joyboy"));
  console.log(lengthOfLastWord("Hello World"));
  console.log(lengthOfLastWord("a"));
  