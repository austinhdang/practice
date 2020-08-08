/**
 * Problem:
 * Assume you have a method isSubstring which checks if one word is a substring
 * of another. Given two strings, s1 and s2, write code to check if s2 is a
 * rotation of s1 using only one call to isSubstring.
 * 
 * Example:
 * Input: "waterbottle"
 * Output: true ("waterbottle" is a rotation of "erbottlewat")
 * 
 * @param  {string} s1 The first string to analyze
 * @param  {string} s2 The second string to analyze
 * @return {boolean}   True if s2 is a rotation of s1. False otherwise.
 */

function isRotatedSubstring(s1, s2) {
  if (!s1 || !s2) throw new Error('invalid input');
  // both strings must be the same length
  if (s1.length !== s2.length) return false;
  // Duplicate the rotated string
  // If s2 is a different rotation of s1, it's a substring of the new string
  return isSubstring(s1 + s1, s2);
}

/**
 * Implementation of isSubstring function defined in the question.
 * Can only be called once.
 * @param  {string} str The first string to analyze
 * @param  {string} substr The second string to analyze
 * @return {boolean} True if substr is a substring of str. False otherwise.
 */
function isSubstring(str, substr) {
  return str.includes(substr);
}
