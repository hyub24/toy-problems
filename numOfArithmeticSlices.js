/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let num = 0;
    let difference;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++ ) {
            if (j - 1 === i) difference = A[j] - A[i];
            else if (A[j] - A[j - 1] === difference) {
                num++;
            } else break;
        }
    }
    return num;
};

// brute force O(n^2)

var numberOfArithmeticSlices = function(A) {
    let num = 0;
    let dp = Array(A.length).fill(0);
    for (let i = 2; i < A.length; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1;
            num += dp[i];
        }
    }
    return num;
};

// dynamic programming O(n)
// can do constant space since you only need the last saved value for dp