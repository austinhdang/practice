/**
 * Problem:
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based on
 * reference, not value. That is, if the kth node of the first linked list is
 * the exact same node (by reference) as the jth node of the second linked list,
 * then they are intersecting.
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
