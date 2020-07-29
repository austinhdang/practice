class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /* Adds a node to the priority queue */
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  /* Helper method to place the inserted element into the correct index */
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  /* Removes the highest priority node from the priority queue and returns the
     value */
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  /* Helper method to place the new min into the first index  */
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  /* Adds a vertex to the adjacency list as a key with its value being an empty
     array */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /* Adds an edge to the graph by pushing each vertex and the corresponding
     weight into the other vertex's list of neighbors */
  addEdge(v1, v2, weight) {
    if (v1 in this.adjacencyList && v2 in this.adjacencyList) {
      this.adjacencyList[v1].push({ node: v2, weight });
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }

  Dijkstra(start, end) {
    const pq = new PriorityQueue();
    const dist = {};
    const prev = {};
    let path = [];
    let smallest;

    // build up initial state
    dist[start] = 0;
    for (let vertex in this.adjacencyList) {
      if (vertex !== start) {
        dist[vertex] = Infinity; // unknown distance from start to vertex
      }
      pq.enqueue(vertex, dist[vertex]);
      prev[vertex] = null; // predecessor of vertex
    }

    while (pq.values.length) {
      smallest = pq.dequeue().val; // remove and return best vertex
      if (smallest === end) {
        while (smallest) {
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }
      if (smallest || dist[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let newDist = dist[smallest] + neighbor.weight;
          if (newDist < dist[neighbor.node]) {
            dist[neighbor.node] = newDist;
            prev[neighbor.node] = smallest;
            pq.enqueue(neighbor.node, newDist);
          }
        }
      }
    }
    return path.reverse();
  }
}
