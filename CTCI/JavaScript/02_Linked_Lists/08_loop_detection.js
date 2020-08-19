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
 * Solution 1 Specs:
 * N = |list|
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * 
 * Solution 2 Specs:
 * N = |list|
 * Time Complexity: O(N)
 * Space Complexity: O(1)
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

/* Solution 2: Slow and Fast Pointers */
function detectLoopStartRunners(list) {
  if (!list) return null;

  let slow = list,
    fast = list;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }
  // No cycle exists
  if (!slow || slow !== fast) return null;

  slow = list;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}
