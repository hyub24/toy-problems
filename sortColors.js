/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length-1;
    for (let i = 0; i<=end; i++) {
       if(nums[i] === 0) {
           nums[i] = nums[start];
           nums[start] = 0;
           start++;
       } else if (nums[i] === 2) {
           nums[i] = nums[end];
           nums[end] = 2;
           end--;
           i--;
       }
   } 
    return nums;
};

// sorts in one pass