/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let result = [[root.val]];
    let nodeArr = [root];
    const recurse = (nodeArr2, values) => {
        for (let i = 0; i<nodeArr.length; i++) {
            if (nodeArr[i].left) {
                nodeArr2.push(nodeArr[i].left);
                values.push(nodeArr[i].left.val);
            }
            if (nodeArr[i].right) {
                nodeArr2.push(nodeArr[i].right);
                values.push(nodeArr[i].right.val);
            }
        }
        if (values.length === 0) return;
        result.push(values);
        nodeArr = nodeArr2;
        if(nodeArr.length > 0) recurse([],[]);
    }
    recurse([],[]);
    return result;
};

// using recursion, try iterative

var levelOrder = function(root) {
    if (!root) return [];
    let result = [[root.val]];
    let nodeArr = [root];
    while (nodeArr.length) {
        let nodeArr2 = [];
        let values = [];
        for (let i = 0; i<nodeArr.length; i++) {
            if(nodeArr[i].left) {
                nodeArr2.push(nodeArr[i].left);
                values.push(nodeArr[i].left.val);
            }
             if(nodeArr[i].right) {
                nodeArr2.push(nodeArr[i].right);
                values.push(nodeArr[i].right.val);
            }
        }
        if (!values.length) break;
        result.push(values);
        nodeArr = nodeArr2;
    }
    return result;
};

// iterative, most optimal solution, faster than 100% of submissions