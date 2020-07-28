class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /* Adds a vertex to the adjacency list as a key with its value being an empty
     array */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /* Adds an edge to the graph by pushing each vertex into the other vertex's
     list of neighbors */
  addEdge(v1, v2) {
    if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  /* Removes an edge from the graph by removing each vertex from the other
     vertex's list of neighbors */
  removeEdge(v1, v2) {
    if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  /* Removes a vertex from the graph by removing the edges from its neighbors
     and deleting the vertex itself from the adjacency list */
  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      let neighbors = this.adjacencyList[vertex];
      for (let neighbor of neighbors) {
        this.removeEdge(vertex, neighbor);
      }
      delete this.adjacencyList[vertex];
    }
  }
}
