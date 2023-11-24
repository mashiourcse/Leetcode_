/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

var threeSum = function(nums) {
  
    var l = nums.length;
    var output = [];
  
    for( var i=0; i<l; i++){
      for( var j=0; j<l; j++){
        for( var k=0; k<l; k++){
  
          if( (i!=j && i!=k && j!=k) && (nums[i]+nums[j]+nums[k])==0){
            temp = [nums[i],nums[j],nums[k]];
            temp.sort((a,b)=> a-b);
            
            output.push(temp);
  
          }
        }
      }
    }
    const mySet = new Set(output);
    //console.log([...mySet]);
    return mySet;
  };

  console.log(areArraysEqual([1,2,3], [1,2,3]));  
  console.log("dfssfdf");
  console.log( [1,2,3] == [1,2,3]);
  //console.log(threeSum( [-1,0,1,2,-1,-4]));