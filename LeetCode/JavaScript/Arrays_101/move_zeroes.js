/**
 * Problem:
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 * @param {number[]} nums Array of numbers to modify
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    // if the current element is not 0
    if (nums[i] !== 0) {
      // append non-zero elements in front of the previous non-zero elements
      nums[nonZeroIdx++] = nums[i];
    }
  }
  // fill in the remainder of the array with 0's
  for (let i = nonZeroIdx; i < nums.length; i++) {
    nums[i] = 0;
  }
};
