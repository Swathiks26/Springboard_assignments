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
    traverse(node = this.root) {
        let c=0;
        
            if (node.left) {this.traverse(node.left);
            c++;}
            if (node.right) {this.traverse(node.right)
            c++;}
            console.log(node.val);
            c++;
    }
  
}

let apple = new BinaryTreeNode("apple")
let ghost = new BinaryTreeNode("ghost")
let fence = new BinaryTreeNode("fence", apple, ghost)
let just = new BinaryTreeNode("just")
let jackal = new BinaryTreeNode("jackal", fence, just)
let zebra = new BinaryTreeNode("zebra")
let pencil = new BinaryTreeNode("pencil", null, zebra)
let mystic = new BinaryTreeNode("mystic")
let nerd = new BinaryTreeNode("nerd", mystic, pencil)
let money = new BinaryTreeNode("money", jackal, nerd)
const myTree= new BinaryTree(money);
console.log(myTree);
console.log(myTree.traverse());
