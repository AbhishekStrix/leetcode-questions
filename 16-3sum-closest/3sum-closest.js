/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>(a-b));
    let close= nums[0]+nums[1]+nums[2];
   
    for(let i=0;i<nums.length-2;i++){
       let left = i + 1;
       let right = nums.length - 1;
        while(left<right){
        let sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(close - target)) {
                close = sum;
            }

        if(nums[i]+nums[left]+nums[right]>target){
           right--;
        }
        else if(nums[i]+nums[left]+nums[right]<target){
          left++;
        }
        else{
            return target;
        }
    }
    }
    return close;
};