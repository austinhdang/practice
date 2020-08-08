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
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === i && s.indexOf(char, i + 1) === -1) return i;
  }
  return -1;
};
