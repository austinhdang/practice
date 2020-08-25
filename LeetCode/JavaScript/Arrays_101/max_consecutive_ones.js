/**
 * Problem:
 * Given a binary array, find the maximum number of consecutive 1s in the array.
 * 
 * Example:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s. The maximum number of consecutive 1s is 3.
 * 
 * Note:
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 * 
 * @param {number[]} nums Binary array to analyze
 * @return {number} The maximum number of consecutive 1s in the array
 */

var findMaxConsecutiveOnes = function(nums) {
  let max = 0,
    count = 0;
  for (let n of nums) {
    if (n === 1) count++;
    else {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
};
