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
var countNodes = function(root) {
    if(!root) return 0;
    let numNodes = 0;
    const recurse = (node) => {
        numNodes++;
        if(node.left) recurse(node.left);
        if(node.right) recurse(node.right);
    }
    recurse(root)
    return numNodes;
};

// decently fast, might be better way 