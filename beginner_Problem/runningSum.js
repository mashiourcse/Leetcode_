/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var l = nums.length;
    var sum = 0;
    for( var i = 1; i< l; i++){
        nums[i]=nums[i-1]+nums[i];
    }
    return nums;
  };
  
  var tests = [runningSum([1,2,3,4]), runningSum( [1,1,1,1,1]), runningSum([3,1,2,10,1])]
  console.log(tests);