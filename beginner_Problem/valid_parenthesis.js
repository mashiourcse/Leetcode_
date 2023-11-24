/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {

    var stack = [];
    var stack2 = [];
    cl = 0;
    for( var i=0; i<s.length; i++){
      
      if(s[i]=='(' || s[i]=='{' || s[i]=='['){
        cl++;
        stack.push(s[i]);
      }
      else if(s[i]==')' || s[i]=='}' || s[i]==']'){
        if(stack[stack.length-1] == '(' && s[i]==')'){
          stack.pop();
        } else if(stack[stack.length-1] == '{' && s[i]=='}'){
          stack.pop();
        } else if(stack[stack.length-1] == '[' && s[i]==']'){
          stack.pop();
        }
        cl--;
      } 
     
    }
    return (cl==0 && stack.length==0) ? true : false; 
  };
  
  
  
  var s = ")";
  
  s = "()[]{}";
  
  //s = "(]";
  
  //s= "([}}])";
  
  //s = "{[]}";
  
  console.log(isValid(s));