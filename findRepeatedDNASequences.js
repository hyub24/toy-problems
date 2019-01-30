/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let results = [];
    for (let i = 0; i<s.length-10; i++) {
        let subString = s.slice(i, i+10);
        if (results.includes(subString)) continue;
        let remainder = s.slice(i+1);
        if (remainder.includes(subString)) results.push(subString);
    }
    return results;
};

// not very optimal at all, faster than 0% of submissions