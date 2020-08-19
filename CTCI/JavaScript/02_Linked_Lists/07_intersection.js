/**
 * Problem:
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on
 * reference, not value. That is, if the kth node of the first linked list is
 * the exact same node (by reference) as the jth node of the second linked list,
 * then they are intersecting.
 * 
 * Hints:
 * - You can do this in O(A + B) time and O(1) additional space. That is, you
 *   do not need a hash table (although you could do it with one).
 * - Examples will help you. Draw a picture of the intersecting linked list and
 *   two equivalent linked lists (by value) that do not intersect.
 * - Focus first on just identifying if there's an intersection.
 * - Observe that two intersecting linked lists will always have the same last
 *   node. Once they intersect, all the nodes after that will be equal.
 * - You can determine if two linked lists intersect by traversing to the end of
 *   each and comparing their tails.
 * - Now, you need to find where the linked lists intersect. Suppose the
 *   linked lists were the same length. How could you do this?
 * - If the two linked lists were the same length, you could traverse forward in
 *   each until you found an element in common. Now, how do you adjust this for
 *   lists of different lengths?
 * - Try using the difference between the lengths of the two linked lists.
 * - If you move a pointer in the longer linked list by the difference in
 *   lengths, you can then apply a similar approach to the scenario when the
 *   linked lists are equal.
 * 
 * @param {LinkedList} list1 The first linked list to analyze
 * @param {LinkedList} list2 The second linked list to analyze
 * @return {Node} The intersecting node of the two linked lists
 */

function intersection(list1, list2) {
  let len1 = getLength(list1);
  let len2 = getLength(list2);
  let diff1 = len1 - len2;
  let diff2 = len2 - len1;
  /* Skip through lists before the intersection */
  for (let i = 0; i < diff1; i++) {
    list1 = list1.next;
  }
  /* Skip through lists before the intersection */
  for (let i = 0; i < diff2; i++) {
    list2 = list2.next;
  }
  let node1 = list1,
    node2 = list2;
  /* Step through lists until a node that exists in both lists occurs */
  while (node1 && node2) {
    if (node1 === node2) return node1;
    node1 = node1.next;
    node2 = node2.next;
  }
  // If the end of a list is reached, there's no intersection
  return undefined;
}

/* Helper function to get the length of a linked list. */
function getLength(list) {
  let length = 0;
  while (list) {
    list = list.next;
    length++;
  }
  return length;
}
