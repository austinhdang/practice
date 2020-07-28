class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      let neighbors = this.adjacencyList[vertex];
      for (let neighbor of neighbors) {
        this.removeEdge(vertex, neighbor);
      }
      delete this.adjacencyList[vertex];
    }
  }

  bfs(root) {
    if (!root || !this.adjacencyList[root]) return null;
    const queue = [ root ];
    const results = [];
    const visited = {};
    let curr;

    while (queue.length) {
      curr = queue.shift();
      visited[curr] = true;
      results.push(curr);
      this.adjacencyList[curr].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}
