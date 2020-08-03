/**
 * Problem:
 * Given a non-empty array of digits representing a non-negative integer,
 * increment one to the integer. The digits are stored such that the most
 * significant digit is at the head of the list, and each element in the array
 * contains a single digit. You may also assume the integer does not contain
 * any leading zero, except for the number 0 itself.
 * 
 * Example:
 * Input:  [1, 2, 3] -> the array represents the integer 123
 * Output: [1, 2, 4] -> the array represents the integer 124
 * 
 * Example:
 * Input:  [4, 3, 2, 1] -> the array represents the integer 4321
 * Output: [4, 3, 2, 2] -> the array represents the integer 4322
 * 
 * @param  {number[]} digits The array to modify
 * @return {number[]}        Array with the integer representation plus one
 */

var plusOne = function(digits) {
  // check if array is empty
  if (!digits || digits.length === 0) return null;
  // loop through array backwards
  let i = digits.length - 1;
  let isAdding = true;
  while (isAdding) {
    // if least significant digit isn't 9, add 1 and we're done
    if (digits[i] !== 9) {
      digits[i]++;
      isAdding = false;
    } else if (i - 1 < 0) {
      // if all digits are 9, set most significant digit to 1 and push 0 to end
      digits[i] = 1;
      digits.push(0);
      isAdding = false;
    } else {
      // if least significant digit is 9, set it to 0 and check next digit
      digits[i] = 0;
      i--;
    }
  }
  return digits;
};
