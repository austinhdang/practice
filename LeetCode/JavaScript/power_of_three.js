/**
 * Problem:
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * Input: 27
 * Output: true
 * 
 * Example 2:
 * Input: 0
 * Output: false
 * 
 * Example 3:
 * Input: 9
 * Output: true
 * 
 * Example 4:
 * Input: 45
 * Output: false
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 * 
 * @param {number} n The integer to analyze
 * @return {boolean}   True if the integer is a power of three. False otherwise.
 */

// using loop
var isPowerOfThree = function(n) {
  if (n < 1) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

// no loops or recursion
var isPowerOfThree = function(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
