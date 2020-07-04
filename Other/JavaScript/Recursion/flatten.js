/* Problem:
 * Write a recursive function that accepts an array of arrays and returns a
 * new array with all the values flattened.
 * 
 * Params:
 * oldArr - the array to analyze
 * 
 * Return:
 * A new array with all the values from the passed in array flattened.
 * 
 * Examples:
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1, 2, 3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]
 */

function flatten(oldArr) {
  let newArr = [];
  for (let innerArr of oldArr) {
    if (Array.isArray(innerArr)) {
      newArr = newArr.concat(flatten(innerArr));
    } else {
      newArr.push(innerArr);
    }
  }
  return newArr;
}
