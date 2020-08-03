/**
 * Problem: Given a non-empty array of digits representing a non-negative
 * integer, increment one to the integer. The digits are stored such that the
 * most significant digit is at the head of the list, and each element in the
 * array contains a single digit. You may also assume the integer does not
 * contain any leading zero, except for the number 0 itself.
 * 
 * Example: Input: [1, 2, 3] -> the array represents the integer 123 Output: [1,
 * 2, 4] -> the array represents the integer 124
 * 
 * Example: Input: [4, 3, 2, 1] -> the array represents the integer 4321 Output:
 * [4, 3, 2, 2] -> the array represents the integer 4322
 * 
 * @param digits The array to modify
 * @return Array with the integer representation plus one
 */

class PlusOne {
  public int[] plusOne(int[] digits) {
    // loop through array backwards
    int[] newDigits;
    int i = digits.length - 1;
    boolean isAdding = true;
    while (isAdding) {
      // if least significant digit isn't 9, add 1 and we're done
      if (digits[i] != 9) {
        digits[i]++;
        isAdding = false;
      } else if (i - 1 < 0) {
        // if all digits become 9, create new array to fit one more digit
        newDigits = new int[digits.length + 1];
        // set all elements in new array to be 0
        while (i + 1 < newDigits.length) {
          newDigits[i] = 0;
          i++;
        }
        // set first element of new array to be 1 and return new digits array
        newDigits[0] = 1;
        return newDigits;
      } else {
        // if least significant digit is 9, set it to 0 and check next digit
        digits[i] = 0;
        i--;
      }
    }
    return digits;
  }
}