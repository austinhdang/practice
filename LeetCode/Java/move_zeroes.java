/**
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * @param nums The array to modify
 * @return Do not return anything, modify nums in-place instead
 */

class Solution {
  public void moveZeroes(int[] nums) {
    int nonZeroIdx = 0;
    for (int i = 0; i < nums.length; i++) {
      // if the current element is not 0
      if (nums[i] != 0) {
        // append non-zero elements in front of the previous non-zero elements
        nums[nonZeroIdx++] = nums[i];
      }
    }
    // fill in the remainder of the array with 0's
    for (int i = nonZeroIdx; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
}