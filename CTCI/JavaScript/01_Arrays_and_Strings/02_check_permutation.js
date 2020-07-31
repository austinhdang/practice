/** 
 * Problem:
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 * 
 * @param {string} s1 The first string to analyze
 * @param {string} s2 The second string to analyze
 * @return {boolean} True if one string is a permutation of the other. False
 * otherwise.
 */

const isPermutation = (s1, s2) => {
  // check if strings are the same length
  if (s1.length !== s2.length) {
    return false;
  }
  // create lookup table
  const lookup = {};
  // loop through first string and put characters and frequencies into object
  for (let char of s1) {
    // if letter exists, increment, otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  for (let char of s2) {
    // can't find letter or letter is zero then it's not a permutation
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
};
