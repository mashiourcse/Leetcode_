//https://dev.to/snj/leetcode-problems-for-beginners-5enm

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    var l = nums.length;
    var number = [];
    var nllval = [];
    for( var i=0; i<l; i++){
      if(nums[i]==val){
        nllval.push("_");
      }else{
        number.push(nums[i]);
      }
    }
    var k = number.length;
  
  
    return number;
  };
  
  console.log(removeElement([3,2,2,3],3));