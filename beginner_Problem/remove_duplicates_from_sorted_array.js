/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var count = 0;
  
    var len = nums.length;
   
    for( var i=0; i<len; i++){
  
      if(nums[i]==nums[i+2] ){
        continue;
      }
  
      nums[count] = nums[i];
      count++;
    }
  
   
    console.log(nums);
    return count;
  };
  
  console.log(removeDuplicates([1,1,2]));
  
  