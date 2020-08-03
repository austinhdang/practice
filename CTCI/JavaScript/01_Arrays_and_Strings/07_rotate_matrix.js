/**
 * Problem:
 * Given an image represented by an NxN matrix, where each pixel in the image
 * is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this
 * in place?
 * 
 * Example:
 *    Input:    |   Output:
 * [            | [
 *  [1, 2, 3],  |   [7, 4, 1],
 *  [4, 5, 6],  |   [8, 5, 2],
 *  [7, 8, 9]   |   [9, 6, 3]
 * ]            | ]
 * 
 * @param  {array} matrix Matrix to rotate
 * @return {array}        Rotated input matrix
 */

function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  // a rotated 1x1 matrix is the same
  if (matrix.length === 1) return matrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
}
