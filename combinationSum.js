/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    const checkArr = (arr, finalArr) => {
        for (let i = 0; i<finalArr.length; i++) {
            if(arr.length !== finalArr[i].length) continue;
            else {
                let double = true;
                for(let j = 0; j<arr.length; j++) {
                    if(arr[j] !== finalArr[i][j]) {
                        double = false;
                        break;
                    }
                }
                if(double) return false;
            }
        }
        return true;
    }
    const recurse = (current, num) => {
        if(num === 0) {
            if(checkArr(current.slice().sort((a,b) => (a-b)), result)) {
                result.push(current.slice().sort((a,b) => (a-b)));
            }
            return;
        } else if(num < 0) return;
        for(let i = 0; i<candidates.length; i++) {
            current.push(candidates[i]);
            recurse(current, num - candidates[i]);
            current.pop();
        }
    }
    recurse([], target);
    return result;  
};

//not optimal solution, look into backtracking