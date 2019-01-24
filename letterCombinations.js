/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    const obj = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    let result = [];
    const recurse = (current, length) => {
        if (length === digits.length) {
            result.push(current);
            return;
        }
        for(let i = 0; i<obj[digits[length]].length; i++) {
            current += obj[digits[length]][i];
            recurse(current, length + 1);
            current = current.slice(0, -1);
        }
    }
    recurse('', 0);
    return result;
};
