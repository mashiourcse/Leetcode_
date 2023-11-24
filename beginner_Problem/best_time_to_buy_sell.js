/**
 * @param {number[]} prices
 * @return {number}
 */

var profit = (buy,sell)=> sell - buy;

var maxProfit = function(prices) {
    var len = prices.length;

    var profitDataArr = [ ]; //console.log(profitDataArr);

    for( var i=0; i<len; i++){
        for( j=i+1; j<len; j++){
       // console.log( prices[i] + " " + prices[j]);
        //console.log();
        if(prices[j]>prices[i])
            profitDataArr.push(profit(prices[i], prices[j]));
    }
}
var out = profitDataArr.sort((a,b)=> b-a)[0]
return (out>0)? out : 0;

};


var arr = [7,1,5,3,6,4]; var len = arr.length;

// var profitDataArr = [ ]; //console.log(profitDataArr);

// for( var i=0; i<len; i++){
//     for( j=i+1; j<len; j++){
//         console.log( arr[i] + " " + arr[j]);
//         //console.log();
//         profitDataArr.push(profit(arr[i], arr[j]));
//     }
// }
console.log(maxProfit(arr));
