/**
 * Problem:
 * Given a non-empty array of integers, return the third maximum number in this
 * array. If it does not exist, return the maximum number. The time complexity
 * must be in O(n).
 * 
 * Example 1:
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 * 
 * Example 2:
 * Input: [1, 2]
 * Output: 2
 * Explanation: The third maximum does not exist, so the maximum (2) is returned
 * instead.
 * 
 * Example 3:
 * Input: [2, 2, 3, 1]
 * Output: 1
 * Explanation: Note that the third maximum here means the third maximum
 * distinct number. Both numbers with value 2 are both considered as second
 * maximum.
 * 
 * @param {number[]} nums Array of integers to analyze
 * @return {number} The third maximum number in the array or the maxiumum if
 *                  the third maximum doesn't exist;
 */
var thirdMax = function(nums) {
  if (nums.length < 3) return Math.max(...nums);
  const set = new Set(nums);
  if (set.size < 3) return Math.max(...nums);
  let max = nums[0],
    max2 = -Infinity,
    max3 = -Infinity;
  for (let num of nums) {
    if (num > max) {
      max3 = max2;
      max2 = max;
      max = num;
    } else if (num < max && num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num < max && num < max2 && num > max3) {
      max3 = num;
    }
  }
  return max3;
};
