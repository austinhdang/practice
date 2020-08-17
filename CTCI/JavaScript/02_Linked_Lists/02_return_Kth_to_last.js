/**
 * Problem:
 * Implement an algorithm to find the kth to last element of a singly linked
 * list.
 * 
 * @param {LinkedList} list The singly linked list to analyze
 * @param {number} k The number from the last element of a singly linked list
 * @return {Node} The kth to last node of a singly linked list
 */

function kthToLast(list, k) {
  if (!list) throw new Error('invalid list');

  let p1 = list;
  let p2 = list;
  let iterations = 0;

  /* Walk through the linked list */
  while (p1.next) {
    /* Keep p1 k nodes ahead of p2 by moving only p1 */
    if (iterations < k) {
      if (!p1.next) throw new Error('list is too short');
      p1 = p1.next;
    } else {
      /* Once p1 is k nodes ahead of p2, move both up */
      p1 = p1.next;
      p2 = p2.next;
    }
    iterations++;
  }
  return p2.val;
}
