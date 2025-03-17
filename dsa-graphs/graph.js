class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);

  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (this.nodes.has(vertex)){
      for(let el in this.nodes){
        el.adjacent.delete(vertex);
      }
      this.nodes.delete(vertex);
    }
    
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitQueue=[start];
    let seen = new Set(toVisitQueue);
    let res=[];
    while(toVisitQueue.length>0){
      let curr = toVisitQueue.pop();
      res.push(curr.value);
      for (let el of curr.adjacent){
        if(!seen.has(el)){
          toVisitQueue.push(el);
          seen.add(el);
        }   
      }
    }
    return(res);

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue=[start];
    let seen = new Set(toVisitQueue);
    let res=[];
    while(toVisitQueue.length>0){
      let curr = toVisitQueue.shift();
      res.push(curr.value);
      for (let el of curr.adjacent){
        if(!seen.has(el)){
          toVisitQueue.push(el);
          seen.add(el);
        }   
      }
    }
    return(res);
  }
}

module.exports = {Graph, Node}