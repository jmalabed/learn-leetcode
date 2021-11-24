/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let leftNodes = [];
  let rightNodes = [];

  const leftTraverse = (node) => {
    if (!node) {
      leftNodes.push(null);
      return;
    }
    leftNodes.push(node.val);
    leftTraverse(node.left);
    leftTraverse(node.right);
  };

  const rightTraverse = (node) => {
    if (!node) {
      rightNodes.push(null);
      return;
    }
    rightNodes.push(node.val);
    rightTraverse(node.right);
    rightTraverse(node.left);
  };

  leftTraverse(root);
  rightTraverse(root);

  return leftNodes.every((ele, idx) => ele === rightNodes[idx]);
};
