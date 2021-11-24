var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  let current = root;
  let traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(current);
  return result;
};
