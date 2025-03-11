/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function dfs(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return 1 + Math.min(dfs(node.left), dfs(node.right));
    }

    return dfs(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function dfs(node) {
      if (!node) return 0;
      return 1 + Math.max(dfs(node.left), dfs(node.right));
    }

    return dfs(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0; // Global variable to track the maximum path sum

  function dfs(node) {
    if (!node) return 0; // Base case: null node contributes 0 to sum

    // Calculate max path sum in left and right subtrees
    let leftMax = Math.max(dfs(node.left), 0); // Ignore negative values
    let rightMax = Math.max(dfs(node.right), 0); // Ignore negative values

    // Compute the maximum path sum at this node (including both children)
    let currentMax = node.val + leftMax + rightMax;

    // Update the global maximum sum if the current path is the highest so far
    max = Math.max(max, currentMax);

    // Return the max sum when including only one child (since path cannot fork)
    return node.val + Math.max(leftMax, rightMax);
  }

  dfs(this.root); // Start DFS traversal from the root
  return max;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;
    
    function dfs(node) {
      if (!node) return;

      // If node value is larger than lowerBound, consider it a candidate
      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      // Continue searching in both left and right subtrees
      dfs(node.left);
      dfs(node.right);

  }
  dfs(this.root);
    return result;
}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
