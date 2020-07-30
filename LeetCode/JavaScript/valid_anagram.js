/**
 * Problem:
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * @param {string} s - the first string to analyze
 * @param {string} t - the second string to analyze
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  // check if strings are the same length
  if (s.length !== t.length) {
    return false;
  }
  // create lookup table
  const lookup = {};
  // loop through first string and put chars and frequencies into the table
  for (let char of s) {
    // if the letter exists, increment, otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  // loop through second string and search for characters
  for (let char of t) {
    // if the letter doesn't exist or frequency is 0, it's not an anagram
    if (!lookup[char] || lookup[char] <= 0) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
};
