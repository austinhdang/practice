/**
 * Problem:
 * Shuffle a set of numbers without duplicates.
 * 
 * Example:
 * // Init an array with set 1, 2, and 3.
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 
 * // Shuffle the array [1,2,3] and return its result. Any permutation of
 * // [1,2,3] must equally likely to be returned.
 * solution.shuffle();
 * 
 * // Resets the array back to its original configuration [1,2,3].
 * solution.reset();
 * 
 * // Returns the random shuffling of array [1,2,3].
 * solution.shuffle();
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = [ ...nums ];
  this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.arr = [ ...this.original ];
  return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // loop through array backwards
  for (let i = this.arr.length - 1; i > 0; i--) {
    // pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    // swap
    [ this.arr[i], this.arr[j] ] = [ this.arr[j], this.arr[i] ];
  }
  return this.arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
