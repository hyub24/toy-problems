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

// graph problem DFS, oh how far we've come
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // declare recursive function
    // changes one to zero and then calls itself for its four vertices
    // loop through grid
    // call recursive function for every one encountered
    // return count of recursive functions called
    
    let count = 0;
    const recurse = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return;
        if (grid[i][j] === '1') grid[i][j] = 'visited';
        if (grid[i + 1] && grid[i + 1][j] === '1') recurse(i + 1, j);
        if (grid[i - 1] && grid[i - 1][j] === '1') recurse(i - 1, j);
        if (grid[i][j - 1] === '1') recurse(i, j - 1);
        if (grid[i][j + 1] === '1') recurse(i, j + 1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                recurse(i, j);
                count++;
            }
        }
    }
    return count;
};