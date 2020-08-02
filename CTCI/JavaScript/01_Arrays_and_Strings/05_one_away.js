/**
 * Problem:
 * There are three types of edits that can be performed on strings:
 * 1) Insert a character
 * 2) Remove a character
 * 3) Replace a character
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 * 
 * Example:
 * pale,  ple  -> true
 * pales, pale -> true
 * pale,  bale -> true
 * pale,  bake -> false
 * 
 * @param  {string} s1 The first string to analyze
 * @param  {string} s2 The second string to analyze
 * @return {boolean}   True if strings are 0 or 1 edit apart. False otherwise.
 */

function isOneOrLessAway(s1, s2) {
  // if string lengths differ by more than 1, strings are not 0 or 1 edit apart
  if (Math.abs(s1.length - s2.length) > 1) return false;
  let numEdits = 0;
  for (let i = 0, j = 0; i < s1.length && j < s2.length; i++, j++) {
    // if characters aren't the same, there's an edit
    if (s1[i] !== s2[j]) {
      // if one string is longer than the other, there's a deletion
      if (s1.length > s2.length) {
        j--;
      } else if (s1.length < s2.length) {
        i--;
      }
      // if s1 and s2 are the same length, there's a replacement
      numEdits++;
    }
  }
  return numEdits <= 1;
}
