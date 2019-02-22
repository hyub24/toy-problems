/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    let result = [];
    const check = (str, str2) => {
        str = str.toUpperCase();
        str2 = str2.toUpperCase();
        if (str.length !== str2.length) return false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str2[i]) {
                if ((str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') &&                      (str2[i] === 'A' || str2[i] === 'E' || str2[i] === 'I' || str2[i] === 'O' || str2[i] === 'U'))
                    continue;
                else return false;
            }
        }
        return true;
    }
    for (let i = 0; i < queries.length; i++) {
        let current;
        let current2;
        let foundMatch = false;
        for (let j = 0; j < wordlist.length; j++) {
            if (queries[i] === wordlist[j]) {
                result.push(wordlist[j]);
                foundMatch = true;
                break;
            } else if (!current && queries[i].toUpperCase() === wordlist[j].toUpperCase()) {
                current = wordlist[j];
            } else if (!current && !current2 && check(queries[i], wordlist[j])) {
                current2 = wordlist[j];
            }
        }
        if (!foundMatch) {
            if (current) result.push(current);
            else if (current2) result.push(current2);
            else result.push('');
        }
    }
    return result;
};

// pretty slow, but low space