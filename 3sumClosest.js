/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // sort nums by increasing order
    // loop through nums grabbing one number from the left
    // loop through rest or array grabbing number from left and right
    // find difference of sum and target
    //if sum is bigger than target move right number to the left
    // else move left number to the right
    // save difference and sum
    // return sum
    
    nums.sort((a,b) => a-b);
    let result;
    let diff;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (diff === undefined) diff = Math.abs(target - sum), result = sum;
            else if (Math.abs(target - sum) < diff) diff = Math.abs(target - sum), result = sum;
            if (sum > target) right = right - 1;
            else left += 1;
        }
    }
    return result;
};

// beast mode