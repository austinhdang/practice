/* Problem:
 * Write a function that accepts a number and adds up all the numbers from 0
 * to the number passed to the function.
 * 
 * Params:
 * n - the number to add all numbers from 0 up to
 * 
 * Return:
 * The sum of all numbers from 0 to the given number
 * 
 * Examples:
 * recursiveRange(6) // 21
 * recursiveRange(10) // 55
 */

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
