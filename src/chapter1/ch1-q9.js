/**
 * Checks if one string is a rotation of another.
 *
 * Concatenates the first string with itself and checks if it includes the
 * second string.
 *
 * N = |s1|
 * Time: O(N)
 * Additional space: O(N)
 */
export const isSubstring = (s1, s2) => {
  if (!s1 || !s2) {
    throw new Error('invalid input');
  }
  return (s1 + s1).includes(s2);
};
