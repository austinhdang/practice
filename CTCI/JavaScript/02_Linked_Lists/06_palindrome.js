/**
 * Problem:
 * Implement a function to check if a linked list is a palindrome.
 * 
 * Stack Approach Specs:
 * N = |list|
 * Time Complexity: O(N)
 * Additional Space: O(N)
 * 
 * @param {LinkedList} list The first number to add
 * @return {boolean} True if the linked list is a palindrome. False otherwise.
 */

function isPalindromeStack(list) {
  let length = getLength(list);

  if (length <= 1) return true;

  let stack = [];
  let node = list;
  let mid = Math.floor(length / 2);
  /* Add half of the linked list to the stack */
  for (let i = 0; i < mid; i++) {
    stack.push(node.val);
    node = node.next;
  }

  // If the length is odd, move past the middle node
  if (length % 2 === 1) node = node.next;

  /* Compare the first and second halves of the linked lists */
  while (node) {
    if (node.val !== stack.pop()) return false;
    node = node.next;
  }
  // Stack should be empty if the linked list is a palindrome
  return true;
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
