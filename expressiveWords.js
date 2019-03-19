/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    //declare s object
    // loop through S, counting letters
    //loop through words
    // make object counting letters
    // compare objects if keys don't match then continue
    // if count of letter doesn't match but count is more than 3 then it is stretchy
    let Sobj = {};
    const countLetters = (string, obj) => {
        obj.word = string[0];
        let letter = string[0];
        let num = 1;
        let count = 1;
        for (let i = 1; i < string.length; i++) {
            if (string[i] === letter) {
                count++;
            } else {
                obj.word += string[i];
                letter = string[i];
                obj[num] = count;
                num++;
                count = 1;
            }
            
        }
        obj[num] = count;
    }
    countLetters(S, Sobj);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let letters = {};
        let stretchy = true;
        countLetters(words[i], letters);
        if (letters['word'] !== Sobj['word']) continue;
        else {
            for (let key in Sobj) {
                if (key === 'word') continue;
                if (Sobj[key] < 3 && letters[key] < Sobj[key]) {
                    stretchy = false;
                    break;
                }
                if (letters[key] > Sobj[key]) {
                    stretchy = false;
                    break;
                }
            }
        }
        if (stretchy) count++;
    }
    return count;
};