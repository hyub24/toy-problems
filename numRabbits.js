/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let obj = {};
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
        if (obj[answers[i]]) {
            obj[answers[i]]++;
            continue;
        } else {
            obj[answers[i]] = 1;
        }
    }
    for (let key in obj) {
        let num = Number(key);
        if (obj[key] > num) {
            while(obj[key] > 0) {
                sum += num + 1;
                obj[key] = obj[key] - num - 1;
            } 
        } else sum += num + 1;
    }
    return sum;
};