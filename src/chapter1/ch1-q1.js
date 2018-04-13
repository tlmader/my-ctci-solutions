/**
 * Uses a set to determine if a string has all unique characters
 * by comparing the length of the result set with the length of the string.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 */
export const hasAllUniqueCharacters = (str) => {
  const set = new Set();
  for (let char of str) {
    set.add(char);
  }
  return set.size === str.length;
};
