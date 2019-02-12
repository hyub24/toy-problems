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