/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    const arr = [];
    const recurse = (node) => {
        if (node.left) recurse(node.left);
        arr.push(node.val);
        if (node.right) recurse(node.right);
    }
    recurse(root);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
};

// without for loop

var isValidBST = function(root) {
    if (!root) return true;
    let valid = true;
    const arr = [];
    const recurse = (node) => {
        if (valid && node.left) recurse(node.left);
        if (arr[arr.length - 1] >= node.val) {
            valid = false;
            return;
        }
        arr.push(node.val);
        if (valid && node.right) recurse(node.right);
    }
    recurse(root);
    return valid;
};