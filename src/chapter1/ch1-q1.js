/**
 * Uses a set to determine if a string has all unique characters
 * by comparing the length of the result set with the length of the string.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export const hasAllUniqueCharacters = (str) => {
  const set = new Set();
  for (let char of str) {
    set.add(char);
  }
  return set.size === str.length;
};
