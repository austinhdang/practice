/**
 * Problem:
 * Given a string, find the first non-repeating character in it and return its
 * index. If it doesn't exist, return -1.
 * 
 * Example 1:
 * s = "leetcode"
 * return 0
 * 
 * Example 2:
 * s = "loveleetcode"
 * return 2
 * 
 * Note:
 * You may assume the string contains only lowercase English letters.
 * 
 * @param {string} s String to analyze.
 * @return {number} Index of the first unique character. -1 if it doesn't exist.
 */

var firstUniqChar = function(s) {
  if (!s) return -1;
  if (s.length === 1) return 0;

  let lookup = {};
  for (let char of s) {
    !lookup[char] ? (lookup[char] = 1) : lookup[char]++;
  }
  for (let char in lookup) {
    if (lookup[char] === 1) {
      return s.indexOf(char);
    }
  }
  return -1;
};
