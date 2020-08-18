/**
 * Problem:
 * Write code to partition a linked list around a value x, such that all nodes
 * less than x come before nodes greater or equal to x. If x is contained
 * within the list, the values of x only need to be after the elements less
 * than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right
 * partitions.
 * 
 * Example:
 * Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 * 
 * @param {LinkedList} list The singly linked list to partition
 * @param {number} value The value to partition elements around
 * @return {LinkedList} The partitioned singly linked list
 */

function partition(list, value) {
  if (!list) throw new Error('invalid list');
  if (!value) throw new Error('invalid value');

  let node = list;
  let smallerHead = (smallerTail = largerHead = largerTail = null);

  while (node) {
    let next = node.next;
    node.next = null;
    if (node.val < value) {
      if (!smallerHead) smallerHead = smallerTail = node;
      else smallerTail = smallerTail.next = node;
    } else if (node.val >= value) {
      if (!largerHead) largerHead = largerTail = node;
      else largerTail = largerTail = node;
    }
    node = next;
  }

  if (smallerTail) smallerTail.next = largerHead;
  return smallerHead || largerHead;
}
