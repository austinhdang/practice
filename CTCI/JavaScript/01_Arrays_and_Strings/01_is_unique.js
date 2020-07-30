/**
 * Problem:
 * Implement an algorithm to determine if a string has all unique characters.
 * 
 * Bonus:
 * Implement the algorithm without using a data structure.
 * 
 * @param   {string} str - String to analyze
 * @returns {boolean}      True if all unique characters. False otherwise.
 */

/* Using a data structure */
const hasUniqueChars = (str) => {
  // create new set to store characters
  let charSet = new Set();
  // loop through string and add characters to set
  for (let char of str) {
    // if a character exists in the set, return false
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
};

/* Not using a data structure */
const hasUniqueChars = (str) => {
  // split string into array of characters
  str = str.split('');
  // sort character array
  str.sort();
  // loop through character array
  for (let i = 1; i < str.length; i++) {
    // if a character at an index is the same as the last index, return false
    if (str[i] === str[i - 1]) return false;
  }
  return true;
};
