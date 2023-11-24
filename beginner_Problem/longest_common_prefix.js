/**
 * @param {string[]} strs
 * @return {string}
 */
var checkAllValueSame = function(hold){

  //console.log(hold);
  for( var i=0; i<hold.length-1; i++){
      if(hold[i]!=hold[i+1]) return "";
  }
  return hold[0];
}

var returnSmallestLength = function( strs){

  var len = 999999999999;
  var lenOfStr = strs.length;
  
  for( var i=0; i<lenOfStr; i++){
      if(len>strs[i].length) len = strs[i].length;
  }
  return len;
  
}
var longestCommonPrefix = function(strs) {
  
  var smal = returnSmallestLength(strs);
  var hold = ""
var curLargest = "";
var largest = "";
for( var j=0;j < smal; j++){
for( var i=0; i< strs.length; i++){
  hold += strs[i][j];
 // console.log(strs[i][0]);
}
 // console.log(hold);
 largest += checkAllValueSame(hold);
 if(checkAllValueSame!=""){
  curLargest = largest;
 // largest = "";
 }  
  hold = "";
  
}

  return curLargest;
};


var strs = ["cir","car"];
//strs = ["dog","racecar","car"];
//strs = ["flower","flow","flight"];


console.log(longestCommonPrefix(strs));
