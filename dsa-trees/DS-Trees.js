class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findDFS(val) {
    const toVisitStack = [this];
    while (toVisitStack.length) {
      console.log('visitStackLength=>',toVisitStack,toVisitStack.length);
      const current = toVisitStack.pop();
      console.log('current=>',current);
      console.log("VISITING:", current.val);
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }
  findBFS(val) {
    const toVisitQueue = [this];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      console.log("VISITING:", current.val);
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
  findInTreeDFS(val) {
    return this.root.findDFS(val);
  }
  findInTreeBFS(val) {
    return this.root.findBFS(val);
  }
}

let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li"), new Node("li2")])]),
]);

const myTree= new Tree(htmlEl);
console.log(myTree.findInTreeDFS("li"));
//console.log('hi');
