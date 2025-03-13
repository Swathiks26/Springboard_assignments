class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    // Case 1: If the tree is empty, set root and return
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      // Case 2: Go left if val is smaller
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this; // Return the updated tree
        }
        current = current.left;
      }
      // Case 3: Go right if val is greater
      else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val,node = this.root) {
      if (!this.root) {
        this.root = new Node(val);
        return this;
      }
    
      if (!node) return new Node(val);
    
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return this;
        }
        return this.insertRecursively(val, node.left);}
      else {
        if (node.right === null) {
          node.right = new Node(val);
          return this;
        }return this.insertRecursively(val,node.right);}
    
      
    
    

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let found=false;
    let current=this.root;
    while (current){
      if(current.val===val){
        found=true;
        return current;
      }
      if(val<current.val){
        current=current.left;
      }
      else {
        current=current.right;
      }
    }
    if(found===false) return undefined;
    

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val,current=this.root){
      if (current === null) return undefined;
  
      if(current.val===val) return current;
      if(val<current.val) {
        if (current.left === null) return undefined;
          current=current.left;
          return this.findRecursively(val,current);
      }else{
        if (current.left === null) return undefined;
          current=current.right;
          return this.findRecursively(val,current);
      }
  
  }

  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current=this.root;
    let result=[];
    function traverse(node){
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

    }
    traverse(current);
    
    return(result);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root,result=[]) {
    if (node.left) this.dfsInOrder(node.left,result);
    result.push(node.val);
    if (node.right) this.dfsInOrder(node.right,result);
    return(result);

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root,result=[]) {
    if (node.left) this.dfsPostOrder(node.left,result);
    if (node.right) this.dfsPostOrder(node.right,result);
    result.push(node.val);
    return result;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result=[];
    let queue=[]
    if(this.root) queue.push(this.root);
    while(queue.length>0){
       let el=queue.shift();
        result.push(el.val);
       if(el.left) queue.push(el.left);
       if(el.right) queue.push(el.right);
    }
    return(result);

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
