/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];
    const recurse = (node) => {
        if (arr.length === k) return;
        if (node.left) recurse(node.left);
        if (arr.length === k) return;
        arr.push(node.val);
        if (node.right) recurse(node.right);
    }
    recurse(root);
    return arr[k - 1];
};

// number 230