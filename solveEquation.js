/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let positive = true;
    let left = true;
    let term = '';
    let leftx = 0;
    let rightx = 0;
    let leftnum = 0;
    let rightnum = 0;
    const resolve = (term) => {
        let num;
        if(term[term.length - 1] === 'x') {
            if(term.length > 1) num = Number(term.slice(0, -1));
            else num = 1;
            if (left) {
                if(positive) leftx += num;
                else leftx -= num;
            } else {
                if(positive) rightx += num;
                else rightx -= num;
            }
        } else {
            num = Number(term);
            if (left) {
                if (positive) leftnum += num;
                else leftnum -= num;
            } else {
                if (positive) rightnum += num;
                else rightnum -= num;
            }
        }
    }
    for (let i = 0; i < equation.length; i++) {
        if(equation[i] === '-') {
            if (term.length) resolve(term);
            term = '';
            positive = false;
        }
        else if(equation[i] === '+') {
            resolve(term);
            term = '';
            positive = true;
        }
        else if(equation[i] === '=') {
            resolve(term);
            term = '';
            left = false;
            positive = true;
        }
        else term += equation[i];
    }
    resolve(term);
    console.log(leftx, rightx, leftnum, rightnum)
    leftx -= rightx; 
    rightnum -= leftnum;
    if (!leftx && !rightnum) return 'Infinite solutions';
    if (!leftx && rightnum) return 'No solution';
    rightnum /= leftx;
    return 'x=' + rightnum;
};

// this can't be the best way to do this