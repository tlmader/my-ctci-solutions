/**
 * Rotates an image by 90 degrees.
 * The image is represented by an NxN matrix, where each pixel in the image
 * is 4 bytes.
 *
 * N = |matrix|
 * Time: O(N^2)
 * Additional space: O(1)
 */
export const rotate = (matrix) => {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  if (matrix.length < 2) {
    return matrix; // No need to do anything to rotate a 1x1 matrix
  }
  // Transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i > j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  // Reverse columns
  matrix.forEach((row) => {
    row.reverse();
  });
  return matrix;
};
