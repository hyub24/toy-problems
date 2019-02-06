/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (!n) return [];
    let values = [];
    for (let i = 1; i <= n; i++) {
        values.push(i);
    }
    let combinations = [];
    const recurse = (current = [], num) => {
        if (num === 0) {
            combinations.push(current);
            return;
        }
        for (let i = 0; i < values.length; i++) {
            if (current.includes(values[i])) continue;
            recurse(current.concat(values[i]), num - 1);
        }
    }
    recurse([], n);
    let result = [];
    let treeStrings = [];
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
        let str = JSON.stringify(root);
        if (!treeStrings.includes(str)) {
            result.push(root);
            treeStrings.push(str);
        }
    }
    for (let i = 0; i < combinations.length; i++) {
        makeTree(combinations[i]);
    }
    return result;
};

// not optimal at all, faster than 1% of submissions