/* Problem:
 * Write a function that accepts an object and returns an array of all of the
 * values in the object that have a type of string.
 * 
 * Params:
 * obj - the object to collect the strings from
 * 
 * Return:
 * An array of all the strings in the given object.
 * 
 * Example:
 * const obj = {
 *   stuff: "foo",
 *   data: {
 *     val: {
 *       thing: {
 *         info: "bar",
 *         moreInfo: {
 *           evenMoreInfo: {
 *             weMadeIt: "baz"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * collectStrings(obj) // ["foo", "bar", "baz"])
 */

/* Method #1 - Pure Recursion */
function collectStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      arr = arr.concat(collectStrings(obj[key]));
    }
  }
  return arr;
}

/* Method #2 - Helper Method Recursion */
function collectStrings(obj) {
  let arr = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === 'string') {
        arr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);
  return arr;
}
