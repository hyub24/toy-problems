/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //use a stack
    //push right nodes into stack
    //make left nodes right node
    //take from stack if no children
    if (!root) return;
    const stack = [];
    const recurse = (node) => {
        if (node.right) stack.push(node.right);
        node.right = null;
        if (node.left) {
            node.right = node.left;
            node.left = null;
        }
        if (!node.right && stack.length) {
            node.right = stack.pop();
        }
        if (node.right) recurse(node.right);
    }
    recurse(root);
};