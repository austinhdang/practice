/**
 * Problem:
 * Given an array of integers nums and and integer target, return the indices
 * of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 * 
 * @param {number[]} nums Array of integers to analyze.
 * @param {number} target Target integer
 * @return {number[]} Array of indices of the two numbers that add up to target.
 */
var twoSum = function(nums, target) {
  const lookup = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in lookup) {
      return [ lookup[complement], i ];
    }
    lookup[nums[i]] = i;
  }
  throw new Error('No two sum solution');
};
