/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    const flip = (i, j) => {
        if (grid[i]) {
            if (grid[i][j] === '1') grid[i][j] = 0;
        }
        if (grid[i]) {
            if (grid[i][j-1] === '1') flip(i, j-1);
            if (grid[i][j+1] === '1') flip(i, j+1); 
        }
        if (grid[i+1]) {
            if (grid[i+1][j] === '1') flip(i+1, j);
        }
        if (grid[i-1]) {
            if (grid[i-1][j] === '1') flip(i-1, j);
        }
    }
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                flip(i, j);
                islands++;
            }
        }
    }
    return islands;
};

// works but not very optimal, faster than 7% of submissions