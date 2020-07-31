/**
 * Problem:
 * Given a singly linked list, remove the n-th node from the end of the list
 * and return its head.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 * 
 * Note:
 * - Given n will always be valid.
 * 
 * @param {ListNode} head The head of the singly linked list to remove from
 * @param {number} n The n-th number from the length of the list
 * @return {ListNode} The head of the singly linked list with the removed node
 */

var removeNthFromEnd = function(head, n) {
  let p1 = head;
  let p2 = head;
  count = 1;
  while (p1.next) {
    count++;
    p1 = p1.next;
    if (count > n + 1) p2 = p2.next;
  }
  if (count === n) return head.next;
  else {
    p2.next = p2.next.next;
    return head;
  }
};
