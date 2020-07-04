/* Problem:
 * Write a recursive function that accepts an array of words. Return a new
 * array containing each word capitalized.
 * 
 * Params:
 * arr - the array of words to capitalize
 * 
 * Return:
 * A new array with the words of the given array capitalized.
 * 
 * Examples:
 * let words = ['i', 'am', 'learning' 'recursion']
 * capitalizeWords(words) // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [ arr[0].toUpperCase() ];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}
