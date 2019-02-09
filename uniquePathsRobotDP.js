/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(Array(m).fill(0));
    }
    matrix[0][0] = 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j + 1] !== undefined) matrix[i][j+1] += matrix[i][j];
            if (matrix[i+1] !== undefined) matrix[i+1][j] += matrix[i][j];
        }
    }
    return matrix[n - 1][m - 1];
};

// starting to get a hang of DP