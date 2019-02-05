/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    //nums.sort((a,b) => (a-b));
    const recurse = (current = [], index = 0) => {
        let unique = true;
        for (let i = 0; i <result.length; i++) {
            if(check(current, result[i])) unique = false;
        }
        if (unique) result.push(current.slice());
        for (index; index < nums.length; index++) {
            current.push(nums[index]);
            recurse(current, index + 1);
            current.pop();
        }
    }
    const check = (arr1, arr2) => {
        if(arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    recurse();
    return result;
};

// why is sorting necessary? iterative solution?