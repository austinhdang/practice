/**
 * Problem:
 * Given a sorted (in ascending order) integer array nums of n elements and a
 * target value, write a function to search target in nums. If target exists,
 * then return its index, otherwise return -1.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * 
 * Note:
 * - You may assume that all elements in nums are unique.
 * - n will be in the range [1, 10000].
 * - The value of each element in nums will be in the range [-9999, 9999].
 * 
 * @param {number[]} nums The array of integers to search through
 * @param {number} target The value being searched for
 * @return {number} The index of the target element. Otherwise -1.
 */

var search = function(nums, target) {
  // initialize left, right, and middle pointers
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  // loop through array while middle isn't the target and start <= end
  while (nums[mid] !== target && left <= right) {
    // if target is less than value at middle, move right pointer back
    if (target < nums[mid]) right = mid - 1;
    else
      // else move left pointer forward
      left = mid + 1;
    // set new middle of searching window
    mid = Math.floor((left + right) / 2);
  }
  // return target value if found or -1 if not found
  return nums[mid] === target ? mid : -1;
};
