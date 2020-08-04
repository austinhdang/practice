/**
 * Problem:
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Examples:
 * Input: "A man, a plan, a canal: Panama"
 * Output: True
 * 
 * Input: "race a car"
 * Output: False
 * 
 * Note:
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Constraints:
 * Input string consists only of printable ASCII characters.
 * 
 * @param  {string} str The string to analyze
 * @return {boolean}    True if input string is a palindrome
 *                      (ignoring cases, symbols, and spaces). False otherwise.
 */

var isPalindrome = function(str) {
  let l = 0,
    r = s.length - 1;
  let charL, charCodeL, charR, charCodeR;
  while (l < r) {
    charL = s[l].toLowerCase();
    charCodeL = s.toLowerCase().charCodeAt(l);
    charR = s[r].toLowerCase();
    charCodeR = s.toLowerCase().charCodeAt(r);
    // if left character isn't a digit or lowercase letter, check next char
    if (
      !(
        (charCodeL >= 48 && charCodeL <= 57) ||
        (charCodeL >= 97 && charCodeL <= 122)
      )
    ) {
      l++;
    } else if (
      !(
        (charCodeR >= 48 && charCodeR <= 57) ||
        (charCodeR >= 97 && charCodeR <= 122)
      )
    ) {
      // if right character isn't a digit or lowercase letter, check next char
      r--;
    } else {
      // otherwise compare left and right characters
      if (charL !== charR) {
        return false;
      } else {
        l++;
        r--;
      }
    }
  }
  return true;
};
