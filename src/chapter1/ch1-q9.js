/**
 * Checks if one string is a rotation of another.
 *
 * Concatenates the first string with itself and checks if it includes the
 * second string.
 *
 * N = |s1|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param {string} s1 - The first string
 * @param {string} s2 - The second string to check if rotation
 * @returns {boolean} True if rotation
 */
export const isSubstring = (s1, s2) => {
  if (!s1 || !s2) {
    throw new Error('invalid input');
  }
  return (s1 + s1).includes(s2);
};
