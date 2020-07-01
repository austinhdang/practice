/* Problem:
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as 'cinema', formed from 'iceman'
 * 
 * Params:
 * s1, s2 - strings to analyze
 * 
 * Return:
 * True if the second string is an anagram of the first. False otherwise.
 * 
 * Time Complexity - O(N)
 * 
 * Notes:
 * - You may assume the string contains only lowercase alphabets
 * - There are no spaces or symbols in the strings
 */

function validAnagram(s1, s2) {
  // check if strings are the same length
  if (s1.length !== s2.length) {
    return false;
  }
  // create lookup table
  const lookup = {};
  // loop through first string and put characters and frequencies into object
  for (let char of s1) {
    // if letter exists, increment, otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  for (let char of s2) {
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}
