/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var l = [];
    var len = s.length;
    for(var i=0; i<len; i++){
      if(s[i]=='I' && s[i+1] == 'V'){
        l.push(4);
        i++;
      }else if( s[i]=='I' && s[i+1] == 'X') {
        l.push(9);
        i++;
      }else if( s[i]=='X' && s[i+1] == 'C') {
        l.push(90);
        i++;
      }else if( s[i]=='X' && s[i+1] == 'L') {
        l.push(40);
        i++;
      }else if( s[i]=='C' && s[i+1] == 'D') {
        l.push(400);
        i++;
      }else if( s[i]=='C' && s[i+1] == 'M') {
        l.push(900);
        i++;
      }
      else if(s[i]=='I') l.push(1);
      else if(s[i]=='V') l.push(5);
      else if(s[i]=='X') l.push(10);
      else if(s[i]=='L') l.push(50);
      else if(s[i]=='C') l.push(100);
      else if(s[i]=='D') l.push(500);
      else if(s[i]=='M') l.push(1000); 
    
       
    }
    
    console.log(l)
    var sum = 0;
  
    for( var i=0; i<l.length; i++) sum+=l[i];
  
    return sum;
  };
  
  var s = ["III", "LVIII", ];
      s = ;
  
  console.log( romanToInt(s));
  
  //var sum = addAll(vals);
  //console.log(sum);
  //console.log(romantToInt[0]["I"]);