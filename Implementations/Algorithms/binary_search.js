/** 
 * Problem:
 * Write a function that accepts a sorted array and a value, and returns
 * the index at which the value exists. If the value does not exist in the
 * array, return -1.
 * 
 * Examples:
 * Input: [1, 2, 3, 4, 5], 2
 * Output: 1
 * 
 * Input: [1, 2, 3, 4, 5], 3
 * Output: 2
 * 
 * Input: [1, 2, 3, 4, 5], 5
 * Output: 4
 * 
 * Input: [1, 2, 3, 4, 5], 6
 * Output: -1
 * 
 * Input: [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
 *   40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10
 * Output: 2
 * 
 * Input: [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
 *   40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100
 * Output: -2
 * 
 * @param  {number[]} arr  Sorted array to search
 * @param  {number} target Target value
 * @return {number}        Index of the target value. -1 if it doesn't exist.
 */

function binarySearch(arr, target) {
  // initialize left, right, and middle pointers
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  // loop through array while middle isn't the target and start <= end
  while (arr[mid] !== target && left <= right) {
    // if target is less than value at middle, move right pointer back
    if (target < arr[mid]) right = mid - 1;
    else
      // else move left pointer forward
      left = mid + 1;
    // set new middle of searching window
    mid = Math.floor((left + right) / 2);
  }
  // return target value if found or -1 if not found
  return arr[mid] === target ? mid : -1;
}
