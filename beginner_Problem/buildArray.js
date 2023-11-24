/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var newArr = [];

    for(var i in nums){
      newArr.push( nums[nums[i]]);
    }
    return newArr;
};

// var nums = [5,0,1,2,3,4];

// console.log(buildArray(nums));