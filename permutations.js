/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
 Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
var permute = function(nums) {
    let result = [];
    let current = [];
    const recurse = (length = nums.length) => {
        if (length === 0) {
            result.push(current.slice());
            return;
        }
        for (let i = 0; i<nums.length; i++) {
            if (current.includes(nums[i])) continue;
            current.push(nums[i]);
            recurse(length - 1);
            current.pop();
        }
    }
    recurse();
    return result;
};

//Runtime: 84 ms, faster than 19.72% of JavaScript online submissions for Permutations.
//look into backtracking, iterative solution isn't ideal