class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* Adds a new node to the BST */
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (value === curr.value) return undefined;
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  /* Finds the value exists in the BST and returns the node if found */
  find(value) {
    if (this.root === null) return undefined;
    let curr = this.root;
    let isFound = false;
    while (curr && !isFound) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        isFound = true;
      }
    }
    if (!isFound) return undefined;
    return current;
  }

  /* Checks if the value exists in the BST and returns true if it does.
   * Otherwise returns false */
  contains(value) {
    if (this.root === null) return false;
    let curr = this.root;
    let isFound = false;
    while (curr && !isFound) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /* Traverses the BST starting from the root and explores all of the neighbor
   * nodes at the present depth before moving onto the nodes at the next depth
   * level. Returns an array of visited nodes in the BST */
  BFS() {
    let node = this.root,
      queue = [],
      visited = [];
    queue.push(root);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}
