/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let used = [];
    nums.sort((a,b) => a-b);
    const recurse = (current = []) => {
        if (current.length === nums.length) {
            result.push(current);
            return;
        } else {
            let num;
            for (let i = 0; i < nums.length; i++) {
                if (used.includes(i)) continue;
                if (num === nums[i]) continue;
                used.push(i);
                num = nums[i];
                recurse(current.concat(nums[i]));
                used.pop();
            }
        }
    }
    recurse();
    return result;
};

// more practice with permutations needed