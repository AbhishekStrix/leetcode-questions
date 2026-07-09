/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();

    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];

        if (m.has(val)) {
            return [m.get(val), i];
        }

        m.set(nums[i], i);
    }
};