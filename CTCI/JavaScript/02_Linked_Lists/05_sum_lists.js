/**
 * Problem:
 * You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's
 * digit is at the head of the list. Write a function that adds the two numbers
 * and returns the sum as a linked list.
 * 
 * Example:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
 * Output: 2 -> 1 -> 9. That is, 912.
 * 
 * Follow Up:
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * 
 * Example:
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 716 + 295.
 * Output: 9 -> 1 -> 2. That is, 912.
 * 
 * @param {LinkedList} list1 The first number to add
 * @param {LinkedList} list2 The second number to add
 * @return {LinkedList}  The sum of the two numbers as a linked list
 */

function sumListsReverseOrder(list1, list2) {
  let res = { next: null },
    tail = res,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum = 0;

  while (node1 && node2) {
    sum += node1.val + node2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
    node2 = node2.next;
  }

  // Continue through the longer list
  let node = node1 || node2;
  while (node) {
    sum += node.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node = node.next;
  }

  // Check if a value exists for carry
  if (carry > 0) tail.next = createNode(carry);

  return res.next;
}

/* Helper function to create a new node */
function createNode(val, next = null) {
  return {
    val,
    next,
  };
}
