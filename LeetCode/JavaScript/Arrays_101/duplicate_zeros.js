/**
 * Problem:
 * Given a fixed length array arr of integers, duplicate each occurrence of
 * zero, shifting the remaining elements to the right.
 * 
 * Note that elements beyond the length of the original array are not written.
 * 
 * Do the above modifications to the input array in place, do not return
 * anything from your function.
 * 
 * Example 1:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null
 * Explanation: After calling your function, the input array is modified to:
 * [1,0,0,2,3,0,0,4]
 * 
 * Example 2:
 * Input: [1,2,3]
 * Output: null
 * Explanation: After calling your function, the input array is modified to:
 * [1,2,3]
 * 
 * Note:
 * 1 <= arr.length <= 10000
 * 0 <= arr[i] <= 9
 * 
 * @param {number[]} arr Array of integers to modify
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let numZeros = 0;
  let arrLength = arr.length - 1;

  /* Find the number of zeros to be duplicated, and stop when left points past
  the last element in the original array that will be in the modified array */
  for (let left = 0; left <= arrLength - numZeros; left++) {
    // Count the number of zeros
    if (arr[left] === 0) {
      /* Zero can't be duplicated. No more space since left is pointing to the
      last element that could be included */
      if (left === arrLength - numZeros) {
        // Copy zero but don't duplicate
        arr[arrLength] = 0;
        arrLength--;
        break;
      }
      numZeros++;
    }
  }

  // Start backwards from the new last element
  let newLast = arrLength - numZeros;

  // Copy zeros twice and non-zeros once
  for (let i = newLast; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + numZeros] = 0;
      numZeros--;
      arr[i + numZeros] = 0;
    } else {
      arr[i + numZeros] = arr[i];
    }
  }
};
