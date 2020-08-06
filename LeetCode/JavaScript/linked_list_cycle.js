/**
 * Problem:
 * Given a linked list, determine if it has a cycle in it.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head The head of the linked list
 * @return {boolean}      True if there is a cycle. False otherwise.
 */

var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let tortoise = head;
  let hare = head.next;
  while (tortoise !== hare) {
    if (!hare || !hare.next) return false;
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return true;
};
