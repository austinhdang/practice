/**
 * Problem:
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column are set to zero.
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
 * @param matrix Matrix to be zeroed
 * @return The zeroed matrix
 */

class ZeroMatrix {
    void zeroMatrix(int[][] matrix) {
        boolean rowHasZero = false;
        boolean colHasZero = false;

        // check if the first row contains a zero
        for (int col = 0; col < matrix[0].length; col++) {
            if (matrix[0][col] == 0) {
                rowHasZero = true;
                break;
            }
        }

        // check if the first column contains a zero
        for (int row = 0; row < matrix.length; row++) {
            if (matrix[row][0] == 0) {
                colHasZero = true;
                break;
            }
        }

        // check for zeroes in the rest of the array
        for (int row = 1; row < matrix.length; row++) {
            for (int col = 1; col < matrix[0].length; col++) {
                if (matrix[row][col] == 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        // zero the rows based on the values in the first column
        for (int row = 1; row < matrix.length; row++) {
            if (matrix[row][0] == 0) {
                zeroRow(matrix, row);
            }
        }

        // zero the columns based on the values in the first row
        for (int col = 1; col < matrix[0].length; col++) {
            if (matrix[0][col] == 0) {
                zeroColumn(matrix, col);
            }
        }

        // zero the first row
        if (rowHasZero) {
            zeroRow(matrix, 0);
        }

        // zero the first column
        if (colHasZero) {
            zeroColumn(matrix, 0);
        }
    }

    /* Sets the elements in the row to 0 */
    void zeroRow(int[][] matrix, int row) {
        for (int col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
    }

    /* Sets the elements in the column to 0 */
    void zeroColumn(int[][] matrix, int col) {
        for (int row = 0; row < matrix[0].length; row++) {
            matrix[row][col] = 0;
        }
    }
}