/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //loop through array
    // split word, sort and join
    // put word in array in object
    // loop through object pushing into result array
    // return result array
    
    let result = [];
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort().join('');
        if (obj[word] === undefined) {
            obj[word] = [strs[i]];
        } else obj[word].push(strs[i]);
    }
    for (let key in obj) {
        result.push(obj[key]);
    }
    return result;
};

