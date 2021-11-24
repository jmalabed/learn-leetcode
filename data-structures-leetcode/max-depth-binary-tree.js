var maxDepth = function (root) {
  let level = 0;
  let max = 0;

  const traverse = (node, lvl) => {
    if (node !== null) {
      lvl++;
      max = lvl > max ? lvl : max;
      traverse(node.left, lvl);
      traverse(node.right, lvl);
    }
  };

  traverse(root, level);
  return max;
};
