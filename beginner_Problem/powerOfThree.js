/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var out = n.toString(2);
    var len = out.length;
    var con = 0;
    for( var i=0; i<len; i++){
        if(out[i]=='1')con++;
    }
    return con;
};
var n = 3;
var x = n.toString();
hammingWeight();

