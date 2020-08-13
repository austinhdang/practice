/**
 * Problem:
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Follow up:
 * Coud you solve it without converting the integer to a string?
 * 
 * @param {number} x Integer to analyze
 * @return {boolean} True if the integer is read the same backward as forward;
 */

var isPalindrome = function(x) {
  // A negative number is not a palindrome
  if (x < 0) return false;
  let num = x.toString();
  let p1 = 0;
  let p2 = num.length - 1;
  /* Loop through integer string and compare digits using two pointers.
   * Start from the outside and work inward. */
  while (p1 < p2) {
    if (num[p1] !== num[p2]) return false;
    p1++;
    p2--;
  }
  return true;
};

var isPalindromeFollowUp = function(x) {
  if (x < 0) return false;

  /* Reverse the number and check if it equals the original */
  let reversed = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + i % 10;
  }
  return reversed === x;
};
