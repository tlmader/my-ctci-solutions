/**
 * Determines if two strings are permutations of each other
 * using a Map to compare unique chars and their occurrences.
 *
 * N = |strA| && M = |strB|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} strA First string, passed in as a character array
 * @param  {string[]} strB Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export const isPermutation = (strA, strB) => {
  const map = new Map();
  for (let char of strA) {
    map.set(char, map.get(char) + 1 || 1);
  }
  for (let char of strB) {
    const count = map.get(char);
    if (!count) {
      return false;
    } else if (count === 1) {
      map.delete(char);
    } else {
      map.set(char, count - 1);
    }
  }
  return map.size === 0;
};
