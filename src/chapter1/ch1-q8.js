/**
 * Modifies an array such that if an element
 *
 * N = |matrix| && M = |matrix[0]|
 * Time: O(N * M)
 * Additional space: O(N + M)
 */
export const rotate = (matrix) => {
  if (!matrix || matrix.length === 0) {
    throw new Error('invalid matrix');
  }
  const rows = new Set();
  const columns = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.has(i) || columns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
