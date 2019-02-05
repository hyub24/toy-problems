/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const recurse = (node) => {
        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }
        if (node.left) recurse(node.left);
        if (node.right) recurse(node.right);
    }
    if (root) recurse(root);
    return sum;
};

// easy problem