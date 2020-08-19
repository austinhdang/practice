/**
 * Problem:
 * Given an array, rotate an array to the right by k steps, where k is
 * non-negative.
 * 
 * Example:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * It's guaranteed that nums[i] fits in a 32 bit-signed integer
 * k >= 0
 * 
 * @param {number[]} nums The array to modify
 * @param {number} k The number of steps to rotate array by
 * @return {void} Do not return anything, modify nums in-place instead
 */

var rotate = function(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1); // Reverse all elements in the array
  reverse(nums, 0, k - 1); // Reverse the first k elements
  reverse(nums, k, nums.length - 1); // Reverse the rest of the n - k elements
};

/* Helper function to reverse a subset of an array */
function reverse(nums, start, end) {
  while (start < end) {
    [ nums[start], nums[end] ] = [ nums[end], nums[start] ];
    start++;
    end--;
  }
}
