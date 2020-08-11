/**
 * Problem:
 * Given an integer, write a function to determine if it is a power of four.
 * 
 * Example 1:
 * Input: 16
 * Output: true
 * 
 * Example 2:
 * Input: 5
 * Output: false
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 * 
 * @param {number} num The integer to analyze
 * @return {boolean} True if the integer is a power of four. False otherwise.
 */

// using loop
var isPowerOfFourLoop = function(num) {
  if (num < 1) return false;
  while (num % 4 === 0) {
    num /= 4;
  }
  return num === 1;
};

// no loops or recursion
var isPowerOfFourLog = function(num) {
  return (Math.log10(num) / Math.log10(4)) % 1 === 0;
};
