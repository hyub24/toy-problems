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
    if(!root.right && !root.left) return root.val;
    let arr = [];
    const recurse = (node) => {
        arr.push(node.val);
        if (node.left) recurse(node.left);
        if (node.right) recurse(node.right);
    }
    recurse(root);
    arr.sort((a,b)=>(a-b));
    console.log(arr)
    return arr[k - 1];
};

// not optimal, faster than 2% of submissions, 156 ms