/**
 * Problem:
 * You are given an n x n 2D matrix representing an image. Rotate the image by
 * 90 degrees (clockwise).
 * 
 * Example:
 *    Input:     |   Output:
 * [             | [
 *   [1, 2, 3],  |   [7, 4, 1],
 *   [4, 5, 6],  |   [8, 5, 2],
 *   [7, 8, 9]   |   [9, 6, 3]
 * ]             | ]
 * 
 *    Input:         |   Output:
 * [                 | [
 *   [ 5, 1, 9, 11], |   [15, 13, 2, 5],
 *   [ 2, 4, 8, 10], |   [14, 3, 4, 1],
 *   [13, 3, 6, 7],  |   [12, 6, 8, 9],
 *   [15,14,12,16]   |   [16, 7, 10, 11]
 * ]                 | ]
 * 
 * Note:
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 * 
 * @param  {number[][]} matrix Matrix to rotate
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function rotateMatrix(matrix) {
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
