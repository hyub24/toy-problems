/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    let dp = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        let current = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (current < dp[j]) {
                    current = dp[j];
                }
            }
        }
        dp[i] = current + 1;
    }
    return Math.max(...dp);
};

// nice! got a DP problem:)