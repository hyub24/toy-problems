/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    if (!root) return 0;
    let count = 0;
    const recurse = (node) => {
        if (!node) return 0;
        let left = recurse(node.left);
        let right = recurse(node.right);
        count += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }
    recurse(root);
    return count;
};