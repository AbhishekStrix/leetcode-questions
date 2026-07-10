/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    if(nums.length==0)return 0;
    const newNum=nums.map((num)=>(
    num*num
    )).sort((a,b)=>a-b)
    
    return newNum;


};