/**
 * Problem:
 * Write a program to find the node at which the intersection of two singly
 * linked lists begins.
 * 
 * Notes:
 * - If the two linked lists have no intersection at all, return null.
 * - The linked lists must retain their original structure after the function
 *   returns.
 * - You may assume there are no cycles anywhere in the entire linked structure.
 * - Each value on each linked list is in the range [1, 10^9].
 * - Your code should preferably run in O(n) time and use only O(1) memory.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lenA = getLength(headA);
  let lenB = getLength(headB);
  let diffA = lenA - lenB;
  let diffB = lenB - lenA;

  /* Skip through lists before the intersection */
  for (let i = 0; i < diffA; i++) {
    headA = headA.next;
  }
  for (let i = 0; i < diffB; i++) {
    headB = headB.next;
  }

  /* Step through lists until a node that exists in both lists occurs */
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA && nodeB) {
    if (nodeA === nodeB) return nodeA;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  // If the end of a list is reached, there's no intersection
  return null;
};

/* Helper function to get the length of a linked list. */
function getLength(list) {
  let length = 0;
  while (list) {
    list = list.next;
    length++;
  }
  return length;
}
