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
var widthOfBinaryTree = function(root) {
    let level = [root];
    let positions = [1];
    let width = 1;
    const recurse = (level, positions) => {
        let nextLevel = [];
        let nextPositions = [];
        for (let i = 0; i < level.length; i++) {
            if(level[i].left) {
                nextLevel.push(level[i].left);
                nextPositions.push(positions[i] * 2);
            }
            if(level[i].right) {
                nextLevel.push(level[i].right);
                nextPositions.push(positions[i] * 2 + 1);
            }
        }
        if (width < nextPositions[nextPositions.length - 1] - nextPositions[0] + 1) {
            width = nextPositions[nextPositions.length - 1] - nextPositions[0] + 1;
        }
        if (nextLevel.length) recurse(nextLevel, nextPositions);
    }
    recurse(level, positions);
    return width;
};

// faster than 100% of submissions, learned about positions in BSTs