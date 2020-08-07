/**
 * Problem:
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * Symbol  Value
 *   I       1
 *   V       5
 *   X       10
 *   L       50
 *   C       100
 *   D       500
 *   M       1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9. 
 * - X can be placed before L (50) and C (100) to make 40 and 90. 
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * Input: "III"
 * Output: 3
 * 
 * Example 2:
 * Input: "IV"
 * Output: 4
 * 
 * Example 3:
 * Input: "IX"
 * Output: 9
 * 
 * Example 4:
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * Example 5:
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * @param {string} s Roman numeral as a string
 * @return {number} Integer version of roman numeral
 */

var romanToInt = function(s) {
  if (!s) return null;
  let num = 0;
  const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let i = s.length - 1;
  // iterate through string backwards
  while (i >= 0) {
    // if I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
    if (
      (s[i] === 'V' && s[i - 1] === 'I') ||
      (s[i] === 'X' && s[i - 1] === 'I')
    ) {
      num += numerals[s[i]] - 1;
      i -= 2;
    } else if (
      (s[i] === 'L' && s[i - 1] === 'X') ||
      (s[i] === 'C' && s[i - 1] === 'X')
    ) {
      // if X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
      num += numerals[s[i]] - 10;
      i -= 2;
    } else if (
      (s[i] === 'D' && s[i - 1] === 'C') ||
      (s[i] === 'M' && s[i - 1] === 'C')
    ) {
      // if C comes before D or M, subtract 100 eg: CD = 400 and CM = 900
      num += numerals[s[i]] - 100;
      i -= 2;
    } else {
      // add numbers to num
      num += numerals[s[i]];
      i--;
    }
  }
  return num;
};
