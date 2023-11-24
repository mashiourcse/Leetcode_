/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var len = nums.length;
    var start = len-k;
  
    for(var i=0; i<k; i++){
      let lastElement = nums.pop();
      nums.unshift(lastElement);
    }
  
  //return nums;
  };
  
  console.log(rotate([1,2,3,4,5,6,7],3));
  console.log(rotate([-1,-100,3,99],2));
  