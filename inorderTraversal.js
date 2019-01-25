/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let result = [];
    const recurse = (tree) => {
        if(tree.left) recurse(tree.left);
        result.push(tree.val);
        if(tree.right) recurse(tree.right);
    }
    recurse(root);
    return result;
};

// recursion, look into iterative solution