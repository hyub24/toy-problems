/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(i);
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.sqrt(n); j++) {
            if (dp[i - j * j] === undefined) break;
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
        }
    }
    return dp[n];
    //1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
    //1 2 3 1 2 3 4 2 1 2  3  3  2  3  4  1  2  2  3  4
};

// dp with perfect squares