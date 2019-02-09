/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let combinations = Array(amount + 1).fill(0);
    combinations[0] = 1;
    for (let coin of coins) {
        for (let i = 1; i < combinations.length; i++) {
            if(i >= coin) combinations[i] += combinations[i - coin];
            else continue;
        }
    }
    return combinations[amount];
};
