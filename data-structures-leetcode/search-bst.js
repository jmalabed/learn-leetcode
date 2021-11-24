var searchBST = function (root, val) {
  if (root === null) return null;
  if (root.val === val) return root;
  let foundNode = null;
  if (val <= root.val) {
    foundNode = searchBST(root.left, val);
  } else {
    foundNode = searchBST(root.right, val);
  }
  return foundNode;
};
