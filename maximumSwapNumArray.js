/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    //change num to string
    let str = num.toString().split('');
    let num1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '9') continue;
        num1 = Number(str[i]);
        let num2;
        let index;
        for (let j = i + 1; j < str.length; j++) {
            if (num2 !== undefined && Number(str[j]) >= num2) num2 = Number(str[j]), index = j;
            else if (num2 === undefined) num2 = Number(str[j]), index = j;
        }
        if (num1 < num2) {
            let temp = str[i];
            str[i] = str[index];
            str[index] = temp;
            return Number(str.join(''));
        }
    }
    return num;
    //declare num1
    //declare num2
    //loop through num storing current number if not equal to nine
    //loop through rest of num looking for number bigger than stored number
    //if found swap and return new number
    //else go to next iteration of outer loop
    // return new num
};

// 0(n^2) can we do linear time?