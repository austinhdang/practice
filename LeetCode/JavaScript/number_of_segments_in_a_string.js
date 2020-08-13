/**
 * Problem:
 * Count the number of segments in a string, where a segment is defined to be a
 * contiguous sequence of non-space characters.
 * 
 * Please note that the string does not contain any non-printable characters.
 * 
 * Example:
 * Input: "Hello, my name is John"
 * Output: 5
 * 
 * @param {string} s The sentence to analyze
 * @return {number} Number of segments in the sentence
 */

var countSegments = function(s) {
  let numSegments = 0;
  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s.charAt(i - 1) === ' ') && s.charAt(i) !== ' ') {
      numSegments++;
    }
  }
  return numSegments;
};
