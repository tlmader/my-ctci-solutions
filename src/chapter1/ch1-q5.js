/**
 * Checks if two strings are one edit (or zero edits) away.
 * Uses a two-character sliding window to check
 * if a character was inserted or deleted.
 *
 * N = |strA| && M = |strB|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param {string[]} strA String to check as a character array
 * @param {string[]} strB String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export const isOneEditAway = (strA, strB) => {
  // if lengths differ by more than 1 then can't be true
  if (Math.abs(strA.length - strB.length) > 1) {
    return false;
  }
  let hasEdit;
  for (let i = 0, j = 0; i < strA.length || j < strB.length; i++, j++) {
    if (strA[i] !== strB[j]) {
      if (hasEdit) {
        return false;
      }
      // Check if next two characters match to check for
      // insertion or deletion
      if (strA.length > strB.length) {
        j--;
      } else if (strB.length > strA.length) {
        i--;
      }
      hasEdit = true;
    }
  }
  return true;
};
