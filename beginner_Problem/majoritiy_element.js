/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let myMap = new Map();
    for( var i=0; i<nums.length; i++){
        myMap.set(nums[i],0);
        
    }
    
    //console.log(myMap.get(3))
    
    for( var i=0; i<nums.length; i++){
      value = myMap.get(nums[i]);
      value++;
      myMap.set(nums[i], value);
      //myMap.set(nums[i],++value);
    }
    //console.log(myMap);
    
    var k = 0, v=0;
    myMap.forEach( (key,value)=>{
      if(key > k){
        k = key;
        v = value;
      } 
     // console.log(value + " " + key);
    })
  return v;  
  };
  
  
  
  var nums = [2,2,1,1,1,2,2]; nums = [1,2,2,3,3,3,3];
  
  
  console.log(majorityElement(nums));