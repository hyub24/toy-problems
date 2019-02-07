/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    let result = [];
    const recurse = (node, current = [], num = 0) => {
        num += node.val;
        if (node.left) recurse(node.left, current.concat(node.val), num);
        if (node.right) recurse(node.right, current.concat(node.val), num);
        if (!node.left && !node.right && sum === num) {
            result.push(current.concat(node.val));
            return;
        }
    }
    recurse(root);
    return result;
};