/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let numbers =[];
    for(let i = 1; i < n + 1; i++) {
        numbers.push(i);
    }
    const recurse = (current, num, index) => {
        if(num === 0) {
            result.push(current.slice());
            return;
        }
        for(index; index<numbers.length; index++) {
            if(!current.includes(numbers[index])) {
                current.push(numbers[index]);
                recurse(current, num -1, index+1);
                current.pop();
            }
        }
    }
    recurse([], k, 0);
    return result;
};

//finds all combinations