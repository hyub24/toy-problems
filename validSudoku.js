/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const checkRow = (matrix) => {
        for(let i = 0; i<matrix.length; i++) {
            let arr = [];
            for (let j = 0; j<matrix.length; j++) {
                if(matrix[i][j] === '.') continue;
                else if(arr.includes(matrix[i][j])) return false;
                else arr.push(matrix[i][j]);
            }
        }
        return true;
    }
    const checkColumn = (matrix) => {
        for(let i = 0; i<matrix.length; i++) {
            let arr = [];
            for (let j = 0; j<matrix.length; j++) {
                if(matrix[j][i] === '.') continue;
                else if(arr.includes(matrix[j][i])) return false;
                else arr.push(matrix[j][i]);
            }
        }
        return true;
    }
    const checkSquare = (matrix) => {
        let j = 0;
        let k = 0;
        let klength = 3;
        let jlength = 3;
        for(let i = 0; i<3; i++) {
            for(let l = 0; l<3; l++) {
                let arr = [];
                for(k; k<klength; k++) {
                    for(j; j<jlength; j++) {
                        if(matrix[j][k] === '.') continue;
                        else if(arr.includes(matrix[j][k])) return false;
                        else arr.push(matrix[j][k]);
                    }
                    j-=3;
                }
                klength += 3;
            }
            k = 0;
            klength = 3;
            jlength +=3;
            j+=3;
        }
        return true;
    }
    if(checkRow(board) && checkColumn(board) && checkSquare(board)) return true;
    else return false;
};