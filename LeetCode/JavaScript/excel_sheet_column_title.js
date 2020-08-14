/**
 * Problem:
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 *  1 -> A
 *  2 -> B
 *  3 -> C
 *  ...
 *  26 -> Z
 *  27 -> AA
 *  28 -> AB 
 *  ...
 * 
 * Example 1:
 * Input: 1
 * Output: "A"
 * 
 * Example 2:
 * Input: 28
 * Output: "AB"
 * 
 * Example 3:
 * Input: 701
 * Output: "ZY"
 * 
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n === 0) return null;

  let res = '';
  while (n > 0) {
    let remainder = n % 26;
    let d = parseInt(n / 26);
    if (remainder === 0) {
      remainder = 26;
      d = d - 1;
    }
    res += String.fromCharCode(64 + remainder);
    n = d;
  }
  return res.split('').reverse().join('');
};
