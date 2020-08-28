/**
 * Problem:
 * Given a linked list, return the node where the cycle begins. If there is no
 * cycle, return null.
 * 
 * Note: Do not modify the linked list.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Follow-up:
 * Can you solve it without using extra space?
 * 
 * @param {ListNode} head The head of the linked list
 * @return {boolean}      True if there is a cycle. False otherwise.
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;

  let seen = new Set();
  let curr = head;
  while (curr.next) {
    if (!seen.has(curr)) {
      seen.add(curr);
    } else {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};
