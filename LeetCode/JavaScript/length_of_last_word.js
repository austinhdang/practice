/**
 * Problem:
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word (last word means the last
 * appearing word if we loop from left to right) in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Example:
 * Input: "Hello World"
 * Output: 5
 * 
 * Note: A word is defined as a maximal substring consisting of non-space
 * characters only.
 * 
 * @param {string} s String to analyze
 * @return {number} Length of the last word in the string
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0;

  return s.trim().split(' ').pop().length;
};
