/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    var intA = parseInt(a,2);
    var intB = parseInt(b,2);

    return   (intA+intB).toString(2); 
};

console.log(addBinary("11", "1"));
