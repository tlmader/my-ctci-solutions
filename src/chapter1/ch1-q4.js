/**
 * Checks if a string is a permutation of a palindrome.
 * Uses a map to store the count of each char and ensures that only
 * one odd count is allowed, i.e., a single middle character.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export const isPermutationOfPalindromeMap = (str) => {
  if (!str || !str.length === 0) {
    return false;
  }
  const map = new Map();
  for (let char of str) {
    if (char !== ' ') {
      map.set(char, map.get(char) + 1 || 1);
    }
  }
  let hasOddCount;
  for (let count of map.values()) {
    if (count % 2 === 1) {
      if (hasOddCount) {
        return false;
      } else {
        hasOddCount = true;
      }
    }
  }
  return true;
};
/**
 * Checks if a string is a permutation of a palindrome.
 * Iterates through each char, adding and removing to a set and ensures that
 * only one or no chars in the set remain.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export const isPermutationOfPalindromeSet = (str) => {
  if (!str || !str.length === 0) {
    return false;
  }
  const set = new Set();
  for (let char of str) {
    if (set.has(char)) {
      set.delete(char);
    } else if (char !== ' '){
      set.add(char);
    }
  }
  return set.size <= 1;
};
