/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    var l = nums.length;
    var k = 0;
  
    for( var i=0; i<l; i++){
      if(target>nums[i]){
        k = i+1;
        continue;
      }else if( target==nums[i]){
        return i;
      } 
    }
    return k;
  };
  
  console.log(searchInsert([1,3,5,6], 5));
  console.log(searchInsert([1,3,5,6], 2));
  console.log(searchInsert([1,3,5,6], 7));
  
  
  