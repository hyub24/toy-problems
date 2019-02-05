/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let newStr = '';
    let resultArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        } else {
            if (newStr.length) {
                resultArr.unshift(newStr);
                newStr = '';
            }
        }
    }
    if (newStr.length) resultArr.unshift(newStr);
    return resultArr.join(' ');
};

// not very optimal