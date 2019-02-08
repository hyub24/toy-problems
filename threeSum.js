/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        let second = i + 1;
        let third = nums.length - 1;
        let num = nums[i];
        while (second < third) {
            let sum = nums[second] + nums[third];
            if (num + sum === 0) {
                result.push([nums[i], nums[second], nums[third]]);
                second++;
                while(nums[second] === nums[second - 1]) second++;
            }
            else if (num + sum > 0) third--;
            else if (num + sum < 0) second++;
        }
    }
    return result;
};
