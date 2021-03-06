/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null;
    let treeArray = [];
    const recurse = (node) => {
        if (node.val !== key) treeArray.push(node.val);
        if (node.left) recurse(node.left);
        if (node.right) recurse(node.right);
    }
    const addChild = (node, value) => {
        if (node.val > value) {
            if (node.left) addChild(node.left, value);
            else node.left = new TreeNode(value);
        } else {
            if (node.right) addChild(node.right, value);
            else node.right = new TreeNode(value);
        }
    }
    const makeTree = (arr) => {
        let root = new TreeNode(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            addChild(root, arr[i]);
        }
        return root;
    }
    recurse(root);
    if (!treeArray.length) return null;
    return makeTree(treeArray);
};

// not optimal since it makes a brand new tree

var deleteNode = function(root, key) {
    if (!root) return null;
    if (root.val === key) {
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else {
            let rightNode = root.right;
            while(rightNode.left) rightNode = rightNode.left;
            rightNode.left = root.left;
            return root.right;
        }
    } else if (root.val > key) root.left = deleteNode(root.left, key);
    else root.right = deleteNode(root.right, key);
    return root;
};

// more optimal for sure