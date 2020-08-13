/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Problem:
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 * 
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 *
 * There are two left leaves in the binary tree, with values 9 and 15
 * respectively. Return 24.
 * 
 * @param {TreeNode} root Root of the binary tree
 * @return {number} Sum of the left leaves of the binary tree
 */

var sumOfLeftLeaves = function(root) {
  if (!root) return 0;

  let sum = 0;
  if (root.left) {
    // Add the value of the node if the node is a leaf
    if (!root.left.left && !root.left.right) sum += root.left.val;
    else sum += sumOfLeftLeaves(root.left);
  }
  sum += sumOfLeftLeaves(root.right);
  return sum;
};
