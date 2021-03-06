/**
 * Problem:
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * Input: [3,0,1]
 * Output: 2
 * 
 * Example 2:
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 * 
 * @param {number[]} nums The array to analyze
 * @return {number} The number missing from the array
 */

var missingNumber = function(nums) {
  const completeSum = nums.length * (nums.length + 1) / 2;
  const missingSum = nums.reduce((sum, n) => sum + n, 0);
  return completeSum - missingSum;
};
