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
 * Time Complexity: O(N^2), must access all N^2 elements of the matrix
 *
 * @param matrix Matrix to rotate
 * @return Rotated input matrix
 */

class RotateMatrix {
    boolean rotateMatrix(int[][] matrix) {
        // check if matrix is empty or if matrix has NxN dimensions
        if (matrix.length == 0 || matrix.length != matrix[0].length) {
            return false;
        }

        int n = matrix.length;
        /* Go layer by layer, starting w/ the outer layer and working inwards.
         * Perform a swap on each layer */
        for (int layer = 0; layer < n / 2; layer++) {
            int first = layer;
            int last = n - 1 - layer;
            for (int i = first; i < last; i++) {
                int offset = i - first;
                // save the top
                int top = matrix[first][i];

                // left -> top
                matrix[first][i] = matrix[last - offset][first];

                // bottom -> left
                matrix[last - offset][first] = matrix[last][last - offset];

                // right -> bottom
                matrix[last][last - offset] = matrix[i][last];

                // top -> right (saved top)
                matrix[i][last] = top;
            }
        }
        return true;
    }
}