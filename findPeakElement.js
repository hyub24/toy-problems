/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[nums.length -1]>nums[nums.length-2]) return nums.length -1;
    let low = 0;
    let high = nums.length - 1;
    while(low<high-1) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid]<nums[mid+1]) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return high;
};

//binary search to find peak, log time complexity