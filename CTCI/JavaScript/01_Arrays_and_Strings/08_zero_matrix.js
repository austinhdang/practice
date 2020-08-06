/**
 * Problem:
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column are set to zero.
 * 
 * M = X dimension of matrix
 * N = Y dimension of matrix
 * 
 * Example 1:
 * Input: 
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * Output: 
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 * 
 * Example 2:
 * Input: 
 * [
 *   [0,1,2,0],
 *   [3,4,5,2],
 *   [1,3,1,5]
 * ]
 * Output: 
 * [
 *   [0,0,0,0],
 *   [0,4,5,0],
 *   [0,3,1,0]
 * ]
 * 
 * @param  {number[][]} matrix Matrix to be zeroed
 * @return {number[][]}        Zeroed matrix
 */

function zeroMatrix(matrix) {
  if (!matrix) throw new Error('invalid matrix');
  if (matrix.length === 0) return matrix;

  let R = matrix.length;
  let C = matrix[0].length;
  let colHasZero = false;

  for (let i = 0; i < R; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
    }

    // if an element is 0, set 1st element of corresponding row & column to 0
    for (let j = 1; j < C; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // iterate over matrix again and using the 1st row and column, update elements
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // check if the first row needs to be zeroed
  if (matrix[0][0] === 0) {
    for (let j = 0; j < C; j++) {
      matrix[0][j] = 0;
    }
  }

  // check if the first column needs to be zeroed
  if (colHasZero) {
    for (let i = 0; i < R; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}
