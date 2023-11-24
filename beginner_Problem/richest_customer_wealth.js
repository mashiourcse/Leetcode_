/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    highestSum = accounts.map( (account)=>{
      var tot = 0;
      for( i in account){
        
        tot += account[i];
      }
      return tot;
    })  
    highestSum.sort( (a,b)=> b-a)
    return highestSum[0];
  };
  
  console.log(maximumWealth([[1,2,3],[3,2,1]]));
  console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));
  console.log(maximumWealth( [[1,5],[7,3],[3,5]]));