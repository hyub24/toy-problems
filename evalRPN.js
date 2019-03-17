/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // declare num
    // declare stack
    // loop through array
    // put numbers into stack
    // when at operator, calculate num and push to stack
    // return num
    if (tokens.length === 1) return Number(tokens[0]);
    let num;
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
            stack.push(Number(tokens[i]));
        } else {
            if (tokens[i] === '+') num = stack.pop() + stack.pop();
            else if (tokens[i] === '-') num = -1 * stack.pop() + stack.pop();
            else if (tokens[i] === '*') num = stack.pop() * stack.pop();
            else if (tokens[i] === '/') num = Math.trunc(1 / stack.pop() * stack.pop());
            stack.push(num);
        } 
    }
    return num;
};

// 