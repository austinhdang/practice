/**
 * Problem:
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words.
 * 
 * Example:
 * Input:  "Tact Coa"
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 * 
 * @param  {string} str The string to analyze
 * @return {boolean}    True if input string is a permuation of a palindrome
 *                      (ignoring spaces). False otherwise.
 */

function isPalindromePermutation(str) {
  let chars = new Set();
  // loop through string
  for (let char of str) {
    // ignore spaces
    if (char !== ' ') {
      // add character to set if it isn't in set and delete from set if it is
      !chars.has(char) ? chars.add(char) : chars.delete(char);
    }
  }
  // if more than one chars have odd frequencies, not permutation of palindrome
  return chars.size <= 1;
}
