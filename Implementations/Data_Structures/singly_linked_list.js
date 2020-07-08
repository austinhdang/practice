class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Adds a node to the end of the linked list */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /* Removes a node from the end of the linked list */
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  /* Removes a node from the beginning of the linked list */
  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currHead;
  }

  /* Adds a node to the beginning of the linked list */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* Retrieves a node by its position in the linked list */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let curr = this.head;
    while (counter !== index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }

  /* Changes the value of a node based on its position in the linked list */
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /* Adds a node to the linked list at a specific position */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  /* Removes a node from the linked list at a specific position */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  /* Reverses the linked list in place */
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }
}
