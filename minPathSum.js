/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[0].length; j++) {
            if(j === 0 && i === 0) continue;
            else if(i === 0) grid[i][j] += grid[i][j-1];
            else if (j === 0) grid[i][j] += grid[i-1][j];
            else {
                if(grid[i-1][j] < grid[i][j-1]) grid[i][j] += grid[i-1][j];
                else grid[i][j] += grid[i][j-1];
            }
        }
    }
    return grid[grid.length-1][grid[0].length -1];
};

//optimal solution, look into dynamic programming