/**
 * Problem:
 * Given an array A of integers, return true if and only if it is a valid
 * mountain array.
 * 
 * Recall that A is a mountain array if and only if:
 * 
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 * 
 * Example 1:
 * Input: [2,1]
 * Output: false
 * 
 * Example 2:
 * Input: [3,5,5]
 * Output: false
 * 
 * Example 3:
 * Input: [0,3,2,1]
 * Output: true
 * 
 * Note:
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000 
 * 
 * @param {number[]} A Array of integers to analyze.
 * @return {boolean} True if A is a valid mountain array. False otherwise.
 */
var validMountainArray = function(A) {
  let i = 0,
    j = A.length - 1;
  // Increment i until the values stop increasing
  while (i + 1 < A.length && A[i] < A[i + 1]) i++;
  // Decrement j until the values stop decreasing
  while (j > 0 && A[j - 1] > A[j]) j--;
  // Should return true if the array is a mountain array. Otherwise false.
  return i > 0 && i == j && j < A.length - 1;
};
