/**
 * Problem:
 * Given a circular linked list, implement an algorithm that returns the node
 * at the begining of the loop.
 * 
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer
 * points to an earlier, so as to make a loop in the linked list.
 * 
 * EXAMPLE
 * Input:  A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 * 
 * N = |list|
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * 
 * @param {LinkedList} list The linked list to analyze
 * @return {Node} The node at the beginning of the loop
 */

/* Solution 1: Set Approach */
function detectLoopStartSet(list) {
  let seen = new Set();
  let node = list;

  while (node) {
    if (seen.has(node)) return node;
    seen.add(node);
    node = node.next;
  }

  return null;
}
