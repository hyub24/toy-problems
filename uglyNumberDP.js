/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    for (let i = 1; i < n; i++) {
        dp.push(Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5));
        if (dp[i] % 2 === 0) i2++;
        if (dp[i] % 3 === 0) i3++;
        if (dp[i] % 5 === 0) i5++;
    }
    return dp[n - 1];
};

