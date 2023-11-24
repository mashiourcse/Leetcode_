/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var l = nums.length;
    
    for( var i =0; i < l; i++){
        for( var j=i+1; j<l; j++){
                var sum = nums[i] + nums[j];           
            if(sum==target)return [i,j];
            }
    }
};

console.log(twoSum([3,2,4],6));
