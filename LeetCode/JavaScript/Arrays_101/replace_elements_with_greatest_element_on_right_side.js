/**
 * Problem:
 * Given an array arr, replace every element in that array with the greatest
 * element among the elements to its right, and replace the last element with
 * -1.
 * 
 * After doing so, return the array.
 * 
 * Example 1:
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 *  
 * 
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 * 
 * @param {number[]} arr Array of elements to modify
 * @return {number[]} The modified array
 */
var replaceElements = function(arr) {
  let max = arr[arr.length - 1];
  // Loop through array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    // If the element is greater than the max, swap the values
    if (arr[i] >= max) {
      [ arr[i], max ] = [ max, arr[i] ];
    } else {
      // Otherwise set the smaller element to be the max
      arr[i] = max;
    }
  }
  // Set the final element to be -1
  arr[arr.length - 1] = -1;
  return arr;
};
