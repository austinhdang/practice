/* Problem:
 * Write a function that takes in an object and finds all of the values which
 * are numbers and converts them to strings. Recursion would be a great way to
 * solve this!
 * 
 * Params:
 * obj - the object to find numbers from and convert them to strings
 * 
 * Return:
 * An object with the numbers converted to strings.
 * 
 * Example:
 * let obj = {
 *   num: 1,
 *   test: [],
 *   data: {
 *     val: 4,
 *     info: {
 *       isRight: true,
 *       random: 66
 *     }
 *   }
 * }
 * 
 * stringifyNumbers(obj)
 * 
 * {
 *   num: "1",
 *   test: [],
 *   data: {
 *     val: "4",
 *     info: {
 *       isRight: true,
 *       random: "66"
 *     }
 *   }
 * }
 */

function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
