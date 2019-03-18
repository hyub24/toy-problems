/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    let val = preorder[0];
    let index = inorder.indexOf(val);
    let leftIn = inorder.slice(0, index);
    let rightIn = inorder.slice(index + 1);
    let leftPre = preorder.slice(1, leftIn.length + 1);
    let rightPre = preorder.slice(leftIn.length + 1);
    let root = new TreeNode(val);
    if (leftIn.length) root.left = buildTree(leftPre, leftIn);
    if (rightIn.length) root.right = buildTree(rightPre, rightIn);
    return root;
};