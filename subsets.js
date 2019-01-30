/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = [];
    const recurse = (subset, index, length) => {
        results.push(subset.slice());
        for(index; index<nums.length; index++) {
            subset.push(nums[index]);
            recurse(subset, index + 1, length - 1);
            subset.pop();
        }
    }
    recurse([],0,nums.length);
    return results;
};

// 76 ms faster than 97% of submissions